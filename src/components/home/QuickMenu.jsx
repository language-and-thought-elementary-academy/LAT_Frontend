import SiteLink from '../common/SiteLink'
import { quick } from '../../data/content'

export default function QuickMenu() {
  return (
    <section aria-labelledby="quick-h" style={{ background: '#fff', padding: 'clamp(56px,6vw,88px) 0', borderBottom: '1px solid #E4EDF7' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <h2 id="quick-h" style={{ font: "600 13px/1 var(--font-family-primary)", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 26px' }}>QUICK MENU</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '12px' }}>
          {quick.map(q => (
            <SiteLink key={q.href} href={q.href} className="hover-border-1849a9-shadow" style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px 22px', border: '1px solid #D0D5DD', borderRadius: '12px', textDecoration: 'none', background: '#fff', minHeight: '44px', transition: 'border-color .2s,box-shadow .2s' }}>
              <span style={{ font: "600 11px/1 var(--font-family-primary)", letterSpacing: '.14em', color: '#1849A9' }}>{q.en}</span>
              <span style={{ font: "600 17px/1.3 var(--font-family-primary)", color: '#1849A9' }}>{q.label}</span>
            </SiteLink>
          ))}
        </div>
      </div>
    </section>
  )
}
