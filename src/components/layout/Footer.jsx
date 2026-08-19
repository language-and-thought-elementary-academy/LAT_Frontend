import SiteLink from '../common/SiteLink'
import { footerLinks } from '../../data/menu'

export default function Footer() {
  return (
    <footer style={{ background: '#081A33', padding: 'clamp(56px,7vw,96px) 0 40px' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '44px', paddingBottom: '44px', borderBottom: '1px solid rgba(255,255,255,.14)' }}>
          <div>
            <p style={{ font: "700 18px/1 'Noto Serif KR',serif", letterSpacing: '.09em', color: '#fff', margin: '0 0 10px' }}>언어와 사유</p>
            <p style={{ font: "400 14px/1.6 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.6)', margin: 0 }}>언어와 사유 초등논술</p>
          </div>
          <dl style={{ margin: 0, display: 'grid', gridTemplateColumns: '80px 1fr', gap: '12px', font: "400 14px/1.6 'Noto Sans KR',sans-serif" }}>
            <dt style={{ color: 'rgba(255,255,255,.45)', margin: 0 }}>상담센터</dt>
            <dd style={{ margin: 0 }}><a href="tel:0225670548" style={{ color: '#fff', textDecoration: 'none' }}>02-567-0548</a></dd>
            <dt style={{ color: 'rgba(255,255,255,.45)', margin: 0 }}>주소</dt>
            <dd style={{ margin: 0, color: 'rgba(255,255,255,.8)' }}>[실제 주소]</dd>
            <dt style={{ color: 'rgba(255,255,255,.45)', margin: 0 }}>운영시간</dt>
            <dd style={{ margin: 0, color: 'rgba(255,255,255,.8)' }}>[실제 운영시간]</dd>
          </dl>
          <nav aria-label="푸터 메뉴" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))', gap: '12px' }}>
            {footerLinks.map(l => (
              <SiteLink key={l.href} href={l.href} className="hover-fg-84caff" style={{ font: "400 14px/1.5 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.8)', textDecoration: 'none', minHeight: '24px' }}>{l.label}</SiteLink>
            ))}
          </nav>
        </div>
        <div style={{ paddingTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '14px 26px', alignItems: 'center' }}>
          <span style={{ font: "400 13px/1.6 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.55)' }}>이용약관</span>
          <span style={{ font: "400 13px/1.6 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.55)' }}>개인정보처리방침</span>
          <span style={{ font: "400 13px/1.6 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.55)' }}>이메일무단수집거부</span>
        </div>
        <p style={{ font: "400 12px/1.9 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.4)', margin: '22px 0 0' }}>[학원명] · [학원설립·운영등록번호] · [대표자] · [사업자등록번호]<br />[기타 필요한 사업자/학원 정보]</p>
      </div>
    </footer>
  )
}
