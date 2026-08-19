import SiteLink from '../components/common/SiteLink'
import { classroomShots } from '../data/content'

export default function Classroom() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
          {classroomShots.map(c => (
            <figure key={c.en} style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div role="img" aria-label={c.alt} style={{ aspectRatio: '3/2', background: 'repeating-linear-gradient(135deg,#DCEBFA 0 8px,#F5FAFF 8px 16px)', border: '1px solid #B2DDFF', display: 'grid', placeItems: 'center', color: '#475467', font: '400 11px/1.5 ui-monospace,monospace', textAlign: 'center', padding: '12px' }}>{c.slot}</div>
              <figcaption>
                <p style={{ font: "600 11px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 10px' }}>{c.en}</p>
                <p style={{ font: "400 16px/1.75 'Noto Sans KR',sans-serif", color: '#667085', margin: 0 }}>{c.d1}<br />{c.d2}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <SiteLink href="#/student-work" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>학생 글쓰기 보기</SiteLink>
          <SiteLink href="#/reviews" className="hover-border-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #B2DDFF', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>학부모 후기 보기</SiteLink>
        </div>
      </div>
    </section>
  )
}
