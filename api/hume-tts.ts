import type { VercelRequest, VercelResponse } from '@vercel/node';

const HUME_API_URL = 'https://api.hume.ai/v0/tts';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.HUME_API_KEY;
  const voiceId = process.env.HUME_VOICE_ID || 'b04e243e-13f2-400e-8f71-af8c884cb372';

  if (!apiKey) {
    return res.status(500).json({ error: 'Hume API key not configured' });
  }

  try {
    const { text, emotion, voiceId: clientVoiceId } = req.body as { text: string; emotion?: string; voiceId?: string };

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid text' });
    }

    const effectiveVoiceId = clientVoiceId || voiceId;

    const requestBody: Record<string, unknown> = {
      utterances: [
        {
          text,
          voice: { id: effectiveVoiceId },
          ...(emotion && { description: emotion }),
        },
      ],
    };

    const response = await fetch(HUME_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hume-Api-Key': apiKey,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hume API error:', response.status, errorText);
      return res.status(response.status).json({
        error: `Hume API error: ${response.statusText}`,
      });
    }

    const jsonResponse = await response.json();

    let audioBase64: string | null = null;
    if (jsonResponse.generations?.[0]?.audio) {
      audioBase64 = jsonResponse.generations[0].audio;
    } else if (jsonResponse.audio) {
      audioBase64 = jsonResponse.audio;
    }

    if (!audioBase64) {
      return res.status(500).json({ error: 'No audio data in Hume response' });
    }

    return res.status(200).json({
      audio: audioBase64,
      format: jsonResponse.generations?.[0]?.output_format ?? jsonResponse.output_format ?? 'mp3',
    });
  } catch (error) {
    console.error('hume-tts error:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}
