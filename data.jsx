// 이음 - Mock data

// Personality test questions (MBTI style A/B)
const PERSONALITY_Q = [
  { q: '새로운 친구를 만났을 때 나는...', a: '먼저 다가가 말을 건다', b: '상대가 말 걸어주길 기다린다' },
  { q: '주말에 시간이 생기면?', a: '친구들과 밖에서 활동', b: '집에서 조용히 취미 활동' },
  { q: '언어를 배울 때 나는...', a: '실전 대화부터 부딪혀본다', b: '문법과 이론을 먼저 익힌다' },
  { q: '여행을 계획한다면?', a: '즉흥적으로 발길 닿는 대로', b: '꼼꼼히 계획을 세워서' },
  { q: '문화 차이를 만나면?', a: '흥미롭게 받아들이고 시도', b: '이해될 때까지 관찰한다' },
  { q: '대화 중 침묵이 흐를 때?', a: '내가 어색함을 깬다', b: '자연스럽게 흐르도록 둔다' },
  { q: '새로운 음식을 볼 때?', a: '뭐든 일단 먹어본다', b: '알아보고 나서 시도한다' },
  { q: '외국인 친구와의 관계는?', a: '깊고 오래가는 소수', b: '넓고 다양하게 여러 명' },
];

// Match candidates
const MATCH_CANDIDATES = [
  { name: 'Sakura Tanaka', country: 'JP', grade: 'high2', hobbies: ['만화', 'K-Pop'], match: 94 },
  { name: 'Ethan Miller', country: 'US', grade: 'mid3', hobbies: ['농구', '영화'], match: 89 },
  { name: 'Léa Dubois', country: 'FR', grade: 'high1', hobbies: ['그림', '베이킹'], match: 87 },
  { name: 'Minh Nguyen', country: 'VN', grade: 'high3', hobbies: ['축구', '요리'], match: 82 },
  { name: 'Bat-Erdene', country: 'MN', grade: 'high2', hobbies: ['축구', '음악'], match: 85 },
];

// Friends list — a few sample friends the user has made so we can demo the chat flow
// New account — you start with no friends and no conversations.
// Everything in the directory is a *recommendation* you can add later.
const FRIENDS = [];

// Chats you're already having (empty on day 1). Once you add someone, they land here.
const MY_CHATS = [];

// Searchable global directory — every country (12), every grade (elem4 → uni4).
// About 4 students per grade so any grade you pick has plenty of peers.
// No "mutual friends" — you're brand new here.
const USER_DIRECTORY = [
  // ── 초등학교 4학년 ──
  { name: 'Sora Ito',        username: 'sora.ito',    country: 'JP', grade: 'elem4', hobbies: ['그림', '애니메이션'], ptype: 'FOREST' },
  { name: 'Leo Parker',      username: 'leo.p',       country: 'US', grade: 'elem4', hobbies: ['축구', '게임'], ptype: 'LIGHTHOUSE' },
  { name: 'Camille Petit',   username: 'camille.p',   country: 'FR', grade: 'elem4', hobbies: ['그림', '베이킹'], ptype: 'DOODLE' },
  { name: 'Linh Dao',        username: 'linh.dao',    country: 'VN', grade: 'elem4', hobbies: ['음악', '그림'], ptype: 'GARDEN' },

  // ── 초등학교 5학년 ──
  { name: 'Hana Kimura',     username: 'hana_k',      country: 'JP', grade: 'elem5', hobbies: ['그림', '게임'], ptype: 'SPARK' },
  { name: 'Aisha Patel',     username: 'aisha.p',     country: 'IN', grade: 'elem5', hobbies: ['댄스', '그림'], ptype: 'ONDOL' },
  { name: 'Chloé Martin',    username: 'chloe.m',     country: 'FR', grade: 'elem5', hobbies: ['베이킹', '그림'], ptype: 'SHADOW' },
  { name: 'Mateo Rojas',     username: 'mateo.r',     country: 'ES', grade: 'elem5', hobbies: ['축구', '게임'], ptype: 'ONDOL' },

  // ── 초등학교 6학년 ──
  { name: 'Noah Wilson',     username: 'noah.w',      country: 'US', grade: 'elem6', hobbies: ['축구', '게임'], ptype: 'DOODLE' },
  { name: 'Mai Pham',        username: 'mai.p',       country: 'VN', grade: 'elem6', hobbies: ['음악', '그림'], ptype: 'MAVERICK' },
  { name: 'Nara Batbayar',   username: 'nara.b',      country: 'MN', grade: 'elem6', hobbies: ['말타기', '자연'], ptype: 'DRUM' },
  { name: 'Youssef Ali',     username: 'youssef.a',   country: 'EG', grade: 'elem6', hobbies: ['축구', '그림'], ptype: 'OBSERVER' },

  // ── 중학교 1학년 ──
  { name: 'Rin Nakamura',    username: 'rin.n',       country: 'JP', grade: 'mid1', hobbies: ['만화', 'K-Pop'], ptype: 'WAVE' },
  { name: 'Amira Hassan',    username: 'amira.h',     country: 'EG', grade: 'mid1', hobbies: ['독서', '그림'], ptype: 'DRUM' },
  { name: 'Tom Becker',      username: 'tom.b',       country: 'DE', grade: 'mid1', hobbies: ['게임', '축구'], ptype: 'SAGE' },
  { name: 'Ploy Chai',       username: 'ploy.c',      country: 'TH', grade: 'mid1', hobbies: ['댄스', '베이킹'], ptype: 'GARDEN' },

  // ── 중학교 2학년 ──
  { name: 'Lucas Silva',     username: 'lucas.s',     country: 'BR', grade: 'mid2', hobbies: ['축구', '댄스'], ptype: 'PILLAR' },
  { name: 'Lena Schmidt',    username: 'lena.s',      country: 'DE', grade: 'mid2', hobbies: ['음악', '애니메이션'], ptype: 'DOODLE' },
  { name: 'Kanya Sri',       username: 'kanya.s',     country: 'TH', grade: 'mid2', hobbies: ['요리', '음악'], ptype: 'SUNSHINE' },
  { name: 'Ethan Miller',    username: 'ethan.m',     country: 'US', grade: 'mid2', hobbies: ['농구', '영화'], ptype: 'DOODLE' },

  // ── 중학교 3학년 ──
  { name: 'Priya Patel',     username: 'priya.p',     country: 'IN', grade: 'mid3', hobbies: ['그림', '독서'], ptype: 'PILLAR' },
  { name: 'Nomin Tuya',      username: 'nomin.t',     country: 'MN', grade: 'mid3', hobbies: ['K-Pop', '그림'], ptype: 'MAVERICK' },
  { name: 'Diego Ruiz',      username: 'diego.r',     country: 'ES', grade: 'mid3', hobbies: ['축구', '게임'], ptype: 'BRIDGE' },
  { name: 'Emma Rousseau',   username: 'emma_fr',     country: 'FR', grade: 'mid3', hobbies: ['베이킹', '그림'], ptype: 'OBSERVER' },

  // ── 고등학교 1학년 ──
  { name: 'Yui Watanabe',    username: 'yui_w',       country: 'JP', grade: 'high1', hobbies: ['만화', 'K-Pop'], ptype: 'DOODLE' },
  { name: 'Léa Dubois',      username: 'lea_d',       country: 'FR', grade: 'high1', hobbies: ['그림', '베이킹'], ptype: 'SUNSHINE' },
  { name: 'Mia Johnson',     username: 'mia.j',       country: 'US', grade: 'high1', hobbies: ['영화', 'K-Pop'], ptype: 'CLOCK' },
  { name: 'Linh Tran',       username: 'linh.t',      country: 'VN', grade: 'high1', hobbies: ['요리', 'K-Pop'], ptype: 'PILLAR' },

  // ── 고등학교 2학년 ──
  { name: 'Sakura Tanaka',   username: 'sakura_t',    country: 'JP', grade: 'high2', hobbies: ['만화', 'K-Pop'], ptype: 'ARTIST' },
  { name: 'Hans Weber',      username: 'hans_w',      country: 'DE', grade: 'high2', hobbies: ['게임', '축구'], ptype: 'SAGE' },
  { name: 'Bat-Erdene',      username: 'baterdene',   country: 'MN', grade: 'high2', hobbies: ['축구', '음악'], ptype: 'DRUM' },
  { name: 'Arjun Mehta',     username: 'arjun.m',     country: 'IN', grade: 'high2', hobbies: ['게임', '영화'], ptype: 'PILLAR' },

  // ── 고등학교 3학년 ──
  { name: 'Kenji Sato',      username: 'kenji.s',     country: 'JP', grade: 'high3', hobbies: ['게임', '음악'], ptype: 'LIGHTHOUSE' },
  { name: 'Jake Thompson',   username: 'jake.t',      country: 'US', grade: 'high3', hobbies: ['농구', '게임'], ptype: 'ARROW' },
  { name: 'Minh Nguyen',     username: 'minh.nguyen', country: 'VN', grade: 'high3', hobbies: ['축구', '요리'], ptype: 'DRUM' },
  { name: 'Pablo Moreno',    username: 'pablo.m',     country: 'ES', grade: 'high3', hobbies: ['축구', '음악'], ptype: 'ARROW' },

  // ── 대학교 1학년 ──
  { name: 'Sofia García',    username: 'sofia.g',     country: 'ES', grade: 'uni1', hobbies: ['여행', 'K-Pop'], ptype: 'WAVE' },
  { name: 'Bao Nguyen',      username: 'bao.n',       country: 'VN', grade: 'uni1', hobbies: ['게임', '음악'], ptype: 'SHADOW' },
  { name: 'Nina Braun',      username: 'nina.b',      country: 'DE', grade: 'uni1', hobbies: ['사진', '여행'], ptype: 'ONDOL' },
  { name: 'Jisoo Han',       username: 'jisoo.h',     country: 'KR', grade: 'uni1', hobbies: ['카페투어', '음악'], ptype: 'ONDOL' },

  // ── 대학교 2학년 ──
  { name: 'Sora Park',       username: 'sora.p',      country: 'KR', grade: 'uni2', hobbies: ['독서', '카페투어'], ptype: 'FOREST' },
  { name: 'Julia Weber',     username: 'julia.w',     country: 'DE', grade: 'uni2', hobbies: ['여행', '사진'], ptype: 'ONDOL' },
  { name: 'Liam Brown',      username: 'liam.b',      country: 'US', grade: 'uni2', hobbies: ['운동', '영화'], ptype: 'CLOCK' },
  { name: 'Ana Costa',       username: 'ana.c',       country: 'BR', grade: 'uni2', hobbies: ['댄스', '음악'], ptype: 'PILLAR' },

  // ── 대학교 3학년 ──
  { name: 'Fatima Ali',      username: 'fatima.a',    country: 'EG', grade: 'uni3', hobbies: ['독서', '언어'], ptype: 'WAVE' },
  { name: 'Ravi Sharma',     username: 'ravi.s',      country: 'IN', grade: 'uni3', hobbies: ['언어', '여행'], ptype: 'WAVE' },
  { name: 'Clara Moreau',    username: 'clara.m',     country: 'FR', grade: 'uni3', hobbies: ['사진', '그림'], ptype: 'COMPASS' },
  { name: 'Thi Nguyen',      username: 'thi.n',       country: 'VN', grade: 'uni3', hobbies: ['요리', '언어'], ptype: 'SUNSHINE' },

  // ── 대학교 4학년 ──
  { name: 'Haruto Mori',     username: 'haruto.m',    country: 'JP', grade: 'uni4', hobbies: ['언어', '여행'], ptype: 'DRUM' },
  { name: 'Grace Lee',       username: 'grace.l',     country: 'US', grade: 'uni4', hobbies: ['언어', '독서'], ptype: 'ONDOL' },
  { name: 'Felix Wagner',    username: 'felix.w',     country: 'DE', grade: 'uni4', hobbies: ['음악', '여행'], ptype: 'FOREST' },
  { name: 'Malee Sri',       username: 'malee.s',     country: 'TH', grade: 'uni4', hobbies: ['요리', '언어'], ptype: 'PILLAR' },
];

// Teachers list
const TEACHERS = [
  { name: 'Yuki Sensei', country: 'JP', subject: '일본어 회화', rating: 4.9, reviews: 234, next: '오늘 오후 4시' },
  { name: 'Emma Watson', country: 'US', subject: '영어 스피킹', rating: 4.8, reviews: 512, next: '오늘 오후 7시' },
  { name: 'Pierre Martin', country: 'FR', subject: '프랑스어 기초', rating: 4.7, reviews: 128, next: '내일 오전 10시' },
  { name: 'Linh Pham', country: 'VN', subject: '베트남어 여행회화', rating: 4.9, reviews: 87, next: '내일 오후 3시' },
  { name: 'Klaus Müller', country: 'DE', subject: '독일어 문법', rating: 4.6, reviews: 156, next: '모레 오후 5시' },
];

// AI Self-study lessons (Duolingo style) — user starts from scratch
const LESSONS = {
  JP: [
    { title: '인사와 자기소개', progress: 0, xp: 0, unit: 1, active: true },
    { title: '숫자와 시간', progress: 0, xp: 0, unit: 2, locked: true },
    { title: '음식 주문하기', progress: 0, xp: 0, unit: 3, locked: true },
    { title: '길 묻기', progress: 0, xp: 0, unit: 4, locked: true },
    { title: '전통 문화', progress: 0, xp: 0, unit: 5, locked: true },
  ],
};

// Culture kits (shop items)
const CULTURE_KITS = [
  { country: 'JP', title: '일본 문화 키트', desc: '오리가미 · 다도 · 젓가락', items: 8, price: 29900, popular: true },
  { country: 'FR', title: '프랑스 문화 키트', desc: '마카롱 · 에펠탑 · 향수', items: 6, price: 34900 },
  { country: 'VN', title: '베트남 문화 키트', desc: '아오자이 · 논라 · 반미', items: 7, price: 27900, popular: true },
  { country: 'BR', title: '브라질 문화 키트', desc: '삼바 · 카포에라 · 파고데', items: 6, price: 32900 },
  { country: 'IN', title: '인도 문화 키트', desc: '헤나 · 향신료 · 사리', items: 9, price: 36900 },
  { country: 'EG', title: '이집트 문화 키트', desc: '파피루스 · 향유 · 상형', items: 7, price: 33900 },
  { country: 'DE', title: '독일 문화 키트', desc: '쿠쿠시계 · 프레츨 · 맥주잔', items: 6, price: 31900 },
  { country: 'ES', title: '스페인 문화 키트', desc: '플라멩코 · 부채 · 타파스', items: 7, price: 30900 },
  { country: 'TH', title: '태국 문화 키트', desc: '실크 · 향신료 · 인형', items: 8, price: 28900 },
  { country: 'US', title: '미국 문화 키트', desc: '베이스볼 · 재즈 · 다이너', items: 6, price: 35900 },
  { country: 'MN', title: '몽골 문화 키트', desc: '게르 미니어처 · 마유주 · 델', items: 7, price: 32900 },
];

// Achievements — unlocked through real in-app activity.
// `key` is an id the app bumps; `goal` is the count needed. `icon` is the emoji.
const ACHIEVEMENTS = [
  { key: 'first_match', icon: '🌏', goal: 1,
    title: { ko:'첫 만남', en:'First Match', ja:'初めての出会い', zh:'第一次相遇', es:'Primer Encuentro', fr:'Première Rencontre', de:'Erstes Treffen', vi:'Lần Gặp Đầu', th:'การพบกันครั้งแรก', pt:'Primeiro Encontro', hi:'पहली मुलाकात', ar:'أول لقاء' },
    desc: { ko:'첫 매칭 성공', en:'Match with someone for the first time', ja:'初めてのマッチング', zh:'首次成功匹配', es:'Empareja por primera vez', fr:'Trouve ton premier match', de:'Erstes Match erfolgreich', vi:'Ghép đôi lần đầu', th:'จับคู่ครั้งแรก', pt:'Faça seu primeiro match', hi:'पहली बार मैच करें', ar:'أول مطابقة' }, track: 'matches' },
  { key: 'first_chat', icon: '💬', goal: 1,
    title: { ko:'첫 대화', en:'First Chat', ja:'初チャット', zh:'第一次聊天', es:'Primer Chat', fr:'Premier Chat', de:'Erster Chat', vi:'Trò Chuyện Đầu', th:'แชทแรก', pt:'Primeiro Chat', hi:'पहली चैट', ar:'أول محادثة' },
    desc: { ko:'첫 메시지 보내기', en:'Send your first message', ja:'初めてメッセージを送る', zh:'发出第一条消息', es:'Envía tu primer mensaje', fr:'Envoie ton premier message', de:'Sende deine erste Nachricht', vi:'Gửi tin nhắn đầu tiên', th:'ส่งข้อความแรก', pt:'Envie sua primeira mensagem', hi:'पहला संदेश भेजें', ar:'أرسل رسالتك الأولى' }, track: 'chats' },
  { key: 'chatty', icon: '🗣️', goal: 50,
    title: { ko:'수다쟁이', en:'Chatty', ja:'おしゃべり', zh:'聊天达人', es:'Charlatán', fr:'Bavard', de:'Gesprächig', vi:'Người Nói Nhiều', th:'นักคุย', pt:'Tagarela', hi:'बातूनी', ar:'ثرثار' },
    desc: { ko:'메시지 50개 보내기', en:'Send 50 messages', ja:'メッセージを50通送る', zh:'发送50条消息', es:'Envía 50 mensajes', fr:'Envoie 50 messages', de:'Sende 50 Nachrichten', vi:'Gửi 50 tin nhắn', th:'ส่ง 50 ข้อความ', pt:'Envie 50 mensagens', hi:'50 संदेश भेजें', ar:'أرسل 50 رسالة' }, track: 'messages' },
  { key: 'first_lesson', icon: '🌱', goal: 1,
    title: { ko:'언어 새싹', en:'Language Sprout', ja:'言語の芽', zh:'语言新芽', es:'Brote de Idioma', fr:'Pousse de Langue', de:'Sprachkeim', vi:'Mầm Ngôn Ngữ', th:'ต้นกล้าภาษา', pt:'Broto do Idioma', hi:'भाषा का अंकुर', ar:'برعم اللغة' },
    desc: { ko:'첫 레슨 완료', en:'Complete your first lesson', ja:'初レッスン完了', zh:'完成第一节课', es:'Completa tu primera lección', fr:'Termine ta première leçon', de:'Erste Lektion abschließen', vi:'Hoàn thành bài học đầu tiên', th:'เรียนจบบทแรก', pt:'Complete sua primeira lição', hi:'पहला पाठ पूरा करें', ar:'أكمل درسك الأول' }, track: 'lessons' },
  { key: 'lesson_5', icon: '📖', goal: 5,
    title: { ko:'꾸준한 학습자', en:'Steady Learner', ja:'継続学習者', zh:'坚持学习者', es:'Aprendiz Constante', fr:'Apprenant Régulier', de:'Ausdauernder Lerner', vi:'Người Học Kiên Trì', th:'ผู้เรียนสม่ำเสมอ', pt:'Aprendiz Constante', hi:'नियमित शिक्षार्थी', ar:'متعلم مثابر' },
    desc: { ko:'레슨 5개 완료', en:'Complete 5 lessons', ja:'レッスン5つ完了', zh:'完成5节课', es:'Completa 5 lecciones', fr:'Termine 5 leçons', de:'5 Lektionen abschließen', vi:'Hoàn thành 5 bài học', th:'เรียนจบ 5 บท', pt:'Complete 5 lições', hi:'5 पाठ पूरे करें', ar:'أكمل 5 دروس' }, track: 'lessons' },
  { key: 'lesson_15', icon: '⭐', goal: 15,
    title: { ko:'언어 마스터', en:'Language Master', ja:'言語マスター', zh:'语言大师', es:'Maestro del Idioma', fr:'Maître des Langues', de:'Sprachmeister', vi:'Bậc Thầy Ngôn Ngữ', th:'ปรมาจารย์ภาษา', pt:'Mestre do Idioma', hi:'भाषा मास्टर', ar:'سيد اللغة' },
    desc: { ko:'레슨 15개 완료', en:'Complete 15 lessons', ja:'レッスン15つ完了', zh:'完成15节课', es:'Completa 15 lecciones', fr:'Termine 15 leçons', de:'15 Lektionen abschließen', vi:'Hoàn thành 15 bài học', th:'เรียนจบ 15 บท', pt:'Complete 15 lições', hi:'15 पाठ पूरे करें', ar:'أكمل 15 درسًا' }, track: 'lessons' },
  { key: 'first_kit', icon: '🎁', goal: 1,
    title: { ko:'첫 컬처킷', en:'First Culture Kit', ja:'初めての文化キット', zh:'第一个文化包', es:'Primer Kit Cultural', fr:'Premier Kit Culturel', de:'Erstes Kultur-Kit', vi:'Bộ Văn Hóa Đầu Tiên', th:'ชุดวัฒนธรรมแรก', pt:'Primeiro Kit Cultural', hi:'पहला संस्कृति किट', ar:'أول طقم ثقافي' }, 
    desc: { ko:'컬처킷 QR 등록', en:'Register a culture kit via QR', ja:'文化キットをQR登録', zh:'扫码注册文化包', es:'Registra un kit con QR', fr:'Enregistre un kit via QR', de:'Registriere ein Kit per QR', vi:'Đăng ký bộ văn hóa bằng QR', th:'ลงทะเบียนชุดวัฒนธรรมด้วย QR', pt:'Registre um kit via QR', hi:'QR से किट रजिस्टर करें', ar:'سجّل طقمًا عبر رمز QR' }, track: 'kits' },
  { key: 'kits_5', icon: '🏆', goal: 5,
    title: { ko:'문화 컬렉터', en:'Culture Collector', ja:'文化コレクター', zh:'文化收藏家', es:'Coleccionista Cultural', fr:'Collectionneur Culturel', de:'Kultursammler', vi:'Nhà Sưu Tầm Văn Hóa', th:'นักสะสมวัฒนธรรม', pt:'Colecionador Cultural', hi:'संस्कृति संग्रहकर्ता', ar:'جامع الثقافات' },
    desc: { ko:'컬처킷 5개 수집', en:'Collect 5 culture kits', ja:'文化キット5つ収集', zh:'收集5个文化包', es:'Reúne 5 kits culturales', fr:'Collectionne 5 kits', de:'Sammle 5 Kits', vi:'Sưu tầm 5 bộ văn hóa', th:'สะสม 5 ชุด', pt:'Colete 5 kits', hi:'5 किट इकट्ठा करें', ar:'اجمع 5 أطقم' }, track: 'kits' },
  { key: 'friends_5', icon: '👑', goal: 5,
    title: { ko:'이음 인싸', en:'Ieum Socialite', ja:'イウムの人気者', zh:'人气王', es:'Popular en Ieum', fr:'Populaire sur Ieum', de:'Beliebt bei Ieum', vi:'Người Nổi Tiếng Ieum', th:'คนดังแห่ง Ieum', pt:'Popular no Ieum', hi:'लोकप्रिय', ar:'اجتماعي' },
    desc: { ko:'친구 5명 만들기', en:'Make 5 friends', ja:'友達を5人作る', zh:'交到5个朋友', es:'Haz 5 amigos', fr:'Fais-toi 5 amis', de:'Finde 5 Freunde', vi:'Kết 5 người bạn', th:'มีเพื่อน 5 คน', pt:'Faça 5 amigos', hi:'5 दोस्त बनाएँ', ar:'كوّن 5 أصدقاء' }, track: 'friends' },
  { key: 'profile_done', icon: '✨', goal: 1,
    title: { ko:'나를 알리기', en:'Introduce Yourself', ja:'自己紹介', zh:'介绍自己', es:'Preséntate', fr:'Présente-toi', de:'Stell dich vor', vi:'Giới Thiệu Bản Thân', th:'แนะนำตัว', pt:'Apresente-se', hi:'अपना परिचय दें', ar:'قدّم نفسك' },
    desc: { ko:'프로필 완성하기', en:'Complete your profile', ja:'プロフィール完成', zh:'完善个人资料', es:'Completa tu perfil', fr:'Complète ton profil', de:'Vervollständige dein Profil', vi:'Hoàn thiện hồ sơ', th:'กรอกโปรไฟล์ให้ครบ', pt:'Complete seu perfil', hi:'प्रोफ़ाइल पूरा करें', ar:'أكمل ملفك الشخصي' }, track: 'profileDone' },
  { key: 'streak_3', icon: '🔥', goal: 3,
    title: { ko:'연속 학습 3일', en:'3-Day Streak', ja:'3日連続', zh:'连续3天', es:'Racha de 3 Días', fr:'Série de 3 Jours', de:'3-Tage-Serie', vi:'Chuỗi 3 Ngày', th:'ต่อเนื่อง 3 วัน', pt:'Sequência de 3 Dias', hi:'3 दिन की स्ट्रीक', ar:'سلسلة 3 أيام' },
    desc: { ko:'3일 연속 학습', en:'Learn 3 days in a row', ja:'3日連続学習', zh:'连续学习3天', es:'Aprende 3 días seguidos', fr:'Apprends 3 jours de suite', de:'Lerne 3 Tage hintereinander', vi:'Học 3 ngày liên tiếp', th:'เรียน 3 วันติด', pt:'Estude 3 dias seguidos', hi:'3 दिन लगातार सीखें', ar:'تعلّم 3 أيام متتالية' }, track: 'days' },
  { key: 'polyglot', icon: '🌍', goal: 3,
    title: { ko:'다국어 탐험가', en:'Multilingual Explorer', ja:'多言語探検家', zh:'多语言探险家', es:'Explorador Multilingüe', fr:'Explorateur Multilingue', de:'Mehrsprachiger Entdecker', vi:'Nhà Thám Hiểm Đa Ngôn Ngữ', th:'นักสำรวจหลายภาษา', pt:'Explorador Multilíngue', hi:'बहुभाषी खोजी', ar:'مستكشف متعدد اللغات' },
    desc: { ko:'3개 언어 학습 시작', en:'Start learning 3 languages', ja:'3言語を学び始める', zh:'开始学习3种语言', es:'Empieza 3 idiomas', fr:'Commence 3 langues', de:'Starte 3 Sprachen', vi:'Bắt đầu học 3 ngôn ngữ', th:'เริ่มเรียน 3 ภาษา', pt:'Comece 3 idiomas', hi:'3 भाषाएँ शुरू करें', ar:'ابدأ 3 لغات' }, track: 'langs' },
];

// Live activity counters — the app bumps these as the user does things.
const USER_STATS = {
  matches: 0,     // times matched
  chats: 0,       // conversation threads started
  messages: 0,    // messages sent
  lessons: 0,     // lessons completed
  kits: 0,        // culture kits registered
  friends: 0,     // friends made (starts at FRIENDS.length)
  profileDone: 0, // 1 once profile edited
  days: 0,        // consecutive learning days
  langs: 0,       // distinct languages started
};

// Which language courses the user has started (for the polyglot badge)
const STARTED_LANGS = new Set();

function bumpStat(key, amount = 1) {
  if (!(key in USER_STATS)) return false;
  USER_STATS[key] += amount;
  return true;
}

// Returns the achievement entries with live `progress`/`earned` filled in.
function getAchievements() {
  return ACHIEVEMENTS.map(a => {
    const current = Math.min(USER_STATS[a.track] || 0, a.goal);
    return {
      ...a,
      progress: current,
      total: a.goal,
      earned: current >= a.goal,
    };
  });
}

// User profile — filled in during onboarding (these are fallbacks)
const USER = {
  name: '',
  handle: '',
  country: 'KR',
  grade: 'high2',
  interests_lang: [],
  interests_country: [],
  hobbies: [],
  favorite_food: [],
  streak: 0,
  xp: 0,
  level: 1,
};

// Chat messages for video call
const CHAT_MOCK = [
  { from: 'them', text: 'こんにちは！はじめまして', translation: '안녕! 처음 뵙겠습니다', time: '방금' },
  { from: 'me', text: '안녕하세요! 반가워요 😊', time: '방금' },
  { from: 'them', text: 'K-Popが大好き！好きなグループは？', translation: 'K-Pop 정말 좋아해요! 좋아하는 그룹은?', time: '1분 전' },
];

Object.assign(window, {
  PERSONALITY_Q, MATCH_CANDIDATES, FRIENDS, MY_CHATS, USER_DIRECTORY, TEACHERS, LESSONS,
  CULTURE_KITS, ACHIEVEMENTS, USER, CHAT_MOCK,
  USER_STATS, STARTED_LANGS, bumpStat, getAchievements,
});
