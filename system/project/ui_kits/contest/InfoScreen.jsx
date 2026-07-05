/* InfoScreen — STEP 1, 신청자 정보. Name + phone; phone is the duplicate key.
   Duplicate detection lives in the App; this screen shows the notice. */
const { Button: Info_Button, TextField: Info_Field, Notice: Info_Notice, SectionHeader: Info_Head } =
  window.DesignSystem_60a1b7;

function InfoScreen({ onBack, onNext, onLookup, onDirty, duplicate }) {
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [err, setErr] = React.useState({});

  const submit = () => {
    const digits = phone.replace(/\D/g, '');
    const e = {};
    if (!name.trim()) e.name = '이름을 입력해 주세요';
    if (!/^01\d{8,9}$/.test(digits)) e.phone = '010으로 시작하는 휴대폰 번호를 입력해 주세요';
    setErr(e);
    if (Object.keys(e).length) return;
    onNext({ name: name.trim(), phone: digits });
  };

  return (
    <div className="screen">
      <AppHeader onBack={onBack} steps={['신청자 정보', '이름 제출']} current={0} />
      <div className="screen__scroll">
        <div className="page">
          <Info_Head eyebrow="STEP 1" title="먼저, 참여자 정보를 알려주세요"
            description="핸드폰 번호는 중복 확인과 본인 조회에만 사용돼요." />
          <div className="form">
            <Info_Field label="이름" required placeholder="이름을 입력해 주세요"
              value={name} error={err.name}
              onChange={(e) => setName(e.target.value)} />
            <Info_Field label="연락처" required type="tel" inputMode="numeric" prefix="phone"
              placeholder="010-0000-0000" value={phone} error={err.phone}
              hint="본인 확인용으로만 사용돼요"
              onChange={(e) => { setPhone(e.target.value); if (duplicate) onDirty(); }} />

            {duplicate && (
              <Info_Notice variant="info" title="이미 신청하신 분입니다"
                action={
                  <Info_Button size="sm" variant="soft" iconLeft="phone"
                    onClick={() => onLookup(duplicate)}>내용 확인하기</Info_Button>
                }>
                같은 번호로 이미 참여하셨어요. 제출한 내용을 확인할 수 있어요.
              </Info_Notice>
            )}
          </div>
        </div>
      </div>
      <div className="screen__footer">
        <Info_Button fullWidth iconRight="arrow-right" onClick={submit}>다음</Info_Button>
      </div>
    </div>
  );
}
window.InfoScreen = InfoScreen;
