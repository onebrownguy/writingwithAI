# Audio Stop Edge Cases Analysis

## Current Audio Stop Mechanisms

### 1. **User-Initiated Stops**
- **Exit Button (X)**: Calls `stop()` → navigates to home
- **ESC Key**: Calls `stop()` → navigates to home
- **Pause Button**: Calls `stop()` → pauses presentation
- **Spacebar**: Calls `stop()` → pauses presentation
- **Skip/Next Button**: Calls `handleSkip()` → stops current audio, plays next slide
- **Arrow Right**: Calls `handleSkip()` → skips forward
- **Arrow Left**: Stops audio → plays previous slide
- **Click to Skip**: Calls `handleSkip()` → skips current slide

### 2. **Automatic Stops**
- **Component Unmount**: Cleanup in `useEffect` → stops all audio
- **Audio Completion**: Natural `onended` event → advances to next slide
- **Audio Error**: `onerror` event → resolves promise, continues

### 3. **Audio Sources**
- **Hume AI**: `HTMLAudioElement` via `playHumeAudio()`
- **Browser TTS**: `SpeechSynthesisUtterance` via `speechSynth.speak()`

---

## Edge Cases & Potential Issues

### 🔴 **Critical Edge Cases**

#### 1. **Race Condition: Promise Chain Not Cancellable**
**Problem**: When user skips during `await speak()`, the promise chain continues:
- `playSlide(index)` → `await speak()` → `await playHumeAudio()` → `await audio.onended`
- If user skips, `stopHumeAudio()` pauses audio but **doesn't fire `onended`**
- The `playSlide` promise is still waiting, creating a race condition
- Multiple `playSlide` calls can execute simultaneously

**Current Code** (lines 293-331):
```typescript
const handleSkip = () => {
    stopHumeAudio(); // Pauses audio, but doesn't resolve the promise
    if (speechSynth) speechSynth.cancel();
    playSlide(nextIndex); // Starts new slide, but old promise still pending
}
```

**Impact**: 
- Stale `playSlide` calls can execute after skip
- Audio might overlap if old promise resolves
- Slide index might jump unexpectedly

---

#### 2. **Browser TTS: `cancel()` Doesn't Resolve Promise**
**Problem**: `speechSynth.cancel()` stops speech but doesn't trigger `utterance.onend`
- The `speak()` function's promise waits for `onend` or timeout
- If cancelled mid-speech, promise hangs until 3-second timeout
- User might wait 3 seconds after skip before next slide starts

**Current Code** (lines 200-227):
```typescript
utterance.onend = () => resolve(); // Only fires on natural completion
// If cancelled, this never fires → waits for 3s timeout
```

**Impact**:
- 3-second delay after skipping browser TTS
- Poor user experience during rapid skipping

---

#### 3. **Hume Audio: `pause()` Doesn't Fire `onended`**
**Problem**: `HTMLAudioElement.pause()` stops playback but doesn't trigger `onended`
- Promise in `playHumeAudio()` waits for `onended` or 5-second timeout
- If paused mid-playback, promise hangs until timeout
- Similar to browser TTS issue

**Current Code** (lines 8-15, 115-118):
```typescript
export const stopHumeAudio = () => {
    if (currentAudio) {
        currentAudio.pause(); // Doesn't fire onended
        currentAudio.src = "";
        currentAudio = null;
    }
};
```

**Impact**:
- 5-second delay after stopping Hume audio
- Promise chain continues waiting unnecessarily

---

#### 4. **Component Unmount During Audio Playback**
**Problem**: If user navigates away while audio is playing:
- `mounted.current = false` prevents new slides
- But existing promises might still resolve
- Audio cleanup happens, but promise chain might continue

**Current Code** (lines 145-150):
```typescript
useEffect(() => {
    return () => {
        mounted.current = false;
        window.speechSynthesis.cancel();
        stopHumeAudio();
    };
}, []);
```

**Impact**:
- Potential memory leaks if promises resolve after unmount
- State updates on unmounted component (React warning)

---

#### 5. **Double Audio Playback**
**Problem**: Multiple scenarios can cause overlapping audio:
- User clicks skip multiple times rapidly
- Old `playSlide` promise resolves after new one starts
- Browser TTS and Hume audio both playing (fallback scenario)

**Current Code** (lines 17-19):
```typescript
export const playHumeAudio = async (text: string, emotion?: string) => {
    stopHumeAudio(); // Stops previous, but if new call happens before this completes...
}
```

**Impact**:
- Audio overlap/echo
- Confusing user experience

---

#### 6. **Timeout Race Conditions**
**Problem**: Multiple timeouts can fire:
- Hume audio: 5-second start timeout
- Browser TTS: 3-second start timeout
- Slide transition: 500ms pause
- Final slide: 2-second pause

If user skips during timeout window, multiple timeouts might resolve simultaneously.

**Impact**:
- Unexpected slide jumps
- Multiple `playSlide` calls

---

### 🟡 **Moderate Edge Cases**

#### 7. **State Updates After Unmount**
**Problem**: `setCurrentSlide()` or `setIsPlaying()` called after component unmounts
- React warning: "Can't perform a React state update on an unmounted component"
- Happens if promise resolves after cleanup

**Current Mitigation** (lines 260-263):
```typescript
if (!mounted.current || !isPlayingRef.current) {
    return; // Prevents some updates, but not all
}
```

**Impact**:
- React warnings in console
- Potential memory leaks

---

#### 8. **Voice Selection Race Condition**
**Problem**: If voices load asynchronously after component mounts:
- `selectedVoiceRef.current` might be `null` initially
- First slide might use wrong voice
- Subsequent slides use cached voice (inconsistent)

**Current Code** (lines 131-144):
```typescript
const selectVoice = () => {
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0 && !selectedVoiceRef.current) {
        selectedVoiceRef.current = voices.find(...);
    }
};
```

**Impact**:
- First slide might have different voice
- Inconsistent experience

---

#### 9. **Keyboard Event Handler Dependencies**
**Problem**: `useEffect` for keyboard handler depends on `[navigate, speechSynth]`
- If `speechSynth` changes, handler re-registers
- Old handler might still be active briefly
- Multiple handlers can exist simultaneously

**Current Code** (lines 334-358):
```typescript
useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => { ... };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
}, [navigate, speechSynth]); // Re-registers if speechSynth changes
```

**Impact**:
- Multiple key handlers active
- Duplicate event handling

---

#### 10. **Error Handling Doesn't Stop Audio**
**Problem**: If `playHumeAudio()` fails, it falls back to browser TTS
- But Hume audio might still be playing (if it started before error)
- Both audio sources might play simultaneously

**Current Code** (lines 140-143):
```typescript
catch (error) {
    console.error("🎙️ [HUME] TTS Error:", error);
    return false; // Falls back to browser TTS, but Hume might still be playing
}
```

**Impact**:
- Overlapping audio
- Confusing experience

---

### 🟢 **Minor Edge Cases**

#### 11. **Slide Index Out of Bounds**
**Problem**: If `currentSlide` state is out of sync with `currentSlideRef`:
- Arrow left on slide 0 might try to play slide -1
- Skip on last slide might try to play beyond array

**Current Mitigation** (lines 343, 301):
```typescript
if (nextIndex < SCRIPT.length) { ... } // Checks before playing
```

**Impact**:
- Potential crashes if check fails

---

#### 12. **Memory Leaks: Audio Blob URLs**
**Problem**: `URL.createObjectURL()` creates blob URLs that need cleanup
- If audio is stopped before `onended`, URL might not be revoked
- Multiple blob URLs accumulate in memory

**Current Code** (lines 108-110):
```typescript
const audioUrl = URL.createObjectURL(audioBlob);
const audio = new Audio(audioUrl);
// URL never revoked if audio stopped early
```

**Impact**:
- Memory leaks over time
- Performance degradation

---

#### 13. **Browser Autoplay Policy**
**Problem**: Some browsers block autoplay without user interaction
- First slide might not play automatically
- User might need to click to start
- But subsequent slides might also be blocked

**Impact**:
- Presentation doesn't start automatically
- Poor first impression

---

## Recommended Fixes

### Priority 1: Make Promises Cancellable
```typescript
// Add cancellation token to playSlide
const playSlide = async (index: number, cancelToken?: { cancelled: boolean }) => {
    if (cancelToken?.cancelled) return;
    // ... rest of code
}

// In handleSkip:
const cancelToken = { cancelled: true };
playSlide(nextIndex, cancelToken);
```

### Priority 2: Resolve Promises on Stop
```typescript
// In stopHumeAudio, manually resolve the promise
let currentAudioPromise: { resolve: () => void } | null = null;

export const stopHumeAudio = () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.src = "";
        currentAudio = null;
        if (currentAudioPromise) {
            currentAudioPromise.resolve();
            currentAudioPromise = null;
        }
    }
};
```

### Priority 3: Revoke Blob URLs
```typescript
// In stopHumeAudio:
if (currentAudio && currentAudio.src) {
    URL.revokeObjectURL(currentAudio.src);
}
```

### Priority 4: Add Request ID to Prevent Stale Calls
```typescript
let playSlideRequestId = 0;

const playSlide = async (index: number) => {
    const requestId = ++playSlideRequestId;
    // ... in promise resolution:
    if (requestId !== playSlideRequestId) return; // Stale call
}
```

---

## Testing Scenarios

1. **Rapid Skip**: Click skip 5 times rapidly → should not overlap audio
2. **Navigate Away Mid-Slide**: Press ESC during audio → should stop immediately
3. **Browser TTS Fallback**: Disable Hume API → should work smoothly
4. **Component Unmount**: Navigate away during playback → no React warnings
5. **Memory Leak**: Play presentation 10 times → check memory usage
6. **Voice Consistency**: Play all slides → verify same voice throughout
7. **Error Recovery**: Simulate API failure → should fallback gracefully
8. **Keyboard Spam**: Press arrow keys rapidly → should handle gracefully

