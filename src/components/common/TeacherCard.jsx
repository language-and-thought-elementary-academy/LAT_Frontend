import SiteLink from './SiteLink'

export default function TeacherCard({ t, headingLevel = 'h3', linkMinHeight = true }) {
  const Heading = headingLevel
  return (
    <article style={{ background: '#fff', border: '1px solid #D0D5DD', borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div role="img" aria-label="강사 사진 준비 중" style={{ aspectRatio: '4/5', background: 'repeating-linear-gradient(135deg,#DCEBFA 0 8px,#EFF8FF 8px 16px)', display: 'grid', placeItems: 'center', color: '#475467', font: '400 11px/1.5 ui-monospace,monospace', letterSpacing: '.06em', textAlign: 'center', padding: '12px' }}>[강사 포트레이트 4:5]</div>
      <div style={{ padding: '24px 22px 26px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Heading style={{ font: "600 19px/1.3 var(--font-family-primary)", color: '#1849A9', margin: 0 }}>{t.name}</Heading>
        <p style={{ font: "400 14px/1.6 var(--font-family-primary)", color: '#667085', margin: 0 }}>담당 {t.grade}</p>
        <p style={{ font: "400 14px/1.6 var(--font-family-primary)", color: '#667085', margin: '0 0 10px' }}>{t.program}</p>
        <SiteLink href={t.href} style={{ font: "600 14px/1 var(--font-family-primary)", color: '#1849A9', textDecoration: 'none', borderBottom: '1px solid #155EEF', paddingBottom: '4px', alignSelf: 'flex-start', ...(linkMinHeight ? { minHeight: '24px' } : {}) }}>자세히 보기</SiteLink>
      </div>
    </article>
  )
}
