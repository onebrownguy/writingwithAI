import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Pause, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { playHumeAudio, stopHumeAudio } from '../utils/hume';

const SCRIPT = [
    {
        id: 1,
        title: "The Centaur's Compass",
        subtitle: "Navigating the AI Revolution",
        text: "Welcome to The Centaur's Compass. This is the story of my professional transformation over the last semester. When I began this journey, I was paralyzed by a specific fear: the fear that Artificial Intelligence was coming to take my job. I saw it as a replacement, a rival. But today, that fear has been replaced by a partnership. I have learned that the future isn't about AI replacing humans; it is about humans who use AI replacing those who don't. We are becoming something more.",
        visual: "🧭",
        emotion: "Professional, warm, encouraging introduction",
        duration: 0
    },
    {
        id: 2,
        title: "The Shift",
        subtitle: "Fear to Utility",
        text: "Early on, Professor Mollick described AI as an 'Alien Mind'. That concept felt cold, distant, and unpredictable. But as I worked, I discovered a better metaphor: The Super Mario Mushroom. When Mario eats the mushroom, he doesn't stop being Mario. He doesn't lose his agency. He just gets bigger. He can break bricks he couldn't break before; he can survive hits that would have stopped him. AI is not the player of this game. I am the player. AI is simply the ultimate power-up.",
        visual: "🍄",
        emotion: "Professional, positive, energetic storytelling",
        duration: 0
    },
    {
        id: 3,
        title: "Project 1: Toucan Transit",
        subtitle: "The Giant Puzzle",
        text: "I proved this theory while building Toucan Transit. I realized that AI agents are incredible at generating puzzle pieces—it can give you lists, tables, headers, and code snippets in seconds. But it has no idea what the picture on the box looks like. Without a human architect enforcing 'System Design', you don't get an app; you get a giant, mismatched mess of components. My role shifted from writing syntax to fitting these jagged pieces together into a cohesive whole.",
        visual: "🚌",
        emotion: "Professional, confident, instructive",
        duration: 0
    },
    {
        id: 4,
        title: "Project 2: TrashBot AI",
        subtitle: "The Hallucination",
        text: "Then came the TrashBot project, which taught me the danger of the 'People Pleaser'. I trained a vision model on Google Cloud to recognize recyclables. But the model was so eager to find a pattern, so desperate to satisfy its training data, that it started recognizing my face as cardboard. It was a hilarious moment, but deeply scary. It proved that without a 'Brain Layer' of human verification, AI will confidently, convincingly lie to you just to complete a task.",
        visual: "♻️",
        emotion: "Professional, lighthearted yet serious lesson",
        duration: 0
    },
    {
        id: 5,
        title: "Pillar 1: Human Judgment",
        subtitle: "The Authority",
        text: "This leads directly to my First Pillar: Human Judgment Always Wins. We must retain total observability. Whether it's a Neo4j database hallucinating relationships that don't exist, or a vision model seeing cardboard faces in a webcam feed, only human logic can spot the context error. We are the architects. We define the truth. The AI is just raw, unrefined material waiting for our direction.",
        visual: "🛡️",
        emotion: "Professional, firm, empowering",
        duration: 0
    },
    {
        id: 6,
        title: "Pillar 2: The Trifecta",
        subtitle: "Understand. Evaluate. Use.",
        text: "Pillar Two is my operational framework: The Trifecta Loop. First, Identify the task clearly. Second, Evaluate the AI's actual capability for *that specific task*—is it a creative brainstorm where hallucination is good, or a factual query where it is fatal? And only then, Use it. I never touch the steering wheel until I have verified the route. There is no auto-pilot allowed in my workflow.",
        visual: "✅",
        emotion: "Professional, clear, knowledgeable",
        duration: 0
    },
    {
        id: 7,
        title: "Pillar 3: Social Responsibility",
        subtitle: "Impact Over Output",
        text: "Pillar Three is Social Responsibility. It is not enough to simply build faster; we must build better. AI dramatically lowers the barrier to entry for software creation, which means we have a moral duty to solve real problems, not just fill the internet with more noise. We must use this leverage to equalize the playing field for those who have been left behind by the digital divide.",
        visual: "🤝",
        emotion: "Professional, passionate, uplifting",
        duration: 0
    },
    {
        id: 8,
        title: "The Horizon",
        subtitle: "The Super-Individual",
        text: "Looking to the horizon, I see the rise of the 'Super-Individual'. This is the opportunity for one person to act as a full creative studio—simultaneously the developer, the designer, and the marketer. But the threat is becoming a 'Button Pusher'—someone who trusts the machine blindly and loses their edge. My defense against this obsolescence is relentless skill acquisition.",
        visual: "🌅",
        emotion: "Professional, forward-looking, optimistic",
        duration: 0
    },
    {
        id: 9,
        title: "My Centaur Skills",
        subtitle: "Architecture & Verification",
        text: "My future career relies on two critical skills. On the technical side: System Architecture—knowing how the puzzle pieces fit together even when I didn't make them. On the human side: Ethical Verification—knowing when the puzzle picture is wrong, biased, or hallucinated. These are the intuitions that no model can automate.",
        visual: "🧠",
        emotion: "Professional, expert, confident",
        duration: 0
    },
    {
        id: 10,
        title: "The Dream",
        subtitle: "Justice for Texas",
        text: "And finally, the mission. With this 'Centaur' power, I have a new purpose. My sister lost a life-changing job opportunity because of an illegal background check. Now, I am building the 'Texas 7-Year Checker'—a free tool to help Texans fight back against illegal reporting. AI gives me the speed to build this for free, for the people. That is my true north.",
        visual: "⚖️",
        emotion: "Professional, heartfelt, inspiring conclusion",
        duration: 0
    },
    {
        id: 11,
        title: "The Technology Behind This Voice",
        subtitle: "A Centaur's Tool",
        text: "This audio essay itself is a demonstration of human-AI collaboration. I recorded my own voice and uploaded it to Hume AI's voice cloning technology. The Hume API then generated this narration, preserving my vocal identity while allowing me to produce this presentation at scale. This is the Centaur model in action: I provided the voice, the words, and the vision. AI provided the technical capability to synthesize and deliver it. Together, we created something neither could achieve alone.",
        visual: "🎙️",
        emotion: "Professional, reflective, meta-commentary",
        duration: 0
    }
];

export default function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [speechSynth, setSpeechSynth] = useState<SpeechSynthesis | null>(null);
    const navigate = useNavigate();
    const mounted = useRef(true);
    const currentSlideRef = useRef(0);
    const isPlayingRef = useRef(false);
    const selectedVoiceRef = useRef<SpeechSynthesisVoice | null>(null);
    const playSlideRequestId = useRef(0); // Track request IDs to prevent stale calls
    const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null); // Track current utterance for cancellation
    const currentUtteranceResolverRef = useRef<(() => void) | null>(null); // Track resolver to resolve on cancel

    // Keep refs in sync with state
    useEffect(() => {
        currentSlideRef.current = currentSlide;
    }, [currentSlide]);

    useEffect(() => {
        isPlayingRef.current = isPlaying;
    }, [isPlaying]);

    useEffect(() => {
        setSpeechSynth(window.speechSynthesis);
        
        // Select and cache the voice once when component mounts
        const selectVoice = () => {
            const voices = window.speechSynthesis.getVoices();
            if (voices.length > 0 && !selectedVoiceRef.current) {
                // Prefer Google US English, then any US English, then any English
                const preferredVoice = voices.find(v => v.name.includes('Google US English')) 
                    || voices.find(v => v.name.includes('US English') && v.lang.startsWith('en-US'))
                    || voices.find(v => v.lang.startsWith('en-US'))
                    || voices.find(v => v.lang.startsWith('en'));
                
                if (preferredVoice) {
                    selectedVoiceRef.current = preferredVoice;
                    console.log("🔊 [VOICE] Selected voice:", preferredVoice.name, preferredVoice.lang);
                }
            }
        };
        
        // Voices might not be loaded immediately
        selectVoice();
        window.speechSynthesis.onvoiceschanged = selectVoice;
        
        return () => {
            mounted.current = false;
            // Increment request ID to invalidate any pending calls
            playSlideRequestId.current++;
            window.speechSynthesis.cancel();
            stopHumeAudio();
            // Resolve any pending browser TTS promise
            if (currentUtteranceResolverRef.current) {
                currentUtteranceResolverRef.current();
                currentUtteranceResolverRef.current = null;
            }
            currentUtteranceRef.current = null;
        };
    }, []);

    const speak = async (text: string, emotion?: string): Promise<void> => {
        console.log("🔊 [SPEAK] Starting speech. Text:", text.substring(0, 30) + "...", "Emotion:", emotion);

        // 1. Try Hume AI
        const humeSuccess = await playHumeAudio(text, emotion);
        console.log("🔊 [SPEAK] Hume result:", humeSuccess);
        if (humeSuccess) {
            console.log("🔊 [SPEAK] Hume succeeded, audio finished playing");
            return; // playHumeAudio resolves only when audio ENDS (via onended event)
        }

        console.log("🔊 [SPEAK] Hume failed, falling back to Browser TTS...");
        // 2. Fallback to Browser TTS (wrapped in Promise)
        return new Promise((resolve) => {
            if (!speechSynth) { 
                console.warn("🔊 [SPEAK] No speech synthesis available");
                resolve(); 
                return; 
            }
            
            // Cancel any previous utterance and resolve its promise
            if (currentUtteranceRef.current) {
                speechSynth.cancel();
                if (currentUtteranceResolverRef.current) {
                    console.log("🔊 [SPEAK] Resolving previous utterance promise on cancel");
                    currentUtteranceResolverRef.current();
                    currentUtteranceResolverRef.current = null;
                }
            }
            
            speechSynth.cancel(); // Ensure clean state
            const utterance = new SpeechSynthesisUtterance(text);
            currentUtteranceRef.current = utterance; // Track for cancellation
            currentUtteranceResolverRef.current = resolve; // Store resolver
            
            utterance.rate = 0.9; // Slightly slower for clarity
            utterance.pitch = 1.0;
            
            // Use the cached voice selection to ensure consistency
            if (selectedVoiceRef.current) {
                utterance.voice = selectedVoiceRef.current;
                console.log("🔊 [SPEAK] Using cached voice:", selectedVoiceRef.current.name);
            } else {
                // Fallback: try to select voice now if not cached
                const voices = speechSynth.getVoices();
                const preferredVoice = voices.find(v => v.name.includes('Google US English')) 
                    || voices.find(v => v.name.includes('US English') && v.lang.startsWith('en-US'))
                    || voices.find(v => v.lang.startsWith('en-US'))
                    || voices.find(v => v.lang.startsWith('en'));
                if (preferredVoice) {
                    utterance.voice = preferredVoice;
                    selectedVoiceRef.current = preferredVoice; // Cache it
                    console.log("🔊 [SPEAK] Selected voice:", preferredVoice.name);
                }
            }

            let utteranceStarted = false;
            let resolved = false; // Prevent double resolution
            
            const safeResolve = () => {
                if (!resolved) {
                    resolved = true;
                    currentUtteranceRef.current = null;
                    currentUtteranceResolverRef.current = null;
                    resolve();
                }
            };
            
            utterance.onstart = () => {
                console.log("🔊 [SPEAK] Browser TTS started");
                utteranceStarted = true;
            };
            
            utterance.onend = () => {
                console.log("🔊 [SPEAK] Browser TTS finished");
                safeResolve();
            };
            
            utterance.onerror = (e) => {
                console.error("🔊 [SPEAK] Browser TTS error:", e);
                // Still resolve so presentation can continue
                safeResolve();
            };

            speechSynth.speak(utterance);
            
            // Safety timeout: if TTS doesn't start within 3 seconds, resolve anyway
            setTimeout(() => {
                if (!utteranceStarted && !resolved) {
                    console.warn("🔊 [SPEAK] Browser TTS did not start within timeout");
                    safeResolve();
                }
            }, 3000);
        });
    };

    const startPresentation = () => {
        setIsPlaying(true);
        playSlide(0);
    };

    const playSlide = async (index: number) => {
        // Generate a new request ID for this call
        const requestId = ++playSlideRequestId.current;
        console.log("📽️ [SLIDE] Playing slide:", index, "Request ID:", requestId);

        if (index >= SCRIPT.length) {
            console.log("📽️ [SLIDE] Reached end of presentation!");
            // After the final slide, show a brief pause then return to start screen
            setTimeout(() => {
                if (requestId === playSlideRequestId.current && mounted.current) {
                    setIsPlaying(false);
                    setCurrentSlide(0);
                }
            }, 2000);
            return;
        }

        // Check if this is a stale call (newer request started)
        if (requestId !== playSlideRequestId.current) {
            console.log("📽️ [SLIDE] Stale call ignored, request ID:", requestId);
            return;
        }

        setCurrentSlide(index);
        const slide = SCRIPT[index];
        console.log("📽️ [SLIDE] Title:", slide.title);

        // Wait for audio to complete before advancing
        // This ensures each slide plays fully before moving to the next
        try {
            await speak(slide.text, slide.emotion);
            
            // Check if this is still the active request (user might have skipped)
            if (requestId !== playSlideRequestId.current) {
                console.log("📽️ [SLIDE] Request superseded, not advancing");
                return;
            }
            
            console.log("📽️ [SLIDE] Speech completed for slide:", index);
            console.log("📽️ [SLIDE] mounted.current =", mounted.current);

            // Check if we're still mounted and playing before advancing
            if (!mounted.current || !isPlayingRef.current) {
                console.log("📽️ [SLIDE] Presentation stopped, not advancing");
                return;
            }

            // Small pause for pacing, then advance to next slide
            const nextIndex = index + 1;
            console.log("📽️ [SLIDE] Advancing to slide:", nextIndex, "in 500ms...");
            
            await new Promise(resolve => setTimeout(resolve, 500));
            
            // Triple-check: request ID, mounted, and playing
            if (requestId === playSlideRequestId.current && mounted.current && isPlayingRef.current) {
                console.log("📽️ [SLIDE] Timer fired, calling playSlide(" + nextIndex + ")");
                playSlide(nextIndex);
            } else {
                console.log("📽️ [SLIDE] Conditions changed, not advancing");
            }
        } catch (error) {
            console.error("📽️ [SLIDE] Error during speech:", error);
            // On error, still advance after a delay (if still active)
            setTimeout(() => {
                if (requestId === playSlideRequestId.current && mounted.current && isPlayingRef.current) {
                    playSlide(index + 1);
                }
            }, 1000);
        }
    };

    const stop = () => {
        setIsPlaying(false);
        // Increment request ID to invalidate any pending playSlide calls
        playSlideRequestId.current++;
        stopHumeAudio(); // Kill Hume audio (this now resolves its promise)
        
        // Kill browser TTS and resolve its promise
        if (speechSynth) {
            speechSynth.cancel();
            if (currentUtteranceResolverRef.current) {
                console.log("🔊 [STOP] Resolving browser TTS promise on stop");
                currentUtteranceResolverRef.current();
                currentUtteranceResolverRef.current = null;
            }
            currentUtteranceRef.current = null;
        }
    };

    const handleSkip = () => {
        console.log("⏭️ [SKIP] User requested skip.");
        // Increment request ID to invalidate current playSlide call
        playSlideRequestId.current++;
        
        // Stop current audio immediately (this now resolves promises)
        stopHumeAudio();
        
        // Cancel browser TTS and resolve its promise
        if (speechSynth) {
            speechSynth.cancel();
            if (currentUtteranceResolverRef.current) {
                console.log("🔊 [SKIP] Resolving browser TTS promise on skip");
                currentUtteranceResolverRef.current();
                currentUtteranceResolverRef.current = null;
            }
            currentUtteranceRef.current = null;
        }

        // Calculate next slide
        const nextIndex = currentSlide + 1;
        if (nextIndex < SCRIPT.length) {
            // Start new slide with new request ID
            // The old playSlide call will be ignored due to request ID mismatch
            playSlide(nextIndex);
        } else {
            stop();
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                // ESC key to exit
                stop();
                navigate('/');
            } else if (e.key === 'ArrowRight' && isPlayingRef.current) {
                // Right arrow to skip forward
                handleSkip();
            } else if (e.key === 'ArrowLeft' && isPlayingRef.current && currentSlideRef.current > 0) {
                // Left arrow to go back (if possible)
                const prevIndex = currentSlideRef.current - 1;
                // Increment request ID to invalidate current call
                playSlideRequestId.current++;
                stopHumeAudio();
                if (speechSynth) {
                    speechSynth.cancel();
                    if (currentUtteranceResolverRef.current) {
                        currentUtteranceResolverRef.current();
                        currentUtteranceResolverRef.current = null;
                    }
                    currentUtteranceRef.current = null;
                }
                playSlide(prevIndex);
            } else if (e.key === ' ' && isPlayingRef.current) {
                // Spacebar to pause
                e.preventDefault();
                stop();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [navigate, speechSynth]);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: '#09090b', zIndex: 9999, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
        }}>
            {/* Background Ambience */}
            <div style={{ position: 'absolute', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(118,0,255,0.1), transparent)', animation: 'pulse 10s infinite' }} />

            {!isPlaying && currentSlide === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', zIndex: 10 }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '2rem' }} className="text-gradient">Audio Essay Mode</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
                        This presentation uses Hume AI's voice synthesis technology, powered by my own recorded voice.
                        Please ensure your sound is on.
                    </p>
                    <button onClick={startPresentation} style={{ fontSize: '1.25rem', padding: '1rem 3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <Play fill="white" /> Start Presentation
                    </button>
                    <br />
                    <button onClick={() => navigate('/')} style={{ background: 'transparent', marginTop: '2rem', color: 'var(--text-secondary)' }}>
                        Exit to Website
                    </button>
                </motion.div>
            ) : (
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        onClick={handleSkip} // CLICK TO SKIP
                        style={{ textAlign: 'center', zIndex: 10, maxWidth: '1000px', padding: '2rem', cursor: 'pointer' }}
                    >
                        <div style={{ fontSize: '8rem', marginBottom: '2rem' }}>{SCRIPT[currentSlide].visual}</div>
                        <h2 style={{ fontSize: '1.5rem', color: '#00f2ea', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                            {SCRIPT[currentSlide].title}
                        </h2>
                        <h1 style={{ fontSize: '4rem', marginBottom: '3rem', lineHeight: 1.1 }}>
                            {SCRIPT[currentSlide].subtitle}
                        </h1>
                        <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                            "{SCRIPT[currentSlide].text}"
                        </p>
                        <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.3)' }}>
                            (Click to skip)
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}

            {/* Controls & Visuals */}
            {isPlaying && (
                <>
                    {/* Audio Visualizer */}
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center', justifyContent: 'center', height: '40px', marginBottom: '2rem', zIndex: 20 }}>
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    height: [10, Math.random() * 30 + 10, 10],
                                    backgroundColor: ['#00f2ea', '#7600ff', '#00f2ea']
                                }}
                                transition={{
                                    duration: 0.4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: i * 0.1
                                }}
                                style={{ width: '6px', borderRadius: '3px', background: '#00f2ea' }}
                            />
                        ))}
                    </div>

                    {/* Bottom Controls */}
                    <div style={{ position: 'absolute', bottom: '2rem', display: 'flex', gap: '1rem', zIndex: 20, alignItems: 'center' }}>
                        <button 
                            onClick={stop} 
                            style={{ 
                                background: 'rgba(255,255,255,0.1)', 
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            <Pause size={18} /> Pause
                        </button>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', padding: '0 1rem' }}>
                            Click slide to skip • ← → to navigate • ESC to exit
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)' }}>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentSlide + 1) / SCRIPT.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                            style={{ height: '100%', background: 'linear-gradient(90deg, #00f2ea, #7600ff)' }}
                        />
                    </div>

                    {/* Top Navigation Bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', zIndex: 20 }}>
                        {/* Slide Counter */}
                        <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>{currentSlide + 1} / {SCRIPT.length}</span>
                        </div>

                        {/* Close Button */}
                        <button 
                            onClick={() => {
                                stop();
                                navigate('/');
                            }}
                            style={{ 
                                background: 'rgba(255, 0, 80, 0.2)', 
                                border: '1px solid rgba(255, 0, 80, 0.3)',
                                color: '#ff0050', 
                                padding: '0.5rem 1rem',
                                borderRadius: '0.5rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.9rem',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 0, 80, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 0, 80, 0.2)';
                            }}
                        >
                            <X size={18} /> Exit (ESC)
                        </button>
                    </div>

                    {/* Navigation Arrows */}
                    {currentSlide > 0 && (
                        <button
                            onClick={() => {
                                stopHumeAudio();
                                if (speechSynth) speechSynth.cancel();
                                playSlide(currentSlide - 1);
                            }}
                            style={{
                                position: 'absolute',
                                left: '2rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                zIndex: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            <ChevronLeft size={24} />
                        </button>
                    )}

                    {currentSlide < SCRIPT.length - 1 && (
                        <button
                            onClick={handleSkip}
                            style={{
                                position: 'absolute',
                                right: '2rem',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white',
                                padding: '1rem',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                zIndex: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            <ChevronRight size={24} />
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
