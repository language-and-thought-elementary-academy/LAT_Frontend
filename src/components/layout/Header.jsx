import SiteLink from '../common/SiteLink'
import DesktopNav from './DesktopNav'
import { mobileMenu } from '../../data/menu'
import { useSiteState } from '../../context/SiteStateContext'
import brandLogo from '../../assets/brand/eoneowa-sayu-logo.png'

// utilityBarVisible / mobileCtaEnabled were originally DC-editor toggle
// props; the standalone site keeps their defaults (both `true`).
const UTILITY_BAR_VISIBLE = true

function UtilityBar() {
  return (
    <div style={{ borderBottom: '1px solid #E4EDF7', background: '#EFF8FF' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <a href="tel:0225670548" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', font: "500 13px/1 var(--font-family-primary)", color: '#1849A9', textDecoration: 'none', letterSpacing: '.01em' }}>상담센터 02-567-0548</a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <SiteLink href="#/admission" className="hover-fg-1849a9" style={{ font: "400 13px/1 var(--font-family-primary)", color: '#667085', textDecoration: 'none' }}>처음 방문하셨나요?</SiteLink>
          <SiteLink href="#/faq" className="hover-fg-1849a9" style={{ font: "400 13px/1 var(--font-family-primary)", color: '#667085', textDecoration: 'none' }}>FAQ</SiteLink>
          <SiteLink href="#/notice" className="hover-fg-1849a9" style={{ font: "400 13px/1 var(--font-family-primary)", color: '#667085', textDecoration: 'none' }}>공지사항</SiteLink>
          <span style={{ font: "400 13px/1 var(--font-family-primary)", color: '#A3AAB6' }} aria-disabled="true" title="준비 중">로그인 · 회원가입 · 강사모집</span>
        </div>
      </div>
    </div>
  )
}

function MobileMenuButton() {
  const { menuOpen, setMenuOpen } = useSiteState()
  return (
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-expanded={menuOpen}
      aria-label="메뉴 열기"
      style={{ width: '48px', height: '48px', display: 'grid', placeItems: 'center', background: '#1849A9', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
    >
      <span style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff' }}></span>
        <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff' }}></span>
        <span style={{ display: 'block', width: '20px', height: '2px', background: '#fff' }}></span>
      </span>
    </button>
  )
}

function MobileMenuPanel() {
  return (
    <div style={{ borderTop: '1px solid #D0D5DD', background: '#fff', maxHeight: 'calc(100vh - 120px)', overflowY: 'auto', padding: '8px 24px 28px' }}>
      <nav aria-label="모바일 메뉴" style={{ display: 'flex', flexDirection: 'column' }}>
        {mobileMenu.map(m => (
          <SiteLink key={m.href} href={m.href} style={{ padding: '16px 4px', borderBottom: '1px solid #F0F1F3', font: "500 16px/1.3 var(--font-family-primary)", color: '#101828', textDecoration: 'none', minHeight: '44px', display: 'flex', alignItems: 'center' }}>{m.label}</SiteLink>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
        <a href="tel:0225670548" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>전화상담</a>
        <SiteLink href="#/consult" style={{ flex: 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>수강상담</SiteLink>
      </div>
    </div>
  )
}

export default function Header() {
  const { isDesktop, isMobile, scrolled, menuOpen } = useSiteState()
  const showUtility = UTILITY_BAR_VISIBLE && isDesktop

  return (
    <header className="site-header" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,.97)', backdropFilter: 'saturate(160%) blur(6px)', borderBottom: '1px solid #D0D5DD' }}>
      {showUtility && <UtilityBar />}

      <div className="header-main" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', height: scrolled ? '68px' : '84px' }}>
        <SiteLink href="#/" className="wordmark" aria-label="언어와 사유 홈페이지" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flex: '0 0 auto' }}>
          <span className="brand-logo-frame">
            <img className="brand-logo" src={brandLogo} alt="언어와 사유" />
          </span>
        </SiteLink>

        {isDesktop && <DesktopNav />}
        {isMobile && <MobileMenuButton />}
      </div>

      {menuOpen && <MobileMenuPanel />}
    </header>
  )
}
