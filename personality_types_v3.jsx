// 이음 - Personality Types v4
// 20 types designed around the SAME 5 axes the new test measures:
//   E = 외향성   W = 따뜻함   C = 사고력   F = 자유로움   S = 안정감
// Each type is a distinct corner of that space, so every result feels different.

const P_TYPES_V4 = {
  // ── 밝고 추진력 있는 쪽 ─────────────────────
  SPARK: {
    key: 'SPARK', emoji: '🔥', sig: { E: 0.95, W: 0.45, C: 0.35, F: 0.95, S: 0.15 },
    best: ['LIGHTHOUSE', 'SAGE', 'OBSERVER'], tough: ['CLOCK', 'COMPASS'],
    i18n: {
      ko: { label: '불꽃', tagline: '가만히 못 있는 사람',
        desc: '생각나면 바로 움직여요. 계획표보다 몸이 먼저 나가는 타입이에요.',
        charm: ['분위기를 한 번에 띄움', '새로운 걸 제일 먼저 시도', '지루할 틈을 안 줌'],
        warning: '시작은 많은데 끝맺음이 아쉬울 때가 있어요' },
      en: { label: 'The Spark', tagline: 'Can\'t sit still',
        desc: 'If it crosses your mind, you\'re already moving. Body first, plan later.',
        charm: ['Lifts the whole room instantly', 'First to try anything new', 'Never lets it get boring'],
        warning: 'Lots of starts, fewer finishes' },
    },
  },
  SUNSHINE: {
    key: 'SUNSHINE', emoji: '☀️', sig: { E: 0.90, W: 0.85, C: 0.40, F: 0.60, S: 0.50 },
    best: ['MOON', 'SHADOW', 'CLOCK'], tough: ['SHADOW'],
    i18n: {
      ko: { label: '햇살', tagline: '옆에 있으면 밝아짐',
        desc: '특별한 말을 안 해도 사람 기분을 올려주는 타입이에요.',
        charm: ['웃음이 전염됨', '처음 보는 사람도 편하게 만듦', '칭찬을 아끼지 않음'],
        warning: '힘들어도 티를 안 내서 혼자 앓을 때가 있어요' },
      en: { label: 'The Sunshine', tagline: 'Brighter just by being there',
        desc: 'You lift people without saying anything special.',
        charm: ['Laughter spreads from you', 'Puts strangers at ease', 'Generous with praise'],
        warning: 'You hide your bad days, then carry them alone' },
    },
  },
  DRUM: {
    key: 'DRUM', emoji: '🥁', sig: { E: 0.95, W: 0.70, C: 0.30, F: 0.85, S: 0.35 },
    best: ['SAGE', 'OBSERVER', 'PILLAR'], tough: ['CLOCK'],
    i18n: {
      ko: { label: '북', tagline: '박자 만들어주는 사람',
        desc: '말보다 리듬으로 분위기를 잡아요. 같이 있으면 신나지는 타입이에요.',
        charm: ['무리에 생기를 부어넣음', '눈치 빠르게 텐션 조절', '장난을 잘 받아줌'],
        warning: '혼자 있는 시간이 부족하면 금방 지쳐요' },
      en: { label: 'The Drum', tagline: 'Sets the beat',
        desc: 'You set the rhythm of a room without saying much.',
        charm: ['Breathes life into groups', 'Reads tension and adjusts', 'Great at playing along'],
        warning: 'Too little alone time drains you fast' },
    },
  },
  ARROW: {
    key: 'ARROW', emoji: '🏹', sig: { E: 0.90, W: 0.35, C: 0.75, F: 0.55, S: 0.65 },
    best: ['FOREST', 'MOON', 'ONDOL'], tough: ['WAVE'],
    i18n: {
      ko: { label: '화살', tagline: '목표가 있으면 직진',
        desc: '하고 싶은 게 정해지면 다른 길로 안 새요. 집중력이 무기예요.',
        charm: ['목표를 향해 흔들리지 않음', '말보다 결과로 보여줌', '위기에서 판단이 빠름'],
        warning: '주변 사람 속도를 놓칠 때가 있어요' },
      en: { label: 'The Arrow', tagline: 'Straight to the target',
        desc: 'Once you pick a direction, you don\'t drift.',
        charm: ['Locks onto a goal', 'Shows results, not talk', 'Fast judgement under pressure'],
        warning: 'You can lose track of other people\'s pace' },
    },
  },

  // ── 사람을 잇고 감싸는 쪽 ─────────────────────
  BRIDGE: {
    key: 'BRIDGE', emoji: '🌉', sig: { E: 0.85, W: 0.90, C: 0.55, F: 0.45, S: 0.55 },
    best: ['OBSERVER', 'ARTIST', 'WAVE'], tough: ['SHADOW'],
    i18n: {
      ko: { label: '다리', tagline: '어색한 사이를 이어줌',
        desc: '서로 안 친한 사람들 사이에 자연스럽게 끼어들어 연결해요.',
        charm: ['모두를 대화에 끌어들임', '편견 없이 대함', '갈등을 부드럽게 넘김'],
        warning: '내 감정은 자꾸 뒤로 밀려나요' },
      en: { label: 'The Bridge', tagline: 'Connects the awkward gaps',
        desc: 'You slip between people who don\'t know each other and link them up.',
        charm: ['Pulls everyone into the conversation', 'Approaches without prejudice', 'Softens conflict'],
        warning: 'Your own feelings keep getting pushed back' },
    },
  },
  FOREST: {
    key: 'FOREST', emoji: '🌲', sig: { E: 0.30, W: 0.95, C: 0.55, F: 0.35, S: 0.70 },
    best: ['SPARK', 'ARROW', 'DOODLE'], tough: ['SPARK'],
    i18n: {
      ko: { label: '숲', tagline: '그냥 있어주는 것만으로',
        desc: '말로 위로하기보다 조용히 옆에 있어주는 걸 잘해요.',
        charm: ['끝까지 들어줌', '비밀을 절대 안 흘림', '아픈 사람을 먼저 알아챔'],
        warning: '남의 감정을 너무 많이 흡수해요' },
      en: { label: 'The Forest', tagline: 'Present is enough',
        desc: 'You comfort by staying, not by talking.',
        charm: ['Hears you to the end', 'Vault-grade silence', 'Notices who\'s hurting first'],
        warning: 'You absorb too much of other people\'s feelings' },
    },
  },
  ONDOL: {
    key: 'ONDOL', emoji: '🫖', sig: { E: 0.40, W: 0.85, C: 0.35, F: 0.30, S: 0.80 },
    best: ['SPARK', 'DRUM', 'WAVE'], tough: ['ARROW'],
    i18n: {
      ko: { label: '온돌', tagline: '따뜻한 안식처',
        desc: '친구들이 힘들 때 제일 먼저 찾는 사람이에요.',
        charm: ['챙길 건 다 챙김', '기억력이 좋아서 서운하게 안 함', '집밥 같은 편안함'],
        warning: '정작 내 이야기는 잘 안 꺼내요' },
      en: { label: 'The Hearth', tagline: 'A warm place to land',
        desc: 'You\'re the first person friends look for when things go wrong.',
        charm: ['Remembers every detail', 'Makes people feel fed', 'Never lets you feel forgotten'],
        warning: 'You rarely bring up your own stuff' },
    },
  },
  GARDEN: {
    key: 'GARDEN', emoji: '🌷', sig: { E: 0.50, W: 0.90, C: 0.60, F: 0.30, S: 0.85 },
    best: ['SPARK', 'MAVERICK', 'DOODLE'], tough: ['MAVERICK'],
    i18n: {
      ko: { label: '정원', tagline: '사람을 키우는 사람',
        desc: '친구가 성장하는 걸 자기 일처럼 기뻐해요.',
        charm: ['진심 어린 응원', '구체적으로 칭찬함', '오래가는 관계를 만듦'],
        warning: '내 몫은 늘 뒤로 미뤄요' },
      en: { label: 'The Garden', tagline: 'Grows the people around you',
        desc: 'You celebrate your friends\' growth like it\'s your own.',
        charm: ['Genuine encouragement', 'Specific, real compliments', 'Relationships that last'],
        warning: 'Your own share always comes last' },
    },
  },
  LIGHTHOUSE: {
    key: 'LIGHTHOUSE', emoji: '🗼', sig: { E: 0.35, W: 0.90, C: 0.45, F: 0.25, S: 0.95 },
    best: ['SPARK', 'WAVE', 'DOODLE'], tough: ['WAVE'],
    i18n: {
      ko: { label: '등대', tagline: '흔들려도 중심은 나',
        desc: '주변이 흔들릴수록 더 침착해지는 타입이에요.',
        charm: ['약속은 무조건 지킴', '위기에서 제일 차분함', '오래 곁에 있는 사람'],
        warning: '갑작스러운 변화에 속으로 힘들어해요' },
      en: { label: 'The Lighthouse', tagline: 'Steady when things shake',
        desc: 'The more chaos around you, the calmer you get.',
        charm: ['Keeps every promise', 'Calmest in a crisis', 'The one who stays'],
        warning: 'Sudden change rattles you more than you show' },
    },
  },
  PILLAR: {
    key: 'PILLAR', emoji: '🏛️', sig: { E: 0.25, W: 0.75, C: 0.40, F: 0.15, S: 0.95 },
    best: ['SPARK', 'DRUM', 'ARTIST'], tough: ['SPARK'],
    i18n: {
      ko: { label: '기둥', tagline: '말없이 버텨주는 사람',
        desc: '화려하진 않지만 이 사람이 빠지면 무리가 흔들려요.',
        charm: ['묵묵히 제자리를 지킴', '뒷담화를 안 함', '한결같음'],
        warning: '변화가 필요한 순간에도 그대로일 때가 있어요' },
      en: { label: 'The Pillar', tagline: 'Holds things up quietly',
        desc: 'Not flashy, but the group wobbles when you\'re gone.',
        charm: ['Steady without being asked', 'Never gossips', 'Exactly the same every day'],
        warning: 'Sometimes staying put is the wrong call' },
    },
  },

  // ── 생각하고 파고드는 쪽 ─────────────────────
  SAGE: {
    key: 'SAGE', emoji: '🦉', sig: { E: 0.15, W: 0.45, C: 0.95, F: 0.35, S: 0.85 },
    best: ['SUNSHINE', 'DRUM', 'MAVERICK'], tough: ['DRUM'],
    i18n: {
      ko: { label: '현자', tagline: '한 번 더 생각하는 사람',
        desc: '바로 답하지 않아요. 대신 답이 나오면 정확해요.',
        charm: ['깊이 있는 대화', '근거 있는 의견', '감정에 휩쓸리지 않음'],
        warning: '생각이 길어져서 타이밍을 놓칠 때가 있어요' },
      en: { label: 'The Sage', tagline: 'Thinks one step further',
        desc: 'You don\'t answer fast. But when you do, you\'re right.',
        charm: ['Conversations with depth', 'Opinions with reasons', 'Not swayed by emotion'],
        warning: 'Overthinking costs you the moment' },
    },
  },
  OBSERVER: {
    key: 'OBSERVER', emoji: '🔭', sig: { E: 0.10, W: 0.30, C: 0.90, F: 0.40, S: 0.60 },
    best: ['SUNSHINE', 'BRIDGE', 'DRUM'], tough: ['SUNSHINE'],
    i18n: {
      ko: { label: '관찰자', tagline: '다 보이고 있어',
        desc: '말은 안 하지만 다 보고 있어요. 눈치가 아니라 관찰이에요.',
        charm: ['디테일을 놓치지 않음', '거짓말을 알아챔', '필요한 순간에 정확히 한마디'],
        warning: '알아도 말을 안 해서 오해를 살 때가 있어요' },
      en: { label: 'The Observer', tagline: 'I see all of it',
        desc: 'You don\'t say much, but you miss nothing.',
        charm: ['Catches every detail', 'Can tell when something\'s off', 'One perfect sentence, at the right time'],
        warning: 'Staying silent gets you misread' },
    },
  },
  SHADOW: {
    key: 'SHADOW', emoji: '🌑', sig: { E: 0.15, W: 0.50, C: 0.85, F: 0.55, S: 0.35 },
    best: ['SUNSHINE', 'ONDOL', 'GARDEN'], tough: ['SUNSHINE', 'DRUM'],
    i18n: {
      ko: { label: '그림자', tagline: '조용히 깊어지는 사람',
        desc: '앞에 나서진 않지만 생각은 누구보다 많아요.',
        charm: ['혼자만의 세계가 탄탄함', '관찰이 섬세함', '속이 깊음'],
        warning: '힘든 걸 겉으로 잘 안 드러내요' },
      en: { label: 'The Shadow', tagline: 'Quiet, and deep',
        desc: 'You don\'t step forward, but your head is the busiest in the room.',
        charm: ['A rich inner world', 'Delicate observation', 'Real depth'],
        warning: 'You don\'t let people see when it hurts' },
    },
  },
  CLOCK: {
    key: 'CLOCK', emoji: '⏰', sig: { E: 0.30, W: 0.35, C: 0.60, F: 0.10, S: 0.95 },
    best: ['WAVE', 'DOODLE', 'MAVERICK'], tough: ['WAVE', 'SPARK'],
    i18n: {
      ko: { label: '시계', tagline: '정해진 건 정해진 대로',
        desc: '계획을 세우면 그대로 해내요. 그게 제일 편해요.',
        charm: ['마감을 반드시 지킴', '빠뜨리는 게 없음', '믿고 맡길 수 있음'],
        warning: '계획이 틀어지면 스트레스가 확 올라요' },
      en: { label: 'The Clock', tagline: 'A plan is a promise',
        desc: 'You make a plan and you follow it. That\'s the comfortable place.',
        charm: ['Never misses a deadline', 'Nothing slips through', 'Safe to rely on'],
        warning: 'A broken plan spikes your stress fast' },
    },
  },
  COMPASS: {
    key: 'COMPASS', emoji: '🧭', sig: { E: 0.50, W: 0.45, C: 0.75, F: 0.20, S: 0.95 },
    best: ['ARTIST', 'WAVE', 'MOON'], tough: ['WAVE'],
    i18n: {
      ko: { label: '나침반', tagline: '방향을 정해주는 사람',
        desc: '다 같이 우왕좌왕할 때 "이쪽이야"라고 말해주는 타입이에요.',
        charm: ['우선순위를 잘 정함', '큰 그림을 봄', '결정을 미루지 않음'],
        warning: '즉흥적인 걸 답답해할 때가 있어요' },
      en: { label: 'The Compass', tagline: 'Points the way',
        desc: 'When everyone\'s spinning, you\'re the one saying "this way."',
        charm: ['Knows what matters first', 'Sees the whole picture', 'Doesn\'t stall on decisions'],
        warning: 'Spontaneity can frustrate you' },
    },
  },

  // ── 자유롭고 감성적인 쪽 ─────────────────────
  WAVE: {
    key: 'WAVE', emoji: '🌊', sig: { E: 0.55, W: 0.55, C: 0.50, F: 0.95, S: 0.15 },
    best: ['LIGHTHOUSE', 'CLOCK', 'PILLAR'], tough: ['CLOCK'],
    i18n: {
      ko: { label: '파도', tagline: '흐르는 대로',
        desc: '정해두는 걸 답답해해요. 그때그때 마음 가는 대로 움직여요.',
        charm: ['어디든 잘 적응', '새로운 걸 두려워 안 함', '틀에 안 갇힘'],
        warning: '약속 잡기가 조금 어려워요' },
      en: { label: 'The Wave', tagline: 'Wherever it flows',
        desc: 'Being pinned down feels wrong. You move with the moment.',
        charm: ['Adapts anywhere', 'Fearless about the new', 'Never boxed in'],
        warning: 'Hard to pin down for plans' },
    },
  },
  ARTIST: {
    key: 'ARTIST', emoji: '🎨', sig: { E: 0.35, W: 0.65, C: 0.85, F: 0.90, S: 0.20 },
    best: ['COMPASS', 'PILLAR', 'CLOCK'], tough: ['CLOCK'],
    i18n: {
      ko: { label: '예술가', tagline: '느낌이 먼저 오는 사람',
        desc: '설명하기 전에 감으로 알아채요. 그게 제일 정확할 때가 많아요.',
        charm: ['감각이 좋음', '남이 못 보는 걸 봄', '취향이 뚜렷함'],
        warning: '기분에 따라 하루가 확 달라져요' },
      en: { label: 'The Artist', tagline: 'Feels it before explaining',
        desc: 'You sense things before you can name them — and you\'re usually right.',
        charm: ['Great instinct', 'Sees what others miss', 'Unmistakable taste'],
        warning: 'Your mood sets the whole day' },
    },
  },
  DOODLE: {
    key: 'DOODLE', emoji: '✏️', sig: { E: 0.45, W: 0.55, C: 0.75, F: 0.75, S: 0.25 },
    best: ['LIGHTHOUSE', 'GARDEN', 'CLOCK'], tough: ['CLOCK'],
    i18n: {
      ko: { label: '낙서', tagline: '엉뚱한 데서 답이 나옴',
        desc: '남들이 생각 못 한 각도로 접근해요. 그게 자주 먹혀요.',
        charm: ['아이디어가 튀어나옴', '지루한 걸 못 견뎌함', '유머 감각'],
        warning: '벌여놓은 걸 마무리하는 게 숙제예요' },
      en: { label: 'The Doodle', tagline: 'Answers from odd angles',
        desc: 'You come at things sideways — and it keeps working.',
        charm: ['Ideas just appear', 'Can\'t stand boring', 'Actually funny'],
        warning: 'Finishing what you start is the homework' },
    },
  },
  MOON: {
    key: 'MOON', emoji: '🌙', sig: { E: 0.15, W: 0.70, C: 0.80, F: 0.55, S: 0.45 },
    best: ['SUNSHINE', 'DRUM', 'SPARK'], tough: ['DRUM'],
    i18n: {
      ko: { label: '달', tagline: '밤에 더 선명해지는',
        desc: '낮보다 혼자 있는 시간에 더 또렷해지는 타입이에요.',
        charm: ['생각이 깊음', '섬세하게 배려함', '글과 말이 예쁨'],
        warning: '아침 약속은 조금 조심하세요' },
      en: { label: 'The Moon', tagline: 'Clearer at night',
        desc: 'You sharpen when the room goes quiet.',
        charm: ['Deep thinking', 'Quietly considerate', 'Writes and speaks beautifully'],
        warning: 'Morning appointments are a risk' },
    },
  },
  MAVERICK: {
    key: 'MAVERICK', emoji: '🚀', sig: { E: 0.70, W: 0.30, C: 0.55, F: 0.95, S: 0.25 },
    best: ['LIGHTHOUSE', 'GARDEN', 'ONDOL'], tough: ['CLOCK', 'PILLAR'],
    i18n: {
      ko: { label: '자유인', tagline: '남이 하니까 안 해',
        desc: '정해진 답보다 내 답을 찾아요. 그래서 가끔 혼자예요.',
        charm: ['내 색이 확실함', '쉽게 휘둘리지 않음', '먼저 해보는 사람'],
        warning: '고집이 세다는 말을 들을 수 있어요' },
      en: { label: 'The Maverick', tagline: 'Not doing it because they do',
        desc: 'You\'d rather find your own answer than take the given one.',
        charm: ['Strong sense of self', 'Hard to sway', 'The one who goes first'],
        warning: 'People may call you stubborn' },
    },
  },
};

// Compatibility helpers for older code paths
Object.keys(P_TYPES_V4).forEach((k) => {
  const t = P_TYPES_V4[k];
  const label = {}; const desc = {};
  Object.keys(t.i18n).forEach((lg) => {
    label[lg] = t.i18n[lg].label;
    desc[lg] = t.i18n[lg].desc;
  });
  t.label = label;
  t.desc = desc;
});

window.PERSONALITY_TYPES = P_TYPES_V4;
window.P_TYPES_V3 = P_TYPES_V4;   // keep the old name so the scorer keeps working
window.P_TYPES_V4 = P_TYPES_V4;

const MATCHES_V4 = {};
Object.values(P_TYPES_V4).forEach((t) => {
  MATCHES_V4[t.key] = { good: t.best || [], tough: t.tough || [] };
});
window.PERSONALITY_MATCHES = MATCHES_V4;

// ─── Assign a stable personality to every directory user ───
// Deterministic from the username, so the same person always shows the same type.
function personalityForUser(username) {
  const keys = Object.keys(P_TYPES_V4);
  let h = 0;
  const s = String(username || '');
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return P_TYPES_V4[keys[h % keys.length]];
}

window.personalityForUser = personalityForUser;
