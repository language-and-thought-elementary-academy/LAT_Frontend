import SiteLink from '../components/common/SiteLink'
import { method } from '../data/content'

export default function ClassMethod() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(64px,8vw,120px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
          {method.map(m => (
            <li key={m.num} style={{ background: '#fff', border: '1px solid #D0D5DD', borderRadius: '14px', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ font: "600 11px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#1849A9', margin: 0 }}>{m.num} · {m.en}</p>
              <h2 style={{ font: "600 clamp(21px,1.7vw,25px)/1.4 'Noto Serif KR',serif", color: '#1849A9', margin: 0 }}>{m.title}</h2>
              <p style={{ font: "400 16px/1.75 'Noto Sans KR',sans-serif", color: '#667085', margin: 0 }}>{m.d1}<br />{m.d2}</p>
            </li>
          ))}
        </ol>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '44px' }}>
          <SiteLink href="#/curriculum/feedback" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>첨삭안내 보기</SiteLink>
          <SiteLink href="#/schedule" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>개설반 확인</SiteLink>
        </div>
      </div>
    </section>
  )
}
