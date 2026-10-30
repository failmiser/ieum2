// 이음 - Interactive lesson screen (Duolingo-style exercises)

// Lesson content — Japanese greetings (Unit 1)
const LESSON_CONTENT = {
  'JP-1': {
    title: '인사와 자기소개',
    country: 'JP',
    lang: '日本語',
    exercises: [
      {
        type: 'translate-to',
        prompt: '"안녕하세요"를 일본어로 고르세요',
        options: [
          { text: 'こんにちは', translit: 'konnichiwa', correct: true },
          { text: 'さようなら', translit: 'sayounara', correct: false },
          { text: 'ありがとう', translit: 'arigatou', correct: false },
          { text: 'すみません', translit: 'sumimasen', correct: false },
        ],
      },
      {
        type: 'listen-pick',
        prompt: '"はじめまして"의 뜻은?',
        native: 'はじめまして',
        translit: 'hajimemashite',
        options: [
          { text: '처음 뵙겠습니다', correct: true },
          { text: '안녕히 가세요', correct: false },
          { text: '잘 부탁드립니다', correct: false },
        ],
      },
      {
        type: 'match',
        prompt: '단어와 뜻을 맞춰보세요',
        pairs: [
          { native: 'おはよう', translit: 'ohayou', meaning: '좋은 아침' },
          { native: 'こんばんは', translit: 'konbanwa', meaning: '안녕하세요 (저녁)' },
          { native: 'おやすみ', translit: 'oyasumi', meaning: '잘 자요' },
        ],
      },
      {
        type: 'fill-blank',
        prompt: '빈칸: "___, watashi wa (내 이름) desu" (처음 뵙겠습니다)',
        options: [
          { text: 'Hajimemashite', correct: true },
          { text: 'Sayounara', correct: false },
          { text: 'Arigatou', correct: false },
          { text: 'Sumimasen', correct: false },
        ],
      },
      {
        type: 'translate-to',
        prompt: '"감사합니다"를 일본어로 고르세요',
        options: [
          { text: 'ありがとうございます', translit: 'arigatou gozaimasu', correct: true },
          { text: 'ごめんなさい', translit: 'gomennasai', correct: false },
          { text: 'いってきます', translit: 'ittekimasu', correct: false },
          { text: 'よろしく', translit: 'yoroshiku', correct: false },
        ],
      },
    ],
  },
  'JP-2': {
    title: '숫자와 시간',
    country: 'JP', lang: '日本語',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 일본어로?', options: [
        { text: 'いち', translit: 'ichi', correct: true },
        { text: 'に', translit: 'ni', correct: false },
        { text: 'さん', translit: 'san', correct: false },
        { text: 'よん', translit: 'yon', correct: false },
      ]},
      { type: 'match', prompt: '숫자와 뜻을 맞춰보세요', pairs: [
        { native: 'いち', translit: 'ichi', meaning: '1' },
        { native: 'ご', translit: 'go', meaning: '5' },
        { native: 'じゅう', translit: 'juu', meaning: '10' },
      ]},
      { type: 'listen-pick', prompt: '"何時ですか"의 뜻은?', native: '何時ですか', translit: 'nan-ji desu ka', options: [
        { text: '몇 시입니까?', correct: true },
        { text: '어디입니까?', correct: false },
        { text: '얼마입니까?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 일본어로?', options: [
        { text: 'あした', translit: 'ashita', correct: true },
        { text: 'きのう', translit: 'kinou', correct: false },
        { text: 'きょう', translit: 'kyou', correct: false },
        { text: 'あさって', translit: 'asatte', correct: false },
      ]},
    ],
  },
  'FR-1': {
    title: 'Bonjour, 인사하기',
    country: 'FR', lang: 'Français',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 프랑스어로?', options: [
        { text: 'Bonjour', translit: 'bon-zhoor', correct: true },
        { text: 'Au revoir', translit: 'oh-ruh-vwar', correct: false },
        { text: 'Merci', translit: 'mehr-see', correct: false },
        { text: 'Pardon', translit: 'par-dohn', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Comment ça va?"의 뜻은?', native: 'Comment ça va?', translit: 'koh-mahn sa va', options: [
        { text: '어떻게 지내세요?', correct: true },
        { text: '이름이 뭐예요?', correct: false },
        { text: '어디에 사세요?', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'Merci', translit: 'mehr-see', meaning: '감사합니다' },
        { native: 'S\'il vous plaît', translit: 'seel voo pleh', meaning: '부탁합니다' },
        { native: 'Excusez-moi', translit: 'eks-kew-zay mwah', meaning: '실례합니다' },
      ]},
      { type: 'fill-blank', prompt: '"Je m\'appelle ___" (제 이름은 지우입니다)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'Bonjour', correct: false },
        { text: 'Merci', correct: false },
        { text: 'Salut', correct: false },
      ]},
    ],
  },
  'FR-2': {
    title: '숫자와 요일',
    country: 'FR', lang: 'Français',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 프랑스어로?', options: [
        { text: 'Un', translit: 'uhn', correct: true },
        { text: 'Deux', translit: 'duh', correct: false },
        { text: 'Trois', translit: 'twah', correct: false },
        { text: 'Quatre', translit: 'katr', correct: false },
      ]},
      { type: 'match', prompt: '요일과 뜻을 맞춰보세요', pairs: [
        { native: 'Lundi', translit: 'luhn-dee', meaning: '월요일' },
        { native: 'Vendredi', translit: 'vahn-druh-dee', meaning: '금요일' },
        { native: 'Dimanche', translit: 'dee-mahnsh', meaning: '일요일' },
      ]},
      { type: 'listen-pick', prompt: '"Quelle heure est-il?"의 뜻은?', native: 'Quelle heure est-il?', translit: 'kel uhr eh-teel', options: [
        { text: '지금 몇 시입니까?', correct: true },
        { text: '오늘 무슨 요일인가요?', correct: false },
        { text: '어디에 가세요?', correct: false },
      ]},
    ],
  },
  'US-1': {
    title: 'Basic Greetings',
    country: 'US', lang: 'English',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 영어로?', options: [
        { text: 'Hello', correct: true },
        { text: 'Goodbye', correct: false },
        { text: 'Sorry', correct: false },
        { text: 'Please', correct: false },
      ]},
      { type: 'match', prompt: '인사말과 뜻을 맞춰보세요', pairs: [
        { native: 'Good morning', meaning: '좋은 아침' },
        { native: 'Nice to meet you', meaning: '만나서 반가워요' },
        { native: 'See you later', meaning: '나중에 봐요' },
      ]},
      { type: 'fill-blank', prompt: '"What\'s your ___?" (이름이 뭐예요?)', options: [
        { text: 'name', correct: true },
        { text: 'age', correct: false },
        { text: 'phone', correct: false },
        { text: 'home', correct: false },
      ]},
      { type: 'translate-to', prompt: '"고맙습니다"를 영어로?', options: [
        { text: 'Thank you', correct: true },
        { text: 'Excuse me', correct: false },
        { text: "You're welcome", correct: false },
        { text: 'Good luck', correct: false },
      ]},
    ],
  },
  'VN-1': {
    title: 'Xin chào',
    country: 'VN', lang: 'Tiếng Việt',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 베트남어로?', options: [
        { text: 'Xin chào', translit: 'sin chow', correct: true },
        { text: 'Tạm biệt', translit: 'tam byet', correct: false },
        { text: 'Cảm ơn', translit: 'kam un', correct: false },
        { text: 'Xin lỗi', translit: 'sin loi', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'Cảm ơn', translit: 'kam un', meaning: '감사합니다' },
        { native: 'Tạm biệt', translit: 'tam byet', meaning: '안녕히 가세요' },
        { native: 'Xin lỗi', translit: 'sin loi', meaning: '죄송합니다' },
      ]},
      { type: 'listen-pick', prompt: '"Bạn khỏe không?"의 뜻은?', native: 'Bạn khỏe không?', translit: 'ban kwe khong', options: [
        { text: '잘 지내세요?', correct: true },
        { text: '어디에 가세요?', correct: false },
        { text: '이름이 뭐예요?', correct: false },
      ]},
    ],
  },
  'ES-1': {
    title: 'Hola, Gracias',
    country: 'ES', lang: 'Español',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 스페인어로?', options: [
        { text: 'Hola', translit: 'oh-la', correct: true },
        { text: 'Adiós', translit: 'ah-dyos', correct: false },
        { text: 'Gracias', translit: 'gra-syas', correct: false },
        { text: 'Perdón', translit: 'per-don', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'Gracias', translit: 'gra-syas', meaning: '감사합니다' },
        { native: 'Por favor', translit: 'por fa-vor', meaning: '부탁합니다' },
        { native: 'Buenos días', translit: 'bwe-nos dee-as', meaning: '좋은 아침' },
      ]},
      { type: 'listen-pick', prompt: '"¿Cómo te llamas?"의 뜻은?', native: '¿Cómo te llamas?', translit: 'ko-mo te ya-mas', options: [
        { text: '이름이 뭐예요?', correct: true },
        { text: '어떻게 지내세요?', correct: false },
        { text: '어디 사세요?', correct: false },
      ]},
    ],
  },
  'DE-1': {
    title: 'Hallo, Danke',
    country: 'DE', lang: 'Deutsch',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 독일어로?', options: [
        { text: 'Hallo', correct: true },
        { text: 'Auf Wiedersehen', correct: false },
        { text: 'Danke', correct: false },
        { text: 'Bitte', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'Danke', meaning: '감사합니다' },
        { native: 'Bitte', meaning: '부탁합니다' },
        { native: 'Entschuldigung', meaning: '실례합니다' },
      ]},
      { type: 'fill-blank', prompt: '"Ich heiße ___" (제 이름을 넣으세요)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'Hallo', correct: false },
        { text: 'Danke', correct: false },
        { text: 'Ja', correct: false },
      ]},
    ],
  },
  'TH-1': {
    title: 'สวัสดี',
    country: 'TH', lang: 'ภาษาไทย',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 태국어로?', options: [
        { text: 'สวัสดี', translit: 'sa-wat-dee', correct: true },
        { text: 'ลาก่อน', translit: 'la-gon', correct: false },
        { text: 'ขอบคุณ', translit: 'khop-kun', correct: false },
        { text: 'ขอโทษ', translit: 'kho-thot', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'ขอบคุณ', translit: 'khop-kun', meaning: '감사합니다' },
        { native: 'ใช่', translit: 'chai', meaning: '네' },
        { native: 'ไม่', translit: 'mai', meaning: '아니오' },
      ]},
    ],
  },
  'BR-1': {
    title: 'Olá, Obrigado',
    country: 'BR', lang: 'Português',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 포르투갈어로?', options: [
        { text: 'Olá', correct: true },
        { text: 'Tchau', correct: false },
        { text: 'Obrigado', correct: false },
        { text: 'Desculpe', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'Obrigado', meaning: '감사합니다' },
        { native: 'Por favor', meaning: '부탁합니다' },
        { native: 'Bom dia', meaning: '좋은 아침' },
      ]},
    ],
  },
  'IN-1': {
    title: 'नमस्ते',
    country: 'IN', lang: 'हिन्दी',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 힌디어로?', options: [
        { text: 'नमस्ते', translit: 'namaste', correct: true },
        { text: 'अलविदा', translit: 'alvida', correct: false },
        { text: 'धन्यवाद', translit: 'dhanyavaad', correct: false },
        { text: 'माफ़ करें', translit: 'maaf karein', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'धन्यवाद', translit: 'dhanyavaad', meaning: '감사합니다' },
        { native: 'हाँ', translit: 'haan', meaning: '네' },
        { native: 'नहीं', translit: 'nahin', meaning: '아니오' },
      ]},
    ],
  },
  'EG-1': {
    title: 'مرحبا',
    country: 'EG', lang: 'العربية',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 아랍어로?', options: [
        { text: 'مرحبا', translit: 'marhaba', correct: true },
        { text: 'مع السلامة', translit: 'ma\'a as-salama', correct: false },
        { text: 'شكرا', translit: 'shukran', correct: false },
        { text: 'آسف', translit: 'aasif', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'شكرا', translit: 'shukran', meaning: '감사합니다' },
        { native: 'نعم', translit: 'na\'am', meaning: '네' },
        { native: 'لا', translit: 'laa', meaning: '아니오' },
      ]},
    ],
  },
  'MN-1': {
    title: 'Сайн байна уу',
    country: 'MN', lang: 'Монгол хэл',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 몽골어로?', options: [
        { text: 'Сайн байна уу', translit: 'sain baina uu', correct: true },
        { text: 'Баяртай', translit: 'bayartai', correct: false },
        { text: 'Баярлалаа', translit: 'bayarlalaa', correct: false },
        { text: 'Уучлаарай', translit: 'uuchlaarai', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Таны нэр хэн бэ?"의 뜻은?', native: 'Таны нэр хэн бэ?', translit: 'tany ner khen be', options: [
        { text: '이름이 뭐예요?', correct: true },
        { text: '어디에 사세요?', correct: false },
        { text: '몇 살이에요?', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'Баярлалаа', translit: 'bayarlalaa', meaning: '감사합니다' },
        { native: 'Тийм', translit: 'tiim', meaning: '네' },
        { native: 'Үгүй', translit: 'ugui', meaning: '아니오' },
      ]},
      { type: 'fill-blank', prompt: '"Миний нэр ___" (제 이름을 넣으세요)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'Sain', correct: false },
        { text: 'Bayartai', correct: false },
        { text: 'Bayarlalaa', correct: false },
      ]},
    ],
  },
  'MN-2': {
    title: '숫자와 가족',
    country: 'MN', lang: 'Монгол хэл',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 몽골어로?', options: [
        { text: 'Нэг', translit: 'neg', correct: true },
        { text: 'Хоёр', translit: 'khoyor', correct: false },
        { text: 'Гурав', translit: 'gurav', correct: false },
        { text: 'Дөрөв', translit: 'duruv', correct: false },
      ]},
      { type: 'match', prompt: '가족 단어를 맞춰보세요', pairs: [
        { native: 'Ээж', translit: 'eej', meaning: '엄마' },
        { native: 'Аав', translit: 'aav', meaning: '아빠' },
        { native: 'Ах', translit: 'akh', meaning: '형/오빠' },
      ]},
      { type: 'listen-pick', prompt: '"Хэдэн настай вэ?"의 뜻은?', native: 'Хэдэн настай вэ?', translit: 'kheden nastai ve', options: [
        { text: '몇 살이에요?', correct: true },
        { text: '어디 가요?', correct: false },
        { text: '뭐 해요?', correct: false },
      ]},
    ],
  },
};

// Learning path per country — array of unit titles (used to show progress)
const LEARNING_PATHS = {
  JP: [
    { unit: 1, title: '인사와 자기소개' },
    { unit: 2, title: '숫자와 시간' },
    { unit: 3, title: '음식 주문하기' },
    { unit: 4, title: '길 묻기' },
    { unit: 5, title: '전통 문화' },
  ],
  FR: [
    { unit: 1, title: 'Bonjour, 인사하기' },
    { unit: 2, title: '숫자와 요일' },
    { unit: 3, title: '음식과 카페' },
    { unit: 4, title: '길 찾기' },
    { unit: 5, title: '문화와 예술' },
  ],
  US: [
    { unit: 1, title: 'Basic Greetings' },
    { unit: 2, title: 'Numbers & Time' },
    { unit: 3, title: 'Food & Drinks' },
    { unit: 4, title: 'Directions' },
    { unit: 5, title: 'American Culture' },
  ],
  VN: [
    { unit: 1, title: 'Xin chào' },
    { unit: 2, title: '숫자와 시간' },
    { unit: 3, title: '음식 문화' },
  ],
  ES: [
    { unit: 1, title: 'Hola, Gracias' },
    { unit: 2, title: '숫자와 시간' },
    { unit: 3, title: '스페인 문화' },
  ],
  DE: [
    { unit: 1, title: 'Hallo, Danke' },
    { unit: 2, title: '숫자와 시간' },
    { unit: 3, title: '독일 문화' },
  ],
  TH: [
    { unit: 1, title: 'สวัสดี' },
    { unit: 2, title: '숫자와 시간' },
  ],
  BR: [
    { unit: 1, title: 'Olá, Obrigado' },
    { unit: 2, title: '숫자와 시간' },
  ],
  IN: [
    { unit: 1, title: 'नमस्ते' },
    { unit: 2, title: '숫자와 시간' },
  ],
  EG: [
    { unit: 1, title: 'مرحبا' },
    { unit: 2, title: '숫자와 시간' },
  ],
  MN: [
    { unit: 1, title: 'Сайн байна уу' },
    { unit: 2, title: '숫자와 가족' },
    { unit: 3, title: '몽골 문화' },
  ],
};

// Default lesson mapping
function getLessonId(country, unit) {
  return `${country}-${unit}`;
}

// Fisher-Yates shuffle helper
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Shuffle exercise options (for multiple-choice types), keep pairs intact for match type
function shuffleExercise(ex) {
  const shuffled = { ...ex };
  if (ex.options) {
    shuffled.options = shuffleArray(ex.options);
  }
  return shuffled;
}

function LessonScreen({ lessonId = 'JP-1', onExit, onComplete, onNextUnit, langCode = 'ko' }) {
  const T = (k) => tt(langCode, k);
  // Register "started learning this language" as soon as a lesson opens
  React.useEffect(() => {
    const c = (lessonId || 'JP-1').split('-')[0];
    if (typeof STARTED_LANGS !== 'undefined' && !STARTED_LANGS.has(c)) {
      STARTED_LANGS.add(c);
      if (typeof bumpStat === 'function') bumpStat('langs');
    }
  }, [lessonId]);
  const baseLesson = LESSON_CONTENT[lessonId] || LESSON_CONTENT['JP-1'];
  // Randomize question order AND option order on every mount
  const lesson = React.useMemo(() => ({
    ...baseLesson,
    exercises: shuffleArray(baseLesson.exercises).map(shuffleExercise),
  }), [lessonId]);
  // Parse country/unit from lessonId (e.g. "JP-1")
  const [lessonCountry, lessonUnitStr] = lessonId.split('-');
  const lessonUnit = parseInt(lessonUnitStr, 10);
  // Find next unit info
  const nextLessonId = `${lessonCountry}-${lessonUnit + 1}`;
  const hasNextUnit = !!LESSON_CONTENT[nextLessonId];
  const nextUnitTitle = hasNextUnit ? LESSON_CONTENT[nextLessonId].title : null;
  const [idx, setIdx] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [wrong, setWrong] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [showResult, setShowResult] = React.useState(false);
  const [hearts, setHearts] = React.useState(5);
  const [done, setDone] = React.useState(false);

  const total = lesson.exercises.length;
  const ex = lesson.exercises[idx];
  const progress = ((idx + (showResult ? 1 : 0)) / total) * 100;

  const check = () => {
    if (selected == null) return;
    setShowResult(true);
    const isCorrect = ex.type === 'match'
      ? (selected === 'match-complete')
      : ex.options[selected]?.correct;
    if (isCorrect) {
      setCorrect(c => c + 1);
    } else {
      setWrong(w => w + 1);
      setHearts(h => Math.max(0, h - 1));
    }
  };

  const next = () => {
    setShowResult(false);
    setSelected(null);
    if (idx < total - 1) {
      setIdx(idx + 1);
    } else {
      setDone(true);
    }
  };

  // ─── Done screen ──────────
  if (done) {
    const xp = correct * 10;
    const accuracy = Math.round((correct / total) * 100);
    // Mark unit as completed (mutate global progress)
    if (typeof markUnitComplete === 'function') {
      markUnitComplete(lessonCountry, lessonUnit);
    }
    // Bump achievement stats: lessons + distinct languages
    if (typeof bumpStat === 'function') {
      bumpStat('lessons');
      if (typeof STARTED_LANGS !== 'undefined' && !STARTED_LANGS.has(lessonCountry)) {
        STARTED_LANGS.add(lessonCountry);
        bumpStat('langs');
      }
    }
    // Also add XP to user (mutation for prototype persistence)
    if (typeof USER !== 'undefined') {
      USER.xp = (USER.xp || 0) + xp;
    }

    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        background: 'linear-gradient(180deg, var(--ie-coral-tint), var(--ie-bg))',
        padding: '60px 24px 24px', alignItems: 'center', textAlign: 'center',
      }}>
        <div style={{ fontSize: 12, color: 'var(--ie-coral-deep)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 12 }}>
          {T('lesson_done_label').replace('{n}', lessonUnit)}
        </div>
        <div style={{ fontSize: 80, marginBottom: 12, animation: 'ie-fadeup .5s ease' }}>🎉</div>
        <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 6 }}>
          잘했어요!
        </div>
        <div style={{ fontSize: 14, color: 'var(--ie-ink-3)', marginBottom: 32 }}>
          {T('lesson_done_desc').replace('{title}', lesson.title)}
        </div>

        <div style={{ display: 'flex', gap: 10, width: '100%', maxWidth: 380, marginBottom: 24 }}>
          <StatCard label={T('lesson_stat_accuracy')} value={`${accuracy}%`} icon="🎯"/>
          <StatCard label={T('lesson_stat_xp')} value={`+${xp}`} icon="⚡" highlight/>
          <StatCard label={T('lesson_stat_solved')} value={`${correct}/${total}`} icon="✅"/>
        </div>

        {/* Next unit unlocked banner */}
        {hasNextUnit && (
          <div style={{
            width: '100%', maxWidth: 380,
            background: 'white', border: '2px dashed var(--ie-coral-soft)',
            borderRadius: 16, padding: 16, marginBottom: 20,
            display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--ie-coral-tint)', color: 'var(--ie-coral-deep)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22,
            }}>🔓</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: 'var(--ie-coral-deep)', fontWeight: 700, letterSpacing: '0.05em' }}>
                {T('lesson_unlock_label').replace('{n}', lessonUnit + 1)}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{nextUnitTitle}</div>
            </div>
          </div>
        )}

        <div style={{ width: '100%', maxWidth: 380, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {hasNextUnit && (
            <button
              onClick={() => onNextUnit && onNextUnit(nextLessonId)}
              style={{
                width: '100%', padding: '16px', borderRadius: 16,
                background: 'var(--ie-coral)', color: 'white',
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                boxShadow: '0 10px 30px rgba(46,107,255,0.25)',
              }}
            >
              {T('lesson_next_unit')}
              {Icon.right(18, 'white')}
            </button>
          )}
          <button
            onClick={() => onComplete && onComplete({ xp, correct, total })}
            style={{
              width: '100%', padding: '14px', borderRadius: 16,
              background: hasNextUnit ? 'white' : 'var(--ie-coral)',
              color: hasNextUnit ? 'var(--ie-ink-2)' : 'white',
              border: hasNextUnit ? '1px solid var(--ie-line)' : 'none',
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}
          >
            {hasNextUnit ? T('lesson_back_study') : T('lesson_finish')}
          </button>
        </div>
      </div>
    );
  }

  // ─── Fail screen (out of hearts) ─────
  if (hearts <= 0 && !done) {
    return (
      <div style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        background: 'var(--ie-bg)',
        padding: '60px 24px 24px', alignItems: 'center', textAlign: 'center',
      }}>
        <div style={{ fontSize: 80, marginBottom: 12 }}>💔</div>
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>{T('lesson_hearts_out_title')}</div>
        <div style={{ fontSize: 14, color: 'var(--ie-ink-3)', marginBottom: 32, lineHeight: 1.5 }}>
          {T('lesson_hearts_out_desc').split('\n').map((line, i) => <React.Fragment key={i}>{i>0 && <br/>}{line}</React.Fragment>)}
        </div>
        <button onClick={onExit} style={{
          padding: '14px 30px', borderRadius: 14,
          background: 'var(--ie-ink)', color: 'white',
          fontSize: 14, fontWeight: 700,
        }}>{T('lesson_back_list')}</button>
      </div>
    );
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--ie-bg)' }}>
      {/* Header */}
      <div style={{ padding: '52px 16px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={onExit} style={{
          width: 34, height: 34, borderRadius: 10,
          background: 'white', border: '1px solid var(--ie-line)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{Icon.close(18)}</button>
        <div style={{ flex: 1, height: 10, background: 'var(--ie-line-2)', borderRadius: 5, overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--ie-coral)', transition: 'width .3s' }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 15, fontWeight: 700, color: '#ef4444' }}>
          <span>❤️</span>
          <span>{hearts}</span>
        </div>
      </div>

      {/* Exercise */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 20px 20px' }}>
        <div style={{ fontSize: 11, color: 'var(--ie-coral)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: 8 }}>
          {getTypeLabel(ex.type, langCode)}
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.3, marginBottom: 24 }}>
          {ex.prompt}
        </div>

        {ex.type === 'listen-pick' && <ListenBubble native={ex.native} translit={ex.translit}/>}

        {(ex.type === 'translate-to' || ex.type === 'listen-pick' || ex.type === 'fill-blank') && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {ex.options.map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect = showResult && opt.correct;
              const isWrongPick = showResult && isSelected && !opt.correct;
              let border = 'var(--ie-line)';
              let bg = 'white';
              if (isCorrect) { border = '#22c55e'; bg = '#dcfce7'; }
              else if (isWrongPick) { border = '#ef4444'; bg = '#fee2e2'; }
              else if (isSelected) { border = 'var(--ie-coral)'; bg = 'var(--ie-coral-tint)'; }
              return (
                <button
                  key={i}
                  onClick={() => !showResult && setSelected(i)}
                  disabled={showResult}
                  style={{
                    padding: 18, background: bg, border: `2px solid ${border}`,
                    borderRadius: 16, textAlign: 'left',
                    display: 'flex', gap: 12, alignItems: 'center',
                    cursor: showResult ? 'default' : 'pointer',
                    transition: 'all .15s',
                  }}
                >
                  <div style={{
                    width: 30, height: 30, borderRadius: 10,
                    background: isSelected || isCorrect ? 'white' : 'var(--ie-line-2)',
                    color: isCorrect ? '#22c55e' : isWrongPick ? '#ef4444' : 'var(--ie-ink-3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 13, flexShrink: 0,
                    border: '1px solid var(--ie-line)',
                  }}>{String.fromCharCode(65+i)}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em' }}>{opt.text}</div>
                    {opt.translit && (
                      <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
                        [{opt.translit}]
                      </div>
                    )}
                  </div>
                  {showResult && isCorrect && (
                    <div style={{ color: '#22c55e' }}>{Icon.check(20, '#22c55e')}</div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {ex.type === 'match' && (
          <MatchExercise
            pairs={ex.pairs}
            showResult={showResult}
            onComplete={() => setSelected('match-complete')}
          />
        )}
      </div>

      {/* Result banner + Check/Next button */}
      <div style={{
        padding: '14px 16px 30px',
        background: showResult
          ? (ex.type === 'match'
              ? (selected === 'match-complete' ? '#dcfce7' : 'white')
              : (ex.options[selected]?.correct ? '#dcfce7' : '#fee2e2'))
          : 'white',
        borderTop: '1px solid var(--ie-line)',
      }}>
        {showResult && (
          <div style={{ marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
            {(() => {
              const isCorrect = ex.type === 'match'
                ? selected === 'match-complete'
                : ex.options[selected]?.correct;
              return (
                <>
                  <div style={{
                    width: 30, height: 30, borderRadius: '50%',
                    background: isCorrect ? '#22c55e' : '#ef4444',
                    color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{isCorrect ? Icon.check(18, 'white') : Icon.close(18, 'white')}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: isCorrect ? '#166534' : '#991b1b' }}>
                      {isCorrect ? T('lesson_correct') : T('lesson_wrong')}
                    </div>
                    {!isCorrect && ex.options && (
                      <div style={{ fontSize: 12, color: '#991b1b' }}>
                        {T('lesson_answer')} {ex.options.find(o => o.correct)?.text}
                      </div>
                    )}
                  </div>
                </>
              );
            })()}
          </div>
        )}
        <button
          onClick={showResult ? next : check}
          disabled={selected == null && !showResult}
          style={{
            width: '100%', padding: '15px', borderRadius: 14,
            background: (selected != null || showResult) ? 'var(--ie-coral)' : 'var(--ie-line-2)',
            color: (selected != null || showResult) ? 'white' : 'var(--ie-ink-4)',
            fontSize: 15, fontWeight: 700, letterSpacing: '-0.02em',
            cursor: (selected != null || showResult) ? 'pointer' : 'default',
            transition: 'background .15s',
          }}
        >
          {showResult ? (idx < total - 1 ? T('lesson_next') : T('lesson_finish')) : T('lesson_check')}
        </button>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon, highlight }) {
  return (
    <div style={{
      flex: 1, padding: 12, borderRadius: 14,
      background: highlight ? 'var(--ie-coral)' : 'white',
      color: highlight ? 'white' : 'var(--ie-ink)',
      border: highlight ? 'none' : '1px solid var(--ie-line)',
      textAlign: 'center',
    }}>
      <div style={{ fontSize: 20, marginBottom: 4 }}>{icon}</div>
      <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em' }}>{value}</div>
      <div style={{ fontSize: 10, opacity: 0.7, fontWeight: 600, marginTop: 1 }}>{label}</div>
    </div>
  );
}

function getTypeLabel(type, langCode = 'ko') {
  const T = (k) => tt(langCode, k);
  return {
    'translate-to': T('lesson_type_translate'),
    'listen-pick': T('lesson_type_listen'),
    'match': T('lesson_type_match'),
    'fill-blank': T('lesson_type_blank'),
  }[type] || T('question');
}

function ListenBubble({ native, translit }) {
  const [played, setPlayed] = React.useState(false);
  return (
    <div style={{ marginBottom: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
      <button onClick={() => setPlayed(true)} style={{
        width: 60, height: 60, borderRadius: '50%',
        background: 'var(--ie-coral)', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(46,107,255,0.3)',
        flexShrink: 0,
        animation: played ? 'none' : 'ie-pulse 2s ease-in-out infinite',
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
      <div style={{
        flex: 1, background: 'white', border: '1px solid var(--ie-line)',
        borderRadius: 16, padding: '12px 16px',
      }}>
        <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.01em' }}>{native}</div>
        <div style={{ fontSize: 12, color: 'var(--ie-ink-3)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>
          [{translit}]
        </div>
      </div>
    </div>
  );
}

function MatchExercise({ pairs, showResult, onComplete }) {
  const [pickedLeft, setPickedLeft] = React.useState(null);
  const [matches, setMatches] = React.useState({});   // pairIdx -> true when matched
  const [wrongFlash, setWrongFlash] = React.useState(null);

  // Shuffled right column
  const rightOrder = React.useMemo(() => {
    return [...pairs.map((_, i) => i)].sort(() => Math.random() - 0.5);
  }, [pairs]);

  React.useEffect(() => {
    if (Object.keys(matches).length === pairs.length) {
      onComplete();
    }
  }, [matches, pairs.length]);

  const pickLeft = (i) => {
    if (matches[i]) return;
    setPickedLeft(i);
  };
  const pickRight = (i) => {
    if (matches[i]) return;
    if (pickedLeft == null) return;
    if (pickedLeft === i) {
      setMatches(prev => ({ ...prev, [i]: true }));
      setPickedLeft(null);
    } else {
      setWrongFlash({ l: pickedLeft, r: i });
      setTimeout(() => setWrongFlash(null), 400);
      setPickedLeft(null);
    }
  };

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {pairs.map((p, i) => {
          const matched = matches[i];
          const picked = pickedLeft === i;
          const wrong = wrongFlash?.l === i;
          return (
            <button key={i} onClick={() => pickLeft(i)} disabled={matched} style={{
              padding: '12px 14px', borderRadius: 12,
              background: matched ? 'var(--ie-line-2)' : picked ? 'var(--ie-coral-tint)' : 'white',
              border: '2px solid ' + (matched ? 'var(--ie-line)' : picked ? 'var(--ie-coral)' : wrong ? '#ef4444' : 'var(--ie-line)'),
              color: matched ? 'var(--ie-ink-4)' : 'var(--ie-ink)',
              textAlign: 'left', cursor: matched ? 'default' : 'pointer',
              transition: 'all .15s',
              opacity: matched ? 0.5 : 1,
              textDecoration: matched ? 'line-through' : 'none',
            }}>
              <div style={{ fontSize: 15, fontWeight: 700 }}>{p.native}</div>
              <div style={{ fontSize: 10, color: 'var(--ie-ink-3)', fontFamily: 'var(--font-mono)' }}>[{p.translit}]</div>
            </button>
          );
        })}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rightOrder.map((pairIdx, i) => {
          const matched = matches[pairIdx];
          const wrong = wrongFlash?.r === pairIdx;
          return (
            <button key={i} onClick={() => pickRight(pairIdx)} disabled={matched} style={{
              padding: '12px 14px', borderRadius: 12,
              background: matched ? 'var(--ie-line-2)' : 'white',
              border: '2px solid ' + (matched ? 'var(--ie-line)' : wrong ? '#ef4444' : 'var(--ie-line)'),
              color: matched ? 'var(--ie-ink-4)' : 'var(--ie-ink)',
              textAlign: 'left', cursor: matched ? 'default' : 'pointer',
              minHeight: 54,
              transition: 'all .15s',
              opacity: matched ? 0.5 : 1,
              textDecoration: matched ? 'line-through' : 'none',
              fontSize: 14, fontWeight: 600,
            }}>{pairs[pairIdx].meaning}</button>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, { LessonScreen, LESSON_CONTENT, LEARNING_PATHS, getLessonId });
