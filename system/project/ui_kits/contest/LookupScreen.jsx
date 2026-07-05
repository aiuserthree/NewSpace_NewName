/* LookupScreen — 조회. Read-only view of a submission, reached from the
   duplicate notice or the completion screen. */
const { Button: Look_Button, TextField: Look_Field, Badge: Look_Badge, Card: Look_Card } =
  window.DesignSystem_60a1b7;

const LOOKUP_SPACES = [
  { key: 'main', n: '①', name: '본당' },
  { key: 'chapel', n: '②', name: '소예배실' },
  { key: 'family', n: '③', name: '새가족부실' },
];

function fmtPhone(p) {
  const d = (p || '').replace(/\D/g, '');
  if (d.length === 11) return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  return p || '';
}

function LookupScreen({ onClose, submission }) {
  const s = submission || {};
  return (
    <div className="screen">
      <AppHeader onBack={onClose} />
      <div className="screen__scroll">
        <div className="page">
          <div className="ds-eyebrow">내 제출 내용</div>
          <h1 className="lookup__title">제출하신 내용이에요</h1>
          <div className="lookup__meta">
            <Look_Badge variant="success" icon="check">제출 완료</Look_Badge>
            <span className="lookup__phone">{s.name ? `${s.name} · ` : ''}{fmtPhone(s.phone)}</span>
          </div>

          <div className="lookup__list">
            {LOOKUP_SPACES.map((sp) => {
              const v = (s.values && s.values[sp.key]) || {};
              return (
                <Look_Card key={sp.key} variant="flat" padding="md" className="lookupcard">
                  <div className="lookupcard__head">
                    <span className="lookupcard__n">{sp.n}</span>{sp.name}
                  </div>
                  <div className="lookupcard__names">
                    <Look_Field label="이름" readOnly value={v.required || '—'} />
                    {v.optional
                      ? <Look_Field label="추가 이름" readOnly value={v.optional} />
                      : null}
                  </div>
                </Look_Card>
              );
            })}
          </div>
          <p className="footnote">수정은 현재 지원되지 않아요. 변경이 필요하면 담당자에게 문의해 주세요.</p>
        </div>
      </div>
      <div className="screen__footer">
        <Look_Button fullWidth variant="secondary" onClick={onClose}>닫기</Look_Button>
      </div>
    </div>
  );
}
window.LookupScreen = LookupScreen;
