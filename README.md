# Handoff: 이음 (Ieum) — 청소년 국제교류 플랫폼

**청소년의 국제교류 기회 확대를 위한 AI 기반 국제교류 플랫폼**

---

## Overview

**이음(Ieum)** 은 AI가 성격과 관심사를 분석해 전 세계 청소년과 매칭해주고, 실시간 번역 채팅으로 대화하며, 원어민 선생님과 AI 셀프 스터디로 언어를 배우고, 실물 컬처킷을 QR로 등록해 업적을 모으는 통합 플랫폼입니다.

**핵심 흐름**

```
온보딩 (언어 → 환영 → 이름 → 유저네임 → 내 국가 → 관심 국가 → 학년·취미)
   ↓
성격 테스트 10문항 (5축 측정)
   ↓
20가지 성격 유형 중 1개 판정 + 궁합 표시
   ↓
홈 → 매칭 / 채팅 / 학습 / 스캔 / 스토어 / 업적 / 프로필
```

**타겟**: 모든 청소년 (초4 ~ 대4, 10대~20대 초반)
**최종 목표**: 모바일 앱(iOS/Android) + 웹. 현재는 반응형 웹 프로토타입.

---

## About the Design Files

이 번들의 파일들은 **HTML로 제작된 디자인 레퍼런스**입니다 — 의도한 외관과 동작을 보여주는 프로토타입이며, 그대로 복사해 프로덕션에 넣을 코드가 아닙니다.

**과제**: 이 HTML 디자인을 타겟 코드베이스의 기존 환경(Next.js, React Native, Flutter, SwiftUI 등)에서 재구현하는 것입니다.

**권장 스택**:
- 모바일 앱이 최종 목표 → **React Native (Expo)** 또는 **Flutter**
- 웹 우선이라면 → **Next.js 14 App Router + TypeScript + Tailwind**
- 현재 프로토타입은 React 18 + Babel Standalone (브라우저 컴파일)이므로, 프로덕션에서는 반드시 번들러로 전환해야 합니다.

⚠️ **프로토타입의 한계** (반드시 읽어주세요):
- 모든 데이터는 메모리에만 존재 → 새로고침하면 초기화
- 인증/DB/결제 없음
- 화상통화는 시각적 목업 (WebRTC 미연동)
- 스터디 진행률은 세션 내에서만 유지

---

## Fidelity

**High-fidelity (hifi)** — 픽셀 단위 목업입니다. 최종 색상, 타이포그래피, 간격, 애니메이션, 인터랙션이 모두 확정된 상태이며, 개발자는 **픽셀 단위로 재현**해야 합니다.

인터랙션 깊이는 **풀 프로토타입**:
- 온보딩 7단계 실제 진행
- 성격 테스트 10문항 응답 → 유형 판정
- 채팅 AI 응답 (이중 언어)
- 레슨 문제 풀이 → 유닛 언락
- 친구 추가 → 내 채팅 반영
- 컬처킷 결제 시트

---

## Screens / Views

디바이스: **반응형 웹**
- **데스크탑 (768px+)**: 좌측 사이드바 240px + 메인 콘텐츠 (max-width 1080px)
- **모바일 (≤768px)**: 상단 헤더 + 하단 탭바

### 공통 내비게이션

**사이드바 (데스크탑)** — 폭 240px, 우측 1px `--ie-line` 보더, 흰 배경, `position: sticky; height: 100vh`
- 상단: 이음 로고 (26px)
- 7개 탭: 홈 · 채팅 · 학습 · 스캔 · 스토어 · 업적 · 내 정보
  - 각 항목: 아이콘 20px + 라벨 14px, padding `10px 12px`, radius 10px
  - 활성: 배경 `--ie-coral-tint`, 글자 `--ie-coral-deep`, 굵기 700
  - 비활성: `--ie-ink-2`, 굵기 500 / 호버 시 배경 `--ie-line-2`
- 하단: 친구 버튼 (배경 `--ie-line-2`, 미확인 배지)

**하단 탭바 (모바일)** — 높이 60px + safe-area, `rgba(255,255,255,0.96)`, `backdrop-filter: blur(20px)`, 상단 1px 보더, `position: sticky; bottom: 0`
- 아이콘 22px + 라벨 10px/600
- 활성 `--ie-coral`, 비활성 `--ie-ink-3`

**화면 헤더 (`ScreenHeader`)** — padding `32px 32px 20px`, max-width 1080px 중앙 정렬
- 서브타이틀: 12px/700, `--ie-coral`, letter-spacing `0.05em`
- 타이틀: 32px/800, letter-spacing `-0.03em`
- 뒤로가기 버튼: 40×40, radius 12, `--ie-line-2` 배경

---

### 1. 온보딩 (Onboarding) — 7단계

**목적**: 첫 진입 시 프로필 수집. **첫 화면이 언어 선택**입니다.

| 단계 | 내용 | 필수 |
|---|---|---|
| 0 | 🌐 언어 선택 (12개) | 기본값 한국어 |
| 1 | 👋 환영 + 기능 소개 3개 | — |
| 2 | 이름 입력 | 1자 이상 |
| 3 | 유저네임 (`@`) | 3자 이상, 영문/숫자/`_`/`.` |
| 4 | 내 국가 | 12개국 중 택1 |
| 5 | 관심 국가 | 1개 이상 (다중 선택) |
| 6 | 학년 + 취미 | 학년 필수, 취미 1개 이상 |

**레이아웃**: 세로 flex, min-height 100vh, 배경 `--ie-bg`
- 상단: 뒤로가기(40×40) + 진행바 7칸(높이 5px, radius 3) + `{n} / 7 · {단계명}`
- 본문: max-width 640px, padding `20px 32px`
- 하단 고정 CTA: padding `16px 24px 30px`, 높이 18px 패딩 16px radius 16px
  - 활성: `--ie-coral` 배경 흰 글자
  - 비활성: `--ie-line-2` 배경 `--ie-ink-4` 글자, `cursor: not-allowed`

**언어 그리드**: 2열, gap 8px. 카드 padding `14px 12px`, radius 14, 국기 24px + 언어명
- 선택 시: `--ie-coral-tint` 배경 + 2px `--ie-coral` 보더 + 체크 아이콘

**국가 그리드**: 2열, gap 10px. 카드 padding `14px`, 국기 26px + 국가명 13px/700 + 원어명 11px

**학년 선택**: 드롭다운. 13개 옵션 (초4~대4). 선택 시 2px `--ie-coral` 보더

**취미**: 18개 태그 칩. 선택 시 `--ie-ink` 배경 흰 글자, 미선택 시 흰 배경 `--ie-line` 보더

---

### 2. 성격 테스트 (Personality Test)

**목적**: 10문항으로 성격 유형 판정.

**질문 10개** (`personality_v2.jsx`의 `PQ5`):

| # | 질문 | 선택지 수 |
|---|---|---|
| 1 | 처음 보는 사람들 사이에서 나는? | 4 |
| 2 | 새로운 걸 배울 때 나는? | 4 |
| 3 | 친구들이 나에 대해 욕하는 걸 들었을 때 나는? | 5 |
| 4 | 좋아하는 걸 할 때 나는? | 5 |
| 5 | 친구들 사이에서 나는? | 5 |
| 6 | 공부할 때 나는? | 5 |
| 7 | 에너지를 충전하고 싶을 때 나는? | 5 |
| 8 | 갈등 상황에서 더 중요한 것은? | 5 |
| 9 | 새로운 아이디어가 떠오른다면 나는? | 4 |
| 10 | 계획에 없던 일이 생기면 나는? | 5 |

**중요**: 매 세션마다 **질문 순서와 선택지 순서가 셔플**됩니다. `React.useMemo`로 마운트 시 1회만 섞고, `{origQ, origO}` 메타데이터로 원본 인덱스를 보존합니다.

**레이아웃**:
- 상단: 닫기 버튼 40×40 + 진행바 (높이 10px) + `{n}/10` 카운터 (mono 14px)
- 본문: max-width 720px
  - 라벨: "질문 01" (12px/700, `--ie-coral`, tracking 0.08em)
  - 질문: 32px/800, letter-spacing `-0.03em`, line-height 1.3
  - 선택지: 세로 flex, gap 12px. 각 버튼 padding 18px, radius 18, 2px `--ie-line` 보더
    - 라벨 원: 36×36, radius 12, A/B/C/D/E (첫 번째만 `--ie-coral-tint` 배경)
    - 텍스트: 15px/600, line-height 1.4
    - 호버: 보더 `--ie-coral`, 배경 `--ie-coral-tint`

**결과 화면** — 상세는 아래 "성격 판정 로직" 참조. 배경 `linear-gradient(180deg, var(--ie-coral-tint), var(--ie-bg) 520px)`

---

### 3. 성격 판정 로직 (핵심 알고리즘)

이 부분은 **반드시 그대로 이식**해야 합니다. 그냥 "가장 높은 점수 1개 고르기"로 만들면 특정 유형만 반복 출현하는 버그가 납니다.

**5개 축**:
| 축 | 의미 |
|---|---|
| `E` | 외향성 (social energy, initiating) |
| `W` | 따뜻함 (caring, empathy) |
| `C` | 사고력 (analysis, curiosity) |
| `F` | 자유로움 (spontaneity, novelty) |
| `S` | 안정감 (planning, structure) |

**각 선택지**는 `w: { E: 1, F: -0.5 }` 형태로 축에 가중치를 줍니다 (범위 -1 ~ +1).

**계산 3단계**:

**Step 1 — 답변을 축별 z-score로 변환**
```
raw[axis]   = 선택한 선택지들의 w[axis] 합
mean[axis]  = 모든 질문 × 모든 선택지의 w 평균 합
variance[axis] = 각 질문의 분산 합
ansZ[axis]  = (raw[axis] - mean[axis]) / sqrt(variance[axis])
```

**Step 2 — 유형 시그니처도 같은 방식으로 z-score화**
```
sigZ[type][axis] = (sig[axis] - meanOfAllTypes[axis]) / sdOfAllTypes[axis]
```

**Step 3 — 캘리브레이션 (가장 중요)**

중앙에 위치한 유형(다리, 예술가)은 모든 답변과 가까워서 계속 이깁니다. 이를 막기 위해 **반복 재가중치**를 씁니다:

```js
const weight = {};  // 모든 유형 1.0으로 초기화
for (let round = 0; round < 6; round++) {
  const wins = {};
  for (let s = 0; s < 900; s++) {
    // 무작위 응답자 1명 시뮬레이션
    const raw = simulateRandomAnswers();
    const az = zScore(raw);
    // 가장 가까운 유형 찾기 (weight 반영)
    const best = findNearest(az, weight);
    wins[best]++;
  }
  const target = 900 / 20;
  // 너무 자주 이긴 유형은 가중치 낮추기 (반걸음씩, 안정적 수렴)
  Object.keys(weight).forEach(k => {
    weight[k] *= Math.pow(target / Math.max(wins[k], 1), 0.5);
  });
}
const logw[type] = Math.log(weight[type]);
```

**최종 판정**:
```js
score[type] = -(거리²) + logw[type] + Math.random() * 0.35;
// 최고 점수 유형 반환
```

**검증 결과**: 8,000회 무작위 응답 시 20개 유형이 **340~471회** (이상적 400, 편차 1.4배)로 고르게 분포.

⚠️ `Math.random()` 지터가 없으면 동점 처리가 부자연스러워집니다. 반드시 포함하세요.

---

### 4. 성격 20가지 유형

`personality_types_v3.jsx`의 `P_TYPES_V4` 참조.

| 키 | 이모지 | 한국어명 | 태그라인 |
|---|---|---|---|
| SPARK | 🔥 | 불꽃 | 가만히 못 있는 사람 |
| SUNSHINE | ☀️ | 햇살 | 옆에 있으면 밝아짐 |
| DRUM | 🥁 | 북 | 박자 만들어주는 사람 |
| ARROW | 🏹 | 화살 | 목표가 있으면 직진 |
| BRIDGE | 🌉 | 다리 | 어색한 사이를 이어줌 |
| FOREST | 🌲 | 숲 | 그냥 있어주는 것만으로 |
| ONDOL | 🫖 | 온돌 | 따뜻한 안식처 |
| GARDEN | 🌷 | 정원 | 사람을 키우는 사람 |
| LIGHTHOUSE | 🗼 | 등대 | 흔들려도 중심은 나 |
| PILLAR | 🏛️ | 기둥 | 말없이 버텨주는 사람 |
| SAGE | 🦉 | 현자 | 한 번 더 생각하는 사람 |
| OBSERVER | 🔭 | 관찰자 | 다 보이고 있어 |
| SHADOW | 🌑 | 그림자 | 조용히 깊어지는 사람 |
| CLOCK | ⏰ | 시계 | 정해진 건 정해진 대로 |
| COMPASS | 🧭 | 나침반 | 방향을 정해주는 사람 |
| WAVE | 🌊 | 파도 | 흐르는 대로 |
| ARTIST | 🎨 | 예술가 | 느낌이 먼저 오는 사람 |
| DOODLE | ✏️ | 낙서 | 엉뚱한 데서 답이 남 |
| MOON | 🌙 | 달 | 밤에 더 선명해지는 |
| MAVERICK | 🚀 | 자유인 | 남이 하니까 안 해 |

**각 유형 구조**:
```ts
{
  key: 'SPARK',
  emoji: '🔥',
  sig: { E: 0.95, W: 0.45, C: 0.35, F: 0.95, S: 0.15 },  // 5축 시그니처
  best: ['LIGHTHOUSE', 'SAGE', 'OBSERVER'],   // 찰떡 궁합 3개
  tough: ['CLOCK', 'COMPASS'],                 // 노력 필요 2개
  i18n: {
    ko: {
      label: '불꽃',
      tagline: '가만히 못 있는 사람',
      desc: '생각나면 바로 움직여요. 계획표보다 몸이 먼저 나가는 타입이에요.',
      charm: ['분위기를 한 번에 띄움', '새로운 걸 제일 먼저 시도', '지루할 틈을 안 줌'],
      warning: '시작은 많은데 끝맺음이 아쉬울 때가 있어요'
    },
    en: { /* 동일 구조 */ }
  }
}
```

**궁합 규칙**: `best`는 서로 보완되는 시그니처, `tough`는 정반대 성향. 양방향으로 정의되어 있지 않으므로 A→B가 best여도 B→A는 아닐 수 있습니다. 프로덕션에서는 대칭으로 정규화하는 것을 권장합니다.

**친구 성격 배정**: `personalityForUser(username)` 함수가 유저네임 해시로 결정론적 배정. 같은 사람은 항상 같은 성격.

---

### 5. 결과 화면 (Result Reveal)

**목적**: 성격을 재미있게 보여주고 궁합을 제시. 사용자가 "내 성격을 보고 재미를 느끼는" 것이 핵심 요구사항이었습니다.

**레이아웃** (max-width 760px 중앙 정렬):

1. **상단 라벨**: "당신의 성격 유형은" (12px/700, `--ie-coral-deep`, tracking 0.15em)

2. **이모지 배지**: 170×170 원, 흰 배경, 4px `--ie-coral-soft` 보더, `0 24px 70px rgba(46,107,255,0.22)` 그림자, 이모지 88px, `ie-fadeup 0.6s`

3. **유형명**: 46px/800, letter-spacing `-0.03em`

4. **태그라인 칩**: `--ie-coral` 배경 흰 글자, radius 999, 14px/700, `"태그라인"` 형식

5. **설명**: 17px, `--ie-ink-2`, line-height 1.6, max-width 480px

6. **✨ 나의 매력 포인트** 카드:
   - 흰 배경, 1px `--ie-line`, radius 22, padding 24
   - 헤더: 34×34 아이콘 박스 (`--ie-coral-tint` 배경) + "나의 매력 포인트" 17px/800
   - 각 항목: `--ie-line-2` 배경, radius 12, padding `12px 14px`, 번호 원(26×26, `--ie-coral`) + 텍스트 14px/600

7. **💡 살짝 알아두면 좋은 점** 카드:
   - `--ie-butter` 배경, radius 18, padding 18
   - 라벨 "ONE THING TO NOTE" (12px/800, `#8a6d00`)
   - 본문 14px/600, `#5c4a00`

8. **💫 BEST MATCH** 카드:
   - 헤더 "나와 찰떡인 성격"
   - 3개 유형을 `repeat(auto-fit, minmax(150px, 1fr))` 그리드로
   - 각: `--ie-coral-tint` 배경, radius 14, padding 14, 이모지 32px + 유형명 15px/800 + 태그라인 11px

9. **🌗 조금 노력이 필요한 성격**: 회색 칩 형태

10. **CTA**: "앱 시작하기 →" — `--ie-coral` 배경, radius 16, padding 18px, `0 12px 32px rgba(46,107,255,0.3)` 그림자

---

### 6. 홈 (Home)

**목적**: 매칭 시작 + 학습 이어가기 + 주요 기능 진입.

**레이아웃** (max-width 1080px, padding `32px`, 상하 여백 80px):

1. **인사**: "{이름}님 👋" (14px, `--ie-ink-3`) + 36px/800 헤드라인 (강조 단어만 `--ie-coral`)

2. **상단 2열 그리드** (`1.6fr 1fr`, gap 20):
   - **매칭 CTA 카드**: `--ie-ink` 배경, radius 24, padding 32, min-height 260
     - 데코 오브: 우상단 `--ie-coral` 원 220×220 (opacity 0.85) + `--ie-butter` 원 80×80
     - 라이브 뱃지: "지금 2,847명 접속중" (초록 도트 `ie-blink`)
     - 헤드라인 32px/800, 서브카피 14px opacity 0.7
     - CTA: `--ie-coral`, radius 14, padding `14px 26px`
   - **성격 카드**: `--ie-coral-tint` 배경, radius 24
     - 이모지 72×72 박스 + 유형명 22px/800 + 설명 13px + "재검사 하러가기 ›"

3. **통계 3열**: 흰 배경, radius 20, padding 20
   - 연속 학습(일) · 친구 수 · 수집 컬처킷(/10)
   - 숫자 26px/800, 라벨 12px/600

4. **오늘의 학습** 3열 카드: 국기 + UNIT 라벨 + 레슨명 + 진행바 + CTA

5. **바로가기** 4열 카드: 💬 채팅 · 🎓 선생님 · 📷 컬처킷 · 🏆 업적
   - 호버: 보더 `--ie-coral` + `translateY(-2px)`

6. **모토 푸터**: 로고 + "청소년의 국제교류 기회 확대를 위한 AI 기반 국제교류 플랫폼"

---

### 7. 매칭 (Matching Loading → Result)

**로딩 화면**: `--ie-ink` 배경, 중앙 정렬
- 회전 지구본 220×220:
  - 외곽 pulse (coral radial glow, 2s)
  - 점선 링 (2px dashed white 0.15, 20s rotate)
  - 코어 원 110×110 (coral gradient) + globe 아이콘 60px (8s rotate)
  - 궤도 국기 4개 (12s rotate)
- 4단계 순차 진행 (각 1.4초): 성격 분석 → 사용자 검색 → 매칭 계산 → 매칭 완료
- "AI MATCHING" (11px mono)

**결과 화면**: 다크 배경
- "매칭 성공" 뱃지
- 매치율 44px/800 coral (예: 94%)
- 아바타 140×140 + 이름 24px/800 + 국가·학년
- 정보 카드: 언어 · 공통 관심사
- 버튼: "다시 찾기"(flex 1) / "통화 시작"(flex 2, coral)

⚠️ **중요**: 매칭 후 자동 채팅/친구 추가 없음. 사용자가 명시적으로 선택해야 합니다.

---

### 8. 화상 통화 (Video Call)

**목적**: Omegle 스타일 화상 통화 + 실시간 번역.

**레이아웃** (전체화면):
- 상대방: 국가 색상 radial gradient 배경 + 이름 첫 글자 180×180 원
- **상단 바** (padding `52px 16px 12px`): 뒤로가기 36×36 · 이름+국기 · 타이머(MM:SS mono) · LIVE 뱃지
- **셀프 PIP**: top 100, right 16, 100×140, radius 16, 흰 테두리 2px
- **번역 자막** (bottom 140): `rgba(0,0,0,0.6)` + blur 20px, radius 18
  - 라벨: "실시간 번역 · {원어명}"
  - 원문: 13px italic opacity 0.7
  - 번역: 15px/600 흰색
- **컨트롤** (bottom 30): 5개 원형 52×52 — 마이크 · 카메라 · 번역(coral 활성) · 채팅 · 종료(빨강)

**채팅 패널** (슬라이드업, 높이 68%):
- `rgba(20,18,16,0.92)` + blur 24px, radius `24px 24px 0 0`
- 드래그 핸들 (40×4)
- 아바타 32px + 이름 + "실시간 번역 켜짐"
- 메시지: 내 것 coral 우측, 상대 흰 반투명 좌측 + 한국어 번역 하단
- 타이핑 인디케이터 (점 3개 stagger)
- 입력창 + 전송 버튼

---

### 9. 채팅 (Chats)

**목적**: 두 개의 탭 — 내 채팅 / 친구 찾기.

**탭 전환**: 배경 `--ie-line-2`, padding 4, radius 12. 활성 탭 흰 배경 + `0 2px 6px rgba(0,0,0,0.05)`

#### 내 채팅 탭

**규칙**: 내가 추가한 친구 + 관심 국가 학생 (중복 제거, 추가한 친구가 상위)

```js
const addedUsernames = new Set(FRIENDS.map(f => f.username));
const interestPool = directory.filter(u => interests.includes(u.country));
const merged = [
  ...FRIENDS.map(f => ({ ...f, _isFriend: true })),           // 추가한 친구 먼저
  ...interestPool.filter(u => !addedUsernames.has(u.username)) // 관심국가 학생
    .map(u => ({ ...u, _isFriend: false })),
];
```

**상단 안내 바**: `--ie-coral-tint` 배경, radius 12 — "관심 국가 {n}곳의 학생들과 바로 대화할 수 있어요"

**채팅 행** (`ChatRow`): 흰 배경, 1px `--ie-line`, radius 14, padding 14, margin-bottom 8
- 아바타 54px + 초록 온라인 도트 (13×13, 흰 보더)
- 이름 15px/700 + 국기
- 국가 · 학년 (13px, `--ie-ink-3`)
- 친구면 "✓ 친구" 초록 뱃지 (`#dcfce7` / `#166534`)
- 우측 "대화 시작" 버튼: 친구면 coral, 아니면 `--ie-line-2`
- 호버: 보더 `--ie-coral-soft` + `translateY(-1px)`

#### 친구 찾기 탭

**규칙**: 관심 국가 밖의 학생들, **학년 가까운 순 정렬**

```js
const GRADE_ORDER = ['elem4','elem5','elem6','mid1','mid2','mid3','high1','high2','high3','uni1','uni2','uni3','uni4'];
const myIdx = GRADE_ORDER.indexOf(USER.grade);
const ranked = list
  .map(u => ({ u, dist: Math.abs(GRADE_ORDER.indexOf(u.grade) - myIdx), tie: Math.random() }))
  .sort((a, b) => (a.dist - b.dist) || (a.tie - b.tie))
  .map(r => ({ ...r.u, _sameYear: r.dist <= 1 }));
```

**검색창**: `@` 프리픽스, 2px 보더, 입력 시 `--ie-coral`

**안내**: "관심 국가 밖의 학생들이에요 · 학년이 가까운 순으로 보여드려요"

**섹션 라벨**: "내 학년 친구 추천"

**사용자 행** (`UserRow`): 흰 배경, radius 14, padding 14
- 아바타 48px
- 이름 + 국기 + (같은 학년이면) "⭐ 같은 학년" 뱃지
- `@username` (12px mono, `--ie-ink-3`)
- 국가 · 학년
- **성격 칩**: 이모지 + 유형명. 내 찰떡 궁합이면 `--ie-coral-tint` 배경 + ★ 표시
- 우측 "추가" 버튼 (coral) 또는 이미 친구면 "친구" 버튼 (회색)

**친구 추가 시 동작**: 토스트 → 0.7초 후 자동으로 "내 채팅" 탭 이동 → 목록 맨 위에 표시

---

### 10. 친구 채팅방 (Friend Chat)

**목적**: 개별 친구와 1:1 채팅 + 자동 번역.

**레이아웃**: 세로 flex, 배경 `--ie-bg`

**헤더** (padding `52px 12px 12px`, 흰 배경, 하단 1px 보더):
- 뒤로가기 36×36
- 아바타 40px + 온라인 도트
- 이름 15px/700 + 국기, 상태 11px (온라인이면 초록)
- 화상통화 버튼 36×36 (`--ie-coral-tint`)

**번역 배너**: `--ie-coral-tint` 배경, padding `8px 16px` — "실시간 번역 켜짐 · {언어}"

**메시지 영역** (flex 1, overflow-y auto, padding `16px 14px 6px`, gap 10):
- 내 메시지: coral 배경, 흰 글자, radius `16px 16px 4px 16px`, 우측 정렬, max-width 82%
- 상대: 흰 배경, 1px 보더, radius `16px 16px 16px 4px`, 좌측 정렬
  - 번역문: 아래에 `↳ {한국어}` (11px, `--ie-ink-3`)

**빈 상태**: 국기 40px + "{이름}님과의 대화 시작" + 안내

**추천 문구**: 첫 진입 시 4개 칩 (가로 스크롤)

**입력창** (하단 고정, 흰 배경, 상단 1px 보더, padding `10px 12px 30px`):
- textarea (min-height 40, max-height 100, radius 14)
- 전송 버튼 40×40 (입력 있으면 coral)

---

### 11. 학습 (Study)

**학습 홈**: 두 개의 큰 옵션 카드 (세로 배치, gap 12)

**OPTION 01 — 선생님과 수업**: `--ie-ink` 배경, radius 22, padding 22
- 데코 오브: 우상단 `--ie-coral` 원 130×130
- "OPTION 01" (10px, opacity 0.6, tracking 0.1em)
- 제목 22px/800
- 설명 12px opacity 0.7
- CTA: `rgba(255,255,255,0.15)` 배경 + "선생님 보기 →"

**OPTION 02 — AI 셀프 스터디**: 흰 배경, 1px 보더
- 데코 오브: `--ie-butter` 원
- CTA: `--ie-ink` 배경

**선생님 리스트**:
- 필터 칩 (전체 · 🇯🇵 일본어 · 🇺🇸 영어 ...)
- 선생님 카드: 아바타 56px + 이름 + ⭐ 별점(F0A500) + 리뷰수 + 과목 + 다음 수업 + "예약" 버튼
- **무료/가격 텍스트 절대 금지** — 별점만 표시
- 예약 클릭 → 모달 ("수업 예약 완료!" + 선생님명 + 시간 + 15분 전 알림 안내)

---

### 12. AI 셀프 스터디

**언어 선택 화면** (`LANGUAGE` 헤더):
- 안내: "어떤 언어를 배우고 싶어요? 모든 언어를 자유롭게 배울 수 있어요"
- 그리드: `repeat(auto-fill, minmax(220px, 1fr))`, gap 12
- 카드: 흰 배경, 1px 보더, radius 18, padding 20
  - 국기 42px
  - **언어명** 19px/800 (`langName(code, langCode)`) ← 국가명 아님!
  - "국가명 · 원어명" 12px
  - 진행바 (높이 6, radius 3)
  - "{완료}/{전체} 유닛 완료" + CTA
  - 호버: 보더 coral + `translateY(-2px)`

**유닛 패스** (언어 선택 후):
- 헤더: "🇯🇵 일본어" + 우측 `{완료}/{전체}` 칩
- 스탯 바: `--ie-ink` 배경, radius 18 — 🔥 연속 · 총 XP · 레벨
- 세로 타임라인 (좌측 3px 라인):
  - 완료: 초록 원 + 체크
  - 진행중: coral 원 + `0 0 0 4px var(--ie-coral-soft)` 글로우
  - 잠김: `--ie-line-2` 원 + 🔒
  - 각 유닛: "UNIT {n} · 완료/준비중" + 제목 + 진행 정보
- 활성 유닛에만 "시작" 버튼

**언어 11개, 총 30+ 유닛** (`lessons_data.jsx`)

---

### 13. 인터랙티브 레슨

**4가지 문제 유형**:
1. **translate-to**: A/B/C/D 중 정답 선택 (원문 + 로마자 표기)
2. **listen-pick**: 재생 버튼 60×60 (coral, pulse) + 뜻 고르기
3. **match**: 2열 카드 매칭 (좌: 원어, 우: 뜻, 셔플됨)
4. **fill-blank**: 빈칸에 알맞은 단어 선택

**레이아웃**:
- 상단 (padding `52px 16px 12px`): 닫기 34×34 + 진행바 (높이 10) + ❤️ 하트 (5개)
- 본문: 문제 유형 라벨 (11px/700 coral) + 문제 22px/800 + 선택지들
- 선택지: 흰 배경, 2px 보더, radius 16, padding 18
  - 정답: 초록 보더 `#22c55e` + `#dcfce7` 배경
  - 오답: 빨강 보더 `#ef4444` + `#fee2e2` 배경
  - 선택됨: coral 보더
  - A/B/C/D 원 30×30
- 하단 결과 배너 + CTA:
  - 미선택: "확인" (disabled, `--ie-line-2`)
  - 정답: 초록 배너 + "정답이에요!"
  - 오답: 빨강 배너 + "아쉬워요, 다시 도전!" + 정답 표시
  - 다음: "다음" / "완료"

**매 세션 랜덤화**: `shuffleArray(exercises)` + `shuffleExercise()` (선택지 순서)

**완료 화면**:
- "UNIT {n} 완료!" 라벨
- 🎉 80px
- "잘했어요!"
- 통계 3개: 정확도 · 획득 XP · 맞춘 문제
- "🔓 UNIT {n+1} 언락!" 배너 (다음 유닛 있을 때)
- CTA: "다음 유닛 시작하기" / "학습 화면으로"

**하트 0개**: 💔 화면 + "잠시 후 다시 시도하거나 다른 레슨을 골라보세요" + "레슨 목록으로"

---

### 14. QR 스캐너

**목적**: 컬처킷 박스의 QR을 스캔해 배지 획득.

**메인 화면** (검정 배경):
- 헤더: "QR SCAN" 라벨 (coral) + "컬처킷 등록" 24px/800 + 안내
- 스캔 프레임 260×260 (중앙):
  - 4 모서리: 3px coral, 34×34, radius 12
  - 스캔 라인: 2px coral 그라디언트, `ie-scanline 2s ease-in-out infinite`
  - 중앙 ▦ 아이콘 opacity 0.15
  - 어두운 오버레이 + radial 마스크 (240×240 홀)
- 하단: "QR 코드를 프레임 안에 맞춰주세요" + 플래시 토글 + 수동 입력 버튼

**수동 입력 모드**: 코드 입력창 (JP-2026-A47F 형식) + 국가 프리셋 칩

**스캔 성공 화면**:
- 국기 80px + "{국가} 문화 키트" 26px/800
- "업적에 추가되었어요!"
- 배지 카드: 🏆 + "NEW BADGE" + "{국가} 문화 마스터"
- 버튼: "다시 스캔" / "업적 보기"

---

### 15. 컬처킷 스토어

- 헤더 우측: 업적 아이콘 버튼
- **피처드 카드**: `linear-gradient(135deg, #DDE7FF, #EEF3FF)`, radius 22, padding 20
  - "BEST" 뱃지 (다크)
  - 국기 40px + "이달의 컬처킷" + 상품명 22px/800 + 구성품 설명 + 가격 + "구매하기"
- **QR 등록 CTA**: 점선 보더 카드
- **그리드 2열**: 카드 상단 90px 국가 색상 + 국기 42px + "인기" 뱃지
  - 하단: 제목 13px/700 + desc 10px + 가격 13px/800 + "+" 버튼

**결제 시트** (하단 모달):
- 드래그 핸들 + 상품 미리보기 (아이콘 60×60 + 제목 + desc)
- 요약 (상품가 / 배송비 무료 / 총 결제금액)
- 취소 / 결제하기

**컬처킷 11개국** (`data.jsx`의 `CULTURE_KITS`)

---

### 16. 업적

**독립 탭** (스토어에서 진입하지 않음)

- 상단 배너 (`--ie-ink`): 🏆 60px + "지금까지 획득" + `{n} / 12` + 진행바
- 그리드: `repeat(auto-fill, minmax(180px, 1fr))`, gap 10
- 각 배지 카드: 흰 배경, radius 16, padding 14, 중앙 정렬
  - 획득: 컬러 이모지 + 우상단 초록 체크 원(20×20) + "✓ {total}/{total}" 초록
  - 미획득: opacity 0.6, 이모지 grayscale + 진행바 + "{progress}/{total}"

**12개 업적** (실제 활동으로 획득):
| 키 | 이모지 | 조건 |
|---|---|---|
| `first_match` | 🌏 | 첫 매칭 |
| `first_chat` | 💬 | 첫 대화 시작 |
| `chatty` | 🗣️ | 메시지 50개 |
| `first_lesson` | 🌱 | 첫 레슨 완료 |
| `lesson_5` | 📖 | 레슨 5개 |
| `lesson_15` | ⭐ | 레슨 15개 |
| `first_kit` | 🎁 | 첫 컬처킷 등록 |
| `kits_5` | 🏆 | 컬처킷 5개 |
| `friends_5` | 👑 | 친구 5명 |
| `profile_done` | ✨ | 프로필 완성 |
| `streak_3` | 🔥 | 3일 연속 |
| `polyglot` | 🌍 | 3개 언어 학습 |

**카운터 시스템** (`data.jsx`):
```js
const USER_STATS = { matches:0, chats:0, messages:0, lessons:0, kits:0, friends:0, profileDone:0, days:0, langs:0 };
function bumpStat(key, amount) { USER_STATS[key] += amount; }
function getAchievements() {
  return ACHIEVEMENTS.map(a => {
    const current = Math.min(USER_STATS[a.track] || 0, a.goal);
    return { ...a, progress: current, total: a.goal, earned: current >= a.goal };
  });
}
```

---

### 17. 프로필

- 헤더 우측: 설정 버튼
- **프로필 카드**: 흰 배경, radius 22, padding 20
  - 아바타 76×76 (coral gradient) + 편집 FAB (26×26, 우하단)
  - 이름 18px/800 + `@handle` 12px
  - 칩 3개: 국기+국가명 (coral) · 학년 · **성격 이모지+유형명 (다크)**
- **성격 & 궁합 카드** (성격 테스트 완료 시):
  - 헤더: 이모지 46×46 박스 + "나의 성격" 라벨 + 유형명 + 태그라인
  - "찰떡 궁합" 섹션: 3개 유형 (coral-tint 배경 행, 이모지 20px + 유형명 + 태그라인)
  - "노력이 필요한 궁합": 회색 칩
- **관심 국가**: 국기 칩들 (없으면 "+ 추가하기" 버튼)
- **취미**: `#해시태그` 칩들
- **메뉴 리스트**: 업적 및 배지 · 내 컬처킷 · 학습 통계 · 차단 목록

---

### 18. 프로필 편집

- 헤더 우측: "저장" 버튼 (coral)
- 아바타 110×110 + 카메라 FAB
- "아바타 색상 변경" → 6가지 그라디언트 팔레트 (블루/그린/엠버/핑크/퍼플/티얼)
- **필드**:
  - 이름 (텍스트 입력, maxLength 20, 글자수 카운터)
  - 유저네임 (`@` 프리픽스, maxLength 30)
  - **내 국가**: 12개국 그리드 (선택 시 coral-tint + 체크)
  - 학년: 드롭다운 13개 옵션
  - 관심 국가: 다중 선택 칩
  - 취미: 다중 선택 해시태그 칩
- 하단 "변경사항 저장" 버튼
- 저장 시 토스트 + 0.8초 후 뒤로가기

---

### 19. 설정

- 3개 그룹: 계정 (알림/언어/개인정보) · 매칭 (관심국가 우선/연령대/차단) · 지원 (가이드/고객센터/앱정보)
- 로그아웃: 빨간 텍스트, 확인 후 온보딩으로 리셋

---

## Interactions & Behavior

### 화면 전환

상태 기반 라우팅 (`app.jsx`의 `screen` state). 프로덕션에서는 React Router / Next.js App Router / React Navigation 권장.

**최상위 탭** (셸 표시): `home`, `chats`, `study`, `scan`, `store`, `achievements`, `profile`
**전체화면** (셸 숨김): `onboarding`, `test`, `matching`, `match-result`, `videocall`, `lesson`
**하위 화면**: `teachers`, `selfstudy`, `friend-chat`, `profileedit`, `settings`

### 애니메이션

| 이름 | 지속 | 이징 | 속성 |
|---|---|---|---|
| `ie-fadeup` | 0.3s | ease | opacity + translateY(8px) |
| 진행바 | 0.3s | ease | width |
| 버튼 호버 (카드) | 0.12–0.15s | — | border-color, transform translateY(-2px) |
| 버튼 press | 0.12s | ease | transform scale(0.97) |
| 지구본 pulse | 2s | ease-in-out infinite | scale, opacity |
| 회전 (링/국기) | 8–20s | linear infinite | rotate |
| 라이브 dot | 1.5s | — | opacity |
| QR 스캔 라인 | 2s | ease-in-out infinite | top |
| 매칭 로딩 스텝 | 1.4s 간격 | — | 자동 진행 |
| 채팅 타이핑 점 | 1.2s stagger | — | translateY + opacity |
| 채팅 패널 슬라이드업 | 0.3s | `cubic-bezier(0.32,0.72,0,1)` | translateY |
| 친구 드로어 | 0.3s | `cubic-bezier(0.32,0.72,0,1)` | translateX |

### 폼 검증

| 필드 | 규칙 | 에러 메시지 |
|---|---|---|
| 이름 | 1자 이상 | — (버튼 비활성) |
| 유저네임 | 3자 이상, `/^[a-zA-Z0-9_.]+$/` | "유저네임은 최소 3글자 이상이어야 해요" / "영문, 숫자, _, . 만 사용 가능해요" |
| 국가 | 필수 선택 | — (버튼 비활성) |
| 관심 국가 | 1개 이상 | — (버튼 비활성) |
| 학년 | 필수 | — (버튼 비활성) |
| 취미 | 1개 이상 | — (버튼 비활성) |

### 반응형

```css
@media (max-width: 768px) {
  .ie-sidebar { display: none; }
  .ie-mobile-topbar { display: flex; }
  .ie-mobile-nav { display: flex; }
}
@media (max-width: 900px) {
  .ie-grid-3, .ie-grid-4 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .ie-grid-3, .ie-grid-4, .ie-grid-2 { grid-template-columns: 1fr; }
}
```

---

## State Management

### 앱 레벨 (`app.jsx`의 `IeumApp`)

```ts
{
  screen: string,                    // 현재 화면
  friendsOpen: boolean,              // 친구 드로어
  matchTarget: MatchCandidate,       // 매칭 상대
  activeFriend: Friend | null,       // 열린 채팅방
  activeLessonId: string,            // 'JP-1' 형식
  profile: {
    name: string,
    username: string,
    langCode: string,                // 12개 언어 중 1개
    country: string,                 // ISO 코드
    interestsCountry: string[],      // ISO 코드 배열
    grade: string,                   // 'high2' 등
    hobbies: string[],               // 취미 id 배열
    personalityType: PersonalityType | null
  }
}
```

### 화면 내부 상태

| 화면 | 상태 |
|---|---|
| 온보딩 | `step`, `name`, `username`, `langCode`, `country`, `interestsCountry`, `grade`, `hobbies` |
| 성격 테스트 | `idx`, `picks[]`, `result` |
| 매칭 로딩 | `step` (0–3) |
| 화상 통화 | `duration`, `chatOpen`, `messages[]`, `input`, `typing`, `subtitle` |
| 채팅 | `tab`, `chatSearch`, `revision` |
| 친구 채팅 | `messages[]`, `input`, `typing` |
| 레슨 | `idx`, `correct`, `wrong`, `selected`, `showResult`, `hearts`, `done` |
| 스토어 | `cart[]`, `toast`, `buying` |
| QR 스캐너 | `flash`, `manual`, `manualCode`, `scanned` |
| 프로필 편집 | `name`, `handle`, `country`, `grade`, `interestsCountry`, `hobbies`, `avatarColor` |

### 글로벌 (프로토타입 전용)

```js
USER              // 사용자 프로필
USER_STATS        // 업적 카운터
FRIENDS           // 추가한 친구 (초기 빈 배열)
USER_DIRECTORY    // 52명 전체 학생 (12개국 × 13개 학년)
STARTED_LANGS     // Set<string> 학습 시작한 언어
LESSON_PROGRESS   // { [country]: { completedUnits: Set<number> } }
```

### 프로덕션 요구사항

- **인증**: 이메일/소셜 로그인 (Supabase Auth, Clerk, NextAuth)
- **DB**: 사용자 프로필, 친구 관계, 채팅 기록, 학습 진행률, 업적
- **실시간**: WebSocket (매칭, 채팅, 온라인 상태)
- **화상통화**: WebRTC + TURN 서버 (Twilio, Agora, LiveKit)
- **AI**: 서버사이드 프록시 (키 보호) — `ai_bridge.jsx` + `netlify/functions/chat.js` 참조
- **번역**: STT + 번역 API (Google Cloud, Papago, DeepL)
- **결제**: 국내 PG (토스페이먼츠, 아임포트)
- **QR**: 네이티브 카메라 + QR 라이브러리 (jsQR, ZXing)

---

## AI 채팅 연동

프로토타입은 `ai_bridge.jsx`의 `ieumAskAI()`를 사용합니다.

**동작 순서**:
1. `/api/chat` POST (프로덕션 서버 함수)
2. 실패 시 → `window.genspark.complete` (Genspark 샌드박스)
3. 실패 시 → 에러

**서버 함수** (`netlify/functions/chat.js`):
- 환경변수 `OPENAI_API_KEY` 필수
- `AI_MODEL` (기본 `gpt-4o-mini`), `AI_BASE_URL`로 제공자 전환 가능
- OpenAI는 `response_format: { type: 'json_object' }`로 JSON 보장

**응답 스키마**:
```json
{ "native": "모국어 답변", "korean": "한국어 번역" }
```

**페르소나 프롬프트** (`sendMessage` 함수 참조):
```
너는 "{이름}"이라는 {국가} 청소년이야. 지금 친구 "{사용자명}"와 이음 앱에서 채팅 중이고,
{사용자명}는 너희 나라 문화와 언어를 배우고 싶어해.

규칙:
1. 모국어로만 말해 (한국어 몰라)
2. 실제 청소년처럼 짧고 편하게, 이모지 가끔
3. 상대가 방금 한 말에 반드시 이어서 반응
4. 1-2문장만
5. 대화 흐름 기억, 반복 금지

JSON만 출력: {"native": "...", "korean": "..."}
```

대화 히스토리 **최근 12개** 참조.

---

## Design Tokens

### 색상 (`styles.css`)

```css
/* 브랜드 — 블루 */
--ie-coral:      #2E6BFF;   /* Primary */
--ie-coral-deep: #1A4FD8;   /* Hover, 진한 강조 */
--ie-coral-soft: #DDE7FF;   /* 연한 보더 */
--ie-coral-tint: #EEF3FF;   /* 배경 카드 */

/* 쿨 뉴트럴 */
--ie-ink:    #0F1729;   /* 텍스트, 다크 배경 */
--ie-ink-2:  #2B3550;
--ie-ink-3:  #5C6680;
--ie-ink-4:  #9BA3B8;
--ie-line:   #E4E8F2;   /* 보더 */
--ie-line-2: #F1F4FA;   /* 옅은 배경 */
--ie-bg:     #F6F8FC;   /* 앱 배경 */
--ie-card:   #FFFFFF;

/* 액센트 */
--ie-navy:   #0A2F6B;
--ie-mint:   #C6E4CE;
--ie-butter: #F7E4A3;
--ie-blush:  #F6C9C1;
--ie-sky:    #7FA9FF;
```

⚠️ 변수명이 `--ie-coral`이지만 값은 **파란색**입니다. 초기 오렌지 버전에서 마이그레이션하며 이름을 유지했습니다. 프로덕션에서는 `--ie-primary`로 리네이밍 권장.

### 추가 색상 (하드코딩)

| 용도 | 값 |
|---|---|
| 별점 | `#F0A500` |
| 정답 | `#22c55e` / 배경 `#dcfce7` / 텍스트 `#166534` |
| 오답 | `#ef4444` / 배경 `#fee2e2` / 텍스트 `#991b1b` |
| 온라인 | `#4ade80` |
| 종료 버튼 | `#e63946` |

### 국가별 색상 (`components.jsx`의 `COUNTRIES`)

| 코드 | 국가 | 배경 | 잉크 |
|---|---|---|---|
| KR | 한국 | #C9D5F6 | #1B3A5B |
| JP | 일본 | #F6C9C1 | #8B2A2A |
| US | 미국 | #C9D5F6 | #1B3A5B |
| FR | 프랑스 | #D6C9F6 | #2A1B5B |
| VN | 베트남 | #F6E4A3 | #5B3A1B |
| BR | 브라질 | #C6E4CE | #1B5B3A |
| IN | 인도 | #F6D6A3 | #5B3A1B |
| EG | 이집트 | #E8D5B0 | #5B4A1B |
| DE | 독일 | #E8E0C0 | #3A3A1B |
| ES | 스페인 | #F6D0A3 | #8B4A1B |
| TH | 태국 | #F0C9D6 | #8B1B4A |
| MN | 몽골 | #D6E4F0 | #1B3A5B |

### 타이포그래피

- **본문**: `Pretendard Variable` (jsdelivr CDN), fallback `-apple-system, system-ui, sans-serif`
- **모노**: `JetBrains Mono` (Google Fonts, 400/500) — 타이머, 카운터, 유저네임

| 용도 | 크기 | 굵기 | tracking |
|---|---|---|---|
| 결과 유형명 | 46px | 800 | -0.03em |
| 화면 타이틀 | 32px | 800 | -0.03em |
| 홈 헤드라인 | 36px | 800 | -0.03em |
| 카드 제목 | 22px | 800 | -0.03em |
| 섹션 제목 | 17–20px | 800 | -0.02em |
| 본문 | 13–15px | 500–600 | — |
| 라벨/캡션 | 10–12px | 600–700 | 0.02–0.15em |

### Radius

| 값 | 용도 |
|---|---|
| 10px | 작은 버튼, 칩 |
| 12px | 입력창, 중간 버튼 |
| 16–18px | 카드, 큰 버튼 |
| 20–22px | 큰 카드, 모달 |
| 999px | 칩, pill |

### Shadow

| 용도 | 값 |
|---|---|
| 카드 호버 | `0 12px 30px rgba(0,0,0,0.06)` |
| Primary CTA | `0 12px 32px rgba(46,107,255,0.3)` |
| 결과 이모지 | `0 24px 70px rgba(46,107,255,0.22)` |

### Spacing

- 카드 내부 padding: 16–24px
- 섹션 상하 여백: 16–32px
- 화면 좌우 padding: 24–32px (모바일 16–20px)

---

## Assets

**외부 CDN**:
- Pretendard Variable (jsdelivr)
- JetBrains Mono (Google Fonts)
- React 18.3.1, ReactDOM 18.3.1, Babel Standalone 7.29.0 (unpkg, SRI 포함)

**아이콘**: `components.jsx`의 `Icon` 객체에 인라인 SVG로 정의. 총 26개:
home, book, qr, store, user, chat, video, close, back, more, right, plus, check, star, mic, camera, translate, hangup, send, sparkle, globe, flash, edit, medal, settings

프로덕션 권장: `lucide-react` (line 스타일 매칭), SF Symbols (iOS), Material Symbols (Android)

**이미지**: 없음.
- 아바타 → 이름 첫 글자 + 국가 색상
- 국기 → 이모지
- 컬처킷 상품 → 국가 색상 카드

**개발 시 필요한 실제 자산**:
- 컬처킷 상품 이미지 11개국
- 선생님 프로필 사진
- 앱 아이콘, 파비콘
- 오픈그래프 이미지

---

## Files

| 파일 | 역할 | 줄 수 |
|---|---|---|
| `index.html` | 진입점, 스크립트 로드 순서 | 46 |
| `styles.css` | CSS 변수, 아톰 클래스, keyframes, 반응형 | 165 |
| `components.jsx` | Icon 26개, COUNTRIES 12개, Avatar, IeumLogo, ScreenHeader | 165 |
| `data.jsx` | USER_DIRECTORY 52명, ACHIEVEMENTS 12개, USER_STATS, bumpStat | 253 |
| `personalities.jsx` | 12개 언어 UI 문자열, LANGUAGES, 이전 질문 세트 | 1012 |
| `personality_types_v3.jsx` | **20개 성격 유형** (sig, best, tough, i18n), personalityForUser | 331 |
| `personality_v2.jsx` | **10문항 × 4-5지선다**, 5축 스코어러 + 캘리브레이션 | 306 |
| `i18n_data.jsx` | 국가명/학년/취미/언어명 다국어, 화면 UI 문자열 전체 | 808 |
| `ai_bridge.jsx` | `ieumAskAI()`, `ieumParseBilingual()` | 80 |
| `screens_onboarding.jsx` | 온보딩 7단계 | 524 |
| `screens_home.jsx` | 성격 테스트, 매칭 로딩 | 650 |
| `screens_home_web.jsx` | 홈 화면 | 249 |
| `screens_call.jsx` | 매칭 결과, 화상통화, 친구 드로어 | 590 |
| `screens_study.jsx` | 학습 홈, 선생님, 셀프 스터디 | 440 |
| `screens_misc.jsx` | QR, 스토어, 업적, 프로필, 편집, 설정 | 1157 |
| `screens_friend_chat.jsx` | 채팅 탭, 친구 찾기, 채팅방 | 710 |
| `screens_lesson.jsx` | 인터랙티브 레슨 (4유형) | 903 |
| `lessons_data.jsx` | 11개 언어 × 2-5유닛, 유닛당 8문제 | 1811 |
| `web_shell.jsx` | 반응형 셸 (사이드바/탭바) | 135 |
| `app.jsx` | 앱 라우팅, 상태 | 212 |
| `netlify.toml` | `/api/chat` → 함수 라우팅 | — |
| `netlify/functions/chat.js` | AI 프록시 (API 키 보호) | 92 |

**스크립트 로드 순서** (`index.html`) — 순서가 중요합니다:
```html
components.jsx
data.jsx
personalities.jsx
personality_types_v3.jsx    ← P_TYPES_V4 정의
personality_v2.jsx          ← P_TYPES_V4 참조
i18n_data.jsx
ai_bridge.jsx
screens_onboarding.jsx
screens_home.jsx
screens_home_web.jsx
screens_call.jsx
screens_study.jsx
screens_misc.jsx
screens_friend_chat.jsx
screens_lesson.jsx
lessons_data.jsx            ← LESSON_CONTENT 확장
web_shell.jsx
app.jsx                     ← 최종 마운트
```

---

## 구현 체크리스트

### 필수
- [ ] Pretendard 폰트 로드 확인
- [ ] Primary `#2E6BFF` 일관 적용
- [ ] **온보딩 첫 화면이 언어 선택**
- [ ] **성격 테스트 10문항, 질문·선택지 셔플**
- [ ] **캘리브레이션 포함한 성격 판정** (없으면 특정 유형만 반복)
- [ ] **20개 성격 유형** 적용
- [ ] 결과 화면에 매력 포인트 3개 + 주의점 + 궁합 표시
- [ ] 프로필에 내 성격 + 궁합 카드
- [ ] 친구 카드에 국가·학년·성격 모두 표시
- [ ] 찰떡 궁합 친구에 ★ 표시
- [ ] **친구 추가 시 내 채팅에 즉시 반영**
- [ ] 친구 찾기는 학년 가까운 순 정렬
- [ ] 내 채팅은 관심 국가 + 추가한 친구
- [ ] **선생님 화면에 "무료"/가격 텍스트 없음** — 별점만
- [ ] **학년 표시 (나이 아님)**
- [ ] **매칭 후 자동 채팅/친구 추가 없음**
- [ ] 업적 12개가 실제 활동으로 획득
- [ ] AI 채팅은 서버사이드 프록시 (키 노출 금지)

### 다국어
- [ ] 12개 언어 지원: ko, en, ja, zh, es, fr, de, vi, th, pt, hi, ar
- [ ] 국가명·학년·취미·언어명이 UI 언어에 맞게 번역
- [ ] 성격 유형명·태그라인·설명 번역
- [ ] 하위 10개 언어는 영어 fallback

### 성능
- [ ] Babel Standalone → 번들러 전환
- [ ] 코드 스플리팅 (화면별)
- [ ] 이미지 최적화 (컬처킷 상품)
- [ ] 폰트 subsetting

---

## 알려진 제약사항

1. **데이터 휘발성**: 새로고침 시 모든 진행 상황 초기화. `localStorage` 또는 DB 필요.
2. **AI 응답**: `window.genspark.complete`는 Genspark 환경 전용. 배포 시 서버 함수 필수.
3. **화상통화**: 시각적 목업. 실제 WebRTC 미구현.
4. **QR 스캐너**: 데모용 시뮬레이션. 실제 카메라 미연동.
5. **결제**: UI만 존재. PG 미연동.
6. **궁합 비대칭**: A→B가 best여도 B→A는 아닐 수 있음. 프로덕션에서 대칭 정규화 권장.
7. **`--ie-coral` 변수명**: 값은 파란색. 리네이밍 권장.

---

**작성일**: 2026-10-30
**버전**: v3 (새 성격 20개 + 궁합 + 학년 정렬 반영)
