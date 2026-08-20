import SiteLink from '../components/common/SiteLink'
import { seminarTopics } from '../data/content'

export default function SeminarDetail() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '56px', alignItems: 'start' }}>
        <div>
          <p style={{ font: "400 17px/1.85 var(--font-family-primary)", color: '#667085', margin: '0 0 44px' }}>[설명회 소개]</p>
          <h2 style={{ font: "600 21px/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 24px' }}>이런 내용을 다룹니다.</h2>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
            {seminarTopics.map(t => (
              <li key={t.num} style={{ display: 'flex', gap: '18px', padding: '22px 0', borderTop: '1px solid #E4EDF7', font: "400 16px/1.7 var(--font-family-primary)", color: '#667085' }}>
                <span style={{ font: "600 14px/1.7 var(--font-family-primary)", color: '#1849A9' }}>{t.num}</span>{t.t}
              </li>
            ))}
          </ol>
        </div>
        <aside style={{ background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '14px', padding: '32px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <dl style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: '12px', margin: 0, font: "400 15px/1.65 var(--font-family-primary)" }}>
            <dt style={{ color: '#667085', margin: 0 }}>일시</dt><dd style={{ margin: 0 }}>[날짜] [시간]</dd>
            <dt style={{ color: '#667085', margin: 0 }}>대상</dt><dd style={{ margin: 0 }}>[대상]</dd>
            <dt style={{ color: '#667085', margin: 0 }}>장소</dt><dd style={{ margin: 0 }}>[장소]</dd>
            <dt style={{ color: '#667085', margin: 0 }}>연사</dt><dd style={{ margin: 0 }}>[강사명]</dd>
            <dt style={{ color: '#667085', margin: 0 }}>참가</dt><dd style={{ margin: 0 }}>[참가비 및 정원]</dd>
          </dl>
          <p style={{ font: "400 14px/1.7 var(--font-family-primary)", color: '#667085', margin: 0, paddingTop: '18px', borderTop: '1px solid #B2DDFF' }}>좌석이 제한된 설명회의 경우<br />신청 순서에 따라 조기 마감될 수 있습니다.</p>
          <SiteLink href="#/reservation" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '52px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>설명회 예약하기</SiteLink>
        </aside>
      </div>
    </section>
  )
}
