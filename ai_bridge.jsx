// 이음 - AI chat bridge
// ------------------------------------------------------------------
// One place that talks to the AI, so friend chat and video call share it.
//
// HOW IT WORKS
//  1. On Netlify / any real host → POSTs to /api/chat (a serverless
//     function that holds the API key safely on the server).
//  2. Inside Genspark Design → falls back to window.genspark.complete,
//     so the prototype keeps working here while you're building.
//
// SETUP ON NETLIFY
//   • Add environment variable  OPENAI_API_KEY = sk-...
//   • The function lives at netlify/functions/chat.js (already included)
// ------------------------------------------------------------------

// Ask the AI for the next reply. Returns the raw string the model produced.
async function ieumAskAI(messages) {
  // 1) Real backend (production)
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data.text === 'string') return data.text;
    }
    // A 404 means "not deployed with a function" → fall through to Genspark
    if (res.status !== 404 && res.status !== 405) {
      const errText = await res.text().catch(() => '');
      console.warn('[ieum] /api/chat failed', res.status, errText);
    }
  } catch (e) {
    // Network error or opened as a bare file:// — try the fallback below
    console.warn('[ieum] /api/chat unreachable, falling back', e && e.message);
  }

  // 2) Genspark Design sandbox (prototype)
  if (typeof window !== 'undefined' && window.genspark && typeof window.genspark.complete === 'function') {
    return await window.genspark.complete({ messages });
  }
  if (typeof window !== 'undefined' && window.claude && typeof window.claude.complete === 'function') {
    return await window.claude.complete({ messages });
  }

  // 3) Nothing available
  throw new Error('NO_AI_BACKEND');
}

// Turn whatever the model said into { native, korean }.
// Tolerates stray text, markdown fences, or a plain string.
function ieumParseBilingual(reply) {
  if (!reply) return null;
  let text = String(reply).trim();

  // Strip ```json ... ``` fences if present
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) text = fence[1].trim();

  try {
    const parsed = JSON.parse(text);
    if (parsed && parsed.native) return { native: parsed.native, korean: parsed.korean || '' };
  } catch { /* not bare JSON — keep digging */ }

  // Grab the first {...} block
  const block = text.match(/\{[\s\S]*\}/);
  if (block) {
    try {
      const parsed = JSON.parse(block[0]);
      if (parsed && parsed.native) return { native: parsed.native, korean: parsed.korean || '' };
    } catch { /* fall through */ }
  }

  // Last resort: show something rather than nothing
  return { native: text.slice(0, 120), korean: '' };
}

Object.assign(window, { ieumAskAI, ieumParseBilingual });
