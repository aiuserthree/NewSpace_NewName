/* SubmitScreen — STEP 2, 이름 제출. Scroll of three SpaceCards, one per space.
   Required name per space is validated on submit. */
const { Button: Sub_Button, Notice: Sub_Notice, SectionHeader: Sub_Head, SpaceCard: Sub_Space } =
  window.DesignSystem_60a1b7;

const SUBMIT_SPACES = [
  { key: 'main',   n: '①', name: '본당',       kind: '신축 · 조감도', label: '본당 조감도',
    desc: '새로 지어질 본당입니다. 조감도를 보며 우리 공동체가 오래 부를 이름을 상상해 보세요.' },
  { key: 'chapel', n: '②', name: '소예배실',   kind: '사진', label: '소예배실 사진',
    desc: '청년과 청소년을 위한 액티브한 공간입니다. 활기가 느껴지는 이름을 지어주세요.' },
  { key: 'family', n: '③', name: '새가족부실', kind: '사진', label: '새가족부실 사진',
    desc: '처음 오신 분들을 따뜻하게 맞이하고 안내하는 공간입니다.' },
];

function SubmitScreen({ onBack, onSubmit }) {
  const [vals, setVals] = React.useState({});
  const [warn, setWarn] = React.useState(false);
  const setField = (key, slot, v) =>
    setVals((p) => ({ ...p, [key]: { ...p[key], [slot]: v } }));

  const submit = () => {
    const missing = SUBMIT_SPACES.some((s) => !((vals[s.key]?.required || '').trim()));
    if (missing) { setWarn(true); return; }
    onSubmit(vals);
  };

  return (
    <div className="screen">
      <AppHeader onBack={onBack} steps={['신청자 정보', '이름 제출']} current={1} />
      <div className="screen__scroll">
        <div className="page">
          <Sub_Head eyebrow="STEP 2" title="이름을 지어주세요"
            description="각 공간별 1개는 필수, 1개는 선택으로 제안할 수 있어요." />
          {warn && (
            <Sub_Notice variant="warning" title="아직 비어 있는 공간이 있어요">
              각 공간별 이름 1개는 필수예요. 붉게 표시된 칸을 확인해 주세요.
            </Sub_Notice>
          )}
          <div className="spacecards">
            {SUBMIT_SPACES.map((s) => (
              <Sub_Space key={s.key} numeral={s.n} name={s.name} kind={s.kind}
                imageLabel={s.label} imageSublabel="이미지를 준비 중이에요" description={s.desc}
                requiredValue={vals[s.key]?.required || ''}
                optionalValue={vals[s.key]?.optional || ''}
                requiredError={warn && !((vals[s.key]?.required || '').trim()) ? '이름을 제안해 주세요' : undefined}
                onFieldChange={(slot, v) => setField(s.key, slot, v)} />
            ))}
          </div>
        </div>
      </div>
      <div className="screen__footer">
        <Sub_Button fullWidth iconRight="check" onClick={submit}>제출하기</Sub_Button>
        <p className="footnote">제출 후에는 수정할 수 없어요. 다시 한번 확인해 주세요.</p>
      </div>
    </div>
  );
}
window.SubmitScreen = SubmitScreen;
