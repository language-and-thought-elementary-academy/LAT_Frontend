import { useLocation } from 'react-router-dom'
import SiteLink from '../common/SiteLink'
import { css } from '../../utils/css'
import { desktopMenu } from '../../data/menu'
import { useSiteState } from '../../context/SiteStateContext'

function linkStyleFor(m, i, pathname, dd) {
  const active = pathname.indexOf(m.href.replace('#', '')) === 0 && m.href !== '#/'
  const weight = active ? '600' : '500'
  const color = m.label === '예약확인/신청' ? '#1849A9' : '#101828'
  const underline = dd === i ? '#155EEF' : 'transparent'
  return css(`display:inline-flex;align-items:center;min-height:44px;padding:0 14px;font:${weight} 15px/1 'Noto Sans KR',sans-serif;color:${color};text-decoration:none;border-bottom:2px solid ${underline};`)
}

export default function DesktopNav() {
  const { dd, setDd } = useSiteState()
  const location = useLocation()

  return (
    <nav aria-label="주 메뉴" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
      {desktopMenu.map((m, i) => {
        const hasMenu = m.items.length > 0
        const open = dd === i && hasMenu
        const enter = () => setDd(i)
        const leave = () => setDd(null)
        return (
          <div key={m.href} style={{ position: 'relative' }} onMouseEnter={enter} onMouseLeave={leave}>
            <SiteLink
              href={m.href}
              aria-haspopup={hasMenu}
              aria-expanded={open}
              onFocus={enter}
              style={linkStyleFor(m, i, location.pathname, dd)}
            >
              {m.label}
            </SiteLink>
            {open && (
              <div style={{ position: 'absolute', top: '100%', left: 0, minWidth: '210px', background: '#fff', border: '1px solid #D0D5DD', borderRadius: '10px', boxShadow: '0 14px 34px rgba(15,45,82,.10)', padding: '10px', display: 'flex', flexDirection: 'column' }}>
                {m.items.map(s => (
                  <SiteLink
                    key={s.href + s.label}
                    href={s.href}
                    className="hover-bg-eff8ff-fg-1849a9"
                    style={css("padding:11px 14px;border-radius:7px;font:400 14px/1.3 'Noto Sans KR',sans-serif;color:#101828;text-decoration:none;min-height:44px;display:flex;align-items:center")}
                  >
                    {s.label}
                  </SiteLink>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
