import SiteLink from '../components/common/SiteLink'
import { admissionSteps } from '../data/content'

export default function Admission() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
          {admissionSteps.map(s => (
            <li key={s.step} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '14px 40px', padding: '32px 0', borderTop: '1px solid #E4EDF7' }}>
              <div>
                <p style={{ font: "600 11px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 12px' }}>{s.step}</p>
                <h2 style={{ font: "600 clamp(20px,1.6vw,24px)/1.4 'Noto Serif KR',serif", color: '#1849A9', margin: 0 }}>{s.title}</h2>
              </div>
              <p style={{ font: "400 16px/1.8 'Noto Sans KR',sans-serif", color: '#667085', margin: 0 }}>{s.d1}<br />{s.d2}</p>
            </li>
          ))}
        </ol>
        <div style={{ marginTop: '44px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <SiteLink href="#/curriculum" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>커리큘럼 보기</SiteLink>
          <SiteLink href="#/consult" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>수강상담 신청</SiteLink>
        </div>
        <div style={{ marginTop: '56px', paddingTop: '36px', borderTop: '1px solid #E4EDF7' }}>
          <SiteLink href="#/faq" style={{ font: "600 15px/1 'Noto Sans KR',sans-serif", color: '#1849A9', textDecoration: 'none', borderBottom: '1px solid #155EEF', paddingBottom: '5px' }}>자주 묻는 질문 보기</SiteLink>
        </div>
      </div>
    </section>
  )
}
