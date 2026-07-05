/* CompleteScreen — 제출 완료. Confirmation + next-step (2차 투표) notice. */
const { Button: Done_Button, Notice: Done_Notice, Icon: Done_Icon } = window.DesignSystem_60a1b7;

function CompleteScreen({ onLookup, onHome, applicant }) {
  return (
    <div className="screen">
      <div className="screen__scroll">
        <div className="page complete">
          <div className="complete__mark"><Done_Icon name="check-circle" size={40} /></div>
          <h1 className="complete__title">제출이 완료되었습니다</h1>
          <p className="complete__sub">
            참여해 주셔서 감사합니다{applicant && applicant.name ? `, ${applicant.name}님` : ''}!
          </p>
          <Done_Notice variant="info" title="다음 일정 안내">
            제안해 주신 이름 중 상위 후보는 추후 현장 스티커 투표로 최종 결정됩니다.
          </Done_Notice>
        </div>
      </div>
      <div className="screen__footer complete__footer">
        <Done_Button fullWidth variant="secondary" iconLeft="phone" onClick={onLookup}>
          내 제출 내용 보기
        </Done_Button>
        <Done_Button fullWidth variant="ghost" onClick={onHome}>처음으로</Done_Button>
      </div>
    </div>
  );
}
window.CompleteScreen = CompleteScreen;
