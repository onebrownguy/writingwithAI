// src/utils/hume.ts

const HUME_API_KEY = "elSCkQlsXEFw0VE8W8YD84Ts16o60b8KpS5q7iWKuFGYlPtr";
const HUME_VOICE_ID = "b04e243e-13f2-400e-8f71-af8c884cb372";

let currentAudio: HTMLAudioElement | null = null;

export const stopHumeAudio = () => {
    if (currentAudio) {
        console.log("🎙️ [HUME] Stopping current audio.");
        currentAudio.pause();
        currentAudio.src = ""; // Release memory
        currentAudio = null;
    }
};

export const playHumeAudio = async (text: string, emotion?: string): Promise<boolean> => {
    // Stop any currently playing audio before starting new one
    stopHumeAudio();

    console.log("🎙️ [HUME] Attempting to play:", text.substring(0, 50) + "...", "Emotion:", emotion);

    if (!HUME_API_KEY) {
        console.warn("🎙️ [HUME] API Key is missing.");
        return false;
    }

    try {
        // Using simple fetch to avoid SDK dependency issues on the fly
        // Endpoint: Hume TTS (hypothetical standard endpoint, verifying typical usage)
        // Note: If this 404s, we might need the specific Voice ID or Model ID. 
        // Using a generic call structure for now.

        // We will use a standard "catch-all" approach or fallback.
        // Since I can't browse docs, I will assume a standard POST to synthesize.
        // If this fails, the Presentation.tsx fallback to window.speechSynthesis will kick in.

        // NOTE TO USER: Browser research confirmed the correct endpoint is /v0/tts
        // Source: https://dev.hume.ai/docs/text-to-speech-tts/overview#non-streaming-http

        const requestBody: any = {
            utterances: [{
                text: text,
                voice: { id: HUME_VOICE_ID }
            }]
        };

        // If emotion is provided, add it as a description for context/prosody
        if (emotion) {
            requestBody.utterances[0].description = emotion;
        }

        const response = await fetch('https://api.hume.ai/v0/tts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Hume-Api-Key': HUME_API_KEY
            },
            body: JSON.stringify(requestBody)
        });

        console.log("🎙️ [HUME] Response status:", response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("🎙️ [HUME] API Error:", response.status, errorText);
            throw new Error(`Hume API Error: ${response.statusText}`);
        }

        // Check what format Hume returned
        const contentType = response.headers.get('Content-Type');
        console.log("🎙️ [HUME] Content-Type:", contentType);

        // Hume returns JSON containing base64-encoded audio
        const jsonResponse = await response.json();
        console.log("🎙️ [HUME] JSON response keys:", Object.keys(jsonResponse));

        // Extract audio data - Hume TTS returns { generations: [{ audio: "base64...", ... }] }
        // or possibly { audio: "base64..." } directly
        let audioBase64: string | null = null;
        let audioFormat = 'mp3'; // default

        if (jsonResponse.generations && jsonResponse.generations[0]) {
            audioBase64 = jsonResponse.generations[0].audio;
            audioFormat = jsonResponse.generations[0].output_format || 'mp3';
            console.log("🎙️ [HUME] Found audio in generations[0], format:", audioFormat);
        } else if (jsonResponse.audio) {
            audioBase64 = jsonResponse.audio;
            audioFormat = jsonResponse.output_format || jsonResponse.format || 'mp3';
            console.log("🎙️ [HUME] Found audio directly, format:", audioFormat);
        } else {
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
        const audio = new Audio(audioUrl);
        currentAudio = audio; // Track for global stopping

        return new Promise((resolve) => {
            audio.onended = () => {
                console.log("🎙️ [HUME] ✅ Audio finished playing!");
                resolve(true); // Audio finished playing
            };
            audio.onerror = (e) => {
                console.error("🎙️ [HUME] ❌ Audio playback error:", e);
                resolve(false); // Audio failed
            };
            audio.play().then(() => {
                console.log("🎙️ [HUME] ▶️ Audio started playing...");
            }).catch((err) => {
                console.error("🎙️ [HUME] ❌ Play blocked:", err);
                resolve(false);
            });
        });

    } catch (error) {
        console.error("🎙️ [HUME] TTS Error:", error);
        return false; // Fallback to browser TTS
    }
};

