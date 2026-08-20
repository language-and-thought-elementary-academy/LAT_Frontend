import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MobileCtaNav from './MobileCtaNav'
import { useSiteState } from '../../context/SiteStateContext'

// mobileCtaEnabled was originally a DC-editor toggle prop; the standalone
// site keeps its default (`true`).
const MOBILE_CTA_ENABLED = true

export default function RootLayout() {
  const { isMobile } = useSiteState()
  const showMobileCta = MOBILE_CTA_ENABLED && isMobile

  return (
    <div className="site-shell" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <a href="#main" className="skip-link" style={{ position: 'absolute', left: '-9999px', top: 0, background: '#1849A9', color: '#fff', padding: '12px 18px', zIndex: 200 }}>본문으로 바로가기</a>

      <Header />

      <main id="main" style={{ flex: 1 }}>
        <Outlet />
        {showMobileCta && <div aria-hidden="true" style={{ height: '72px' }} />}
      </main>

      <Footer />
      {showMobileCta && <MobileCtaNav />}
    </div>
  )
}
