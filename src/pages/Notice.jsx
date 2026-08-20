import ChipGroup from '../components/common/ChipGroup'
import { nCats } from '../data/content'
import { useSiteState } from '../context/SiteStateContext'

export default function Notice() {
  const { nCat, setNCat } = useSiteState()
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <ChipGroup ariaLabel="카테고리 필터" options={nCats} value={nCat} onChange={setNCat} style={{ margin: '0 0 36px' }} />
        <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '12px', padding: '34px 30px', margin: 0 }}>
          [공지사항 목록] — 선택한 카테고리 <strong style={{ color: '#1849A9', fontWeight: 600 }}>{nCat}</strong> 의 등록된 공지가 아직 없습니다.<br />수업 일정과 신규 개강, 설명회 소식이 등록되면 제목 · 카테고리 · 날짜 순으로 표시됩니다.
        </p>
      </div>
    </section>
  )
}
