import SiteLink from '../common/SiteLink'

export default function Hero() {
  return (
    <section aria-labelledby="hero-h" style={{ background: 'linear-gradient(155deg,#081A33 0%,#102A56 58%,#173F86 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(115deg,rgba(255,255,255,.045) 0 2px,transparent 2px 16px)' }} aria-hidden="true"></div>
      <div style={{ position: 'relative', maxWidth: '1240px', margin: '0 auto', padding: 'clamp(84px,11vw,168px) 24px clamp(72px,9vw,140px)' }}>
        <p style={{ font: "600 13px/1 var(--font-family-primary)", letterSpacing: '.2em', color: '#84CAFF', margin: '0 0 26px' }}>언어와 사유 ELEMENTARY</p>
        <h1 id="hero-h" style={{ font: "600 clamp(38px,5.2vw,66px)/1.2 var(--font-family-primary)", color: '#fff', margin: '0 0 30px', letterSpacing: '-.015em' }}>읽고, 생각하고,<br />자기 언어로 쓰는 힘.</h1>
        <p style={{ font: "400 clamp(16px,1.3vw,19px)/1.75 var(--font-family-primary)", color: 'rgba(255,255,255,.82)', margin: '0 0 14px', maxWidth: '640px' }}>독서와 토론, 글쓰기를 연결하여<br />아이의 생각을 자신의 언어로 표현하는 힘을 기릅니다.</p>
        <p style={{ font: "400 15px/1.75 var(--font-family-primary)", color: 'rgba(255,255,255,.6)', margin: '0 0 42px', maxWidth: '640px' }}>초등 1학년부터 6학년까지,<br />학년과 수준에 맞는 언어와 사유 초등논술 수업을 만나보세요.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <SiteLink href="#/curriculum" className="hover-bg-eff8ff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', padding: '0 30px', background: '#fff', color: '#1849A9', border: '1px solid #fff', borderRadius: '4px', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>커리큘럼 보기</SiteLink>
          <SiteLink href="#/consult" className="hover-border-84caff-fg-84caff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', padding: '0 30px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.5)', borderRadius: '4px', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>수강상담 신청</SiteLink>
        </div>
        <p style={{ font: "400 11px/1.6 ui-monospace,SFMono-Regular,monospace", color: 'rgba(255,255,255,.42)', letterSpacing: '.06em', margin: '56px 0 0' }}>[HERO IMAGE 16:9 — 학생 읽기 장면, Deep Navy overlay, 좌측 텍스트용 negative space 확보]</p>
      </div>
    </section>
  )
}
