// Netlify Function — proxy for the 이음 (Ieum) AI chat.
//
// Why this exists: the browser must never hold your API key. This function
// runs on Netlify's servers, reads the key from an environment variable,
// and forwards the conversation to the AI provider.
//
// ── Setup ─────────────────────────────────────────────────────────
//  Netlify → Site settings → Environment variables → add:
//      OPENAI_API_KEY   = sk-...          (required)
//      AI_MODEL         = gpt-4o-mini     (optional, this is the default)
//      AI_BASE_URL      = https://api.openai.com/v1   (optional)
//
//  Swapping providers later needs no code edit — just change AI_BASE_URL
//  and AI_MODEL. OpenRouter, Groq and Together all speak this same shape.

const DEFAULT_BASE = 'https://api.openai.com/v1';
const DEFAULT_MODEL = 'gpt-4o-mini';

exports.handler = async (event) => {
  const json = (statusCode, obj) => ({
    statusCode,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(obj),
  });

  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Use POST' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return json(500, {
      error: 'MISSING_API_KEY',
      message: 'Netlify 환경변수에 OPENAI_API_KEY 를 추가해주세요.',
    });
  }

  let messages;
  try {
    const body = JSON.parse(event.body || '{}');
    messages = body.messages;
  } catch {
    return json(400, { error: 'BAD_JSON' });
  }
  if (!Array.isArray(messages) || messages.length === 0) {
    return json(400, { error: 'NO_MESSAGES' });
  }

  const baseUrl = (process.env.AI_BASE_URL || DEFAULT_BASE).replace(/\/+$/, '');
  const model = process.env.AI_MODEL || DEFAULT_MODEL;

  const payload = {
    model,
    messages,
    temperature: 0.9,
    max_tokens: 220,
  };
  // OpenAI understands this and it guarantees a clean {"native","korean"}.
  // Providers that don't support it will reject the call, so we only send it there.
  if (baseUrl.includes('api.openai.com')) {
    payload.response_format = { type: 'json_object' };
  }

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.error('[ieum] provider error', res.status, data);
      return json(502, {
        error: 'PROVIDER_ERROR',
        status: res.status,
        message: (data && data.error && data.error.message) || 'AI 제공자 오류',
      });
    }

    const text =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content;

    if (!text) return json(502, { error: 'EMPTY_REPLY' });

    return json(200, { text });
  } catch (e) {
    console.error('[ieum] fetch failed', e);
    return json(502, { error: 'NETWORK', message: String(e && e.message) });
  }
};
