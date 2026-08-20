import SiteLink from './SiteLink'

export default function ClassCard({ c, headingLevel = 'h3', showRoom = false }) {
  const Heading = headingLevel
  return (
    <article style={{ background: '#fff', border: '1px solid #D0D5DD', borderRadius: '14px', padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
      <p style={{ font: "600 11px/1 var(--font-family-primary)", letterSpacing: '.16em', color: '#1849A9', margin: 0 }}>{c.code}</p>
      <Heading style={{ font: "600 clamp(20px,1.6vw,24px)/1.35 var(--font-family-primary)", color: '#1849A9', margin: 0 }}>{c.name}</Heading>
      <dl style={{ display: 'grid', gridTemplateColumns: '76px 1fr', gap: '10px 12px', margin: 0, font: "400 14px/1.6 var(--font-family-primary)" }}>
        <dt style={{ color: '#667085', margin: 0 }}>대상</dt><dd style={{ margin: 0, color: '#101828' }}>{c.grade}</dd>
        <dt style={{ color: '#667085', margin: 0 }}>담당</dt><dd style={{ margin: 0, color: '#101828' }}>{c.teacher}</dd>
        <dt style={{ color: '#667085', margin: 0 }}>요일·시간</dt><dd style={{ margin: 0, color: '#101828' }}>{c.time}</dd>
        <dt style={{ color: '#667085', margin: 0 }}>정원</dt><dd style={{ margin: 0, color: '#101828' }}>{c.cap}</dd>
        {showRoom && (<><dt style={{ color: '#667085', margin: 0 }}>강의실</dt><dd style={{ margin: 0, color: '#101828' }}>[강의실]</dd></>)}
      </dl>
      <p style={c.badgeStyle}><span style={c.dotStyle} aria-hidden="true"></span>{c.statusLabel}</p>
      <SiteLink href={c.ctaHref} aria-disabled={c.closed} style={c.ctaStyle}>{c.ctaLabel}</SiteLink>
    </article>
  )
}
