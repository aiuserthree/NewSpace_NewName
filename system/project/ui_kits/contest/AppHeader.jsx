/* AppHeader — in-app top bar: optional back, centre wordmark, optional
   progress steps. Shared by the flow screens. */
const { Icon: AH_Icon, ProgressSteps: AH_Steps } = window.DesignSystem_60a1b7;

function AppHeader({ onBack, steps, current }) {
  return (
    <header className="appbar">
      <div className="appbar__top">
        <div className="appbar__side">
          {onBack && (
            <button className="iconbtn" onClick={onBack} aria-label="뒤로 가기">
              <AH_Icon name="arrow-left" size={20} />
            </button>
          )}
        </div>
        <div className="appbar__mark">공간 이름 공모전<span>.</span></div>
        <div className="appbar__side" />
      </div>
      {steps && (
        <div className="appbar__steps">
          <AH_Steps steps={steps} current={current} />
        </div>
      )}
    </header>
  );
}
window.AppHeader = AppHeader;
