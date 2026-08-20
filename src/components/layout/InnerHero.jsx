import SiteLink from '../common/SiteLink'

export default function InnerHero({ hero }) {
  return (
    <section className="inner-hero" style={{ background: '#EFF8FF', borderBottom: '1px solid #B2DDFF' }}>
      <div className="inner-hero__content" style={{ maxWidth: '1240px', margin: '0 auto', padding: 'clamp(52px,6vw,92px) 24px clamp(44px,5vw,72px)' }}>
        <nav aria-label="breadcrumb" style={{ margin: '0 0 26px' }}>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexWrap: 'wrap', gap: '8px', font: "400 13px/1.5 var(--font-family-primary)", color: '#667085' }}>
            <li><SiteLink href="#/" style={{ color: '#667085', textDecoration: 'none' }}>HOME</SiteLink></li>
            <li aria-hidden="true">/</li>
            <li style={{ color: '#1849A9' }}>{hero.crumb}</li>
          </ol>
        </nav>
        <p style={{ font: "600 13px/1 var(--font-family-primary)", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>{hero.eyebrow}</p>
        <h1 style={{ font: "600 clamp(32px,4.4vw,54px)/1.24 var(--font-family-primary)", color: '#1849A9', margin: '0 0 22px', letterSpacing: '-.015em', textWrap: 'pretty' }}>{hero.t1}<br />{hero.t2}</h1>
        {hero.lines.map((l, i) => (
          <p key={i} style={{ font: "400 clamp(16px,1.2vw,18px)/1.75 var(--font-family-primary)", color: '#667085', margin: 0, maxWidth: '700px' }}>{l}</p>
        ))}
      </div>
    </section>
  )
}
