import SiteLink from '../components/common/SiteLink'

export default function TeacherDetail() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(60px,7vw,110px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '56px', alignItems: 'start' }}>
        <div role="img" aria-label="강사 사진 준비 중" style={{ aspectRatio: '4/5', background: 'repeating-linear-gradient(135deg,#DCEBFA 0 8px,#EFF8FF 8px 16px)', border: '1px solid #B2DDFF', display: 'grid', placeItems: 'center', color: '#475467', font: '400 11px/1.5 ui-monospace,monospace', letterSpacing: '.06em', textAlign: 'center', padding: '12px' }}>[강사 포트레이트 4:5]</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <div>
            <h2 style={{ font: "600 21px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 14px' }}>담당 수업</h2>
            <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: 0 }}>[담당 학년]<br />[담당 프로그램]</p>
          </div>
          <div>
            <h2 style={{ font: "600 21px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 14px' }}>주요 약력</h2>
            <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: 0 }}>[실제 강사 약력]</p>
          </div>
          <div>
            <h2 style={{ font: "600 21px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 14px' }}>수업 소개</h2>
            <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: 0 }}>[강사의 실제 수업 소개]</p>
          </div>
          <div>
            <h2 style={{ font: "600 21px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 18px' }}>현재 담당 강좌</h2>
            <div style={{ background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '12px', padding: '26px 24px' }}>
              <h3 style={{ font: "600 18px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 16px' }}>[강좌명]</h3>
              <dl style={{ display: 'grid', gridTemplateColumns: '76px 1fr', gap: '10px 12px', margin: 0, font: "400 14px/1.6 var(--font-family-primary)" }}>
                <dt style={{ color: '#667085', margin: 0 }}>대상</dt><dd style={{ margin: 0 }}>[대상]</dd>
                <dt style={{ color: '#667085', margin: 0 }}>요일</dt><dd style={{ margin: 0 }}>[요일]</dd>
                <dt style={{ color: '#667085', margin: 0 }}>시간</dt><dd style={{ margin: 0 }}>[시간]</dd>
                <dt style={{ color: '#667085', margin: 0 }}>모집현황</dt><dd style={{ margin: 0 }}>[모집중 / 마감임박 / 대기신청 / 마감]</dd>
              </dl>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <SiteLink href="#/schedule" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>시간표 보기</SiteLink>
            <SiteLink href="#/consult" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>수강상담</SiteLink>
          </div>
        </div>
      </div>
    </section>
  )
}
