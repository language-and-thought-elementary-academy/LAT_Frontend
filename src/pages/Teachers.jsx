import ChipGroup from '../components/common/ChipGroup'
import TeacherCard from '../components/common/TeacherCard'
import { teachersPlaceholder } from '../data/content'
import { gradeChips } from '../data/menu'
import { useSiteState } from '../context/SiteStateContext'

export default function Teachers() {
  const { tGrade, setTGrade } = useSiteState()
  const teachersFiltered = tGrade === '전체' ? teachersPlaceholder : []
  const tEmpty = teachersFiltered.length === 0

  return (
    <section style={{ background: '#fff', padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <ChipGroup ariaLabel="담당 학년 필터" options={gradeChips} value={tGrade} onChange={setTGrade} style={{ margin: '0 0 40px' }} />
        {tEmpty && (
          <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '12px', padding: '34px 30px', margin: 0 }}>선택한 학년의 강사 배정 정보가 아직 등록되지 않았습니다.<br />강사 약력과 담당 학년이 확정되면 이곳에 표시됩니다.</p>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '20px' }}>
          {teachersFiltered.map((t, i) => <TeacherCard key={i} t={t} headingLevel="h2" linkMinHeight={false} />)}
        </div>
      </div>
    </section>
  )
}
