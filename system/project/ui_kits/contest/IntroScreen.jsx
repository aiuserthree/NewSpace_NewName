/* IntroScreen — landing / 인트로. Sets the tone, previews the three spaces,
   and starts the flow. */
const { Button: Intro_Button, ImageFrame: Intro_Image } = window.DesignSystem_60a1b7;

const INTRO_SPACES = [
  { n: '①', name: '본당',       kind: '신축 · 조감도', line: '새로 지어질 예배의 중심 공간' },
  { n: '②', name: '소예배실',   kind: '사진',          line: '청년·청소년을 위한 액티브한 공간' },
  { n: '③', name: '새가족부실', kind: '사진',          line: '처음 오신 분들을 맞이하는 공간' },
];

function IntroScreen({ onStart }) {
  return (
    <div className="screen">
      <AppHeader />
      <div className="screen__scroll">
        <div className="page">
          <div className="ds-eyebrow">함께 짓다</div>
          <h1 className="intro__title">우리 공간의 이름을<br />함께 지어주세요</h1>
          <p className="intro__lead">
            새로 짓고 다듬은 세 공간의 이름을 교우 여러분과 함께 짓습니다.
            잠깐이면 참여할 수 있어요.
          </p>

          <Intro_Image className="intro__hero" ratio="16 / 10" radius="xl" scrim
            label="본당 조감도" sublabel="이미지를 준비 중이에요">
            <span className="intro__herocap">공모 대상 · 세 개의 공간</span>
          </Intro_Image>

          <div className="spaces">
            {INTRO_SPACES.map((s) => (
              <div className="spacerow" key={s.name}>
                <span className="spacerow__n">{s.n}</span>
                <div className="spacerow__body">
                  <div className="spacerow__name">{s.name}</div>
                  <div className="spacerow__line">{s.line}</div>
                </div>
                <span className="spacerow__kind">{s.kind}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="screen__footer">
        <Intro_Button fullWidth iconRight="arrow-right" onClick={onStart}>참여 시작</Intro_Button>
        <p className="footnote">1인당 최대 2개 제안 · 약 1분 소요</p>
      </div>
    </div>
  );
}
window.IntroScreen = IntroScreen;
