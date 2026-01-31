// src/utils/hume.ts
// Uses /api/hume-tts proxy in production (API key stays server-side).
// Falls back to direct Hume call when VITE_HUME_API_KEY is set (local dev).

const HUME_API_KEY = import.meta.env.VITE_HUME_API_KEY;
const HUME_VOICE_ID = import.meta.env.VITE_HUME_VOICE_ID || "b04e243e-13f2-400e-8f71-af8c884cb372";
const USE_PROXY = !HUME_API_KEY; // No client key = use server proxy

let currentAudio: HTMLAudioElement | null = null;
let currentAudioUrl: string | null = null;
let currentAudioPromise: { resolve: (value: boolean) => void } | null = null;
let lastRequestId = 0;

export const stopHumeAudio = () => {
    if (currentAudio) {
        console.log("🎙️ [HUME] Stopping current audio.");
        currentAudio.pause();

        // Revoke blob URL to prevent memory leaks
        if (currentAudioUrl) {
            URL.revokeObjectURL(currentAudioUrl);
            currentAudioUrl = null;
        }

        currentAudio.src = ""; // Release memory
        currentAudio = null;

        // Resolve the promise immediately so playSlide doesn't wait for timeout
        if (currentAudioPromise) {
            console.log("🎙️ [HUME] Resolving promise on stop");
            currentAudioPromise.resolve(false);
            currentAudioPromise = null;
        }
    }
};

export const playHumeAudio = async (text: string, emotion?: string): Promise<boolean> => {
    // Stop any currently playing audio before starting new one
    stopHumeAudio();
    const requestId = ++lastRequestId;

    console.log(`🎙️ [HUME] [${requestId}] Attempting to play:`, text.substring(0, 50) + "...", "Emotion:", emotion);

    if (!USE_PROXY && !HUME_API_KEY) {
        console.warn("🎙️ [HUME] API key missing for direct Hume call.");
        return false;
    }

    try {
        const url = USE_PROXY ? '/api/hume-tts' : 'https://api.hume.ai/v0/tts';
        const requestBody = USE_PROXY
            ? { text, emotion, voiceId: HUME_VOICE_ID }
            : {
                utterances: [{
                    text,
                    voice: { id: HUME_VOICE_ID },
                    ...(emotion && { description: emotion }),
                }],
            };

        const headers: Record<string, string> = { 'Content-Type': 'application/json' };
        if (!USE_PROXY && HUME_API_KEY) {
            headers['X-Hume-Api-Key'] = HUME_API_KEY;
        }

        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(requestBody),
        });

        console.log("🎙️ [HUME] Response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`🎙️ [HUME] [${requestId}] API Error:`, response.status, errorText);
            throw new Error(`Hume API Error: ${response.statusText}`);
        }

        // Check if a newer request has started while we were fetching
        if (requestId !== lastRequestId) {
            console.log(`🎙️ [HUME] [${requestId}] Request superseded during fetch, aborting.`);
            return false;
        }

        // Check what format Hume returned
        const contentType = response.headers.get('Content-Type');
        console.log("🎙️ [HUME] Content-Type:", contentType);

        const jsonResponse = await response.json() as Record<string, unknown>;
        console.log("🎙️ [HUME] JSON response keys:", Object.keys(jsonResponse));

        let audioBase64: string | null = null;
        let audioFormat = 'mp3';

        const gens = jsonResponse.generations as Array<{ audio?: string; output_format?: string }> | undefined;
        const direct = jsonResponse as { audio?: string; output_format?: string; format?: string };

        if (gens?.[0]?.audio) {
            audioBase64 = gens[0].audio;
            audioFormat = gens[0].output_format || 'mp3';
        } else if (direct.audio) {
            audioBase64 = direct.audio;
            audioFormat = (direct.output_format || direct.format) as string || 'mp3';
        }

        if (!audioBase64) {
            console.error("🎙️ [HUME] Could not find audio in response:", jsonResponse);
            throw new Error("No audio data in Hume response");
        }

        // Decode base64 to binary
        const binaryString = atob(audioBase64!);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Create audio blob with correct MIME type
        const mimeType = audioFormat === 'wav' ? 'audio/wav' : 'audio/mpeg';
        const audioBlob = new Blob([bytes], { type: mimeType });
        console.log("🎙️ [HUME] Created audio blob:", audioBlob.size, "bytes, type:", mimeType);

        const audioUrl = URL.createObjectURL(audioBlob);

        // Final check before we actually start the audio instance
        if (requestId !== lastRequestId) {
            console.log(`🎙️ [HUME] [${requestId}] Request superseded after processing, aborting.`);
            URL.revokeObjectURL(audioUrl);
            return false;
        }

        const audio = new Audio(audioUrl);
        currentAudio = audio; // Track for global stopping
        currentAudioUrl = audioUrl; // Track URL for cleanup

        return new Promise((resolve) => {
            // Store resolver so stopHumeAudio can resolve it
            currentAudioPromise = { resolve };

            let audioStarted = false;
            let resolved = false; // Prevent double resolution

            const safeResolve = (value: boolean) => {
                if (!resolved) {
                    resolved = true;
                    currentAudioPromise = null; // Clear reference
                    resolve(value);
                }
            };

            audio.onended = () => {
                console.log("🎙️ [HUME] ✅ Audio finished playing!");
                // Clean up blob URL on natural completion
                if (currentAudioUrl) {
                    URL.revokeObjectURL(currentAudioUrl);
                    currentAudioUrl = null;
                }
                currentAudio = null;
                safeResolve(true); // Audio finished playing
            };
            audio.onerror = (e) => {
                console.error("🎙️ [HUME] ❌ Audio playback error:", e);
                // Clean up on error
                if (currentAudioUrl) {
                    URL.revokeObjectURL(currentAudioUrl);
                    currentAudioUrl = null;
                }
                currentAudio = null;
                safeResolve(false); // Audio failed
            };
            audio.play().then(() => {
                console.log("🎙️ [HUME] ▶️ Audio started playing...");
                audioStarted = true;
            }).catch((err) => {
                console.error("🎙️ [HUME] ❌ Play blocked:", err);
                // Clean up on play failure
                if (currentAudioUrl) {
                    URL.revokeObjectURL(currentAudioUrl);
                    currentAudioUrl = null;
                }
                currentAudio = null;
                safeResolve(false);
            });

            // Safety timeout: if audio doesn't start within 5 seconds, resolve as failed
            setTimeout(() => {
                if (!audioStarted && !resolved) {
                    console.warn("🎙️ [HUME] ⚠️ Audio did not start within timeout");
                    // Clean up on timeout
                    if (currentAudioUrl) {
                        URL.revokeObjectURL(currentAudioUrl);
                        currentAudioUrl = null;
                    }
                    if (currentAudio) {
                        currentAudio.pause();
                        currentAudio.src = "";
                        currentAudio = null;
                    }
                    safeResolve(false);
                }
            }, 5000);
        });

    } catch (error) {
        console.error("🎙️ [HUME] TTS Error:", error);
        return false; // Fallback to browser TTS
    }
};

