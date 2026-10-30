// cache-bust: 1789125570047
// 이음 - Personality types & test questions

// Supported UI languages for the test
const LANGUAGES = [
  { code: 'ko', name: '한국어', flag: '🇰🇷', native: '한국어' },
  { code: 'en', name: 'English', flag: '🇺🇸', native: 'English' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', native: '日本語' },
  { code: 'zh', name: '中文', flag: '🇨🇳', native: '中文' },
  { code: 'es', name: 'Español', flag: '🇪🇸', native: 'Español' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', native: 'Français' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', native: 'Deutsch' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳', native: 'Tiếng Việt' },
  { code: 'th', name: 'ภาษาไทย', flag: '🇹🇭', native: 'ภาษาไทย' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', native: 'Português' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', native: 'हिन्दी' },
  { code: 'ar', name: 'العربية', flag: '🇪🇬', native: 'العربية' },
];

// UI strings per language
// Extended for full multilingual onboarding after language selection.
const UI_STRINGS = {
  ko: {
    welcome: '이음에 오신 걸 환영해요',
    welcome_desc: '시작하기 전에 몇 가지 알려주세요',
    feature_match: '전 세계 청소년과 매칭',
    feature_translate: '실시간 번역 대화',
    feature_learn: '언어와 문화 학습',

    name_label: '이름 또는 닉네임',
    name_placeholder: '뭐라고 부르면 될까요?',
    name_title: '이름이 뭐예요?',
    name_desc: '친구들이 부를 이름 또는 닉네임을 알려주세요',
    name_greeting: '👋 만나서 반가워요',

    lang_label: '가장 편한 언어',
    lang_desc: '이 언어로 앱을 사용하고 테스트를 진행할게요',

    username_title: '유저네임을 정해주세요',
    username_desc: '다른 사용자들이 나를 찾을 때 쓰는 아이디예요',
    username_placeholder: '예: jiwoo_k',
    username_too_short: '유저네임은 최소 3글자 이상이어야 해요',
    username_bad_chars: '영문, 숫자, _, . 만 사용 가능해요',
    username_hint: '💡 영문 소문자, 숫자, 언더스코어(_), 점(.)만 가능',

    country_title: '어느 나라에 살아요?',
    country_desc: '내 국가를 알려주면 매칭 정확도가 높아져요',

    interests_title: '어떤 나라에 관심 있어요?',
    interests_desc: '여러 개 골라도 좋아요 · 셀프 스터디에서 이 언어들을 배울 수 있어요',
    interests_selected: '개 국가 선택됨',

    grade_hobbies_title: '마지막으로!',
    grade_hobbies_desc: '학년과 취미를 알려주세요',
    grade_label: '학년',
    grade_placeholder: '학년을 선택하세요',
    hobbies_label: '취미',
    hobbies_selected: '개 선택됨',

    continue: '다음',
    start_test: '테스트 시작하기',
    q_of: '{n}/{total}',
    question: '질문',
    result_title: '당신의 성격 유형은',
    result_desc: '이 성향을 바탕으로 잘 맞는 친구를 찾아드릴게요',
    result_best_match: '나와 잘 맞는 성격',
    result_best_label: 'BEST MATCH',
    start_matching: '앱 시작하기',

    step_labels: ['환영', '언어', '이름', '유저네임', '내 국가', '관심 국가', '학년 · 취미'],
  },
  en: {
    welcome: 'Welcome to Ieum',
    welcome_desc: 'Tell us a little about yourself first',
    feature_match: 'Match with youth worldwide',
    feature_translate: 'Real-time translated chat',
    feature_learn: 'Learn languages & cultures',

    name_label: 'Name or nickname',
    name_placeholder: 'What should we call you?',
    name_title: 'What\'s your name?',
    name_desc: 'Tell us the name or nickname your friends call you',
    name_greeting: '👋 Nice to meet you',

    lang_label: 'Your preferred language',
    lang_desc: 'We\'ll use this language throughout the app',

    username_title: 'Pick a username',
    username_desc: 'This is how other users will find you',
    username_placeholder: 'e.g. jiwoo_k',
    username_too_short: 'Username must be at least 3 characters',
    username_bad_chars: 'Only letters, numbers, _, . allowed',
    username_hint: '💡 Lowercase letters, numbers, underscore (_), and dot (.) only',

    country_title: 'Which country are you from?',
    country_desc: 'Telling us helps us find better matches for you',

    interests_title: 'Which countries are you curious about?',
    interests_desc: 'Pick as many as you like · You\'ll learn these languages in self-study',
    interests_selected: ' selected',

    grade_hobbies_title: 'Last step!',
    grade_hobbies_desc: 'Tell us your grade and hobbies',
    grade_label: 'Grade',
    grade_placeholder: 'Select your grade',
    hobbies_label: 'Hobbies',
    hobbies_selected: ' selected',

    continue: 'Continue',
    start_test: 'Start Test',
    q_of: '{n}/{total}',
    question: 'Question',
    result_title: 'Your personality type is',
    result_desc: 'We\'ll match you with friends who fit this vibe',
    result_best_match: 'Personalities that click with you',
    result_best_label: 'BEST MATCH',
    start_matching: 'Start Using App',

    step_labels: ['Welcome', 'Language', 'Name', 'Username', 'My Country', 'Interests', 'Grade · Hobbies'],
  },
  ja: {
    welcome: 'イウムへようこそ',
    welcome_desc: '始める前に少し教えてください',
    feature_match: '世界中の若者とマッチング',
    feature_translate: 'リアルタイム翻訳チャット',
    feature_learn: '言語と文化を学ぶ',

    name_label: '名前またはニックネーム',
    name_placeholder: 'なんて呼べばいい?',
    name_title: '名前は何ですか?',
    name_desc: '友達に呼ばれる名前を教えてください',
    name_greeting: '👋 はじめまして',

    lang_label: '一番使いやすい言語',
    lang_desc: 'この言語でアプリを使います',

    username_title: 'ユーザー名を決めてください',
    username_desc: '他のユーザーが見つけるためのIDです',
    username_placeholder: '例: jiwoo_k',
    username_too_short: 'ユーザー名は3文字以上必要です',
    username_bad_chars: '英字、数字、_、. のみ使用可能',
    username_hint: '💡 英小文字、数字、アンダースコア(_)、ドット(.)のみ',

    country_title: 'どの国に住んでいますか?',
    country_desc: '国を教えるとマッチング精度が上がります',

    interests_title: '興味のある国は?',
    interests_desc: '複数選択できます · セルフスタディでその言語を学べます',
    interests_selected: 'カ国選択済み',

    grade_hobbies_title: '最後に!',
    grade_hobbies_desc: '学年と趣味を教えてください',
    grade_label: '学年',
    grade_placeholder: '学年を選択',
    hobbies_label: '趣味',
    hobbies_selected: '個選択',

    continue: '次へ',
    start_test: 'テスト開始',
    q_of: '{n}/{total}',
    question: '質問',
    result_title: 'あなたの性格タイプは',
    result_desc: 'このタイプに合う友達を見つけます',
    result_best_match: '相性の良い性格',
    result_best_label: 'BEST MATCH',
    start_matching: 'アプリを始める',

    step_labels: ['ようこそ', '言語', '名前', 'ユーザー名', '国', '興味', '学年 · 趣味'],
  },
  zh: {
    welcome: '欢迎来到 이음',
    welcome_desc: '开始前先告诉我们一些事',
    feature_match: '与全球青少年匹配',
    feature_translate: '实时翻译对话',
    feature_learn: '学习语言与文化',

    name_label: '姓名或昵称',
    name_placeholder: '要怎么称呼你?',
    name_title: '你叫什么名字?',
    name_desc: '告诉我们朋友们叫你的名字',
    name_greeting: '👋 很高兴认识你',

    lang_label: '你最喜欢的语言',
    lang_desc: '整个应用将使用这个语言',

    username_title: '选择一个用户名',
    username_desc: '其他用户通过这个找到你',
    username_placeholder: '例: jiwoo_k',
    username_too_short: '用户名至少需要3个字符',
    username_bad_chars: '仅允许字母、数字、_、.',
    username_hint: '💡 只能使用小写字母、数字、下划线(_)、点(.)',

    country_title: '你住在哪个国家?',
    country_desc: '告诉我们能提高匹配精度',

    interests_title: '你对哪些国家感兴趣?',
    interests_desc: '可以多选 · 你将在自学中学习这些语言',
    interests_selected: '个国家已选',

    grade_hobbies_title: '最后一步!',
    grade_hobbies_desc: '告诉我们你的年级和爱好',
    grade_label: '年级',
    grade_placeholder: '选择年级',
    hobbies_label: '爱好',
    hobbies_selected: '个已选',

    continue: '继续',
    start_test: '开始测试',
    q_of: '{n}/{total}',
    question: '问题',
    result_title: '你的性格类型是',
    result_desc: '我们将为你匹配志同道合的朋友',
    result_best_match: '与你合拍的性格',
    result_best_label: 'BEST MATCH',
    start_matching: '开始使用应用',

    step_labels: ['欢迎', '语言', '姓名', '用户名', '国家', '兴趣', '年级 · 爱好'],
  },
  es: {
    welcome: 'Bienvenido a Ieum',
    welcome_desc: 'Cuéntanos un poco sobre ti primero',
    feature_match: 'Conecta con jóvenes del mundo',
    feature_translate: 'Chat con traducción en vivo',
    feature_learn: 'Aprende idiomas y culturas',

    name_label: 'Nombre o apodo',
    name_placeholder: '¿Cómo te llamamos?',
    name_title: '¿Cuál es tu nombre?',
    name_desc: 'Dinos cómo te llaman tus amigos',
    name_greeting: '👋 Encantado de conocerte',

    lang_label: 'Tu idioma preferido',
    lang_desc: 'Usaremos este idioma en toda la app',

    username_title: 'Elige un nombre de usuario',
    username_desc: 'Así te encontrarán otros usuarios',
    username_placeholder: 'ej. jiwoo_k',
    username_too_short: 'El usuario debe tener al menos 3 caracteres',
    username_bad_chars: 'Solo letras, números, _, . permitidos',
    username_hint: '💡 Solo minúsculas, números, guion bajo (_) y punto (.)',

    country_title: '¿De qué país eres?',
    country_desc: 'Nos ayuda a encontrar mejores matches',

    interests_title: '¿Qué países te interesan?',
    interests_desc: 'Elige los que quieras · Aprenderás estos idiomas en el autoestudio',
    interests_selected: ' seleccionados',

    grade_hobbies_title: '¡Último paso!',
    grade_hobbies_desc: 'Cuéntanos tu grado y hobbies',
    grade_label: 'Grado',
    grade_placeholder: 'Selecciona tu grado',
    hobbies_label: 'Hobbies',
    hobbies_selected: ' seleccionados',

    continue: 'Continuar',
    start_test: 'Iniciar Test',
    q_of: '{n}/{total}',
    question: 'Pregunta',
    result_title: 'Tu tipo de personalidad es',
    result_desc: 'Te conectaremos con amigos afines',
    result_best_match: 'Personalidades compatibles contigo',
    result_best_label: 'BEST MATCH',
    start_matching: 'Empezar a usar la app',

    step_labels: ['Bienvenida', 'Idioma', 'Nombre', 'Usuario', 'Mi País', 'Intereses', 'Grado · Hobbies'],
  },
  fr: {
    welcome: 'Bienvenue sur Ieum',
    welcome_desc: 'Parlez-nous un peu de vous d\'abord',
    feature_match: 'Rencontrez des jeunes du monde',
    feature_translate: 'Chat avec traduction en direct',
    feature_learn: 'Apprenez langues et cultures',

    name_label: 'Nom ou pseudo',
    name_placeholder: 'Comment vous appeler ?',
    name_title: 'Quel est votre nom ?',
    name_desc: 'Dites-nous le nom que vos amis utilisent',
    name_greeting: '👋 Ravi de vous rencontrer',

    lang_label: 'Votre langue préférée',
    lang_desc: 'Nous utiliserons cette langue dans toute l\'app',

    username_title: 'Choisissez un nom d\'utilisateur',
    username_desc: 'C\'est ainsi que les autres vous trouveront',
    username_placeholder: 'ex. jiwoo_k',
    username_too_short: 'Le nom doit avoir au moins 3 caractères',
    username_bad_chars: 'Seulement lettres, chiffres, _, . autorisés',
    username_hint: '💡 Minuscules, chiffres, tiret bas (_) et point (.) uniquement',

    country_title: 'De quel pays êtes-vous ?',
    country_desc: 'Ça nous aide à trouver de meilleurs matchs',

    interests_title: 'Quels pays vous intéressent ?',
    interests_desc: 'Choisissez-en autant que vous voulez · Vous apprendrez ces langues en auto-étude',
    interests_selected: ' sélectionnés',

    grade_hobbies_title: 'Dernière étape !',
    grade_hobbies_desc: 'Dites-nous votre niveau et vos hobbies',
    grade_label: 'Niveau scolaire',
    grade_placeholder: 'Sélectionnez votre niveau',
    hobbies_label: 'Hobbies',
    hobbies_selected: ' sélectionnés',

    continue: 'Continuer',
    start_test: 'Commencer le test',
    q_of: '{n}/{total}',
    question: 'Question',
    result_title: 'Votre type de personnalité est',
    result_desc: 'Nous vous connecterons à des amis compatibles',
    result_best_match: 'Personnalités compatibles avec vous',
    result_best_label: 'BEST MATCH',
    start_matching: 'Commencer à utiliser l\'app',

    step_labels: ['Bienvenue', 'Langue', 'Nom', 'Utilisateur', 'Mon Pays', 'Intérêts', 'Niveau · Hobbies'],
  },
  de: {
    welcome: 'Willkommen bei Ieum',
    welcome_desc: 'Erzähl uns zuerst etwas über dich',
    feature_match: 'Verbinde dich mit Jugendlichen weltweit',
    feature_translate: 'Chat mit Echtzeit-Übersetzung',
    feature_learn: 'Lerne Sprachen und Kulturen',

    name_label: 'Name oder Nickname',
    name_placeholder: 'Wie sollen wir dich nennen?',
    name_title: 'Wie heißt du?',
    name_desc: 'Sag uns den Namen, den deine Freunde benutzen',
    name_greeting: '👋 Schön dich kennenzulernen',

    lang_label: 'Deine bevorzugte Sprache',
    lang_desc: 'Wir verwenden diese Sprache in der ganzen App',

    username_title: 'Wähle einen Benutzernamen',
    username_desc: 'So finden dich andere Nutzer',
    username_placeholder: 'z.B. jiwoo_k',
    username_too_short: 'Benutzername muss mindestens 3 Zeichen haben',
    username_bad_chars: 'Nur Buchstaben, Zahlen, _, . erlaubt',
    username_hint: '💡 Kleinbuchstaben, Zahlen, Unterstrich (_) und Punkt (.) nur',

    country_title: 'Aus welchem Land kommst du?',
    country_desc: 'Hilft uns bessere Matches zu finden',

    interests_title: 'Welche Länder interessieren dich?',
    interests_desc: 'Wähle so viele wie du willst · Du lernst diese Sprachen im Selbststudium',
    interests_selected: ' ausgewählt',

    grade_hobbies_title: 'Letzter Schritt!',
    grade_hobbies_desc: 'Sag uns deine Klasse und Hobbys',
    grade_label: 'Klasse',
    grade_placeholder: 'Klasse auswählen',
    hobbies_label: 'Hobbys',
    hobbies_selected: ' ausgewählt',

    continue: 'Weiter',
    start_test: 'Test Starten',
    q_of: '{n}/{total}',
    question: 'Frage',
    result_title: 'Dein Persönlichkeitstyp ist',
    result_desc: 'Wir bringen dich mit passenden Freunden zusammen',
    result_best_match: 'Persönlichkeiten die zu dir passen',
    result_best_label: 'BEST MATCH',
    start_matching: 'App verwenden',

    step_labels: ['Willkommen', 'Sprache', 'Name', 'Benutzer', 'Mein Land', 'Interessen', 'Klasse · Hobbys'],
  },
  vi: {
    welcome: 'Chào mừng đến với Ieum',
    welcome_desc: 'Hãy cho chúng mình biết một chút về bạn',
    feature_match: 'Kết nối với giới trẻ toàn cầu',
    feature_translate: 'Trò chuyện dịch trực tiếp',
    feature_learn: 'Học ngôn ngữ và văn hóa',

    name_label: 'Tên hoặc biệt danh',
    name_placeholder: 'Bạn tên gì?',
    name_title: 'Bạn tên gì?',
    name_desc: 'Cho chúng mình biết tên bạn bè hay gọi bạn',
    name_greeting: '👋 Rất vui được gặp bạn',

    lang_label: 'Ngôn ngữ bạn quen dùng',
    lang_desc: 'Chúng mình sẽ dùng ngôn ngữ này trong toàn app',

    username_title: 'Chọn tên người dùng',
    username_desc: 'Người khác sẽ tìm bạn qua tên này',
    username_placeholder: 'ví dụ: jiwoo_k',
    username_too_short: 'Tên phải ít nhất 3 ký tự',
    username_bad_chars: 'Chỉ cho phép chữ, số, _, .',
    username_hint: '💡 Chữ thường, số, gạch dưới (_), chấm (.) thôi',

    country_title: 'Bạn ở nước nào?',
    country_desc: 'Cho biết sẽ giúp ghép đôi chính xác hơn',

    interests_title: 'Bạn quan tâm nước nào?',
    interests_desc: 'Chọn nhiều cũng được · Bạn sẽ học các ngôn ngữ này khi tự học',
    interests_selected: ' nước đã chọn',

    grade_hobbies_title: 'Bước cuối!',
    grade_hobbies_desc: 'Cho biết lớp và sở thích',
    grade_label: 'Lớp',
    grade_placeholder: 'Chọn lớp',
    hobbies_label: 'Sở thích',
    hobbies_selected: ' đã chọn',

    continue: 'Tiếp tục',
    start_test: 'Bắt đầu Test',
    q_of: '{n}/{total}',
    question: 'Câu hỏi',
    result_title: 'Kiểu tính cách của bạn là',
    result_desc: 'Chúng mình sẽ kết nối bạn với bạn bè phù hợp',
    result_best_match: 'Tính cách phù hợp với bạn',
    result_best_label: 'BEST MATCH',
    start_matching: 'Bắt đầu dùng app',

    step_labels: ['Chào', 'Ngôn ngữ', 'Tên', 'Người dùng', 'Nước tôi', 'Quan tâm', 'Lớp · Sở thích'],
  },
  th: {
    welcome: 'ยินดีต้อนรับสู่ Ieum',
    welcome_desc: 'บอกเราเกี่ยวกับตัวคุณสักหน่อย',
    feature_match: 'จับคู่กับเยาวชนทั่วโลก',
    feature_translate: 'แชทแปลแบบเรียลไทม์',
    feature_learn: 'เรียนภาษาและวัฒนธรรม',

    name_label: 'ชื่อหรือชื่อเล่น',
    name_placeholder: 'เราจะเรียกคุณว่าอะไรดี?',
    name_title: 'คุณชื่ออะไร?',
    name_desc: 'บอกชื่อที่เพื่อนๆ เรียกคุณ',
    name_greeting: '👋 ยินดีที่ได้รู้จัก',

    lang_label: 'ภาษาที่คุณถนัด',
    lang_desc: 'เราจะใช้ภาษานี้ทั่วทั้งแอป',

    username_title: 'เลือกชื่อผู้ใช้',
    username_desc: 'ผู้ใช้อื่นจะค้นหาคุณด้วยชื่อนี้',
    username_placeholder: 'เช่น jiwoo_k',
    username_too_short: 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร',
    username_bad_chars: 'ใช้ได้แค่ตัวอักษร ตัวเลข _ . เท่านั้น',
    username_hint: '💡 ตัวพิมพ์เล็ก ตัวเลข ขีดล่าง (_) จุด (.) เท่านั้น',

    country_title: 'คุณอยู่ประเทศไหน?',
    country_desc: 'บอกเราจะช่วยจับคู่แม่นยำขึ้น',

    interests_title: 'คุณสนใจประเทศไหน?',
    interests_desc: 'เลือกหลายๆ ได้ · คุณจะได้เรียนภาษาเหล่านี้ในเซลฟ์สตัดี้',
    interests_selected: ' ประเทศที่เลือก',

    grade_hobbies_title: 'ขั้นตอนสุดท้าย!',
    grade_hobbies_desc: 'บอกระดับชั้นและงานอดิเรก',
    grade_label: 'ระดับชั้น',
    grade_placeholder: 'เลือกระดับชั้น',
    hobbies_label: 'งานอดิเรก',
    hobbies_selected: ' ที่เลือก',

    continue: 'ต่อไป',
    start_test: 'เริ่มทดสอบ',
    q_of: '{n}/{total}',
    question: 'คำถาม',
    result_title: 'ประเภทบุคลิกภาพของคุณคือ',
    result_desc: 'เราจะจับคู่คุณกับเพื่อนที่เข้ากันได้',
    result_best_match: 'บุคลิกที่เข้ากับคุณ',
    result_best_label: 'BEST MATCH',
    start_matching: 'เริ่มใช้แอป',

    step_labels: ['ยินดีต้อนรับ', 'ภาษา', 'ชื่อ', 'ผู้ใช้', 'ประเทศฉัน', 'สนใจ', 'ระดับ · งานอดิเรก'],
  },
  pt: {
    welcome: 'Bem-vindo ao Ieum',
    welcome_desc: 'Conte-nos um pouco sobre você primeiro',
    feature_match: 'Conecte-se com jovens do mundo',
    feature_translate: 'Chat com tradução em tempo real',
    feature_learn: 'Aprenda idiomas e culturas',

    name_label: 'Nome ou apelido',
    name_placeholder: 'Como devemos te chamar?',
    name_title: 'Qual é seu nome?',
    name_desc: 'Diga-nos como seus amigos te chamam',
    name_greeting: '👋 Prazer em conhecer você',

    lang_label: 'Seu idioma preferido',
    lang_desc: 'Usaremos este idioma em todo o app',

    username_title: 'Escolha um nome de usuário',
    username_desc: 'Outros usuários vão te encontrar por isso',
    username_placeholder: 'ex. jiwoo_k',
    username_too_short: 'Usuário deve ter pelo menos 3 caracteres',
    username_bad_chars: 'Apenas letras, números, _, . permitidos',
    username_hint: '💡 Minúsculas, números, sublinhado (_) e ponto (.) só',

    country_title: 'De que país você é?',
    country_desc: 'Nos ajuda a encontrar matches melhores',

    interests_title: 'Quais países te interessam?',
    interests_desc: 'Escolha quantos quiser · Vai aprender esses idiomas no auto-estudo',
    interests_selected: ' selecionados',

    grade_hobbies_title: 'Último passo!',
    grade_hobbies_desc: 'Diga-nos sua série e hobbies',
    grade_label: 'Série',
    grade_placeholder: 'Selecione sua série',
    hobbies_label: 'Hobbies',
    hobbies_selected: ' selecionados',

    continue: 'Continuar',
    start_test: 'Iniciar Teste',
    q_of: '{n}/{total}',
    question: 'Pergunta',
    result_title: 'Seu tipo de personalidade é',
    result_desc: 'Conectaremos você com amigos compatíveis',
    result_best_match: 'Personalidades compatíveis com você',
    result_best_label: 'BEST MATCH',
    start_matching: 'Começar a usar o app',

    step_labels: ['Bem-vindo', 'Idioma', 'Nome', 'Usuário', 'Meu País', 'Interesses', 'Série · Hobbies'],
  },
  hi: {
    welcome: 'Ieum में आपका स्वागत है',
    welcome_desc: 'पहले अपने बारे में थोड़ा बताएं',
    feature_match: 'दुनिया भर के युवाओं से मिलें',
    feature_translate: 'रीयल-टाइम अनुवाद चैट',
    feature_learn: 'भाषाएं और संस्कृति सीखें',

    name_label: 'नाम या उपनाम',
    name_placeholder: 'हम आपको क्या कहें?',
    name_title: 'आपका नाम क्या है?',
    name_desc: 'दोस्त आपको क्या नाम से बुलाते हैं?',
    name_greeting: '👋 आपसे मिलकर खुशी हुई',

    lang_label: 'आपकी पसंदीदा भाषा',
    lang_desc: 'हम पूरे ऐप में यह भाषा उपयोग करेंगे',

    username_title: 'यूज़रनेम चुनें',
    username_desc: 'दूसरे उपयोगकर्ता आपको इससे ढूंढेंगे',
    username_placeholder: 'जैसे jiwoo_k',
    username_too_short: 'यूज़रनेम कम से कम 3 अक्षर होना चाहिए',
    username_bad_chars: 'केवल अक्षर, नंबर, _, . मान्य',
    username_hint: '💡 छोटे अक्षर, नंबर, अंडरस्कोर (_) और डॉट (.) ही',

    country_title: 'आप किस देश से हैं?',
    country_desc: 'बताने से बेहतर मैच मिलेगा',

    interests_title: 'किन देशों में दिलचस्पी है?',
    interests_desc: 'कई चुन सकते हैं · सेल्फ-स्टडी में ये भाषाएं सीखेंगे',
    interests_selected: ' देश चुने',

    grade_hobbies_title: 'आखिरी कदम!',
    grade_hobbies_desc: 'कक्षा और शौक बताएं',
    grade_label: 'कक्षा',
    grade_placeholder: 'कक्षा चुनें',
    hobbies_label: 'शौक',
    hobbies_selected: ' चुने',

    continue: 'जारी रखें',
    start_test: 'टेस्ट शुरू करें',
    q_of: '{n}/{total}',
    question: 'सवाल',
    result_title: 'आपका व्यक्तित्व प्रकार है',
    result_desc: 'हम आपको मिलते-जुलते दोस्तों से जोड़ेंगे',
    result_best_match: 'आपके साथ मेल खाने वाले',
    result_best_label: 'BEST MATCH',
    start_matching: 'ऐप शुरू करें',

    step_labels: ['स्वागत', 'भाषा', 'नाम', 'यूज़रनेम', 'मेरा देश', 'रुचि', 'कक्षा · शौक'],
  },
  ar: {
    welcome: 'مرحبًا بك في Ieum',
    welcome_desc: 'أخبرنا قليلاً عن نفسك أولاً',
    feature_match: 'تواصل مع الشباب حول العالم',
    feature_translate: 'محادثة بترجمة فورية',
    feature_learn: 'تعلم اللغات والثقافات',

    name_label: 'الاسم أو اللقب',
    name_placeholder: 'ماذا نناديك؟',
    name_title: 'ما اسمك؟',
    name_desc: 'أخبرنا بالاسم الذي يناديك به أصدقاؤك',
    name_greeting: '👋 سعيد بلقائك',

    lang_label: 'لغتك المفضلة',
    lang_desc: 'سنستخدم هذه اللغة في التطبيق كله',

    username_title: 'اختر اسم مستخدم',
    username_desc: 'سيجدك المستخدمون الآخرون بهذا',
    username_placeholder: 'مثال: jiwoo_k',
    username_too_short: 'يجب أن يكون الاسم 3 أحرف على الأقل',
    username_bad_chars: 'مسموح الأحرف والأرقام و _ . فقط',
    username_hint: '💡 أحرف صغيرة وأرقام وشرطة سفلية (_) ونقطة (.) فقط',

    country_title: 'من أي بلد أنت؟',
    country_desc: 'يساعدنا في إيجاد مطابقات أفضل',

    interests_title: 'ما البلدان التي تهتم بها؟',
    interests_desc: 'اختر ما تشاء · ستتعلم هذه اللغات في الدراسة الذاتية',
    interests_selected: ' مختارة',

    grade_hobbies_title: 'الخطوة الأخيرة!',
    grade_hobbies_desc: 'أخبرنا بصفك وهواياتك',
    grade_label: 'الصف',
    grade_placeholder: 'اختر صفك',
    hobbies_label: 'الهوايات',
    hobbies_selected: ' مختارة',

    continue: 'متابعة',
    start_test: 'ابدأ الاختبار',
    q_of: '{n}/{total}',
    question: 'سؤال',
    result_title: 'نوع شخصيتك هو',
    result_desc: 'سنوصلك بأصدقاء متوافقين معك',
    result_best_match: 'شخصيات تنسجم معك',
    result_best_label: 'BEST MATCH',
    start_matching: 'ابدأ استخدام التطبيق',

    step_labels: ['ترحيب', 'اللغة', 'الاسم', 'اسم المستخدم', 'بلدي', 'اهتمامات', 'الصف · هوايات'],
  },
};

// 12 personality types — dimensions: Extraversion (E/I), Adventure (A/S = adventurous/steady),
// Openness (O/T = open to new / traditional). 2×2×3 combinations mapped into 12 memorable types.
const PERSONALITY_TYPES = {
  BRIDGE:    { key: 'BRIDGE',    emoji: '🌉', label: { ko:'가교',      en:'Bridge',        ja:'架け橋',      zh:'桥梁',    es:'Puente',      fr:'Pont',        de:'Brücke',     vi:'Cầu nối',    th:'สะพาน',   pt:'Ponte',      hi:'सेतु',       ar:'الجسر'      }, desc: { ko:'서로 다른 문화를 자연스럽게 잇는 소통가', en:'A natural connector between different cultures', ja:'異文化を自然につなぐ交流の達人', zh:'自然连接不同文化的沟通者', es:'Un conector natural entre culturas', fr:'Un connecteur naturel entre cultures', de:'Ein natürlicher Verbinder von Kulturen', vi:'Người kết nối tự nhiên giữa các nền văn hóa', th:'ผู้เชื่อมโยงวัฒนธรรมโดยธรรมชาติ', pt:'Um conector natural entre culturas', hi:'संस्कृतियों को जोड़ने वाला', ar:'واصل طبيعي بين الثقافات' } },
  EXPLORER:  { key: 'EXPLORER',  emoji: '🧭', label: { ko:'탐험가',    en:'Explorer',      ja:'探検家',      zh:'探险家',  es:'Explorador',  fr:'Explorateur', de:'Entdecker',  vi:'Nhà thám hiểm', th:'นักสำรวจ',  pt:'Explorador', hi:'खोजी',       ar:'مستكشف'    }, desc: { ko:'새로운 문화와 경험에 항상 열려있는 도전가', en:'Always open to new cultures and experiences', ja:'新しい文化と経験に開かれた挑戦者', zh:'总是对新文化保持开放', es:'Siempre abierto a nuevas culturas', fr:'Toujours ouvert aux nouvelles cultures', de:'Immer offen für neue Kulturen', vi:'Luôn cởi mở với văn hóa mới', th:'เปิดใจกับวัฒนธรรมใหม่ๆ เสมอ', pt:'Sempre aberto a novas culturas', hi:'हमेशा नए संस्कृतियों के लिए तैयार', ar:'منفتح على ثقافات جديدة' } },
  STORYTELLER:{key: 'STORYTELLER',emoji: '📖', label: { ko:'이야기꾼',  en:'Storyteller',   ja:'語り手',      zh:'讲述者',  es:'Narrador',    fr:'Conteur',     de:'Erzähler',   vi:'Người kể chuyện', th:'นักเล่าเรื่อง', pt:'Contador de histórias', hi:'कहानीकार', ar:'راوي' }, desc: { ko:'경험과 이야기로 대화를 풍부하게 만드는 사람', en:'Enriches conversations with experiences and tales', ja:'経験と物語で会話を豊かにする人', zh:'用故事让对话丰富起来', es:'Enriquece las conversaciones con historias', fr:'Enrichit les conversations d\'histoires', de:'Bereichert Gespräche mit Geschichten', vi:'Làm phong phú cuộc trò chuyện bằng câu chuyện', th:'ทำให้บทสนทนาสนุกด้วยเรื่องเล่า', pt:'Enriquece conversas com histórias', hi:'बातचीत को कहानियों से रोचक बनाता है', ar:'يثري الحوار بالقصص' } },
  LISTENER:  { key: 'LISTENER',  emoji: '🎧', label: { ko:'경청자',    en:'Listener',      ja:'聞き手',      zh:'倾听者',  es:'Oyente',      fr:'Écouteur',    de:'Zuhörer',    vi:'Người lắng nghe', th:'ผู้ฟัง',   pt:'Ouvinte',    hi:'श्रोता',     ar:'مستمع'     }, desc: { ko:'조용히 상대를 이해하며 깊은 관계를 만드는 타입', en:'Builds deep connections through quiet understanding', ja:'静かに相手を理解し深い関係を築く', zh:'静静倾听建立深厚关系', es:'Construye relaciones profundas escuchando', fr:'Crée des liens profonds en écoutant', de:'Baut tiefe Beziehungen durch Zuhören auf', vi:'Xây dựng mối quan hệ sâu qua lắng nghe', th:'สร้างความสัมพันธ์ลึกซึ้งด้วยการฟัง', pt:'Constrói vínculos profundos ouvindo', hi:'सुनकर गहरे रिश्ते बनाता है', ar:'يبني علاقات عميقة بالإصغاء' } },
  DREAMER:   { key: 'DREAMER',   emoji: '☁️', label: { ko:'몽상가',    en:'Dreamer',       ja:'夢見人',      zh:'梦想家',  es:'Soñador',     fr:'Rêveur',      de:'Träumer',    vi:'Người mơ mộng', th:'นักฝัน',   pt:'Sonhador',   hi:'सपने देखने वाला', ar:'حالم' }, desc: { ko:'상상력과 감성으로 문화를 느끼는 예술가형', en:'Feels cultures through imagination and emotion', ja:'想像力と感性で文化を感じるアーティスト', zh:'用想象力感受文化', es:'Siente las culturas con imaginación', fr:'Ressent les cultures par l\'imagination', de:'Erlebt Kulturen durch Fantasie', vi:'Cảm nhận văn hóa qua trí tưởng tượng', th:'สัมผัสวัฒนธรรมด้วยจินตนาการ', pt:'Sente as culturas com imaginação', hi:'कल्पना से संस्कृतियों को महसूस करता है', ar:'يحس الثقافات بالخيال' } },
  ANCHOR:    { key: 'ANCHOR',    emoji: '⚓', label: { ko:'닻',         en:'Anchor',        ja:'錨',          zh:'锚',      es:'Ancla',       fr:'Ancre',       de:'Anker',      vi:'Neo',        th:'สมอ',     pt:'Âncora',     hi:'लंगर',       ar:'مرساة'     }, desc: { ko:'신뢰와 안정감으로 오래가는 우정을 만드는 타입', en:'Builds lasting friendships through trust and stability', ja:'信頼と安定で長続きする友情を育む', zh:'用信任建立长久的友谊', es:'Construye amistades duraderas con confianza', fr:'Bâtit des amitiés durables', de:'Baut dauerhafte Freundschaften auf', vi:'Xây tình bạn bền lâu bằng tin tưởng', th:'สร้างมิตรภาพยาวนานด้วยความไว้ใจ', pt:'Constrói amizades duradouras', hi:'भरोसे से लंबे रिश्ते बनाता है', ar:'يبني صداقات دائمة بالثقة' } },
  SPARK:     { key: 'SPARK',     emoji: '⚡', label: { ko:'스파크',    en:'Spark',         ja:'スパーク',    zh:'火花',    es:'Chispa',      fr:'Étincelle',   de:'Funke',      vi:'Tia lửa',    th:'ประกาย',   pt:'Faísca',     hi:'चिंगारी',    ar:'شرارة'    }, desc: { ko:'에너지 넘치는 대화로 분위기를 사로잡는 인싸', en:'A charismatic energizer who lights up any chat', ja:'エネルギッシュな会話でその場を照らす', zh:'用活力点燃对话', es:'Enciende cualquier conversación', fr:'Illumine chaque conversation', de:'Bringt jedes Gespräch zum Leuchten', vi:'Thắp sáng mọi cuộc trò chuyện', th:'จุดประกายทุกบทสนทนา', pt:'Ilumina qualquer conversa', hi:'हर बातचीत में जान डालता है', ar:'يضيء أي حوار' } },
  SCHOLAR:   { key: 'SCHOLAR',   emoji: '📚', label: { ko:'학자',      en:'Scholar',       ja:'学者',        zh:'学者',    es:'Erudito',     fr:'Érudit',      de:'Gelehrter',  vi:'Học giả',    th:'นักปราชญ์', pt:'Erudito',    hi:'विद्वान',    ar:'عالم'      }, desc: { ko:'언어와 문화를 깊이 파고드는 지적 탐구자', en:'A deep learner of languages and cultures', ja:'言語と文化を深く探求する知的な人', zh:'深入研究语言与文化', es:'Estudioso profundo de idiomas y culturas', fr:'Étudiant passionné de langues', de:'Vertieft sich in Sprachen und Kulturen', vi:'Nghiên cứu sâu ngôn ngữ và văn hóa', th:'ผู้เรียนรู้ภาษาและวัฒนธรรมอย่างลึกซึ้ง', pt:'Estudante profundo de idiomas', hi:'भाषाओं का गहन अध्येता', ar:'دارس عميق للغات' } },
  WANDERER:  { key: 'WANDERER',  emoji: '🍃', label: { ko:'방랑자',    en:'Wanderer',      ja:'流浪者',      zh:'漫游者',  es:'Vagabundo',   fr:'Vagabond',    de:'Wanderer',   vi:'Kẻ lang thang', th:'นักเดินทาง', pt:'Andarilho', hi:'यायावर',    ar:'تائه'      }, desc: { ko:'즉흥적이고 자유로운 영혼, 새로움을 갈망하는 타입', en:'A free spirit chasing new experiences', ja:'自由で即興的、新しさを求める人', zh:'追寻新鲜的自由灵魂', es:'Un espíritu libre que busca lo nuevo', fr:'Une âme libre qui cherche la nouveauté', de:'Freier Geist auf der Suche nach Neuem', vi:'Tâm hồn tự do tìm điều mới', th:'จิตใจอิสระที่แสวงหาสิ่งใหม่', pt:'Espírito livre em busca do novo', hi:'नए अनुभव खोजने वाला', ar:'روح حرة تبحث عن الجديد' } },
  GUARDIAN:  { key: 'GUARDIAN',  emoji: '🛡️', label: { ko:'수호자',    en:'Guardian',      ja:'守護者',      zh:'守护者',  es:'Guardián',    fr:'Gardien',     de:'Wächter',    vi:'Người bảo vệ', th:'ผู้พิทักษ์', pt:'Guardião',  hi:'रक्षक',      ar:'حارس'      }, desc: { ko:'친구를 아끼고 세심하게 챙기는 배려의 아이콘', en:'A caring friend who looks out for others', ja:'友を大切に守るあたたかい人', zh:'关心朋友的守护者', es:'Amigo protector y atento', fr:'Un ami attentif et protecteur', de:'Ein fürsorglicher Freund', vi:'Người bạn quan tâm bảo vệ', th:'เพื่อนที่คอยดูแล', pt:'Amigo protetor e atento', hi:'दोस्तों की देखभाल करने वाला', ar:'صديق حريص' } },
  CATALYST:  { key: 'CATALYST',  emoji: '🔥', label: { ko:'촉매자',    en:'Catalyst',      ja:'触媒',        zh:'催化剂',  es:'Catalizador', fr:'Catalyseur',  de:'Katalysator',vi:'Chất xúc tác', th:'ตัวเร่ง',  pt:'Catalisador',hi:'उत्प्रेरक',  ar:'محفز'      }, desc: { ko:'주변에 변화와 영감을 주는 리더형', en:'A leader who inspires change in others', ja:'周囲に変化と刺激を与えるリーダー', zh:'激励他人的领导者', es:'Un líder que inspira cambios', fr:'Un leader qui inspire le changement', de:'Ein Anführer, der inspiriert', vi:'Người dẫn đầu truyền cảm hứng', th:'ผู้นำที่จุดประกายการเปลี่ยนแปลง', pt:'Um líder que inspira mudanças', hi:'बदलाव लाने वाला', ar:'قائد يلهم التغيير' } },
  HARMONY:   { key: 'HARMONY',   emoji: '🌸', label: { ko:'조율자',    en:'Harmony',       ja:'調和者',      zh:'和谐者',  es:'Armonía',     fr:'Harmonie',    de:'Harmonie',   vi:'Người hòa hợp', th:'ผู้ประสาน',  pt:'Harmonia',   hi:'सामंजस्य',   ar:'انسجام'   }, desc: { ko:'모두가 편안하도록 분위기를 만드는 평화주의자', en:'A peacemaker who makes everyone comfortable', ja:'皆が心地よくいられる場を作る', zh:'让所有人舒适的和平使者', es:'Pacificador que hace sentir cómodos a todos', fr:'Pacificateur qui met tout le monde à l\'aise', de:'Friedensstifter, der alle wohlfühlen lässt', vi:'Người tạo không khí thoải mái cho mọi người', th:'ผู้สร้างบรรยากาศสบายๆ ให้ทุกคน', pt:'Pacificador que acolhe todos', hi:'सभी को सहज करने वाला', ar:'صانع سلام يريح الجميع' } },
};

// 15 test questions — each maps to specific dimensions
// dim: E=extraversion, A=adventure, O=openness, C=connection-depth, S=spontaneity
const PERSONALITY_QUESTIONS = [
  {
    dim: 'E',
    text: {
      ko: '새로운 국제 친구를 만나면 나는...',
      en: 'When meeting a new international friend, I...',
      ja: '新しい国際的な友人に会ったとき、私は...',
      zh: '遇到新的国际朋友时,我会...',
      es: 'Al conocer a un nuevo amigo internacional, yo...',
      fr: 'En rencontrant un nouvel ami international, je...',
      de: 'Wenn ich einen neuen internationalen Freund treffe...',
      vi: 'Khi gặp bạn quốc tế mới, mình...',
      th: 'เมื่อเจอเพื่อนต่างชาติใหม่ ฉัน...',
      pt: 'Ao conhecer um novo amigo internacional, eu...',
      hi: 'नए विदेशी दोस्त से मिलते समय, मैं...',
      ar: 'عند لقاء صديق دولي جديد، أنا...',
    },
    a: { ko:'먼저 다가가 말을 건다', en:'Reach out first', ja:'先に話しかける', zh:'主动打招呼', es:'Me acerco primero', fr:'Je fais le premier pas', de:'Gehe zuerst zu', vi:'Chủ động bắt chuyện', th:'ทักก่อน', pt:'Me aproximo primeiro', hi:'पहले पहुंचता हूं', ar:'أبادر بالحديث' },
    b: { ko:'상대가 말 걸어주길 기다린다', en:'Wait for them to speak first', ja:'相手が話しかけるのを待つ', zh:'等对方开口', es:'Espero a que hablen primero', fr:'J\'attends qu\'on me parle', de:'Warte, bis sie sprechen', vi:'Đợi họ nói trước', th:'รอให้อีกฝ่ายทัก', pt:'Espero que falem primeiro', hi:'उनके बोलने का इंतज़ार करता हूं', ar:'أنتظرهم أن يبادروا' },
  },
  {
    dim: 'A',
    text: {
      ko: '새로운 나라의 음식을 처음 볼 때...',
      en: 'Seeing a new country\'s food for the first time...',
      ja: '初めて見る他国の料理は...',
      zh: '第一次看到别国料理时...',
      es: 'Al ver comida de otro país por primera vez...',
      fr: 'En découvrant un plat étranger...',
      de: 'Wenn ich Essen aus einem neuen Land sehe...',
      vi: 'Lần đầu thấy món ăn nước ngoài...',
      th: 'ครั้งแรกที่เห็นอาหารต่างประเทศ...',
      pt: 'Ao ver comida estrangeira pela primeira vez...',
      hi: 'नए देश का खाना पहली बार देखते समय...',
      ar: 'عند رؤية طعام من بلد جديد...',
    },
    a: { ko:'뭐든 일단 먹어본다', en:'I try it no matter what', ja:'なんでもまず食べる', zh:'先尝再说', es:'Lo pruebo sin dudar', fr:'J\'essaie quoi qu\'il arrive', de:'Probiere alles', vi:'Cứ ăn thử đã', th:'ลองก่อน', pt:'Experimento sem pensar', hi:'बिना सोचे चख लेता हूं', ar:'أجرب أي شيء' },
    b: { ko:'알아보고 나서 시도한다', en:'I research first', ja:'調べてから試す', zh:'了解后再试', es:'Investigo antes', fr:'Je me renseigne d\'abord', de:'Recherchiere zuerst', vi:'Tìm hiểu trước rồi thử', th:'หาข้อมูลก่อน', pt:'Pesquiso antes', hi:'पहले जांच करता हूं', ar:'أبحث أولاً' },
  },
  {
    dim: 'C',
    text: {
      ko: '외국인 친구와의 관계는...',
      en: 'When it comes to international friendships...',
      ja: '外国人の友達との関係は...',
      zh: '与外国朋友的关系是...',
      es: 'Mis amistades internacionales son...',
      fr: 'Mes amitiés internationales sont...',
      de: 'Meine internationalen Freundschaften sind...',
      vi: 'Tình bạn quốc tế của mình...',
      th: 'มิตรภาพต่างชาติของฉัน...',
      pt: 'Minhas amizades internacionais são...',
      hi: 'विदेशी दोस्ती में मेरी सोच...',
      ar: 'صداقاتي الدولية...',
    },
    a: { ko:'깊고 오래가는 소수', en:'Few but deep and lasting', ja:'少なく深く長続き', zh:'少而深远持久', es:'Pocas pero profundas', fr:'Peu mais profondes', de:'Wenige, aber tief', vi:'Ít nhưng sâu bền', th:'น้อยแต่ลึกซึ้ง', pt:'Poucas mas profundas', hi:'कम पर गहरे', ar:'قليلة لكن عميقة' },
    b: { ko:'넓고 다양하게 여러 명', en:'Many and diverse', ja:'幅広く多様', zh:'广泛而多样', es:'Muchas y diversas', fr:'Nombreuses et variées', de:'Viele und vielfältig', vi:'Nhiều và đa dạng', th:'หลากหลายและกว้าง', pt:'Muitas e diversas', hi:'व्यापक और विविध', ar:'عديدة ومتنوعة' },
  },
  {
    dim: 'S',
    text: {
      ko: '여행을 계획한다면...',
      en: 'When planning a trip...',
      ja: '旅行を計画するなら...',
      zh: '计划旅行时...',
      es: 'Al planear un viaje...',
      fr: 'Quand je planifie un voyage...',
      de: 'Wenn ich eine Reise plane...',
      vi: 'Khi lên kế hoạch du lịch...',
      th: 'เวลาวางแผนเที่ยว...',
      pt: 'Ao planejar uma viagem...',
      hi: 'यात्रा योजना बनाते समय...',
      ar: 'عند تخطيط رحلة...',
    },
    a: { ko:'즉흥적으로 발길 닿는 대로', en:'Go with the flow', ja:'その場のノリで', zh:'随心所欲', es:'Voy con la corriente', fr:'Je me laisse porter', de:'Improvisiere', vi:'Tùy hứng đi', th:'ไปตามใจ', pt:'Vou na correnteza', hi:'बहाव में जाता हूं', ar:'أترك الأمور للحدث' },
    b: { ko:'꼼꼼히 계획을 세워서', en:'Plan every detail', ja:'細かく計画', zh:'详细规划', es:'Planifico cada detalle', fr:'Je planifie tout', de:'Plane alles genau', vi:'Lên kế hoạch chi tiết', th:'วางแผนอย่างละเอียด', pt:'Planejo tudo', hi:'हर विवरण योजना', ar:'أخطط لكل تفصيل' },
  },
  {
    dim: 'O',
    text: {
      ko: '문화 차이를 만나면 나는...',
      en: 'When I encounter cultural differences...',
      ja: '文化の違いに触れると...',
      zh: '遇到文化差异时...',
      es: 'Ante diferencias culturales...',
      fr: 'Face aux différences culturelles...',
      de: 'Bei kulturellen Unterschieden...',
      vi: 'Khi gặp khác biệt văn hóa...',
      th: 'เมื่อพบความต่างทางวัฒนธรรม...',
      pt: 'Ao encontrar diferenças culturais...',
      hi: 'सांस्कृतिक अंतर पर, मैं...',
      ar: 'عند لقاء اختلاف ثقافي...',
    },
    a: { ko:'흥미롭게 받아들이고 시도한다', en:'Embrace and try it', ja:'興味を持って受け入れる', zh:'饶有兴趣地接受', es:'La abrazo con curiosidad', fr:'Je l\'accueille avec curiosité', de:'Umarme sie neugierig', vi:'Cởi mở đón nhận', th:'เปิดรับด้วยความสนใจ', pt:'Recebo com curiosidade', hi:'खुले मन से अपनाता हूं', ar:'أتقبل بفضول' },
    b: { ko:'이해될 때까지 관찰한다', en:'Observe until I understand', ja:'理解できるまで観察する', zh:'先观察再理解', es:'Observo hasta entender', fr:'J\'observe pour comprendre', de:'Beobachte, bis ich verstehe', vi:'Quan sát để hiểu', th:'สังเกตจนเข้าใจ', pt:'Observo até entender', hi:'समझने तक देखता हूं', ar:'أراقب حتى أفهم' },
  },
  {
    dim: 'E',
    text: {
      ko: '대화 중 침묵이 흐를 때...',
      en: 'When silence falls in a chat...',
      ja: '会話で沈黙が流れると...',
      zh: '对话陷入沉默时...',
      es: 'Cuando hay silencio en la conversación...',
      fr: 'Quand un silence s\'installe...',
      de: 'Wenn Stille entsteht...',
      vi: 'Khi có khoảng im lặng...',
      th: 'เมื่อบทสนทนาเงียบไป...',
      pt: 'Quando há silêncio na conversa...',
      hi: 'बातचीत में सन्नाटा हो तो...',
      ar: 'حين يسود الصمت...',
    },
    a: { ko:'내가 어색함을 깬다', en:'I break the ice', ja:'私が場を和ませる', zh:'我打破沉默', es:'Rompo el hielo', fr:'Je brise la glace', de:'Ich mache den Anfang', vi:'Mình phá vỡ sự im lặng', th:'ฉันเริ่มก่อน', pt:'Quebro o gelo', hi:'मैं शुरू करता हूं', ar:'أكسر الجليد' },
    b: { ko:'자연스럽게 흐르도록 둔다', en:'Let it flow naturally', ja:'自然に任せる', zh:'让它自然发展', es:'Lo dejo fluir', fr:'Je laisse faire', de:'Lasse es geschehen', vi:'Để tự nhiên', th:'ปล่อยเป็นธรรมชาติ', pt:'Deixo fluir', hi:'बहने देता हूं', ar:'أدع الأمر يجري' },
  },
  {
    dim: 'S',
    text: {
      ko: '주말이 생기면 나는...',
      en: 'On a free weekend, I...',
      ja: '週末の自由時間は...',
      zh: '有空的周末,我会...',
      es: 'Un fin de semana libre, yo...',
      fr: 'Un week-end libre, je...',
      de: 'An einem freien Wochenende...',
      vi: 'Cuối tuần rảnh, mình...',
      th: 'สุดสัปดาห์ว่าง ฉัน...',
      pt: 'Em um fim de semana livre, eu...',
      hi: 'खाली सप्ताहांत में, मैं...',
      ar: 'في عطلة أسبوعية...',
    },
    a: { ko:'친구들과 밖에서 활동', en:'Go out with friends', ja:'友達と外で活動', zh:'和朋友出去玩', es:'Salgo con amigos', fr:'Je sors avec des amis', de:'Gehe mit Freunden aus', vi:'Đi chơi với bạn', th:'ออกไปเที่ยวกับเพื่อน', pt:'Saio com amigos', hi:'दोस्तों के साथ बाहर जाता हूं', ar:'أخرج مع الأصدقاء' },
    b: { ko:'집에서 조용히 취미 활동', en:'Stay in with hobbies', ja:'家で静かに趣味', zh:'在家做喜欢的事', es:'Me quedo con mis hobbies', fr:'Je reste chez moi', de:'Bleibe zuhause mit Hobbys', vi:'Ở nhà làm sở thích', th:'อยู่บ้านทำงานอดิเรก', pt:'Fico em casa', hi:'घर पर शौक करता हूं', ar:'أبقى في البيت' },
  },
  {
    dim: 'O',
    text: {
      ko: '언어를 배울 때 나는...',
      en: 'When learning a language, I...',
      ja: '言語を学ぶとき、私は...',
      zh: '学习语言时,我...',
      es: 'Al aprender un idioma, yo...',
      fr: 'Quand j\'apprends une langue...',
      de: 'Beim Sprachenlernen...',
      vi: 'Khi học ngôn ngữ, mình...',
      th: 'เวลาเรียนภาษา ฉัน...',
      pt: 'Ao aprender um idioma, eu...',
      hi: 'भाषा सीखते समय, मैं...',
      ar: 'عند تعلم لغة، أنا...',
    },
    a: { ko:'실전 대화부터 부딪혀본다', en:'Dive into real conversations', ja:'実践から飛び込む', zh:'直接开口练习', es:'Practico hablando', fr:'Je me lance en parlant', de:'Springe ins Gespräch', vi:'Bắt chuyện ngay', th:'ลุยคุยจริง', pt:'Mergulho em conversas', hi:'बातचीत से शुरू करता हूं', ar:'أنغمس في المحادثات' },
    b: { ko:'문법과 이론을 먼저 익힌다', en:'Master grammar first', ja:'文法から固める', zh:'先学语法理论', es:'Estudio gramática primero', fr:'J\'apprends la grammaire', de:'Lerne erst Grammatik', vi:'Học ngữ pháp trước', th:'เรียนไวยากรณ์ก่อน', pt:'Estudo gramática antes', hi:'व्याकरण पहले सीखता हूं', ar:'أتعلم القواعد أولاً' },
  },
  {
    dim: 'C',
    text: {
      ko: '누군가 힘들어할 때 나는...',
      en: 'When someone is struggling, I...',
      ja: '誰かがつらそうなとき、私は...',
      zh: '有人难过时,我...',
      es: 'Cuando alguien lo pasa mal, yo...',
      fr: 'Quand quelqu\'un souffre...',
      de: 'Wenn jemand leidet...',
      vi: 'Khi ai đó khó khăn, mình...',
      th: 'เมื่อมีคนลำบาก ฉัน...',
      pt: 'Quando alguém está mal, eu...',
      hi: 'कोई परेशान हो तो, मैं...',
      ar: 'حين يعاني أحد...',
    },
    a: { ko:'조용히 옆에서 들어준다', en:'Listen quietly beside them', ja:'静かにそばで聞く', zh:'安静地陪伴倾听', es:'Escucho en silencio', fr:'J\'écoute en silence', de:'Höre still zu', vi:'Lắng nghe âm thầm', th:'ฟังอยู่ข้างๆ อย่างเงียบๆ', pt:'Ouço em silêncio', hi:'चुपचाप सुनता हूं', ar:'أستمع بهدوء' },
    b: { ko:'적극적으로 해결책을 제안한다', en:'Actively suggest solutions', ja:'積極的に解決策を提案', zh:'积极提出解决办法', es:'Propongo soluciones', fr:'Je propose des solutions', de:'Schlage aktiv Lösungen vor', vi:'Đưa ra giải pháp', th:'เสนอทางออก', pt:'Sugiro soluções', hi:'समाधान सुझाता हूं', ar:'أقترح حلولاً' },
  },
  {
    dim: 'E',
    text: {
      ko: '큰 그룹에 있을 때 나는...',
      en: 'In a big group, I...',
      ja: '大人数の中で、私は...',
      zh: '在大群体中,我...',
      es: 'En un grupo grande, yo...',
      fr: 'Dans un grand groupe, je...',
      de: 'In einer großen Gruppe...',
      vi: 'Trong nhóm đông, mình...',
      th: 'ในกลุ่มใหญ่ ฉัน...',
      pt: 'Em grupos grandes, eu...',
      hi: 'बड़े समूह में, मैं...',
      ar: 'في مجموعة كبيرة...',
    },
    a: { ko:'모두와 어울리며 활발해진다', en:'Get energized talking to all', ja:'皆と交わって元気になる', zh:'和大家交流精神好', es:'Me energiza hablar con todos', fr:'Je m\'anime en parlant à tous', de:'Werde von allen belebt', vi:'Vui vẻ trò chuyện với mọi người', th:'สนุกกับทุกคน', pt:'Fico animado falando com todos', hi:'सबसे बात करके ऊर्जावान', ar:'أنشط بالحديث مع الجميع' },
    b: { ko:'가까운 소수와 대화한다', en:'Stick to a few close ones', ja:'仲の良い少人数と話す', zh:'和熟人聊天', es:'Hablo con pocos cercanos', fr:'Je reste avec quelques proches', de:'Bleibe bei wenigen Vertrauten', vi:'Nói chuyện với vài người thân', th:'คุยกับคนที่สนิท', pt:'Fico com poucos íntimos', hi:'नज़दीकियों से बात', ar:'أتحدث مع القريبين' },
  },
  {
    dim: 'A',
    text: {
      ko: '새로운 국가의 전통 의상을 볼 때...',
      en: 'Seeing traditional clothing from another country...',
      ja: '他国の伝統衣装を見ると...',
      zh: '看到别国传统服装时...',
      es: 'Al ver ropa tradicional de otro país...',
      fr: 'Face à un habit traditionnel étranger...',
      de: 'Beim Anblick traditioneller Kleidung...',
      vi: 'Thấy trang phục truyền thống nước khác...',
      th: 'เห็นชุดประจำชาติของประเทศอื่น...',
      pt: 'Ao ver roupa tradicional estrangeira...',
      hi: 'दूसरे देश का पारंपरिक कपड़ा देखकर...',
      ar: 'عند رؤية زي تقليدي...',
    },
    a: { ko:'꼭 입어보고 싶다', en:'Really want to try wearing it', ja:'着てみたくなる', zh:'很想穿看看', es:'Quiero probármelo', fr:'J\'ai envie de l\'essayer', de:'Möchte es anprobieren', vi:'Muốn mặc thử', th:'อยากลองใส่', pt:'Quero experimentar', hi:'पहनना चाहूंगा', ar:'أود ارتداءه' },
    b: { ko:'멋있지만 존중하며 감상한다', en:'Admire it respectfully', ja:'素敵だなと尊重して見る', zh:'欣赏并尊重', es:'Lo admiro con respeto', fr:'Je l\'admire avec respect', de:'Bewundere es respektvoll', vi:'Ngắm với sự trân trọng', th:'ชื่นชมด้วยความเคารพ', pt:'Admiro com respeito', hi:'सम्मान से देखता हूं', ar:'أعجب باحترام' },
  },
  {
    dim: 'S',
    text: {
      ko: '갑자기 외국 친구가 방문한다면...',
      en: 'If a foreign friend suddenly visits...',
      ja: '外国の友達が突然訪ねてきたら...',
      zh: '外国朋友突然来访...',
      es: 'Si un amigo extranjero llega de sorpresa...',
      fr: 'Si un ami étranger débarque...',
      de: 'Wenn ein Freund unangekündigt kommt...',
      vi: 'Bạn nước ngoài đột nhiên ghé...',
      th: 'เพื่อนต่างชาติมาเยี่ยมกะทันหัน...',
      pt: 'Se um amigo estrangeiro visita de surpresa...',
      hi: 'विदेशी दोस्त अचानक आ जाए तो...',
      ar: 'إذا زارك صديق أجنبي فجأة...',
    },
    a: { ko:'좋아! 바로 반겨준다', en:'Great! Welcome them right in', ja:'いいね!すぐ迎える', zh:'太好了立刻欢迎', es:'¡Bien! Los recibo de inmediato', fr:'Super, je les accueille', de:'Toll, ich empfange sie', vi:'Tuyệt! Đón ngay', th:'เยี่ยม! ต้อนรับเลย', pt:'Ótimo! Recebo na hora', hi:'बढ़िया! स्वागत करता हूं', ar:'رائع! أرحب فوراً' },
    b: { ko:'준비할 시간이 필요하다', en:'I need time to prepare', ja:'準備の時間が欲しい', zh:'需要时间准备', es:'Necesito tiempo para prepararme', fr:'J\'ai besoin de me préparer', de:'Brauche Zeit zur Vorbereitung', vi:'Cần thời gian chuẩn bị', th:'ต้องเตรียมตัวก่อน', pt:'Preciso me preparar', hi:'तैयारी का समय चाहिए', ar:'أحتاج وقتاً للتحضير' },
  },
  {
    dim: 'C',
    text: {
      ko: '친구와의 대화 주제는...',
      en: 'Conversations with friends are usually about...',
      ja: '友達との会話の話題は...',
      zh: '和朋友聊天的话题是...',
      es: 'Suelo hablar con mis amigos de...',
      fr: 'Avec mes amis, je parle de...',
      de: 'Mit Freunden rede ich über...',
      vi: 'Mình thường nói với bạn về...',
      th: 'บทสนทนากับเพื่อนมักเป็น...',
      pt: 'Costumo falar com amigos sobre...',
      hi: 'दोस्तों से बातचीत में...',
      ar: 'أحاديثي مع الأصدقاء عن...',
    },
    a: { ko:'꿈, 가치관 같은 깊은 이야기', en:'Dreams, values, deep stuff', ja:'夢や価値観など深い話', zh:'梦想价值观等深入话题', es:'Sueños, valores, profundo', fr:'Rêves, valeurs, profondeur', de:'Träume, Werte, Tiefes', vi:'Ước mơ, giá trị sâu sắc', th:'ความฝันคุณค่าลึกซึ้ง', pt:'Sonhos, valores, profundo', hi:'सपने, मूल्य गहरी बातें', ar:'أحلام وقيم عميقة' },
    b: { ko:'가벼운 일상, 재미있는 것들', en:'Daily life, fun things', ja:'日常や楽しい話題', zh:'日常有趣的事', es:'Vida diaria, cosas divertidas', fr:'Le quotidien, le fun', de:'Alltag, lustige Dinge', vi:'Chuyện thường ngày vui', th:'เรื่องธรรมดาสนุกๆ', pt:'Dia a dia, coisas divertidas', hi:'रोज़मर्रा और मज़ेदार', ar:'حياة يومية ومرح' },
  },
  {
    dim: 'O',
    text: {
      ko: 'K-Pop이나 다른 나라 음악을 들을 때...',
      en: 'Listening to K-Pop or foreign music...',
      ja: 'K-Popや他国の音楽を聴くとき...',
      zh: '听K-Pop或外国音乐时...',
      es: 'Al escuchar K-Pop o música extranjera...',
      fr: 'En écoutant du K-Pop ou de la musique étrangère...',
      de: 'Beim Hören von K-Pop oder ausländischer Musik...',
      vi: 'Khi nghe K-Pop hay nhạc nước ngoài...',
      th: 'ฟัง K-Pop หรือเพลงต่างชาติ...',
      pt: 'Ao ouvir K-Pop ou música estrangeira...',
      hi: 'K-Pop या विदेशी संगीत सुनते समय...',
      ar: 'عند سماع K-Pop أو موسيقى أجنبية...',
    },
    a: { ko:'가사 뜻까지 알고 싶어진다', en:'I want to know the lyrics\' meaning', ja:'歌詞の意味まで知りたい', zh:'想知道歌词含义', es:'Quiero saber qué significan las letras', fr:'Je veux comprendre les paroles', de:'Möchte die Texte verstehen', vi:'Muốn hiểu lời bài hát', th:'อยากรู้ความหมายเนื้อเพลง', pt:'Quero saber o significado da letra', hi:'बोल का अर्थ जानना चाहूं', ar:'أريد فهم كلمات الأغنية' },
    b: { ko:'멜로디만 즐기면 충분하다', en:'Just enjoying the melody is enough', ja:'メロディーだけで十分', zh:'享受旋律就够了', es:'La melodía basta', fr:'La mélodie suffit', de:'Melodie reicht mir', vi:'Chỉ giai điệu là đủ', th:'แค่ทำนองก็พอ', pt:'A melodia basta', hi:'सिर्फ धुन काफी है', ar:'اللحن يكفي' },
  },
  {
    dim: 'E',
    text: {
      ko: '내가 다른 사람에게 주는 첫 인상은...',
      en: 'The first impression I give is usually...',
      ja: '私が与える第一印象は...',
      zh: '我给人的第一印象是...',
      es: 'La primera impresión que doy es...',
      fr: 'Ma première impression est...',
      de: 'Mein erster Eindruck ist meist...',
      vi: 'Ấn tượng đầu tiên của mình là...',
      th: 'ประทับใจแรกของฉันมักเป็น...',
      pt: 'Minha primeira impressão é...',
      hi: 'मेरा पहला प्रभाव अक्सर...',
      ar: 'انطباعي الأول عادةً...',
    },
    a: { ko:'밝고 에너지 넘치는 사람', en:'Bright and energetic', ja:'明るくエネルギッシュ', zh:'开朗有活力', es:'Alegre y con energía', fr:'Souriant et énergique', de:'Fröhlich und lebhaft', vi:'Vui vẻ và tràn năng lượng', th:'สดใสมีพลัง', pt:'Alegre e cheio de energia', hi:'हंसमुख और ऊर्जावान', ar:'مرح ومفعم بالحيوية' },
    b: { ko:'차분하고 신중한 사람', en:'Calm and thoughtful', ja:'落ち着いて慎重', zh:'沉稳而周到', es:'Calmado y reflexivo', fr:'Calme et réfléchi', de:'Ruhig und bedacht', vi:'Điềm tĩnh và chu đáo', th:'สงบและรอบคอบ', pt:'Calmo e reflexivo', hi:'शांत और सोच-समझकर', ar:'هادئ ومتأمل' },
  },
];

// Compute personality — scores each of the 12 types based on how the answers align.
// Every question contributes to multiple types; the type with the highest score wins.
function computePersonality(answers) {
  const q = PERSONALITY_QUESTIONS;

  // Compute raw dim scores as ratios [0..1]
  const raw = { E: 0, A: 0, C: 0, S: 0, O: 0 };
  const count = { E: 0, A: 0, C: 0, S: 0, O: 0 };
  answers.forEach((ans, i) => {
    if (!q[i]) return;
    const d = q[i].dim;
    count[d] = (count[d] || 0) + 1;
    if (ans === 'A') raw[d]++;
  });
  const dim = {};
  for (const d of ['E','A','C','S','O']) {
    dim[d] = count[d] > 0 ? raw[d] / count[d] : 0.5;
  }

  // Signature vector for each personality type (each dim ideal value 0..1)
  // Higher E = extraverted, higher A = adventurous, higher C = deep connection,
  // higher S = spontaneous, higher O = curious/open
  const signatures = {
    CATALYST:    { E: 1.0, A: 1.0, C: 0.5, S: 1.0, O: 1.0 },  // 열정 리더
    SPARK:       { E: 1.0, A: 1.0, C: 0.3, S: 1.0, O: 0.5 },  // 활력 인싸
    STORYTELLER: { E: 1.0, A: 0.5, C: 0.7, S: 0.5, O: 1.0 },  // 표현 풍부
    HARMONY:     { E: 0.8, A: 0.3, C: 0.7, S: 0.3, O: 0.5 },  // 조화, 편안
    EXPLORER:    { E: 0.5, A: 1.0, C: 0.3, S: 0.7, O: 1.0 },  // 모험, 개방
    WANDERER:    { E: 0.4, A: 1.0, C: 0.3, S: 1.0, O: 0.7 },  // 자유, 즉흥
    DREAMER:     { E: 0.3, A: 0.7, C: 0.7, S: 0.6, O: 1.0 },  // 상상, 감성
    SCHOLAR:     { E: 0.2, A: 0.3, C: 0.7, S: 0.2, O: 1.0 },  // 탐구
    BRIDGE:      { E: 0.6, A: 0.5, C: 0.8, S: 0.4, O: 1.0 },  // 연결자
    LISTENER:    { E: 0.2, A: 0.3, C: 1.0, S: 0.3, O: 0.5 },  // 조용한 경청
    ANCHOR:      { E: 0.4, A: 0.2, C: 1.0, S: 0.2, O: 0.3 },  // 신뢰, 안정
    GUARDIAN:    { E: 0.5, A: 0.3, C: 1.0, S: 0.3, O: 0.5 },  // 배려, 보호
  };

  // Score each type: closer to signature = higher score
  let bestKey = null;
  let bestScore = -Infinity;
  for (const [key, sig] of Object.entries(signatures)) {
    // Score = negative sum of squared distance (closer = higher)
    let score = 0;
    for (const d of ['E','A','C','S','O']) {
      const diff = dim[d] - sig[d];
      score -= diff * diff;
    }
    if (score > bestScore) {
      bestScore = score;
      bestKey = key;
    }
  }

  return PERSONALITY_TYPES[bestKey] || PERSONALITY_TYPES.BRIDGE;
}

// Compatibility matrix — who matches best with whom (based on complementary personalities)
const PERSONALITY_MATCHES = {
  BRIDGE:      { good: ['EXPLORER', 'STORYTELLER', 'HARMONY'],   avoid: [] },
  EXPLORER:    { good: ['WANDERER', 'CATALYST', 'BRIDGE'],       avoid: [] },
  STORYTELLER: { good: ['LISTENER', 'BRIDGE', 'DREAMER'],        avoid: [] },
  LISTENER:    { good: ['STORYTELLER', 'SPARK', 'CATALYST'],     avoid: [] },
  DREAMER:     { good: ['SCHOLAR', 'STORYTELLER', 'HARMONY'],    avoid: [] },
  ANCHOR:      { good: ['WANDERER', 'GUARDIAN', 'HARMONY'],      avoid: [] },
  SPARK:       { good: ['LISTENER', 'ANCHOR', 'DREAMER'],        avoid: [] },
  SCHOLAR:     { good: ['DREAMER', 'BRIDGE', 'EXPLORER'],        avoid: [] },
  WANDERER:    { good: ['ANCHOR', 'SCHOLAR', 'GUARDIAN'],        avoid: [] },
  GUARDIAN:    { good: ['ANCHOR', 'WANDERER', 'SPARK'],          avoid: [] },
  CATALYST:    { good: ['LISTENER', 'EXPLORER', 'HARMONY'],      avoid: [] },
  HARMONY:     { good: ['DREAMER', 'ANCHOR', 'BRIDGE'],          avoid: [] },
};

// Traits for each personality (shown on result screen)
const PERSONALITY_TRAITS = {
  BRIDGE:      { ko: ['공감 능력', '소통 지향', '문화 이해'] },
  EXPLORER:    { ko: ['호기심', '모험심', '개방성'] },
  STORYTELLER: { ko: ['표현력', '유머', '관찰력'] },
  LISTENER:    { ko: ['경청', '공감', '진중함'] },
  DREAMER:     { ko: ['상상력', '감수성', '예술성'] },
  ANCHOR:      { ko: ['신뢰', '안정', '의리'] },
  SPARK:       { ko: ['활력', '카리스마', '리더십'] },
  SCHOLAR:     { ko: ['탐구심', '집중력', '학습욕'] },
  WANDERER:    { ko: ['자유', '즉흥성', '유연함'] },
  GUARDIAN:    { ko: ['배려', '보호', '따뜻함'] },
  CATALYST:    { ko: ['영감', '주도성', '열정'] },
  HARMONY:     { ko: ['조화', '평화', '포용력'] },
};

Object.assign(window, {
  LANGUAGES, UI_STRINGS, PERSONALITY_TYPES, PERSONALITY_QUESTIONS,
  PERSONALITY_MATCHES, PERSONALITY_TRAITS, computePersonality,
});
