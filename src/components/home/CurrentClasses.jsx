import SiteLink from '../common/SiteLink'
import ClassCard from '../common/ClassCard'
import { classData } from '../../data/classes'
import { decorateClass } from '../../utils/styleHelpers'

export default function CurrentClasses() {
  const classes = classData.map(decorateClass)
  return (
    <section className="editorial-section numbered-section section-classes" aria-labelledby="classes-h" style={{ background: '#EFF8FF', padding: 'clamp(72px,9vw,140px) 0' }}>
      <div className="editorial-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ font: "600 13px/1 var(--font-family-primary)", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>CURRENT CLASSES</p>
        <h2 id="classes-h" style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 var(--font-family-primary)", color: '#1849A9', margin: '0 0 20px', letterSpacing: '-.01em' }}>현재 모집 중인 수업</h2>
        <p style={{ font: "400 clamp(16px,1.2vw,18px)/1.75 var(--font-family-primary)", color: '#667085', margin: '0 0 48px', maxWidth: '680px' }}>학년별 개설 수업과<br />현재 모집 현황을 확인하세요.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
          {classes.map((c, i) => <ClassCard key={i} c={c} headingLevel="h3" />)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '36px' }}>
          <SiteLink href="#/schedule" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 28px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none', background: '#fff' }}>전체 시간표 보기</SiteLink>
          <SiteLink href="#/classes" className="hover-border-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 28px', border: '1px solid #B2DDFF', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none', background: 'transparent' }}>수업 안내 보기</SiteLink>
        </div>
      </div>
    </section>
  )
}
