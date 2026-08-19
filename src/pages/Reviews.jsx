import SiteLink from '../components/common/SiteLink'
import ChipGroup from '../components/common/ChipGroup'
import { gradeChips } from '../data/menu'
import { useSiteState } from '../context/SiteStateContext'

export default function Reviews() {
  const { tGrade, setTGrade } = useSiteState()
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <ChipGroup ariaLabel="학년 필터" options={gradeChips} value={tGrade} onChange={setTGrade} style={{ margin: '0 0 36px' }} />
        <p style={{ font: "400 16px/1.8 'Noto Sans KR',sans-serif", color: '#667085', background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '12px', padding: '34px 30px', margin: '0 0 32px' }}>[실제 학부모 후기] — 공개 동의가 확인된 후기만 게시합니다.<br />등록된 후기가 준비되면 학년·프로그램 필터와 함께 이곳에 표시됩니다.</p>
        <SiteLink href="#/consult" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>수강상담 신청</SiteLink>
      </div>
    </section>
  )
}
