import SiteLink from '../common/SiteLink'

export default function MobileCtaNav() {
  return (
    <nav aria-label="빠른 상담" style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 120, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#1849A9', borderTop: '1px solid rgba(255,255,255,.16)' }}>
      <a href="tel:0225670548" style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', font: "600 14px/1 'Noto Sans KR',sans-serif", textDecoration: 'none', borderRight: '1px solid rgba(255,255,255,.16)' }}>전화상담</a>
      <SiteLink href="#/schedule" style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', font: "600 14px/1 'Noto Sans KR',sans-serif", textDecoration: 'none', borderRight: '1px solid rgba(255,255,255,.16)' }}>시간표</SiteLink>
      <SiteLink href="#/consult" style={{ minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#84CAFF', font: "600 14px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>수강상담</SiteLink>
    </nav>
  )
}
