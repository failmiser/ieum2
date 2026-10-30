// 이음 - Web application container (responsive, no phone frame)

function IeumApp({ initialScreen = 'onboarding' }) {
  const [screen, setScreen] = React.useState(initialScreen);
  const [friendsOpen, setFriendsOpen] = React.useState(false);
  const [matchTarget, setMatchTarget] = React.useState(MATCH_CANDIDATES[0]);
  const [activeFriend, setActiveFriend] = React.useState(null);
  const [profile, setProfile] = React.useState({
    name: '',
    langCode: 'ko',
    personalityType: null,
  });
  const [activeLessonId, setActiveLessonId] = React.useState('JP-1');

  const openLesson = (id) => {
    setActiveLessonId(id || 'JP-1');
    setScreen('lesson');
  };

  const go = (s) => { setScreen(s); setFriendsOpen(false); };

  const openFriendChat = (friend) => {
    // Clear unread badge when opening the chat (mutate FRIENDS in place)
    const f = FRIENDS.find(x => x.name === friend.name && x.country === friend.country);
    if (f) f.unread = 0;
    // First conversation thread started
    if (typeof bumpStat === 'function' && typeof USER_STATS !== 'undefined' && USER_STATS.chats === 0) {
      bumpStat('chats');
    }
    setActiveFriend(friend);
    setScreen('friend-chat');
    setFriendsOpen(false);
  };

  const goMatch = () => {
    setScreen('matching');
  };
  const onMatched = () => {
    setMatchTarget(MATCH_CANDIDATES[Math.floor(Math.random()*MATCH_CANDIDATES.length)]);
    if (typeof bumpStat === 'function') bumpStat('matches');
    setScreen('match-result');
  };

  const finishOnboarding = (data) => {
    // Save all onboarding data both to profile state AND to USER (for other screens)
    const { name, username, langCode, country, interestsCountry, grade, hobbies } = data;
    setProfile(p => ({ ...p, name, username, langCode, country, interestsCountry, grade, hobbies }));
    USER.name = name;
    USER.handle = '@' + username;
    USER.grade = grade;
    USER.country = country;
    USER.interests_country = interestsCountry;
    USER.hobbies = hobbies;
    if (typeof bumpStat === 'function') bumpStat('days');   // day 1 of the streak
    setScreen('test');
  };

  const finishTest = (personalityType) => {
    setProfile(p => ({ ...p, personalityType }));
    // Keep it on USER too so friend rows can flag good/tough matches
    if (typeof USER !== 'undefined') USER.personalityType = personalityType;
    setScreen('home');
  };

  // Screens that should be fullscreen (no shell/nav)
  const fullscreen = new Set([
    'onboarding', 'test', 'matching', 'match-result',
    'videocall', 'lesson',
  ]);
  const hideNav = fullscreen.has(screen);

  let content;
  switch (screen) {
    case 'onboarding':
      content = <OnboardingScreen onComplete={finishOnboarding} />;
      break;
    case 'home':
      content = <HomeScreenWeb
        onNav={go}
        onOpenFriends={() => setFriendsOpen(true)}
        onStartMatching={goMatch}
        onStartTest={() => setScreen('test')}
        onOpenLesson={openLesson}
        profile={profile}
      />;
      break;
    case 'test':
      content = <PersonalityTest
        langCode={profile.langCode || 'ko'}
        userName={profile.name}
        onClose={() => setScreen(profile.personalityType ? 'home' : 'onboarding')}
        onFinish={finishTest}
      />;
      break;
    case 'matching':
      content = <MatchingLoading onCancel={() => setScreen('home')} onMatched={onMatched} langCode={profile.langCode || 'ko'} />;
      break;
    case 'match-result':
      content = <MatchResult match={matchTarget} onAccept={() => setScreen('videocall')} onSkip={() => setScreen('matching')} langCode={profile.langCode || 'ko'} />;
      break;
    case 'videocall':
      content = <VideoCallScreen match={matchTarget} onEnd={() => setScreen('home')} langCode={profile.langCode || 'ko'} />;
      break;
    case 'chats':
      content = <ChatsScreen onOpenChat={openFriendChat} langCode={profile.langCode || 'ko'} />;
      break;
    case 'friend-chat':
      content = <FriendChatScreen
        friend={activeFriend || FRIENDS[0]}
        onBack={() => setScreen('chats')}
        onCall={() => {
          const f = activeFriend || FRIENDS[0];
          setMatchTarget({ name: f.name, country: f.country, grade: '친구', hobbies: [], match: 100 });
          setScreen('videocall');
        }}
      langCode={profile.langCode || 'ko'}
      />;
      break;
    case 'study':
      content = <StudyScreen
        onOpenTeachers={() => setScreen('teachers')}
        onOpenSelfStudy={() => setScreen('selfstudy')}
        langCode={profile.langCode || 'ko'}
      />;
      break;
    case 'teachers':
      content = <TeacherList onBack={() => setScreen('study')} langCode={profile.langCode || 'ko'} />;
      break;
    case 'selfstudy':
      content = <SelfStudy
        onBack={() => setScreen('study')}
        onOpenLesson={openLesson}
        onOpenChats={() => setScreen('chats')}
        profile={profile}
      />;
      break;
    case 'lesson':
      content = <LessonScreen
        key={activeLessonId}
        lessonId={activeLessonId}
        onExit={() => setScreen('selfstudy')}
        onComplete={() => setScreen('selfstudy')}
        onNextUnit={(nextId) => { setActiveLessonId(nextId); }}
      />;
      break;
    case 'scan':
      content = <QRScanner onNav={go} langCode={profile.langCode || 'ko'} />;
      break;
    case 'store':
      content = <StoreScreen
        onOpenAchievements={() => setScreen('achievements')}
        onOpenScan={() => setScreen('scan')}
        langCode={profile.langCode || 'ko'}
      />;
      break;
    case 'achievements':
      content = <AchievementsScreen langCode={profile.langCode || 'ko'} />;
      break;
    case 'profile':
      content = <ProfileScreen
        onEdit={() => setScreen('profileedit')}
        onOpenSettings={() => setScreen('settings')}
        onOpenAchievements={() => setScreen('achievements')}
        onNav={go}
        profile={profile}
      />;
      break;
    case 'achievements-p':
      content = <AchievementsScreen langCode={profile.langCode || 'ko'} />;
      break;
    case 'profileedit':
      content = <ProfileEdit
        onBack={() => setScreen('profile')}
        profile={profile}
        onSave={(updates) => setProfile(p => ({ ...p, ...updates }))}
      />;
      break;
    case 'settings':
      content = <SettingsScreen
        onBack={() => setScreen('profile')}
        onLogout={() => { setProfile({ name: '', langCode: 'ko', personalityType: null }); setScreen('onboarding'); }}
        langCode={profile.langCode || 'ko'}
      />;
      break;
    default:
      content = <div style={{ padding: 40 }}>Unknown screen: {screen}</div>;
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <WebShell
        current={screen}
        onNav={go}
        onOpenFriends={() => setFriendsOpen(true)}
        hideNav={hideNav}
        langCode={profile.langCode || 'ko'}
      >
        {content}
      </WebShell>
      <FriendsDrawer
        open={friendsOpen}
        onClose={() => setFriendsOpen(false)}
        onSelect={openFriendChat}
        onStartMatch={goMatch}
      langCode={profile.langCode || 'ko'}
      />
    </div>
  );
}

Object.assign(window, { IeumApp });
