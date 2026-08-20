import { feedbackSteps } from '../data/content'

export default function StudentWork() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: '0 0 40px', maxWidth: '700px' }}>학생들이 실제로 작성한 글과<br />첨삭 및 다시쓰기 과정을 소개합니다.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
          {feedbackSteps.map(s => (
            <article key={s.en} style={{ background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '14px', padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ font: "600 11px/1 var(--font-family-primary)", letterSpacing: '.16em', color: '#1849A9', margin: 0 }}>{s.en}</p>
              <h2 style={{ font: "600 19px/1.4 var(--font-family-primary)", color: '#1849A9', margin: 0 }}>{s.title}</h2>
              <div role="img" aria-label={s.alt} style={{ aspectRatio: '3/2', background: 'repeating-linear-gradient(135deg,#D6E8F8 0 8px,#EAF4FE 8px 16px)', border: '1px solid #B2DDFF', display: 'grid', placeItems: 'center', color: '#475467', font: '400 11px/1.5 ui-monospace,monospace', textAlign: 'center', padding: '12px' }}>{s.slot}</div>
            </article>
          ))}
        </div>
        <div style={{ background: '#fff', border: '1px solid #D0D5DD', borderRadius: '14px', padding: '32px 30px', marginTop: '36px' }}>
          <h2 style={{ font: "600 18px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 14px' }}>[학생 글쓰기 사례]</h2>
          <p style={{ font: "400 15px/1.8 var(--font-family-primary)", color: '#667085', margin: 0 }}>공개 동의가 확인된 학생 원고만 게시합니다.<br />학생 이름과 학교 정보는 비식별 처리 후 등록됩니다.</p>
        </div>
      </div>
    </section>
  )
}
