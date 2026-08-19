import SiteLink from '../components/common/SiteLink'
import { feedbackSteps } from '../data/content'

export default function Feedback() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(64px,8vw,120px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: '760px', margin: '0 0 64px' }}>
          <p style={{ font: "400 17px/1.85 'Noto Sans KR',sans-serif", color: '#667085', margin: '0 0 26px' }}>언어와 사유의 첨삭은<br />맞춤법과 표현을 수정하는 데서 끝나지 않습니다.</p>
          <p style={{ font: "400 clamp(18px,1.4vw,20px)/1.85 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 26px' }}>아이의 생각이 글에 충분히 드러났는지,<br />주장과 근거가 자연스럽게 연결되는지,<br />더 생각해볼 부분은 없는지를 함께 살펴봅니다.</p>
          <p style={{ font: "400 17px/1.85 'Noto Sans KR',sans-serif", color: '#667085', margin: 0 }}>선생님이 완성된 문장을 대신 만들어주는 것이 아니라<br />아이가 자신의 글을 다시 생각하고<br />더 나은 글로 완성할 수 있도록 돕습니다.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
          {feedbackSteps.map(s => (
            <article key={s.en} style={{ background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '14px', padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ font: "600 11px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#1849A9', margin: 0 }}>{s.en}</p>
              <h2 style={{ font: "600 19px/1.4 'Noto Sans KR',sans-serif", color: '#1849A9', margin: 0 }}>{s.title}</h2>
              <div role="img" aria-label={s.alt} style={{ aspectRatio: '3/2', background: 'repeating-linear-gradient(135deg,#D6E8F8 0 8px,#EAF4FE 8px 16px)', border: '1px solid #B2DDFF', display: 'grid', placeItems: 'center', color: '#475467', font: '400 11px/1.5 ui-monospace,monospace', textAlign: 'center', padding: '12px' }}>{s.slot}</div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: '44px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <SiteLink href="#/student-work" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>첨삭 사례 보기</SiteLink>
          <SiteLink href="#/consult" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>수강상담 신청</SiteLink>
        </div>
      </div>
    </section>
  )
}
