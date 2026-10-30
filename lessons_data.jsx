// 이음 - Expanded lesson content: 3-5 units per language, 8+ exercises per unit.
// Overrides LESSON_CONTENT defined in screens_lesson.jsx.

const EXPANDED_LESSONS = {
  // ═══════════════════════════ 🇯🇵 JAPANESE ═══════════════════════════
  'JP-1': {
    title: '인사와 자기소개',
    country: 'JP', lang: '日本語',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 일본어로 고르세요', options: [
        { text: 'こんにちは', translit: 'konnichiwa', correct: true },
        { text: 'さようなら', translit: 'sayounara', correct: false },
        { text: 'ありがとう', translit: 'arigatou', correct: false },
        { text: 'すみません', translit: 'sumimasen', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"はじめまして"의 뜻은?', native: 'はじめまして', translit: 'hajimemashite', options: [
        { text: '처음 뵙겠습니다', correct: true },
        { text: '안녕히 가세요', correct: false },
        { text: '잘 부탁드립니다', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻을 맞춰보세요', pairs: [
        { native: 'おはよう', translit: 'ohayou', meaning: '좋은 아침' },
        { native: 'こんばんは', translit: 'konbanwa', meaning: '안녕하세요 (저녁)' },
        { native: 'おやすみ', translit: 'oyasumi', meaning: '잘 자요' },
      ]},
      { type: 'fill-blank', prompt: '빈칸: "___, watashi wa (내 이름) desu"', options: [
        { text: 'Hajimemashite', correct: true },
        { text: 'Sayounara', correct: false },
        { text: 'Arigatou', correct: false },
        { text: 'Sumimasen', correct: false },
      ]},
      { type: 'translate-to', prompt: '"감사합니다"를 일본어로', options: [
        { text: 'ありがとうございます', translit: 'arigatou gozaimasu', correct: true },
        { text: 'ごめんなさい', translit: 'gomennasai', correct: false },
        { text: 'いってきます', translit: 'ittekimasu', correct: false },
        { text: 'よろしく', translit: 'yoroshiku', correct: false },
      ]},
      { type: 'translate-to', prompt: '"미안합니다"를 일본어로', options: [
        { text: 'ごめんなさい', translit: 'gomennasai', correct: true },
        { text: 'こんにちは', translit: 'konnichiwa', correct: false },
        { text: 'よろしく', translit: 'yoroshiku', correct: false },
        { text: 'おはよう', translit: 'ohayou', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"お名前は?"의 뜻은?', native: 'お名前は?', translit: 'onamae wa', options: [
        { text: '이름이 뭐예요?', correct: true },
        { text: '어디에 살아요?', correct: false },
        { text: '몇 살이에요?', correct: false },
      ]},
      { type: 'match', prompt: '인사 시간별 표현을 맞춰보세요', pairs: [
        { native: 'いってきます', translit: 'ittekimasu', meaning: '다녀오겠습니다' },
        { native: 'ただいま', translit: 'tadaima', meaning: '다녀왔습니다' },
        { native: 'おかえり', translit: 'okaeri', meaning: '어서 와' },
      ]},
    ],
  },
  'JP-2': {
    title: '숫자와 시간',
    country: 'JP', lang: '日本語',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 일본어로', options: [
        { text: 'いち', translit: 'ichi', correct: true },
        { text: 'に', translit: 'ni', correct: false },
        { text: 'さん', translit: 'san', correct: false },
        { text: 'よん', translit: 'yon', correct: false },
      ]},
      { type: 'translate-to', prompt: '"다섯"을 일본어로', options: [
        { text: 'ご', translit: 'go', correct: true },
        { text: 'ろく', translit: 'roku', correct: false },
        { text: 'しち', translit: 'shichi', correct: false },
        { text: 'よん', translit: 'yon', correct: false },
      ]},
      { type: 'match', prompt: '숫자와 뜻을 맞춰보세요', pairs: [
        { native: 'いち', translit: 'ichi', meaning: '1' },
        { native: 'ご', translit: 'go', meaning: '5' },
        { native: 'じゅう', translit: 'juu', meaning: '10' },
      ]},
      { type: 'listen-pick', prompt: '"何時ですか?"의 뜻은?', native: '何時ですか', translit: 'nan-ji desu ka', options: [
        { text: '몇 시입니까?', correct: true },
        { text: '어디입니까?', correct: false },
        { text: '얼마입니까?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 일본어로', options: [
        { text: 'あした', translit: 'ashita', correct: true },
        { text: 'きのう', translit: 'kinou', correct: false },
        { text: 'きょう', translit: 'kyou', correct: false },
        { text: 'あさって', translit: 'asatte', correct: false },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 일본어로', options: [
        { text: 'きょう', translit: 'kyou', correct: true },
        { text: 'あした', translit: 'ashita', correct: false },
        { text: 'きのう', translit: 'kinou', correct: false },
        { text: 'よる', translit: 'yoru', correct: false },
      ]},
      { type: 'match', prompt: '요일과 뜻을 맞춰보세요', pairs: [
        { native: '月曜日', translit: 'getsuyoubi', meaning: '월요일' },
        { native: '金曜日', translit: 'kinyoubi', meaning: '금요일' },
        { native: '日曜日', translit: 'nichiyoubi', meaning: '일요일' },
      ]},
      { type: 'fill-blank', prompt: '"今 ___ 時です" (지금 3시입니다)', options: [
        { text: 'さん', correct: true },
        { text: 'いち', correct: false },
        { text: 'ご', correct: false },
        { text: 'じゅう', correct: false },
      ]},
    ],
  },
  'JP-3': {
    title: '음식 주문하기',
    country: 'JP', lang: '日本語',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 일본어로', options: [
        { text: 'みず', translit: 'mizu', correct: true },
        { text: 'おちゃ', translit: 'ocha', correct: false },
        { text: 'コーヒー', translit: 'koohii', correct: false },
        { text: 'ぎゅうにゅう', translit: 'gyuunyuu', correct: false },
      ]},
      { type: 'translate-to', prompt: '"라멘"을 일본어로', options: [
        { text: 'ラーメン', translit: 'raamen', correct: true },
        { text: 'すし', translit: 'sushi', correct: false },
        { text: 'てんぷら', translit: 'tenpura', correct: false },
        { text: 'うどん', translit: 'udon', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"いただきます"의 뜻은?', native: 'いただきます', translit: 'itadakimasu', options: [
        { text: '잘 먹겠습니다', correct: true },
        { text: '맛있어요', correct: false },
        { text: '한 그릇 더 주세요', correct: false },
      ]},
      { type: 'match', prompt: '음식 단어를 맞춰보세요', pairs: [
        { native: 'ごはん', translit: 'gohan', meaning: '밥' },
        { native: 'にく', translit: 'niku', meaning: '고기' },
        { native: 'やさい', translit: 'yasai', meaning: '채소' },
      ]},
      { type: 'fill-blank', prompt: '"___ を ください" (물 주세요)', options: [
        { text: 'みず', correct: true },
        { text: 'すし', correct: false },
        { text: 'にく', correct: false },
        { text: 'とり', correct: false },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 일본어로', options: [
        { text: 'おいしい', translit: 'oishii', correct: true },
        { text: 'まずい', translit: 'mazui', correct: false },
        { text: 'あつい', translit: 'atsui', correct: false },
        { text: 'つめたい', translit: 'tsumetai', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"おかわり"의 뜻은?', native: 'おかわり', translit: 'okawari', options: [
        { text: '한 그릇 더', correct: true },
        { text: '잘 먹었습니다', correct: false },
        { text: '계산해 주세요', correct: false },
      ]},
      { type: 'translate-to', prompt: '"잘 먹었습니다"를 일본어로', options: [
        { text: 'ごちそうさま', translit: 'gochisousama', correct: true },
        { text: 'いただきます', translit: 'itadakimasu', correct: false },
        { text: 'こんにちは', translit: 'konnichiwa', correct: false },
        { text: 'ありがとう', translit: 'arigatou', correct: false },
      ]},
    ],
  },
  'JP-4': {
    title: '길 묻기',
    country: 'JP', lang: '日本語',
    exercises: [
      { type: 'translate-to', prompt: '"어디"를 일본어로', options: [
        { text: 'どこ', translit: 'doko', correct: true },
        { text: 'なに', translit: 'nani', correct: false },
        { text: 'だれ', translit: 'dare', correct: false },
        { text: 'いつ', translit: 'itsu', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"駅はどこですか?"의 뜻은?', native: '駅はどこですか', translit: 'eki wa doko desu ka', options: [
        { text: '역은 어디입니까?', correct: true },
        { text: '몇 시입니까?', correct: false },
        { text: '얼마입니까?', correct: false },
      ]},
      { type: 'match', prompt: '방향과 장소 단어', pairs: [
        { native: 'みぎ', translit: 'migi', meaning: '오른쪽' },
        { native: 'ひだり', translit: 'hidari', meaning: '왼쪽' },
        { native: 'まっすぐ', translit: 'massugu', meaning: '직진' },
      ]},
      { type: 'translate-to', prompt: '"화장실"을 일본어로', options: [
        { text: 'トイレ', translit: 'toire', correct: true },
        { text: 'えき', translit: 'eki', correct: false },
        { text: 'みせ', translit: 'mise', correct: false },
        { text: 'ホテル', translit: 'hoteru', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"___ に いきます" (역에 갑니다)', options: [
        { text: 'えき', correct: true },
        { text: 'そら', correct: false },
        { text: 'うみ', correct: false },
        { text: 'やま', correct: false },
      ]},
      { type: 'translate-to', prompt: '"버스"를 일본어로', options: [
        { text: 'バス', translit: 'basu', correct: true },
        { text: 'でんしゃ', translit: 'densha', correct: false },
        { text: 'ひこうき', translit: 'hikouki', correct: false },
        { text: 'じてんしゃ', translit: 'jitensha', correct: false },
      ]},
      { type: 'match', prompt: '교통수단 단어', pairs: [
        { native: 'でんしゃ', translit: 'densha', meaning: '전철' },
        { native: 'タクシー', translit: 'takushii', meaning: '택시' },
        { native: 'あるいて', translit: 'aruite', meaning: '걸어서' },
      ]},
      { type: 'listen-pick', prompt: '"すみません"의 뜻은?', native: 'すみません', translit: 'sumimasen', options: [
        { text: '실례합니다 / 죄송합니다', correct: true },
        { text: '괜찮아요', correct: false },
        { text: '천천히요', correct: false },
      ]},
    ],
  },
  'JP-5': {
    title: '전통 문화',
    country: 'JP', lang: '日本語',
    exercises: [
      { type: 'translate-to', prompt: '"벚꽃"을 일본어로', options: [
        { text: 'さくら', translit: 'sakura', correct: true },
        { text: 'ふゆ', translit: 'fuyu', correct: false },
        { text: 'ゆき', translit: 'yuki', correct: false },
        { text: 'あき', translit: 'aki', correct: false },
      ]},
      { type: 'match', prompt: '전통 문화 단어', pairs: [
        { native: 'きもの', translit: 'kimono', meaning: '기모노' },
        { native: 'ちゃどう', translit: 'chadou', meaning: '다도' },
        { native: 'おりがみ', translit: 'origami', meaning: '오리가미' },
      ]},
      { type: 'translate-to', prompt: '"신사"를 일본어로', options: [
        { text: 'じんじゃ', translit: 'jinja', correct: true },
        { text: 'てら', translit: 'tera', correct: false },
        { text: 'にわ', translit: 'niwa', correct: false },
        { text: 'いえ', translit: 'ie', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"はなみ"의 뜻은?', native: 'はなみ', translit: 'hanami', options: [
        { text: '꽃구경', correct: true },
        { text: '단풍놀이', correct: false },
        { text: '눈놀이', correct: false },
      ]},
      { type: 'match', prompt: '축제 관련 단어', pairs: [
        { native: 'まつり', translit: 'matsuri', meaning: '축제' },
        { native: 'はなび', translit: 'hanabi', meaning: '불꽃놀이' },
        { native: 'やたい', translit: 'yatai', meaning: '노점' },
      ]},
      { type: 'translate-to', prompt: '"녹차"를 일본어로', options: [
        { text: 'まっちゃ', translit: 'matcha', correct: true },
        { text: 'コーヒー', translit: 'koohii', correct: false },
        { text: 'みず', translit: 'mizu', correct: false },
        { text: 'ジュース', translit: 'juusu', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"___ を みます" (벚꽃을 봅니다)', options: [
        { text: 'さくら', correct: true },
        { text: 'まつり', correct: false },
        { text: 'はなび', correct: false },
        { text: 'ゆき', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"がんばって"의 뜻은?', native: 'がんばって', translit: 'ganbatte', options: [
        { text: '힘내!', correct: true },
        { text: '안녕히 가세요', correct: false },
        { text: '축하해요', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇫🇷 FRENCH ═══════════════════════════
  'FR-1': {
    title: 'Bonjour, 인사하기',
    country: 'FR', lang: 'Français',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 프랑스어로', options: [
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
      { type: 'translate-to', prompt: '"안녕히 가세요"를 프랑스어로', options: [
        { text: 'Au revoir', translit: 'oh-ruh-vwar', correct: true },
        { text: 'Bonsoir', translit: 'bon-swar', correct: false },
        { text: 'Bonne nuit', translit: 'bon nwee', correct: false },
        { text: 'À bientôt', translit: 'a byen-toh', correct: false },
      ]},
      { type: 'translate-to', prompt: '"안녕히 주무세요"를 프랑스어로', options: [
        { text: 'Bonne nuit', translit: 'bon nwee', correct: true },
        { text: 'Bonjour', translit: 'bon-zhoor', correct: false },
        { text: 'Bonsoir', translit: 'bon-swar', correct: false },
        { text: 'Salut', translit: 'sa-lew', correct: false },
      ]},
      { type: 'match', prompt: '시간별 인사', pairs: [
        { native: 'Bonjour', translit: 'bon-zhoor', meaning: '안녕하세요 (낮)' },
        { native: 'Bonsoir', translit: 'bon-swar', meaning: '안녕하세요 (저녁)' },
        { native: 'Salut', translit: 'sa-lew', meaning: '안녕 (친한 사이)' },
      ]},
      { type: 'listen-pick', prompt: '"Enchanté"의 뜻은?', native: 'Enchanté', translit: 'ahn-shahn-tay', options: [
        { text: '만나서 반갑습니다', correct: true },
        { text: '안녕히 가세요', correct: false },
        { text: '고맙습니다', correct: false },
      ]},
    ],
  },
  'FR-2': {
    title: '숫자와 요일',
    country: 'FR', lang: 'Français',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 프랑스어로', options: [
        { text: 'Un', translit: 'uhn', correct: true },
        { text: 'Deux', translit: 'duh', correct: false },
        { text: 'Trois', translit: 'twah', correct: false },
        { text: 'Quatre', translit: 'katr', correct: false },
      ]},
      { type: 'translate-to', prompt: '"다섯"을 프랑스어로', options: [
        { text: 'Cinq', translit: 'sank', correct: true },
        { text: 'Six', translit: 'sees', correct: false },
        { text: 'Sept', translit: 'set', correct: false },
        { text: 'Huit', translit: 'weet', correct: false },
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
      { type: 'translate-to', prompt: '"열"을 프랑스어로', options: [
        { text: 'Dix', translit: 'dees', correct: true },
        { text: 'Neuf', translit: 'nuhf', correct: false },
        { text: 'Huit', translit: 'weet', correct: false },
        { text: 'Sept', translit: 'set', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'Deux', translit: 'duh', meaning: '2' },
        { native: 'Sept', translit: 'set', meaning: '7' },
        { native: 'Dix', translit: 'dees', meaning: '10' },
      ]},
      { type: 'fill-blank', prompt: '"J\'ai ___ ans" (저는 15살입니다)', options: [
        { text: 'quinze', correct: true },
        { text: 'trois', correct: false },
        { text: 'huit', correct: false },
        { text: 'vingt', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 프랑스어로', options: [
        { text: 'Demain', translit: 'duh-mahn', correct: true },
        { text: 'Hier', translit: 'yehr', correct: false },
        { text: 'Aujourd\'hui', translit: 'oh-zhoor-dwee', correct: false },
        { text: 'Maintenant', translit: 'mahn-tuh-nahn', correct: false },
      ]},
    ],
  },
  'FR-3': {
    title: '음식과 카페',
    country: 'FR', lang: 'Français',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 프랑스어로', options: [
        { text: 'Eau', translit: 'oh', correct: true },
        { text: 'Café', translit: 'ka-fay', correct: false },
        { text: 'Thé', translit: 'tay', correct: false },
        { text: 'Vin', translit: 'vahn', correct: false },
      ]},
      { type: 'translate-to', prompt: '"빵"을 프랑스어로', options: [
        { text: 'Pain', translit: 'pahn', correct: true },
        { text: 'Fromage', translit: 'fro-mazh', correct: false },
        { text: 'Beurre', translit: 'buhr', correct: false },
        { text: 'Sel', translit: 'sel', correct: false },
      ]},
      { type: 'match', prompt: '음식 단어', pairs: [
        { native: 'Croissant', translit: 'kwah-sahn', meaning: '크루아상' },
        { native: 'Baguette', translit: 'ba-get', meaning: '바게트' },
        { native: 'Macaron', translit: 'ma-ka-rohn', meaning: '마카롱' },
      ]},
      { type: 'listen-pick', prompt: '"L\'addition, s\'il vous plaît"의 뜻은?', native: 'L\'addition, s\'il vous plaît', translit: 'la-dee-syon seel voo pleh', options: [
        { text: '계산서 주세요', correct: true },
        { text: '메뉴 주세요', correct: false },
        { text: '한 그릇 더요', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Je voudrais un ___" (커피 하나 주세요)', options: [
        { text: 'café', correct: true },
        { text: 'chien', correct: false },
        { text: 'livre', correct: false },
        { text: 'stylo', correct: false },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 프랑스어로', options: [
        { text: 'Délicieux', translit: 'day-lee-syuh', correct: true },
        { text: 'Mauvais', translit: 'mo-veh', correct: false },
        { text: 'Froid', translit: 'fwah', correct: false },
        { text: 'Grand', translit: 'grahn', correct: false },
      ]},
      { type: 'match', prompt: '음료 짝짓기', pairs: [
        { native: 'Vin', translit: 'vahn', meaning: '와인' },
        { native: 'Jus', translit: 'zhoo', meaning: '주스' },
        { native: 'Lait', translit: 'leh', meaning: '우유' },
      ]},
      { type: 'translate-to', prompt: '"치즈"를 프랑스어로', options: [
        { text: 'Fromage', translit: 'fro-mazh', correct: true },
        { text: 'Poisson', translit: 'pwah-son', correct: false },
        { text: 'Viande', translit: 'vyahnd', correct: false },
        { text: 'Riz', translit: 'ree', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇺🇸 ENGLISH ═══════════════════════════
  'US-1': {
    title: 'Basic Greetings',
    country: 'US', lang: 'English',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 영어로', options: [
        { text: 'Hello', correct: true },
        { text: 'Goodbye', correct: false },
        { text: 'Sorry', correct: false },
        { text: 'Please', correct: false },
      ]},
      { type: 'match', prompt: '인사말 짝짓기', pairs: [
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
      { type: 'translate-to', prompt: '"고맙습니다"를 영어로', options: [
        { text: 'Thank you', correct: true },
        { text: 'Excuse me', correct: false },
        { text: "You're welcome", correct: false },
        { text: 'Good luck', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"How are you doing?"의 뜻은?', native: 'How are you doing?', options: [
        { text: '어떻게 지내세요?', correct: true },
        { text: '어디에 가세요?', correct: false },
        { text: '뭐 해요?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"미안해요"를 영어로', options: [
        { text: "I'm sorry", correct: true },
        { text: 'Thank you', correct: false },
        { text: 'Excuse me', correct: false },
        { text: 'Please', correct: false },
      ]},
      { type: 'match', prompt: '헤어짐 인사', pairs: [
        { native: 'Goodbye', meaning: '안녕히 가세요' },
        { native: 'Have a nice day', meaning: '좋은 하루 보내세요' },
        { native: 'Take care', meaning: '조심히 가세요' },
      ]},
      { type: 'fill-blank', prompt: '"Nice to ___ you" (만나서 반가워요)', options: [
        { text: 'meet', correct: true },
        { text: 'see', correct: false },
        { text: 'know', correct: false },
        { text: 'have', correct: false },
      ]},
    ],
  },
  'US-2': {
    title: 'Numbers & Time',
    country: 'US', lang: 'English',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 영어로', options: [
        { text: 'One', correct: true },
        { text: 'Two', correct: false },
        { text: 'Three', correct: false },
        { text: 'Four', correct: false },
      ]},
      { type: 'translate-to', prompt: '"열"을 영어로', options: [
        { text: 'Ten', correct: true },
        { text: 'Nine', correct: false },
        { text: 'Twenty', correct: false },
        { text: 'Eleven', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'Five', meaning: '5' },
        { native: 'Fifteen', meaning: '15' },
        { native: 'Fifty', meaning: '50' },
      ]},
      { type: 'listen-pick', prompt: '"What time is it?"의 뜻은?', native: 'What time is it?', options: [
        { text: '지금 몇 시입니까?', correct: true },
        { text: '오늘 무슨 요일이에요?', correct: false },
        { text: '어디로 가세요?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 영어로', options: [
        { text: 'Tomorrow', correct: true },
        { text: 'Yesterday', correct: false },
        { text: 'Today', correct: false },
        { text: 'Now', correct: false },
      ]},
      { type: 'match', prompt: '요일 짝짓기', pairs: [
        { native: 'Monday', meaning: '월요일' },
        { native: 'Friday', meaning: '금요일' },
        { native: 'Sunday', meaning: '일요일' },
      ]},
      { type: 'fill-blank', prompt: '"I\'m ___ years old" (나는 15살)', options: [
        { text: 'fifteen', correct: true },
        { text: 'five', correct: false },
        { text: 'fifty', correct: false },
        { text: 'fourteen', correct: false },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 영어로', options: [
        { text: 'Today', correct: true },
        { text: 'Tonight', correct: false },
        { text: 'Tomorrow', correct: false },
        { text: 'Yesterday', correct: false },
      ]},
    ],
  },
  'US-3': {
    title: 'Food & Drinks',
    country: 'US', lang: 'English',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 영어로', options: [
        { text: 'Water', correct: true },
        { text: 'Milk', correct: false },
        { text: 'Juice', correct: false },
        { text: 'Coffee', correct: false },
      ]},
      { type: 'match', prompt: '음식 짝짓기', pairs: [
        { native: 'Bread', meaning: '빵' },
        { native: 'Rice', meaning: '밥' },
        { native: 'Meat', meaning: '고기' },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 영어로', options: [
        { text: 'Delicious', correct: true },
        { text: 'Terrible', correct: false },
        { text: 'Cold', correct: false },
        { text: 'Big', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Check, please"의 뜻은?', native: 'Check, please', options: [
        { text: '계산서 주세요', correct: true },
        { text: '메뉴 주세요', correct: false },
        { text: '한 그릇 더요', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"I want a ___" (커피 하나 주세요)', options: [
        { text: 'coffee', correct: true },
        { text: 'dog', correct: false },
        { text: 'book', correct: false },
        { text: 'pen', correct: false },
      ]},
      { type: 'translate-to', prompt: '"과일"을 영어로', options: [
        { text: 'Fruit', correct: true },
        { text: 'Vegetable', correct: false },
        { text: 'Dessert', correct: false },
        { text: 'Salad', correct: false },
      ]},
      { type: 'match', prompt: '음료 짝짓기', pairs: [
        { native: 'Tea', meaning: '차' },
        { native: 'Soda', meaning: '탄산음료' },
        { native: 'Beer', meaning: '맥주' },
      ]},
      { type: 'translate-to', prompt: '"매워요"를 영어로', options: [
        { text: 'Spicy', correct: true },
        { text: 'Sweet', correct: false },
        { text: 'Sour', correct: false },
        { text: 'Bitter', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇻🇳 VIETNAMESE ═══════════════════════════
  'VN-1': {
    title: 'Xin chào',
    country: 'VN', lang: 'Tiếng Việt',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 베트남어로', options: [
        { text: 'Xin chào', translit: 'sin chow', correct: true },
        { text: 'Tạm biệt', translit: 'tam byet', correct: false },
        { text: 'Cảm ơn', translit: 'kam un', correct: false },
        { text: 'Xin lỗi', translit: 'sin loi', correct: false },
      ]},
      { type: 'match', prompt: '기본 인사말', pairs: [
        { native: 'Cảm ơn', translit: 'kam un', meaning: '감사합니다' },
        { native: 'Tạm biệt', translit: 'tam byet', meaning: '안녕히 가세요' },
        { native: 'Xin lỗi', translit: 'sin loi', meaning: '죄송합니다' },
      ]},
      { type: 'listen-pick', prompt: '"Bạn khỏe không?"의 뜻은?', native: 'Bạn khỏe không?', translit: 'ban kwe khong', options: [
        { text: '잘 지내세요?', correct: true },
        { text: '어디에 가세요?', correct: false },
        { text: '이름이 뭐예요?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"Tôi tên là"의 뜻', options: [
        { text: '내 이름은', correct: true },
        { text: '나는 학생', correct: false },
        { text: '만나서 반가워요', correct: false },
        { text: '고마워요', correct: false },
      ]},
      { type: 'match', prompt: '베트남어 예/아니오', pairs: [
        { native: 'Vâng', translit: 'vang', meaning: '네' },
        { native: 'Không', translit: 'khong', meaning: '아니오' },
        { native: 'Có', translit: 'kaw', meaning: '있어요' },
      ]},
      { type: 'translate-to', prompt: '"미안해요"를 베트남어로', options: [
        { text: 'Xin lỗi', translit: 'sin loi', correct: true },
        { text: 'Cảm ơn', translit: 'kam un', correct: false },
        { text: 'Không sao', translit: 'khong sao', correct: false },
        { text: 'Xin chào', translit: 'sin chow', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Rất vui được gặp bạn"의 뜻은?', native: 'Rất vui được gặp bạn', translit: 'rat vui duok gap ban', options: [
        { text: '만나서 반가워요', correct: true },
        { text: '잘 지내요', correct: false },
        { text: '안녕히 가세요', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Tôi là ___" (제 이름을 넣으세요)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'Xin chào', correct: false },
        { text: 'Cảm ơn', correct: false },
        { text: 'Vâng', correct: false },
      ]},
    ],
  },
  'VN-2': {
    title: '숫자와 시간',
    country: 'VN', lang: 'Tiếng Việt',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 베트남어로', options: [
        { text: 'Một', translit: 'mot', correct: true },
        { text: 'Hai', translit: 'hai', correct: false },
        { text: 'Ba', translit: 'ba', correct: false },
        { text: 'Bốn', translit: 'bon', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'Ba', translit: 'ba', meaning: '3' },
        { native: 'Năm', translit: 'nam', meaning: '5' },
        { native: 'Mười', translit: 'muoi', meaning: '10' },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 베트남어로', options: [
        { text: 'Hôm nay', translit: 'hom nai', correct: true },
        { text: 'Ngày mai', translit: 'ngai mai', correct: false },
        { text: 'Hôm qua', translit: 'hom qua', correct: false },
        { text: 'Bây giờ', translit: 'bai zuh', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Mấy giờ rồi?"의 뜻은?', native: 'Mấy giờ rồi?', translit: 'may zuh roi', options: [
        { text: '지금 몇 시예요?', correct: true },
        { text: '내일 만나요', correct: false },
        { text: '얼마예요?', correct: false },
      ]},
      { type: 'match', prompt: '요일 짝짓기', pairs: [
        { native: 'Thứ hai', translit: 'thu hai', meaning: '월요일' },
        { native: 'Thứ sáu', translit: 'thu sau', meaning: '금요일' },
        { native: 'Chủ nhật', translit: 'chu nyat', meaning: '일요일' },
      ]},
      { type: 'translate-to', prompt: '"내일"을 베트남어로', options: [
        { text: 'Ngày mai', translit: 'ngai mai', correct: true },
        { text: 'Hôm nay', translit: 'hom nai', correct: false },
        { text: 'Hôm qua', translit: 'hom qua', correct: false },
        { text: 'Tuần sau', translit: 'tuan sau', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Tôi ___ tuổi" (저는 15살)', options: [
        { text: 'mười lăm', correct: true },
        { text: 'năm', correct: false },
        { text: 'ba', correct: false },
        { text: 'hai mươi', correct: false },
      ]},
      { type: 'translate-to', prompt: '"열"을 베트남어로', options: [
        { text: 'Mười', translit: 'muoi', correct: true },
        { text: 'Chín', translit: 'chin', correct: false },
        { text: 'Tám', translit: 'tam', correct: false },
        { text: 'Bảy', translit: 'bay', correct: false },
      ]},
    ],
  },
  'VN-3': {
    title: '음식 문화',
    country: 'VN', lang: 'Tiếng Việt',
    exercises: [
      { type: 'translate-to', prompt: '"쌀국수"를 베트남어로', options: [
        { text: 'Phở', translit: 'fuh', correct: true },
        { text: 'Bánh mì', translit: 'ban mee', correct: false },
        { text: 'Cà phê', translit: 'ka feh', correct: false },
        { text: 'Nước mắm', translit: 'nook mam', correct: false },
      ]},
      { type: 'match', prompt: '베트남 음식 짝짓기', pairs: [
        { native: 'Bánh mì', translit: 'ban mee', meaning: '반미 (샌드위치)' },
        { native: 'Phở', translit: 'fuh', meaning: '쌀국수' },
        { native: 'Gỏi cuốn', translit: 'goi kuon', meaning: '월남쌈' },
      ]},
      { type: 'translate-to', prompt: '"물"을 베트남어로', options: [
        { text: 'Nước', translit: 'nook', correct: true },
        { text: 'Cà phê', translit: 'ka feh', correct: false },
        { text: 'Trà', translit: 'tra', correct: false },
        { text: 'Bia', translit: 'bee-a', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Ngon quá!"의 뜻은?', native: 'Ngon quá!', translit: 'ngon qua', options: [
        { text: '진짜 맛있어요!', correct: true },
        { text: '매워요', correct: false },
        { text: '뜨거워요', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Tôi muốn ___" (커피 하나 주세요)', options: [
        { text: 'cà phê', correct: true },
        { text: 'chó', correct: false },
        { text: 'sách', correct: false },
        { text: 'bút', correct: false },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 베트남어로', options: [
        { text: 'Ngon', translit: 'ngon', correct: true },
        { text: 'Cay', translit: 'kai', correct: false },
        { text: 'Ngọt', translit: 'ngot', correct: false },
        { text: 'Đắng', translit: 'dang', correct: false },
      ]},
      { type: 'match', prompt: '맛 표현 짝짓기', pairs: [
        { native: 'Cay', translit: 'kai', meaning: '매워요' },
        { native: 'Ngọt', translit: 'ngot', meaning: '달아요' },
        { native: 'Chua', translit: 'chua', meaning: '시어요' },
      ]},
      { type: 'listen-pick', prompt: '"Cho tôi thực đơn"의 뜻은?', native: 'Cho tôi thực đơn', translit: 'cho toi thuk don', options: [
        { text: '메뉴판 주세요', correct: true },
        { text: '계산서 주세요', correct: false },
        { text: '한 그릇 더요', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇪🇸 SPANISH ═══════════════════════════
  'ES-1': {
    title: 'Hola, Gracias',
    country: 'ES', lang: 'Español',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 스페인어로', options: [
        { text: 'Hola', translit: 'oh-la', correct: true },
        { text: 'Adiós', translit: 'ah-dyos', correct: false },
        { text: 'Gracias', translit: 'gra-syas', correct: false },
        { text: 'Perdón', translit: 'per-don', correct: false },
      ]},
      { type: 'match', prompt: '단어와 뜻', pairs: [
        { native: 'Gracias', translit: 'gra-syas', meaning: '감사합니다' },
        { native: 'Por favor', translit: 'por fa-vor', meaning: '부탁합니다' },
        { native: 'Buenos días', translit: 'bwe-nos dee-as', meaning: '좋은 아침' },
      ]},
      { type: 'listen-pick', prompt: '"¿Cómo te llamas?"의 뜻은?', native: '¿Cómo te llamas?', translit: 'ko-mo te ya-mas', options: [
        { text: '이름이 뭐예요?', correct: true },
        { text: '어떻게 지내세요?', correct: false },
        { text: '어디 사세요?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"안녕히 가세요"를 스페인어로', options: [
        { text: 'Adiós', translit: 'ah-dyos', correct: true },
        { text: 'Hola', translit: 'oh-la', correct: false },
        { text: 'Buenas noches', translit: 'bwe-nas no-ches', correct: false },
        { text: 'Buenos días', translit: 'bwe-nos dee-as', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Me llamo ___" (제 이름을 넣으세요)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'Hola', correct: false },
        { text: 'Gracias', correct: false },
        { text: 'Sí', correct: false },
      ]},
      { type: 'match', prompt: '예/아니오 짝짓기', pairs: [
        { native: 'Sí', translit: 'see', meaning: '네' },
        { native: 'No', translit: 'no', meaning: '아니오' },
        { native: 'Tal vez', translit: 'tal ves', meaning: '아마도' },
      ]},
      { type: 'translate-to', prompt: '"미안해요"를 스페인어로', options: [
        { text: 'Lo siento', translit: 'lo syen-to', correct: true },
        { text: 'Gracias', translit: 'gra-syas', correct: false },
        { text: 'Adiós', translit: 'ah-dyos', correct: false },
        { text: 'Por favor', translit: 'por fa-vor', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Mucho gusto"의 뜻은?', native: 'Mucho gusto', translit: 'moo-cho goos-to', options: [
        { text: '만나서 반가워요', correct: true },
        { text: '잘 지내요', correct: false },
        { text: '고마워요', correct: false },
      ]},
    ],
  },
  'ES-2': {
    title: '숫자와 시간',
    country: 'ES', lang: 'Español',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 스페인어로', options: [
        { text: 'Uno', translit: 'oo-no', correct: true },
        { text: 'Dos', translit: 'dos', correct: false },
        { text: 'Tres', translit: 'tres', correct: false },
        { text: 'Cuatro', translit: 'kwa-tro', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'Cinco', translit: 'sin-ko', meaning: '5' },
        { native: 'Diez', translit: 'dyes', meaning: '10' },
        { native: 'Veinte', translit: 'bein-te', meaning: '20' },
      ]},
      { type: 'listen-pick', prompt: '"¿Qué hora es?"의 뜻은?', native: '¿Qué hora es?', translit: 'ke ora es', options: [
        { text: '몇 시예요?', correct: true },
        { text: '얼마예요?', correct: false },
        { text: '어디예요?', correct: false },
      ]},
      { type: 'match', prompt: '요일 짝짓기', pairs: [
        { native: 'Lunes', translit: 'loo-nes', meaning: '월요일' },
        { native: 'Viernes', translit: 'byer-nes', meaning: '금요일' },
        { native: 'Domingo', translit: 'do-min-go', meaning: '일요일' },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 스페인어로', options: [
        { text: 'Hoy', translit: 'oy', correct: true },
        { text: 'Ayer', translit: 'a-yer', correct: false },
        { text: 'Mañana', translit: 'ma-nya-na', correct: false },
        { text: 'Ahora', translit: 'a-o-ra', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Tengo ___ años" (저는 15살)', options: [
        { text: 'quince', correct: true },
        { text: 'cinco', correct: false },
        { text: 'diez', correct: false },
        { text: 'veinte', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 스페인어로', options: [
        { text: 'Mañana', translit: 'ma-nya-na', correct: true },
        { text: 'Ayer', translit: 'a-yer', correct: false },
        { text: 'Hoy', translit: 'oy', correct: false },
        { text: 'Ahora', translit: 'a-o-ra', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"¿Qué día es hoy?"의 뜻은?', native: '¿Qué día es hoy?', translit: 'ke dee-a es oy', options: [
        { text: '오늘 무슨 요일이에요?', correct: true },
        { text: '지금 몇 시예요?', correct: false },
        { text: '얼마예요?', correct: false },
      ]},
    ],
  },
  'ES-3': {
    title: '스페인 문화',
    country: 'ES', lang: 'Español',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 스페인어로', options: [
        { text: 'Agua', translit: 'a-gwa', correct: true },
        { text: 'Vino', translit: 'bee-no', correct: false },
        { text: 'Café', translit: 'ka-fe', correct: false },
        { text: 'Leche', translit: 'le-che', correct: false },
      ]},
      { type: 'match', prompt: '스페인 음식 짝짓기', pairs: [
        { native: 'Paella', translit: 'pa-e-ya', meaning: '빠에야' },
        { native: 'Tapas', translit: 'ta-pas', meaning: '타파스' },
        { native: 'Tortilla', translit: 'tor-tee-ya', meaning: '토르티야' },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 스페인어로', options: [
        { text: 'Delicioso', translit: 'de-lee-syo-so', correct: true },
        { text: 'Malo', translit: 'ma-lo', correct: false },
        { text: 'Frío', translit: 'free-o', correct: false },
        { text: 'Grande', translit: 'gran-de', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"La cuenta, por favor"의 뜻은?', native: 'La cuenta, por favor', translit: 'la kwen-ta por fa-vor', options: [
        { text: '계산서 주세요', correct: true },
        { text: '메뉴 주세요', correct: false },
        { text: '한 그릇 더요', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Quiero un ___" (커피 하나 주세요)', options: [
        { text: 'café', correct: true },
        { text: 'perro', correct: false },
        { text: 'libro', correct: false },
        { text: 'boli', correct: false },
      ]},
      { type: 'translate-to', prompt: '"축제"를 스페인어로', options: [
        { text: 'Fiesta', translit: 'fyes-ta', correct: true },
        { text: 'Fuego', translit: 'fwe-go', correct: false },
        { text: 'Feria', translit: 'fe-rya', correct: false },
        { text: 'Fila', translit: 'fee-la', correct: false },
      ]},
      { type: 'match', prompt: '문화 단어 짝짓기', pairs: [
        { native: 'Flamenco', meaning: '플라멩코' },
        { native: 'Siesta', meaning: '낮잠' },
        { native: 'Sombrero', meaning: '모자' },
      ]},
      { type: 'translate-to', prompt: '"음악"을 스페인어로', options: [
        { text: 'Música', translit: 'moo-see-ka', correct: true },
        { text: 'Baile', translit: 'bai-le', correct: false },
        { text: 'Canción', translit: 'kan-syon', correct: false },
        { text: 'Fiesta', translit: 'fyes-ta', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇩🇪 GERMAN ═══════════════════════════
  'DE-1': {
    title: 'Hallo, Danke',
    country: 'DE', lang: 'Deutsch',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 독일어로', options: [
        { text: 'Hallo', correct: true },
        { text: 'Auf Wiedersehen', correct: false },
        { text: 'Danke', correct: false },
        { text: 'Bitte', correct: false },
      ]},
      { type: 'match', prompt: '단어 짝짓기', pairs: [
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
      { type: 'translate-to', prompt: '"안녕히 가세요"를 독일어로', options: [
        { text: 'Auf Wiedersehen', correct: true },
        { text: 'Guten Morgen', correct: false },
        { text: 'Gute Nacht', correct: false },
        { text: 'Tschüss', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Wie geht\'s?"의 뜻은?', native: "Wie geht's?", translit: 'vee gayts', options: [
        { text: '어떻게 지내세요?', correct: true },
        { text: '이름이 뭐예요?', correct: false },
        { text: '어디에 사세요?', correct: false },
      ]},
      { type: 'match', prompt: '예/아니오', pairs: [
        { native: 'Ja', meaning: '네' },
        { native: 'Nein', meaning: '아니오' },
        { native: 'Vielleicht', meaning: '아마도' },
      ]},
      { type: 'translate-to', prompt: '"미안해요"를 독일어로', options: [
        { text: 'Entschuldigung', correct: true },
        { text: 'Danke', correct: false },
        { text: 'Hallo', correct: false },
        { text: 'Bitte', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Freut mich"의 뜻은?', native: 'Freut mich', translit: 'froit mikh', options: [
        { text: '만나서 반가워요', correct: true },
        { text: '고마워요', correct: false },
        { text: '실례합니다', correct: false },
      ]},
    ],
  },
  'DE-2': {
    title: '숫자와 시간',
    country: 'DE', lang: 'Deutsch',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 독일어로', options: [
        { text: 'Eins', translit: 'ains', correct: true },
        { text: 'Zwei', translit: 'tsvai', correct: false },
        { text: 'Drei', translit: 'drai', correct: false },
        { text: 'Vier', translit: 'feer', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'Fünf', translit: 'fuenf', meaning: '5' },
        { native: 'Zehn', translit: 'tsayn', meaning: '10' },
        { native: 'Zwanzig', translit: 'tsvan-tsig', meaning: '20' },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 독일어로', options: [
        { text: 'Heute', translit: 'hoi-te', correct: true },
        { text: 'Morgen', translit: 'mor-gen', correct: false },
        { text: 'Gestern', translit: 'ges-tern', correct: false },
        { text: 'Jetzt', translit: 'yetst', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Wie viel Uhr ist es?"의 뜻은?', native: 'Wie viel Uhr ist es?', translit: 'vee feel oor ist es', options: [
        { text: '몇 시예요?', correct: true },
        { text: '얼마예요?', correct: false },
        { text: '누구세요?', correct: false },
      ]},
      { type: 'match', prompt: '요일', pairs: [
        { native: 'Montag', meaning: '월요일' },
        { native: 'Freitag', meaning: '금요일' },
        { native: 'Sonntag', meaning: '일요일' },
      ]},
      { type: 'fill-blank', prompt: '"Ich bin ___ Jahre alt" (15살)', options: [
        { text: 'fünfzehn', correct: true },
        { text: 'fünf', correct: false },
        { text: 'zehn', correct: false },
        { text: 'zwanzig', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 독일어로', options: [
        { text: 'Morgen', translit: 'mor-gen', correct: true },
        { text: 'Heute', translit: 'hoi-te', correct: false },
        { text: 'Gestern', translit: 'ges-tern', correct: false },
        { text: 'Übermorgen', translit: 'oo-ber-mor-gen', correct: false },
      ]},
      { type: 'translate-to', prompt: '"열"을 독일어로', options: [
        { text: 'Zehn', translit: 'tsayn', correct: true },
        { text: 'Neun', translit: 'noyn', correct: false },
        { text: 'Acht', translit: 'akht', correct: false },
        { text: 'Sieben', translit: 'zee-ben', correct: false },
      ]},
    ],
  },
  'DE-3': {
    title: '독일 문화',
    country: 'DE', lang: 'Deutsch',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 독일어로', options: [
        { text: 'Wasser', translit: 'vas-ser', correct: true },
        { text: 'Bier', translit: 'beer', correct: false },
        { text: 'Kaffee', translit: 'ka-fay', correct: false },
        { text: 'Milch', translit: 'milkh', correct: false },
      ]},
      { type: 'match', prompt: '독일 음식', pairs: [
        { native: 'Brezel', meaning: '프레첼' },
        { native: 'Wurst', meaning: '소시지' },
        { native: 'Sauerkraut', meaning: '자우어크라우트' },
      ]},
      { type: 'listen-pick', prompt: '"Prost!"의 뜻은?', native: 'Prost!', translit: 'prohst', options: [
        { text: '건배!', correct: true },
        { text: '고마워요', correct: false },
        { text: '축하해요', correct: false },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 독일어로', options: [
        { text: 'Lecker', translit: 'lek-ker', correct: true },
        { text: 'Schlecht', translit: 'shlekht', correct: false },
        { text: 'Kalt', translit: 'kalt', correct: false },
        { text: 'Groß', translit: 'gross', correct: false },
      ]},
      { type: 'match', prompt: '문화 단어', pairs: [
        { native: 'Oktoberfest', meaning: '옥토버페스트' },
        { native: 'Weihnachten', meaning: '크리스마스' },
        { native: 'Karneval', meaning: '카니발' },
      ]},
      { type: 'fill-blank', prompt: '"Ich möchte einen ___" (커피 하나 주세요)', options: [
        { text: 'Kaffee', correct: true },
        { text: 'Hund', correct: false },
        { text: 'Baum', correct: false },
        { text: 'Stift', correct: false },
      ]},
      { type: 'translate-to', prompt: '"축제"를 독일어로', options: [
        { text: 'Fest', correct: true },
        { text: 'Freund', correct: false },
        { text: 'Feuer', correct: false },
        { text: 'Frau', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Wie schön!"의 뜻은?', native: 'Wie schön!', translit: 'vee shurn', options: [
        { text: '정말 아름다워요!', correct: true },
        { text: '얼마예요?', correct: false },
        { text: '어디예요?', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇹🇭 THAI ═══════════════════════════
  'TH-1': {
    title: 'สวัสดี',
    country: 'TH', lang: 'ภาษาไทย',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 태국어로', options: [
        { text: 'สวัสดี', translit: 'sa-wat-dee', correct: true },
        { text: 'ลาก่อน', translit: 'la-gon', correct: false },
        { text: 'ขอบคุณ', translit: 'khop-kun', correct: false },
        { text: 'ขอโทษ', translit: 'kho-thot', correct: false },
      ]},
      { type: 'match', prompt: '단어 짝짓기', pairs: [
        { native: 'ขอบคุณ', translit: 'khop-kun', meaning: '감사합니다' },
        { native: 'ใช่', translit: 'chai', meaning: '네' },
        { native: 'ไม่', translit: 'mai', meaning: '아니오' },
      ]},
      { type: 'translate-to', prompt: '"미안합니다"를 태국어로', options: [
        { text: 'ขอโทษ', translit: 'kho-thot', correct: true },
        { text: 'ขอบคุณ', translit: 'khop-kun', correct: false },
        { text: 'สวัสดี', translit: 'sa-wat-dee', correct: false },
        { text: 'ลาก่อน', translit: 'la-gon', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"สบายดีไหม?"의 뜻은?', native: 'สบายดีไหม?', translit: 'sa-bai-dee mai', options: [
        { text: '잘 지내세요?', correct: true },
        { text: '이름이 뭐예요?', correct: false },
        { text: '어디 가세요?', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"ผมชื่อ ___" (제 이름을 넣으세요)', options: [
        { text: 'จีอู', correct: true },
        { text: 'สวัสดี', correct: false },
        { text: 'ขอบคุณ', correct: false },
        { text: 'ใช่', correct: false },
      ]},
      { type: 'translate-to', prompt: '"안녕히 가세요"를 태국어로', options: [
        { text: 'ลาก่อน', translit: 'la-gon', correct: true },
        { text: 'สวัสดี', translit: 'sa-wat-dee', correct: false },
        { text: 'ขอบคุณ', translit: 'khop-kun', correct: false },
        { text: 'สบายดี', translit: 'sa-bai-dee', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'หนึ่ง', translit: 'nueng', meaning: '1' },
        { native: 'ห้า', translit: 'ha', meaning: '5' },
        { native: 'สิบ', translit: 'sip', meaning: '10' },
      ]},
      { type: 'listen-pick', prompt: '"ยินดีที่ได้รู้จัก"의 뜻은?', native: 'ยินดีที่ได้รู้จัก', translit: 'yin-dee tee dai roo-jak', options: [
        { text: '만나서 반가워요', correct: true },
        { text: '고마워요', correct: false },
        { text: '잘 지내요', correct: false },
      ]},
    ],
  },
  'TH-2': {
    title: '음식과 시장',
    country: 'TH', lang: 'ภาษาไทย',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 태국어로', options: [
        { text: 'น้ำ', translit: 'nam', correct: true },
        { text: 'ข้าว', translit: 'khao', correct: false },
        { text: 'กาแฟ', translit: 'ga-fae', correct: false },
        { text: 'ชา', translit: 'cha', correct: false },
      ]},
      { type: 'match', prompt: '태국 음식', pairs: [
        { native: 'ผัดไทย', translit: 'pad thai', meaning: '팟타이' },
        { native: 'ต้มยำ', translit: 'tom yum', meaning: '똠얌' },
        { native: 'ส้มตำ', translit: 'som tam', meaning: '쏨땀' },
      ]},
      { type: 'listen-pick', prompt: '"อร่อยมาก!"의 뜻은?', native: 'อร่อยมาก!', translit: 'a-roi mak', options: [
        { text: '정말 맛있어요!', correct: true },
        { text: '너무 매워요', correct: false },
        { text: '얼마예요?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"매워요"를 태국어로', options: [
        { text: 'เผ็ด', translit: 'phet', correct: true },
        { text: 'หวาน', translit: 'wan', correct: false },
        { text: 'เค็ม', translit: 'kem', correct: false },
        { text: 'เปรี้ยว', translit: 'priao', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"ขอ ___ หน่อย" (물 좀 주세요)', options: [
        { text: 'น้ำ', correct: true },
        { text: 'ข้าว', correct: false },
        { text: 'กาแฟ', correct: false },
        { text: 'ผลไม้', correct: false },
      ]},
      { type: 'translate-to', prompt: '"얼마예요"를 태국어로', options: [
        { text: 'เท่าไหร่', translit: 'tao-rai', correct: true },
        { text: 'ที่ไหน', translit: 'tee-nai', correct: false },
        { text: 'อะไร', translit: 'a-rai', correct: false },
        { text: 'ใคร', translit: 'krai', correct: false },
      ]},
      { type: 'match', prompt: '맛 표현', pairs: [
        { native: 'หวาน', translit: 'wan', meaning: '달아요' },
        { native: 'เค็ม', translit: 'kem', meaning: '짜요' },
        { native: 'เปรี้ยว', translit: 'priao', meaning: '시어요' },
      ]},
      { type: 'listen-pick', prompt: '"เอาเช็คบิล"의 뜻은?', native: 'เอาเช็คบิล', translit: 'ao check-bill', options: [
        { text: '계산서 주세요', correct: true },
        { text: '한 그릇 더요', correct: false },
        { text: '메뉴 보여주세요', correct: false },
      ]},
    ],
  },
  'TH-3': {
    title: '태국 문화',
    country: 'TH', lang: 'ภาษาไทย',
    exercises: [
      { type: 'translate-to', prompt: '"안녕(친한 사이)"를 태국어로', options: [
        { text: 'หวัดดี', translit: 'wat-dee', correct: true },
        { text: 'สวัสดี', translit: 'sa-wat-dee', correct: false },
        { text: 'ลาก่อน', translit: 'la-gon', correct: false },
        { text: 'ขอบคุณ', translit: 'khop-kun', correct: false },
      ]},
      { type: 'match', prompt: '문화 단어', pairs: [
        { native: 'สงกรานต์', translit: 'song-kran', meaning: '송크란 (물축제)' },
        { native: 'ลอยกระทง', translit: 'loy-kra-tong', meaning: '로이크라통' },
        { native: 'ไทเก๊ก', translit: 'thai-gek', meaning: '태극권' },
      ]},
      { type: 'translate-to', prompt: '"사원"을 태국어로', options: [
        { text: 'วัด', translit: 'wat', correct: true },
        { text: 'บ้าน', translit: 'baan', correct: false },
        { text: 'ตลาด', translit: 'ta-lat', correct: false },
        { text: 'โรงเรียน', translit: 'rong-rian', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"สวย!"의 뜻은?', native: 'สวย!', translit: 'suay', options: [
        { text: '예뻐요!', correct: true },
        { text: '매워요', correct: false },
        { text: '고마워요', correct: false },
      ]},
      { type: 'match', prompt: '일상 단어', pairs: [
        { native: 'บ้าน', translit: 'baan', meaning: '집' },
        { native: 'โรงเรียน', translit: 'rong-rian', meaning: '학교' },
        { native: 'ตลาด', translit: 'ta-lat', meaning: '시장' },
      ]},
      { type: 'fill-blank', prompt: '"ผมไปที่ ___" (사원에 가요)', options: [
        { text: 'วัด', correct: true },
        { text: 'น้ำ', correct: false },
        { text: 'อาหาร', correct: false },
        { text: 'เพลง', correct: false },
      ]},
      { type: 'translate-to', prompt: '"코끼리"를 태국어로', options: [
        { text: 'ช้าง', translit: 'chang', correct: true },
        { text: 'แมว', translit: 'maew', correct: false },
        { text: 'หมา', translit: 'maa', correct: false },
        { text: 'นก', translit: 'nok', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"ขอโทษครับ/ค่ะ"의 뜻은?', native: 'ขอโทษครับ/ค่ะ', translit: 'kho-thot krap/ka', options: [
        { text: '죄송합니다 (공손)', correct: true },
        { text: '고마워요', correct: false },
        { text: '알겠습니다', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇧🇷 PORTUGUESE ═══════════════════════════
  'BR-1': {
    title: 'Olá, Obrigado',
    country: 'BR', lang: 'Português',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 포르투갈어로', options: [
        { text: 'Olá', correct: true },
        { text: 'Tchau', correct: false },
        { text: 'Obrigado', correct: false },
        { text: 'Desculpe', correct: false },
      ]},
      { type: 'match', prompt: '단어 짝짓기', pairs: [
        { native: 'Obrigado', meaning: '감사합니다' },
        { native: 'Por favor', meaning: '부탁합니다' },
        { native: 'Bom dia', meaning: '좋은 아침' },
      ]},
      { type: 'listen-pick', prompt: '"Como você está?"의 뜻은?', native: 'Como você está?', translit: 'ko-mu vo-say esh-tah', options: [
        { text: '어떻게 지내요?', correct: true },
        { text: '이름이 뭐예요?', correct: false },
        { text: '어디 가세요?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"미안해요"를 포르투갈어로', options: [
        { text: 'Desculpe', translit: 'des-kul-pe', correct: true },
        { text: 'Obrigado', translit: 'o-bri-ga-du', correct: false },
        { text: 'Olá', translit: 'o-la', correct: false },
        { text: 'Sim', translit: 'sim', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Meu nome é ___" (제 이름을 넣으세요)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'Olá', correct: false },
        { text: 'Bom', correct: false },
        { text: 'Sim', correct: false },
      ]},
      { type: 'match', prompt: '예/아니오', pairs: [
        { native: 'Sim', meaning: '네' },
        { native: 'Não', meaning: '아니오' },
        { native: 'Talvez', meaning: '아마도' },
      ]},
      { type: 'translate-to', prompt: '"안녕히 가세요"를 포르투갈어로', options: [
        { text: 'Tchau', correct: true },
        { text: 'Olá', correct: false },
        { text: 'Boa noite', correct: false },
        { text: 'Bom dia', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Prazer em conhecê-lo"의 뜻은?', native: 'Prazer em conhecê-lo', translit: 'pra-zer em ko-nye-say-lu', options: [
        { text: '만나서 반가워요', correct: true },
        { text: '어떻게 지내요?', correct: false },
        { text: '고마워요', correct: false },
      ]},
    ],
  },
  'BR-2': {
    title: '숫자와 시간',
    country: 'BR', lang: 'Português',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 포르투갈어로', options: [
        { text: 'Um', correct: true },
        { text: 'Dois', correct: false },
        { text: 'Três', correct: false },
        { text: 'Quatro', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'Cinco', meaning: '5' },
        { native: 'Dez', meaning: '10' },
        { native: 'Vinte', meaning: '20' },
      ]},
      { type: 'listen-pick', prompt: '"Que horas são?"의 뜻은?', native: 'Que horas são?', translit: 'ki o-ras sow', options: [
        { text: '몇 시예요?', correct: true },
        { text: '얼마예요?', correct: false },
        { text: '어디예요?', correct: false },
      ]},
      { type: 'match', prompt: '요일', pairs: [
        { native: 'Segunda', meaning: '월요일' },
        { native: 'Sexta', meaning: '금요일' },
        { native: 'Domingo', meaning: '일요일' },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 포르투갈어로', options: [
        { text: 'Hoje', translit: 'o-zhee', correct: true },
        { text: 'Amanhã', translit: 'a-ma-nya', correct: false },
        { text: 'Ontem', translit: 'on-tem', correct: false },
        { text: 'Agora', translit: 'a-go-ra', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Tenho ___ anos" (15살)', options: [
        { text: 'quinze', correct: true },
        { text: 'cinco', correct: false },
        { text: 'dez', correct: false },
        { text: 'vinte', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 포르투갈어로', options: [
        { text: 'Amanhã', translit: 'a-ma-nya', correct: true },
        { text: 'Hoje', translit: 'o-zhee', correct: false },
        { text: 'Ontem', translit: 'on-tem', correct: false },
        { text: 'Depois', translit: 'de-poys', correct: false },
      ]},
      { type: 'translate-to', prompt: '"열"을 포르투갈어로', options: [
        { text: 'Dez', correct: true },
        { text: 'Nove', correct: false },
        { text: 'Oito', correct: false },
        { text: 'Sete', correct: false },
      ]},
    ],
  },
  'BR-3': {
    title: '브라질 문화',
    country: 'BR', lang: 'Português',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 포르투갈어로', options: [
        { text: 'Água', translit: 'a-gwa', correct: true },
        { text: 'Café', translit: 'ka-feh', correct: false },
        { text: 'Suco', translit: 'soo-ku', correct: false },
        { text: 'Leite', translit: 'lay-chee', correct: false },
      ]},
      { type: 'match', prompt: '브라질 음식', pairs: [
        { native: 'Feijoada', meaning: '페이조아다' },
        { native: 'Açaí', meaning: '아사이' },
        { native: 'Pão de queijo', meaning: '치즈빵' },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 포르투갈어로', options: [
        { text: 'Delicioso', correct: true },
        { text: 'Ruim', correct: false },
        { text: 'Frio', correct: false },
        { text: 'Grande', correct: false },
      ]},
      { type: 'match', prompt: '문화 단어', pairs: [
        { native: 'Samba', meaning: '삼바' },
        { native: 'Carnaval', meaning: '카니발' },
        { native: 'Futebol', meaning: '축구' },
      ]},
      { type: 'listen-pick', prompt: '"A conta, por favor"의 뜻은?', native: 'A conta, por favor', translit: 'a kon-ta por fa-vor', options: [
        { text: '계산서 주세요', correct: true },
        { text: '메뉴 주세요', correct: false },
        { text: '한 그릇 더요', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"Quero um ___" (커피 하나 주세요)', options: [
        { text: 'café', correct: true },
        { text: 'cão', correct: false },
        { text: 'livro', correct: false },
        { text: 'caneta', correct: false },
      ]},
      { type: 'translate-to', prompt: '"축구"를 포르투갈어로', options: [
        { text: 'Futebol', correct: true },
        { text: 'Vôlei', correct: false },
        { text: 'Basquete', correct: false },
        { text: 'Tênis', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Gol!"의 뜻은?', native: 'Gol!', options: [
        { text: '골!', correct: true },
        { text: '이겼다!', correct: false },
        { text: '경기 끝!', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇮🇳 HINDI ═══════════════════════════
  'IN-1': {
    title: 'नमस्ते',
    country: 'IN', lang: 'हिन्दी',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 힌디어로', options: [
        { text: 'नमस्ते', translit: 'namaste', correct: true },
        { text: 'अलविदा', translit: 'alvida', correct: false },
        { text: 'धन्यवाद', translit: 'dhanyavaad', correct: false },
        { text: 'माफ़ करें', translit: 'maaf karein', correct: false },
      ]},
      { type: 'match', prompt: '단어 짝짓기', pairs: [
        { native: 'धन्यवाद', translit: 'dhanyavaad', meaning: '감사합니다' },
        { native: 'हाँ', translit: 'haan', meaning: '네' },
        { native: 'नहीं', translit: 'nahin', meaning: '아니오' },
      ]},
      { type: 'translate-to', prompt: '"미안해요"를 힌디어로', options: [
        { text: 'माफ़ करें', translit: 'maaf karein', correct: true },
        { text: 'नमस्ते', translit: 'namaste', correct: false },
        { text: 'धन्यवाद', translit: 'dhanyavaad', correct: false },
        { text: 'अलविदा', translit: 'alvida', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"आप कैसे हैं?"의 뜻은?', native: 'आप कैसे हैं?', translit: 'aap kaise hain', options: [
        { text: '어떻게 지내세요?', correct: true },
        { text: '이름이 뭐예요?', correct: false },
        { text: '어디 가세요?', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"मेरा नाम ___ है" (내 이름을 넣으세요)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'namaste', correct: false },
        { text: 'dhanyavaad', correct: false },
        { text: 'haan', correct: false },
      ]},
      { type: 'match', prompt: '숫자', pairs: [
        { native: 'एक', translit: 'ek', meaning: '1' },
        { native: 'पाँच', translit: 'paanch', meaning: '5' },
        { native: 'दस', translit: 'das', meaning: '10' },
      ]},
      { type: 'translate-to', prompt: '"안녕히 가세요"를 힌디어로', options: [
        { text: 'अलविदा', translit: 'alvida', correct: true },
        { text: 'नमस्ते', translit: 'namaste', correct: false },
        { text: 'धन्यवाद', translit: 'dhanyavaad', correct: false },
        { text: 'हाँ', translit: 'haan', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"आपसे मिलकर खुशी हुई"의 뜻은?', native: 'आपसे मिलकर खुशी हुई', translit: 'aapse milkar khushi hui', options: [
        { text: '만나서 반가워요', correct: true },
        { text: '잘 지내요', correct: false },
        { text: '실례합니다', correct: false },
      ]},
    ],
  },
  'IN-2': {
    title: '숫자와 가족',
    country: 'IN', lang: 'हिन्दी',
    exercises: [
      { type: 'translate-to', prompt: '"둘"을 힌디어로', options: [
        { text: 'दो', translit: 'do', correct: true },
        { text: 'तीन', translit: 'teen', correct: false },
        { text: 'चार', translit: 'chaar', correct: false },
        { text: 'पाँच', translit: 'paanch', correct: false },
      ]},
      { type: 'match', prompt: '가족 단어', pairs: [
        { native: 'माँ', translit: 'maa', meaning: '엄마' },
        { native: 'पिता', translit: 'pita', meaning: '아빠' },
        { native: 'भाई', translit: 'bhai', meaning: '형제' },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 힌디어로', options: [
        { text: 'आज', translit: 'aaj', correct: true },
        { text: 'कल', translit: 'kal', correct: false },
        { text: 'अभी', translit: 'abhi', correct: false },
        { text: 'बाद में', translit: 'baad mein', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"कितने बजे हैं?"의 뜻은?', native: 'कितने बजे हैं?', translit: 'kitne baje hain', options: [
        { text: '몇 시예요?', correct: true },
        { text: '얼마예요?', correct: false },
        { text: '어디예요?', correct: false },
      ]},
      { type: 'match', prompt: '가족 관계', pairs: [
        { native: 'बहन', translit: 'behen', meaning: '자매' },
        { native: 'दादी', translit: 'daadi', meaning: '할머니' },
        { native: 'दादा', translit: 'daada', meaning: '할아버지' },
      ]},
      { type: 'fill-blank', prompt: '"मैं ___ साल का हूँ" (나는 15살)', options: [
        { text: 'पंद्रह', correct: true },
        { text: 'पाँच', correct: false },
        { text: 'दस', correct: false },
        { text: 'बीस', correct: false },
      ]},
      { type: 'translate-to', prompt: '"열"을 힌디어로', options: [
        { text: 'दस', translit: 'das', correct: true },
        { text: 'नौ', translit: 'nau', correct: false },
        { text: 'आठ', translit: 'aath', correct: false },
        { text: 'सात', translit: 'saat', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 힌디어로', options: [
        { text: 'कल', translit: 'kal', correct: true },
        { text: 'आज', translit: 'aaj', correct: false },
        { text: 'अभी', translit: 'abhi', correct: false },
        { text: 'सुबह', translit: 'subah', correct: false },
      ]},
    ],
  },
  'IN-3': {
    title: '인도 문화',
    country: 'IN', lang: 'हिन्दी',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 힌디어로', options: [
        { text: 'पानी', translit: 'paani', correct: true },
        { text: 'चाय', translit: 'chai', correct: false },
        { text: 'दूध', translit: 'doodh', correct: false },
        { text: 'रस', translit: 'ras', correct: false },
      ]},
      { type: 'match', prompt: '인도 음식', pairs: [
        { native: 'रोटी', translit: 'roti', meaning: '로티' },
        { native: 'दाल', translit: 'daal', meaning: '달' },
        { native: 'चावल', translit: 'chaawal', meaning: '밥' },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 힌디어로', options: [
        { text: 'स्वादिष्ट', translit: 'swadisht', correct: true },
        { text: 'खराब', translit: 'kharaab', correct: false },
        { text: 'ठंडा', translit: 'thanda', correct: false },
        { text: 'बड़ा', translit: 'bada', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"बहुत अच्छा!"의 뜻은?', native: 'बहुत अच्छा!', translit: 'bahut accha', options: [
        { text: '매우 좋아요!', correct: true },
        { text: '너무 매워요', correct: false },
        { text: '고마워요', correct: false },
      ]},
      { type: 'match', prompt: '문화 단어', pairs: [
        { native: 'दिवाली', translit: 'diwali', meaning: '디왈리 (빛의 축제)' },
        { native: 'होली', translit: 'holi', meaning: '홀리 (색 축제)' },
        { native: 'योग', translit: 'yog', meaning: '요가' },
      ]},
      { type: 'fill-blank', prompt: '"मुझे ___ चाहिए" (차 하나 주세요)', options: [
        { text: 'चाय', correct: true },
        { text: 'कुत्ता', correct: false },
        { text: 'किताब', correct: false },
        { text: 'कलम', correct: false },
      ]},
      { type: 'translate-to', prompt: '"매워요"를 힌디어로', options: [
        { text: 'तीखा', translit: 'teekha', correct: true },
        { text: 'मीठा', translit: 'meetha', correct: false },
        { text: 'नमकीन', translit: 'namkeen', correct: false },
        { text: 'खट्टा', translit: 'khatta', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"बिल दीजिए"의 뜻은?', native: 'बिल दीजिए', translit: 'bill deejiye', options: [
        { text: '계산서 주세요', correct: true },
        { text: '메뉴 주세요', correct: false },
        { text: '더 주세요', correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇪🇬 ARABIC ═══════════════════════════
  'EG-1': {
    title: 'مرحبا',
    country: 'EG', lang: 'العربية',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 아랍어로', options: [
        { text: 'مرحبا', translit: 'marhaba', correct: true },
        { text: 'مع السلامة', translit: "ma'a as-salama", correct: false },
        { text: 'شكرا', translit: 'shukran', correct: false },
        { text: 'آسف', translit: 'aasif', correct: false },
      ]},
      { type: 'match', prompt: '단어 짝짓기', pairs: [
        { native: 'شكرا', translit: 'shukran', meaning: '감사합니다' },
        { native: 'نعم', translit: "na'am", meaning: '네' },
        { native: 'لا', translit: 'laa', meaning: '아니오' },
      ]},
      { type: 'translate-to', prompt: '"미안해요"를 아랍어로', options: [
        { text: 'آسف', translit: 'aasif', correct: true },
        { text: 'مرحبا', translit: 'marhaba', correct: false },
        { text: 'شكرا', translit: 'shukran', correct: false },
        { text: 'نعم', translit: "na'am", correct: false },
      ]},
      { type: 'listen-pick', prompt: '"كيف حالك؟"의 뜻은?', native: 'كيف حالك؟', translit: 'kayfa haluka', options: [
        { text: '어떻게 지내세요?', correct: true },
        { text: '이름이 뭐예요?', correct: false },
        { text: '어디 가세요?', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"اسمي ___" (내 이름을 넣으세요)', options: [
        { text: 'Jiwoo', correct: true },
        { text: 'marhaba', correct: false },
        { text: 'shukran', correct: false },
        { text: 'na\'am', correct: false },
      ]},
      { type: 'translate-to', prompt: '"안녕히 가세요"를 아랍어로', options: [
        { text: 'مع السلامة', translit: "ma'a as-salama", correct: true },
        { text: 'مرحبا', translit: 'marhaba', correct: false },
        { text: 'صباح الخير', translit: 'sabah al-khair', correct: false },
        { text: 'شكرا', translit: 'shukran', correct: false },
      ]},
      { type: 'match', prompt: '숫자', pairs: [
        { native: 'واحد', translit: 'wahid', meaning: '1' },
        { native: 'خمسة', translit: 'khamsa', meaning: '5' },
        { native: 'عشرة', translit: "'ashara", meaning: '10' },
      ]},
      { type: 'listen-pick', prompt: '"تشرفنا"의 뜻은?', native: 'تشرفنا', translit: 'tasharrafna', options: [
        { text: '만나서 반갑습니다', correct: true },
        { text: '어떻게 지내요?', correct: false },
        { text: '고마워요', correct: false },
      ]},
    ],
  },
  'EG-2': {
    title: '숫자와 시간',
    country: 'EG', lang: 'العربية',
    exercises: [
      { type: 'translate-to', prompt: '"둘"을 아랍어로', options: [
        { text: 'اثنان', translit: 'ithnaan', correct: true },
        { text: 'ثلاثة', translit: 'thalatha', correct: false },
        { text: 'أربعة', translit: "arba'a", correct: false },
        { text: 'خمسة', translit: 'khamsa', correct: false },
      ]},
      { type: 'match', prompt: '숫자 짝짓기', pairs: [
        { native: 'ثلاثة', translit: 'thalatha', meaning: '3' },
        { native: 'سبعة', translit: "sab'a", meaning: '7' },
        { native: 'عشرة', translit: "'ashara", meaning: '10' },
      ]},
      { type: 'listen-pick', prompt: '"كم الساعة؟"의 뜻은?', native: 'كم الساعة؟', translit: "kam as-sa'a", options: [
        { text: '몇 시예요?', correct: true },
        { text: '얼마예요?', correct: false },
        { text: '어디예요?', correct: false },
      ]},
      { type: 'match', prompt: '시간 단어', pairs: [
        { native: 'اليوم', translit: 'al-yawm', meaning: '오늘' },
        { native: 'غدا', translit: 'ghadan', meaning: '내일' },
        { native: 'أمس', translit: 'ams', meaning: '어제' },
      ]},
      { type: 'translate-to', prompt: '"오늘"을 아랍어로', options: [
        { text: 'اليوم', translit: 'al-yawm', correct: true },
        { text: 'غدا', translit: 'ghadan', correct: false },
        { text: 'أمس', translit: 'ams', correct: false },
        { text: 'الآن', translit: 'al-aan', correct: false },
      ]},
      { type: 'fill-blank', prompt: '"عمري ___ سنة" (나는 15살)', options: [
        { text: 'خمسة عشر', correct: true },
        { text: 'خمسة', correct: false },
        { text: 'عشرة', correct: false },
        { text: 'عشرون', correct: false },
      ]},
      { type: 'translate-to', prompt: '"내일"을 아랍어로', options: [
        { text: 'غدا', translit: 'ghadan', correct: true },
        { text: 'اليوم', translit: 'al-yawm', correct: false },
        { text: 'أمس', translit: 'ams', correct: false },
        { text: 'الآن', translit: 'al-aan', correct: false },
      ]},
      { type: 'translate-to', prompt: '"열"을 아랍어로', options: [
        { text: 'عشرة', translit: "'ashara", correct: true },
        { text: 'تسعة', translit: "tis'a", correct: false },
        { text: 'ثمانية', translit: 'thamaniya', correct: false },
        { text: 'سبعة', translit: "sab'a", correct: false },
      ]},
    ],
  },

  // ═══════════════════════════ 🇲🇳 MONGOLIAN ═══════════════════════════
  'MN-1': {
    title: 'Сайн байна уу',
    country: 'MN', lang: 'Монгол хэл',
    exercises: [
      { type: 'translate-to', prompt: '"안녕하세요"를 몽골어로', options: [
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
      { type: 'match', prompt: '단어 짝짓기', pairs: [
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
      { type: 'translate-to', prompt: '"미안해요"를 몽골어로', options: [
        { text: 'Уучлаарай', translit: 'uuchlaarai', correct: true },
        { text: 'Баярлалаа', translit: 'bayarlalaa', correct: false },
        { text: 'Сайн', translit: 'sain', correct: false },
        { text: 'Баяртай', translit: 'bayartai', correct: false },
      ]},
      { type: 'match', prompt: '기본 인사', pairs: [
        { native: 'Өглөөний мэнд', translit: 'uglurnii mend', meaning: '좋은 아침' },
        { native: 'Оройн мэнд', translit: 'oroin mend', meaning: '좋은 저녁' },
        { native: 'Баяртай', translit: 'bayartai', meaning: '안녕히 가세요' },
      ]},
      { type: 'translate-to', prompt: '"안녕히 가세요"를 몽골어로', options: [
        { text: 'Баяртай', translit: 'bayartai', correct: true },
        { text: 'Сайн байна уу', translit: 'sain baina uu', correct: false },
        { text: 'Баярлалаа', translit: 'bayarlalaa', correct: false },
        { text: 'Тийм', translit: 'tiim', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Танилцахад таатай байна"의 뜻은?', native: 'Танилцахад таатай байна', translit: 'taniltsakhad taatai baina', options: [
        { text: '만나서 반가워요', correct: true },
        { text: '잘 지내요', correct: false },
        { text: '고맙습니다', correct: false },
      ]},
    ],
  },
  'MN-2': {
    title: '숫자와 가족',
    country: 'MN', lang: 'Монгол хэл',
    exercises: [
      { type: 'translate-to', prompt: '"하나"를 몽골어로', options: [
        { text: 'Нэг', translit: 'neg', correct: true },
        { text: 'Хоёр', translit: 'khoyor', correct: false },
        { text: 'Гурав', translit: 'gurav', correct: false },
        { text: 'Дөрөв', translit: 'duruv', correct: false },
      ]},
      { type: 'match', prompt: '가족 단어', pairs: [
        { native: 'Ээж', translit: 'eej', meaning: '엄마' },
        { native: 'Аав', translit: 'aav', meaning: '아빠' },
        { native: 'Ах', translit: 'akh', meaning: '형/오빠' },
      ]},
      { type: 'listen-pick', prompt: '"Хэдэн настай вэ?"의 뜻은?', native: 'Хэдэн настай вэ?', translit: 'kheden nastai ve', options: [
        { text: '몇 살이에요?', correct: true },
        { text: '어디 가요?', correct: false },
        { text: '뭐 해요?', correct: false },
      ]},
      { type: 'translate-to', prompt: '"다섯"을 몽골어로', options: [
        { text: 'Тав', translit: 'tav', correct: true },
        { text: 'Зургаа', translit: 'zurgaa', correct: false },
        { text: 'Долоо', translit: 'doloo', correct: false },
        { text: 'Найм', translit: 'naim', correct: false },
      ]},
      { type: 'match', prompt: '가족 관계', pairs: [
        { native: 'Эгч', translit: 'egch', meaning: '누나/언니' },
        { native: 'Дүү', translit: 'duu', meaning: '동생' },
        { native: 'Өвөө', translit: 'uvuu', meaning: '할아버지' },
      ]},
      { type: 'fill-blank', prompt: '"Би ___ настай" (나는 15살)', options: [
        { text: 'арван таван', correct: true },
        { text: 'тав', correct: false },
        { text: 'арав', correct: false },
        { text: 'хорь', correct: false },
      ]},
      { type: 'translate-to', prompt: '"열"을 몽골어로', options: [
        { text: 'Арав', translit: 'arav', correct: true },
        { text: 'Ес', translit: 'yes', correct: false },
        { text: 'Найм', translit: 'naim', correct: false },
        { text: 'Долоо', translit: 'doloo', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Танилц"의 뜻은?', native: 'Танилц', translit: 'taniltsah', options: [
        { text: '소개해요', correct: true },
        { text: '가요', correct: false },
        { text: '먹어요', correct: false },
      ]},
    ],
  },
  'MN-3': {
    title: '몽골 문화',
    country: 'MN', lang: 'Монгол хэл',
    exercises: [
      { type: 'translate-to', prompt: '"물"을 몽골어로', options: [
        { text: 'Ус', translit: 'us', correct: true },
        { text: 'Цай', translit: 'tsai', correct: false },
        { text: 'Сүү', translit: 'suu', correct: false },
        { text: 'Пиво', translit: 'piva', correct: false },
      ]},
      { type: 'match', prompt: '몽골 문화 단어', pairs: [
        { native: 'Гэр', translit: 'ger', meaning: '게르 (전통 텐트)' },
        { native: 'Морь', translit: 'mor', meaning: '말' },
        { native: 'Дэл', translit: 'del', meaning: '전통 옷' },
      ]},
      { type: 'translate-to', prompt: '"맛있어요"를 몽골어로', options: [
        { text: 'Амттай', translit: 'amttai', correct: true },
        { text: 'Муу', translit: 'muu', correct: false },
        { text: 'Хүйтэн', translit: 'khuiten', correct: false },
        { text: 'Том', translit: 'tom', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Их сайхан!"의 뜻은?', native: 'Их сайхан!', translit: 'ikh saikhan', options: [
        { text: '정말 좋아요!', correct: true },
        { text: '어디예요?', correct: false },
        { text: '얼마예요?', correct: false },
      ]},
      { type: 'match', prompt: '자연 단어', pairs: [
        { native: 'Тал', translit: 'tal', meaning: '초원' },
        { native: 'Уул', translit: 'uul', meaning: '산' },
        { native: 'Нар', translit: 'nar', meaning: '태양' },
      ]},
      { type: 'fill-blank', prompt: '"Би ___ уулгад амьдардаг" (게르에 살아요)', options: [
        { text: 'гэрт', correct: true },
        { text: 'усанд', correct: false },
        { text: 'моринд', correct: false },
        { text: 'нарандА', correct: false },
      ]},
      { type: 'translate-to', prompt: '"축제"를 몽골어로', options: [
        { text: 'Наадам', translit: 'naadam', correct: true },
        { text: 'Гэр', translit: 'ger', correct: false },
        { text: 'Морь', translit: 'mor', correct: false },
        { text: 'Тал', translit: 'tal', correct: false },
      ]},
      { type: 'listen-pick', prompt: '"Баярлалаа их сайхан байна"의 뜻은?', native: 'Баярлалаа их сайхан байна', translit: 'bayarlalaa ikh saikhan baina', options: [
        { text: '고마워요, 정말 좋아요', correct: true },
        { text: '만나서 반가워요', correct: false },
        { text: '안녕히 가세요', correct: false },
      ]},
    ],
  },
};

// Merge into LESSON_CONTENT (which was defined in screens_lesson.jsx)
if (typeof LESSON_CONTENT !== 'undefined') {
  Object.assign(LESSON_CONTENT, EXPANDED_LESSONS);
}

// Update LEARNING_PATHS to have more units
const EXPANDED_PATHS = {
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
  ],
  US: [
    { unit: 1, title: 'Basic Greetings' },
    { unit: 2, title: 'Numbers & Time' },
    { unit: 3, title: 'Food & Drinks' },
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
    { unit: 2, title: '음식과 시장' },
    { unit: 3, title: '태국 문화' },
  ],
  BR: [
    { unit: 1, title: 'Olá, Obrigado' },
    { unit: 2, title: '숫자와 시간' },
    { unit: 3, title: '브라질 문화' },
  ],
  IN: [
    { unit: 1, title: 'नमस्ते' },
    { unit: 2, title: '숫자와 가족' },
    { unit: 3, title: '인도 문화' },
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

if (typeof LEARNING_PATHS !== 'undefined') {
  for (const key of Object.keys(EXPANDED_PATHS)) {
    LEARNING_PATHS[key] = EXPANDED_PATHS[key];
  }
}
