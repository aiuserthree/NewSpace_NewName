/* ============================================================
   공간 이름 공모전 — 공유 스크립트
   여러 페이지가 공통으로 쓰는 헤더 컴포넌트와, 페이지 사이를
   오가며 흐름을 이어주는 로컬 저장 헬퍼를 window 에 노출한다.
   (백엔드가 없는 시안이므로 제출/조회 데이터는 localStorage 로
    시뮬레이션한다. 데모용 기존 신청 번호가 미리 심어져 있다.)
   ============================================================ */

/* --- demo seed: 이미 신청된 번호 010-1234-5678 -------------- */
const SEED = {
  '01012345678': {
    name: '김은혜', affiliation: '청년부', phone: '01012345678', submittedAt: 0,
    values: {
      main:   { required: '은혜의 뜰', optional: '' },
      chapel: { required: '청년마루',   optional: '빛으로' },
      family: { required: '처음자리',   optional: '' },
    },
  },
};

const SUBS_KEY = 'contest_subs_v1';
const APPL_KEY = 'contest_applicant_v1';
const CUR_KEY  = 'contest_current_v1';

function getJSON(key) {
  try { return JSON.parse(localStorage.getItem(key) || 'null'); }
  catch (e) { return null; }
}
function setJSON(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage 비활성 무시 */ }
}
function rawSubs() {
  const r = getJSON(SUBS_KEY);
  return (r && typeof r === 'object') ? r : {};
}
/* SEED 를 항상 포함해 단독 접근에서도 중복/조회 데모가 동작하도록 한다 */
function loadSubs() { return Object.assign({}, SEED, rawSubs()); }
function saveSub(sub) {
  const r = rawSubs();
  r[sub.phone] = sub;
  setJSON(SUBS_KEY, r);
}
function getApplicant() { return getJSON(APPL_KEY); }
function setApplicant(a) { setJSON(APPL_KEY, a); }

function fmtPhone(p) {
  const d = (p || '').replace(/\D/g, '');
  if (d.length === 11) return `${d.slice(0, 3)}-${d.slice(3, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  return p || '';
}

window.Contest = {
  SEED, SUBS_KEY, APPL_KEY, CUR_KEY,
  getJSON, setJSON, loadSubs, saveSub, getApplicant, setApplicant, fmtPhone,
};

/* --- shared top bar ----------------------------------------- */
function SiteHeader({ back, steps, current }) {
  const { Icon, ProgressSteps } = window.DesignSystem_60a1b7;
  return (
    <header className="appbar">
      <div className="appbar__inner">
        <div className="appbar__top">
          <div className="appbar__side">
            {back && (
              <a className="iconbtn" href={back} aria-label="뒤로 가기">
                <Icon name="arrow-left" size={20} />
              </a>
            )}
          </div>
          <a className="appbar__mark" href="01-intro.html">영암교회 새 공간 이름 공모전</a>
          <div className="appbar__side appbar__side--end" />
        </div>
        {steps && (
          <div className="appbar__steps">
            <ProgressSteps steps={steps} current={current} />
          </div>
        )}
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
