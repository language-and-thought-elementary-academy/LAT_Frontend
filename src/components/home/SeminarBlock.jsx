import SiteLink from '../common/SiteLink'

export default function SeminarBlock() {
  return (
    <section className="editorial-section numbered-section section-seminar" aria-labelledby="sem-h" style={{ background: '#fff', padding: 'clamp(72px,9vw,140px) 0' }}>
      <div className="editorial-container seminar-grid" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '56px', alignItems: 'start' }}>
        <div>
          <p style={{ font: "600 13px/1 var(--font-family-primary)", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>PARENT SEMINAR</p>
          <h2 id="sem-h" style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 var(--font-family-primary)", color: '#1849A9', margin: '0 0 20px', letterSpacing: '-.01em' }}>언어와 사유 학부모 설명회</h2>
          <p style={{ font: "400 clamp(16px,1.2vw,18px)/1.75 var(--font-family-primary)", color: '#667085', margin: '0 0 32px' }}>초등 독서와 글쓰기,<br />학년별 학습 방향,<br />언어와 사유의 수업과 커리큘럼을 자세히 안내합니다.</p>
          <SiteLink href="#/seminar" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 28px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>설명회 일정 보기</SiteLink>
        </div>
        <div className="editorial-card seminar-card" style={{ background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '14px', padding: '34px 30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ font: "600 11px/1 var(--font-family-primary)", letterSpacing: '.16em', color: '#1849A9', margin: 0 }}>현재 진행 중인 설명회</p>
          <h3 style={{ font: "600 22px/1.4 var(--font-family-primary)", color: '#1849A9', margin: 0 }}>[설명회 제목]</h3>
          <dl style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '10px 12px', margin: 0, font: "400 14px/1.6 var(--font-family-primary)" }}>
            <dt style={{ color: '#667085', margin: 0 }}>일시</dt><dd style={{ margin: 0 }}>[날짜] [시간]</dd>
            <dt style={{ color: '#667085', margin: 0 }}>대상</dt><dd style={{ margin: 0 }}>[대상]</dd>
            <dt style={{ color: '#667085', margin: 0 }}>장소</dt><dd style={{ margin: 0 }}>[장소]</dd>
            <dt style={{ color: '#667085', margin: 0 }}>연사</dt><dd style={{ margin: 0 }}>[강사명]</dd>
          </dl>
          <SiteLink href="#/seminar/1" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '48px', padding: '0 24px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 14px/1 var(--font-family-primary)", textDecoration: 'none', alignSelf: 'flex-start' }}>설명회 자세히 보기</SiteLink>
        </div>
      </div>
    </section>
  )
}
