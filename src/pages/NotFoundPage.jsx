import SiteLink from '../components/common/SiteLink'

export default function NotFoundPage() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(72px,9vw,132px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: '0 0 28px' }}>요청하신 페이지를 찾을 수 없습니다.</p>
        <SiteLink href="#/" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>홈으로</SiteLink>
      </div>
    </section>
  )
}
