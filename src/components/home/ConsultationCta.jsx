import SiteLink from '../common/SiteLink'

export default function ConsultationCta() {
  return (
    <section className="editorial-cta" aria-labelledby="cta-h" style={{ background: '#102A56', padding: 'clamp(72px,9vw,132px) 0' }}>
      <div className="editorial-cta__content" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ font: "600 13px/1 var(--font-family-primary)", letterSpacing: '.18em', color: '#84CAFF', margin: '0 0 22px' }}>CONSULTATION</p>
        <h2 id="cta-h" style={{ font: "600 clamp(28px,3.4vw,44px)/1.28 var(--font-family-primary)", color: '#fff', margin: '0 0 22px', letterSpacing: '-.01em' }}>어떤 수업에서<br />시작하면 좋을까요?</h2>
        <p style={{ font: "400 clamp(16px,1.2vw,18px)/1.75 var(--font-family-primary)", color: 'rgba(255,255,255,.76)', margin: '0 0 40px', maxWidth: '640px' }}>학생의 학년과 현재 학습 상황을 알려주시면<br />적합한 프로그램과 개설반을 안내해드립니다.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <SiteLink href="#/consult" className="hover-bg-eff8ff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', padding: '0 30px', background: '#fff', color: '#1849A9', border: '1px solid #fff', borderRadius: '4px', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>반편성 상담</SiteLink>
          <a href="tel:0225670548" className="hover-border-84caff-fg-84caff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', padding: '0 30px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.5)', borderRadius: '4px', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>전화 상담 02-567-0548</a>
        </div>
      </div>
    </section>
  )
}
