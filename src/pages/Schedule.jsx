import SiteLink from '../components/common/SiteLink'
import ChipGroup from '../components/common/ChipGroup'
import ClassCard from '../components/common/ClassCard'
import { classData } from '../data/classes'
import { gradeChips } from '../data/menu'
import { statusOrder, statusLegendDesc } from '../data/content'
import { decorateClass, statusMeta, badgeStyle, dotStyle, chipStyle } from '../utils/styleHelpers'
import { useSiteState } from '../context/SiteStateContext'

export default function Schedule() {
  const { sGrade, setSGrade, sOpenOnly, setSOpenOnly } = useSiteState()
  const allClasses = classData.map(decorateClass)
  const classesFiltered = allClasses.filter(c =>
    (sGrade === '전체' || c.gradeKey === sGrade) && (!sOpenOnly || c.status === 'OPEN')
  )
  const sEmpty = classesFiltered.length === 0
  const statusLegend = statusOrder.map(k => {
    const m = statusMeta(k)
    return { label: m.label, desc: statusLegendDesc[k], badgeStyle: badgeStyle(m), dotStyle: dotStyle(m) }
  })

  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between', margin: '0 0 40px' }}>
          <ChipGroup ariaLabel="학년 필터" options={gradeChips} value={sGrade} onChange={setSGrade} />
          <button type="button" onClick={() => setSOpenOnly(!sOpenOnly)} aria-pressed={sOpenOnly} style={chipStyle(sOpenOnly)}>모집중만 보기</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
          {classesFiltered.map((c, i) => <ClassCard key={i} c={c} headingLevel="h2" showRoom />)}
        </div>
        {sEmpty && (
          <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '12px', padding: '34px 30px', margin: 0 }}>조건에 맞는 개설반이 없습니다.<br />필터를 변경하거나 수강상담을 통해 개설 예정 수업을 문의해주세요.</p>
        )}

        <div style={{ marginTop: '60px', paddingTop: '44px', borderTop: '1px solid #E4EDF7' }}>
          <h2 style={{ font: "600 12px/1 var(--font-family-primary)", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 26px' }}>모집 상태 안내</h2>
          <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '24px', margin: 0 }}>
            {statusLegend.map(s => (
              <div key={s.label}>
                <dt style={{ margin: '0 0 10px' }}><span style={s.badgeStyle}><span style={s.dotStyle} aria-hidden="true"></span>{s.label}</span></dt>
                <dd style={{ margin: 0, font: "400 15px/1.7 var(--font-family-primary)", color: '#667085' }}>{s.desc}</dd>
              </div>
            ))}
          </dl>
          <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <SiteLink href="#/consult" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>수강상담</SiteLink>
            <SiteLink href="#/classes" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>수업 안내</SiteLink>
          </div>
        </div>
      </div>
    </section>
  )
}
