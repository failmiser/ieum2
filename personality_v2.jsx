// 이음 - Personality Test v5
// 10 questions written by the user. Some questions have 4 choices, some have 5 —
// the scorer averages across however many choices each question offers.
//
// 5 axes, each weighted -1 / 0 / +1 per choice:
//   E = 외향성   (social energy, initiating, leading)
//   W = 따뜻함   (caring, empathy, harmony)
//   C = 사고력   (analysis, curiosity, understanding)
//   F = 자유로움 (spontaneity, novelty, independence)
//   S = 안정감   (planning, consistency, structure)

const PQ5 = [
  {
    text: {
      ko: '처음 보는 사람들 사이에서 나는?',
      en: 'Among people I\'ve never met, I...',
    },
    options: [
      { text: { ko: '먼저 말을 걸고 대화를 이끌어가는 편이다.', en: 'Start the conversation and lead it.' },
        w: { E:1.0, F:0.6 } },
      { text: { ko: '누군가 말을 걸면 자연스럽게 어울리지만, 먼저 다가가지는 않는다.', en: 'Join in easily if approached, but I don\'t go first.' },
        w: { E:0.3, W:1.0 } },
      { text: { ko: '주변 사람들을 관찰하면서 어떤 사람들인지 파악하는 편이다.', en: 'Observe the room and read who these people are.' },
        w: { C:1.0, E:-0.6 } },
      { text: { ko: '다른 사람들과 어울리기보다는 혼자 있거나 편한 사람과 함께 있는 게 좋다.', en: 'I\'d rather be alone or with someone I\'m comfortable with.' },
        w: { E:-1.0, S:0.8 } },
    ],
  },
  {
    text: {
      ko: '새로운 걸 배울 때 나는?',
      en: 'When I learn something new, I...',
    },
    options: [
      { text: { ko: '일단 직접 해 보면서 부딪히고 익히는 편이다.', en: 'Jump in and learn by doing.' },
        w: { F:1.0, E:0.6 } },
      { text: { ko: '원리와 이유를 먼저 이해해야 직성이 풀린다.', en: 'Need to understand the why and how first.' },
        w: { C:1.0, S:0.8 } },
      { text: { ko: '다른 사람의 설명이나 예시를 참고하며 차근차근 배운다.', en: 'Follow someone\'s explanation or example, step by step.' },
        w: { W:1.0, S:0.5 } },
      { text: { ko: '안 하거나 미룬다. 도전하지 않는다.', en: 'Put it off. I don\'t really take it on.' },
        w: { E:-1.0, F:-0.8, S:-0.8 } },
    ],
  },
  {
    text: {
      ko: '친구들이 나에 대해 욕하는 걸 들었을 때 나는?',
      en: 'If I overheard friends badmouthing me, I would...',
    },
    options: [
      { text: { ko: '바로 그 자리에서 왜 그런 말을 했는지 당당하게 따진다.', en: 'Confront them right there and ask why.' },
        w: { E:1.0, C:0.4 } },
      { text: { ko: '겉으로는 티 내지 않지만, 속으로 오래 생각하고 상처받는다.', en: 'Show nothing, but think about it for a long time and hurt inside.' },
        w: { W:1.0, E:-0.8 } },
      { text: { ko: '내 잘못이 있는지 객관적으로 생각해 보고 판단한다.', en: 'Look at it objectively and work out whether I was wrong.' },
        w: { C:1.0, S:0.8 } },
      { text: { ko: '나를 그렇게 생각하는 사람에게 신경 쓰지 않고 거리를 둔다.', en: 'Not care what they think, and keep my distance.' },
        w: { F:1.0, E:-0.5, W:-0.8 } },
      { text: { ko: '어른들에게 알린다.', en: 'Tell an adult.' },
        w: { S:1.0, E:-0.8, W:-0.4 } },
    ],
  },
  {
    text: {
      ko: '좋아하는 걸 할 때 나는?',
      en: 'When I\'m doing something I love, I...',
    },
    options: [
      { text: { ko: '시간 가는 줄 모르고 몰입하며 끝까지 파고든다.', en: 'Lose track of time and dig all the way in.' },
        w: { C:1.0, S:0.8 } },
      { text: { ko: '다른 사람들과 함께 즐기고 경험을 공유하는 게 좋다.', en: 'Love sharing the experience with other people.' },
        w: { E:1.0, W:1.0 } },
      { text: { ko: '새로운 방식이나 아이디어를 시도하며 재미를 찾는다.', en: 'Find the fun by trying new approaches and ideas.' },
        w: { F:1.0, C:0.6 } },
      { text: { ko: '부담이나 의무 없이 내 기분에 따라 자유롭게 즐긴다.', en: 'Enjoy it freely, depending on my mood, with no obligation.' },
        w: { F:1.0, S:-1.0 } },
      { text: { ko: '좋아하는 게 없다.', en: 'Honestly, there isn\'t anything I love.' },
        w: { E:-1.0, W:-0.8, C:-0.6 } },
    ],
  },
  {
    text: {
      ko: '친구들 사이에서 나는?',
      en: 'In my friend group, I...',
    },
    options: [
      { text: { ko: '분위기를 이끌고 사람들을 모으는 역할을 한다.', en: 'Lead the mood and bring people together.' },
        w: { E:1.0, F:0.8 } },
      { text: { ko: '친구들의 고민을 들어주고 갈등을 중재하는 역할을 한다.', en: 'Listen to their worries and mediate conflicts.' },
        w: { W:1.0, E:0.5 } },
      { text: { ko: '상황을 객관적으로 보고 현실적인 해결책을 제시한다.', en: 'See the situation objectively and offer practical solutions.' },
        w: { C:1.0, S:0.8 } },
      { text: { ko: '무리의 흐름에 휩쓸리기보다 내 페이스를 유지한다.', en: 'Keep my own pace instead of being swept along.' },
        w: { E:-1.0, F:0.7 } },
      { text: { ko: '장난을 다 받아준다.', en: 'Go along with every joke.' },
        w: { W:0.8, E:0.6, F:0.4 } },
    ],
  },
  {
    text: {
      ko: '공부할 때 나는?',
      en: 'When I study, I...',
    },
    options: [
      { text: { ko: '개념과 원리를 이해해야 마음이 편하다.', en: 'Need to understand the concepts and principles to feel settled.' },
        w: { C:1.0, S:0.8 } },
      { text: { ko: '문제를 많이 풀면서 감각을 익힌다.', en: 'Learn the feel of it by solving lots of problems.' },
        w: { F:0.8, C:0.6, E:0.4 } },
      { text: { ko: '친구들과 질문하고 설명하며 공부한다.', en: 'Study by asking and explaining things with friends.' },
        w: { E:1.0, W:1.0 } },
      { text: { ko: '계획표를 세우고 정해진 분량을 끝낸다.', en: 'Make a schedule and finish the set amount.' },
        w: { S:1.0, C:0.6 } },
      { text: { ko: '공부를 안 한다.', en: 'I don\'t really study.' },
        w: { F:1.0, S:-1.0, C:-0.8 } },
    ],
  },
  {
    text: {
      ko: '에너지를 충전하고 싶을 때 나는?',
      en: 'When I need to recharge, I...',
    },
    options: [
      { text: { ko: '혼자 조용히 쉬면서 생각을 정리한다.', en: 'Rest quietly alone and sort out my thoughts.' },
        w: { E:-1.0, C:0.8 } },
      { text: { ko: '친구들과 만나서 수다를 떨고 논다.', en: 'Meet friends, chat, and hang out.' },
        w: { E:1.0, W:1.0 } },
      { text: { ko: '새로운 장소에 가거나 새로운 경험을 한다.', en: 'Go somewhere new or try something new.' },
        w: { F:1.0, C:0.6 } },
      { text: { ko: '좋아하는 취미에 집중하며 시간을 보낸다.', en: 'Spend the time deep in a hobby I love.' },
        w: { C:1.0, S:0.8 } },
      { text: { ko: '에너지가 소모되는 상황을 만들지 않는다.', en: 'Avoid anything that would drain me in the first place.' },
        w: { E:-1.0, S:1.0 } },
    ],
  },
  {
    text: {
      ko: '갈등 상황에서 더 중요한 것은?',
      en: 'In a conflict, what matters more?',
    },
    options: [
      { text: { ko: '누가 어떤 이유로 그렇게 행동했는지 이해하는 것', en: 'Understanding why the other person acted that way' },
        w: { C:1.0, W:0.8 } },
      { text: { ko: '서로 솔직하게 이야기하고 오해를 푸는 것', en: 'Talking honestly and clearing up misunderstandings' },
        w: { E:1.0, W:1.0 } },
      { text: { ko: '모두가 납득할 수 있는 해결책을 찾는 것', en: 'Finding a solution everyone can accept' },
        w: { S:1.0, W:0.6 } },
      { text: { ko: '관계가 더 나빠지지 않도록 서로 배려하는 것', en: 'Being considerate so the relationship doesn\'t get worse' },
        w: { W:1.0, S:0.5, E:-0.6 } },
      { text: { ko: '내가 이기는 것', en: 'Winning' },
        w: { E:1.0, W:-1.0, F:0.8 } },
    ],
  },
  {
    text: {
      ko: '새로운 아이디어가 떠오른다면 나는?',
      en: 'When a new idea hits me, I...',
    },
    options: [
      { text: { ko: '실현할 수 있는지 논리적으로 검토한다.', en: 'Check logically whether it could actually work.' },
        w: { C:1.0, S:0.9 } },
      { text: { ko: '일단 상상력을 발휘해 아이디어를 발전시킨다.', en: 'Let my imagination run and grow the idea.' },
        w: { C:1.0, F:1.0 } },
      { text: { ko: '다른 사람에게 이야기하고 의견을 구한다.', en: 'Tell someone about it and get their take.' },
        w: { E:1.0, W:0.8 } },
      { text: { ko: '구체적인 계획을 세우고 바로 실행해 본다.', en: 'Make a concrete plan and start right away.' },
        w: { S:1.0, E:0.8 } },
    ],
  },
  {
    text: {
      ko: '계획에 없던 일이 생기면 나는?',
      en: 'When something unplanned comes up, I...',
    },
    options: [
      { text: { ko: '상황을 분석하고 가장 합리적인 대안을 찾는다.', en: 'Analyse it and find the most sensible alternative.' },
        w: { C:1.0, S:0.9 } },
      { text: { ko: '예상하지 못한 변화도 새로운 기회라고 생각한다.', en: 'Treat the surprise as a new opportunity.' },
        w: { F:1.0, C:0.7 } },
      { text: { ko: '주변 사람들과 상의해 함께 해결한다.', en: 'Talk it over with people around me and solve it together.' },
        w: { E:1.0, W:0.9 } },
      { text: { ko: '기존 계획을 수정하고 우선순위를 다시 정한다.', en: 'Adjust the plan and reset my priorities.' },
        w: { S:1.0, C:0.6 } },
      { text: { ko: '새로 생긴 일을 없앤다.', en: 'Get rid of whatever just appeared.' },
        w: { S:1.0, F:-1.0, E:-0.7 } },
    ],
  },
];

// ─── Calibration ───────────────────────────────────
// A plain nearest-signature search over-picks types that sit near the centre of
// the 5-axis space (BRIDGE, STORYTELLER) and under-picks the outliers. We fix
// that with iterative reweighting: simulate random answerers, see who wins too
// often, nudge those types down, and repeat a few times. The weights converge
// on a balanced distribution instead of overshooting.
let _calib = null;

function _buildCalibration() {
  const AX = ['E', 'W', 'C', 'F', 'S'];
  const TYPES = Object.values(window.P_TYPES_V3);
  const N = TYPES.length;

  // Answer distribution (mean / sd) across all questions
  const mean = {}; const variance = {};
  AX.forEach(a => { mean[a] = 0; variance[a] = 0; });
  PQ5.forEach((q) => {
    const k = q.options.length;
    AX.forEach((ax) => {
      const vals = q.options.map(o => (o.w && o.w[ax]) || 0);
      const m = vals.reduce((s, v) => s + v, 0) / k;
      const v = vals.reduce((s, x) => s + x * x, 0) / k - m * m;
      mean[ax] += m; variance[ax] += Math.max(0, v);
    });
  });
  const ansSd = {}; AX.forEach(a => { ansSd[a] = Math.sqrt(variance[a]) || 1; });

  // Type signatures, z-scored per axis
  const sigStat = {};
  AX.forEach((a) => {
    const vals = TYPES.map(t => (t.sig[a] != null ? t.sig[a] : 0.5));
    const m = vals.reduce((s, v) => s + v, 0) / vals.length;
    const sd = Math.sqrt(vals.reduce((s, v) => s + (v - m) * (v - m), 0) / vals.length) || 1;
    sigStat[a] = { m, sd };
  });
  const SIGZ = {};
  TYPES.forEach((t) => {
    const o = {};
    AX.forEach(a => { o[a] = ((t.sig[a] != null ? t.sig[a] : 0.5) - sigStat[a].m) / sigStat[a].sd; });
    SIGZ[t.key] = o;
  });

  // Iterative reweighting
  const weight = {}; TYPES.forEach(t => { weight[t.key] = 1.0; });
  const SIMS = 900;
  const ROUNDS = 6;

  for (let round = 0; round < ROUNDS; round++) {
    const wins = {}; TYPES.forEach(t => { wins[t.key] = 0; });

    for (let s = 0; s < SIMS; s++) {
      const raw = {}; AX.forEach(a => { raw[a] = 0; });
      PQ5.forEach((q) => {
        const o = q.options[Math.floor(Math.random() * q.options.length)];
        AX.forEach(a => { raw[a] += (o.w && o.w[a]) || 0; });
      });
      const az = {}; AX.forEach(a => { az[a] = (raw[a] - mean[a]) / ansSd[a]; });

      let best = null, bestScore = -Infinity;
      TYPES.forEach((t) => {
        let d = 0;
        AX.forEach(a => { const df = az[a] - SIGZ[t.key][a]; d += df * df; });
        const score = -d + Math.log(weight[t.key]);
        if (score > bestScore) { bestScore = score; best = t.key; }
      });
      wins[best] = (wins[best] || 0) + 1;
    }

    const target = SIMS / N;
    TYPES.forEach((t) => {
      const w = Math.max(wins[t.key] || 0, 1);
      // half-step toward the balanced ratio, keeps the loop stable
      weight[t.key] *= Math.pow(target / w, 0.5);
    });
  }

  const logw = {};
  TYPES.forEach(t => { logw[t.key] = Math.log(weight[t.key]); });

  return { logw, mean, ansSd, SIGZ };
}

// ─── Scoring ───────────────────────────────────────
function computePersonalityV5(answers) {
  if (!_calib) _calib = _buildCalibration();
  const { logw, mean, ansSd, SIGZ } = _calib;
  const AX = ['E', 'W', 'C', 'F', 'S'];
  const TYPES = Object.values(window.P_TYPES_V3);

  const raw = {}; AX.forEach(a => { raw[a] = 0; });
  answers.forEach((ans, i) => {
    let qi = i, oi = ans;
    if (ans && typeof ans === 'object') { qi = ans.origQ; oi = ans.origO; }
    const q = PQ5[qi];
    if (!q) return;
    const picked = q.options[oi];
    if (!picked || !picked.w) return;
    AX.forEach(a => { raw[a] += (picked.w[a] || 0); });
  });

  const az = {}; AX.forEach(a => { az[a] = (raw[a] - mean[a]) / ansSd[a]; });

  let bestKey = null;
  let bestScore = -Infinity;
  TYPES.forEach((t) => {
    let d = 0;
    AX.forEach(a => { const df = az[a] - SIGZ[t.key][a]; d += df * df; });
    // widen the tie window a touch so near-matches still rotate naturally
    const score = -d * 1.0 + (logw[t.key] || 0) + Math.random() * 1.4;
    if (score > bestScore) { bestScore = score; bestKey = t.key; }
  });

  return window.P_TYPES_V3[bestKey] || window.P_TYPES_V3.BRIDGE;
}

window.PERSONALITY_QUESTIONS_V2 = PQ5;
window.computePersonality = computePersonalityV5;
