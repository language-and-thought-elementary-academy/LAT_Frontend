import SiteLink from '../components/common/SiteLink'
import { classInfo } from '../data/content'

export default function Classes() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <dl style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
          {classInfo.map(r => (
            <div key={r.k} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '12px 40px', padding: '28px 0', borderTop: '1px solid #E4EDF7' }}>
              <dt style={{ font: "600 17px/1.5 var(--font-family-primary)", color: '#1849A9', margin: 0 }}>{r.k}</dt>
              <dd style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: 0 }}>{r.v}</dd>
            </div>
          ))}
        </dl>
        <div style={{ background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '14px', padding: '32px 30px', marginTop: '48px' }}>
          <h2 style={{ font: "600 19px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 14px' }}>반 편성</h2>
          <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: 0 }}>학생의 학년과 현재 학습 수준,<br />논술 수업 경험 등을 고려하여<br />적합한 수업을 안내합니다.</p>
        </div>
        <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <SiteLink href="#/schedule" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>시간표 확인</SiteLink>
          <SiteLink href="#/consult" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>반편성 상담</SiteLink>
        </div>
      </div>
    </section>
  )
}
