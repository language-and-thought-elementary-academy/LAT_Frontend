import SiteLink from '../components/common/SiteLink'
import { seminarsRaw } from '../data/content'
import { statusMeta, badgeStyle, dotStyle } from '../utils/styleHelpers'
import { css } from '../utils/css'

const reserveStyle = css("display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;background:#155EEF;border:1px solid #155EEF;border-radius:4px;color:#fff;font:600 14px/1 var(--font-family-primary);text-decoration:none")

export default function Seminar() {
  const semMeta = statusMeta('OPEN')
  const seminars = seminarsRaw.map(s => ({
    ...s,
    badgeStyle: badgeStyle(semMeta),
    dotStyle: dotStyle(semMeta),
  }))

  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ font: "600 12px/1 var(--font-family-primary)", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 28px' }}>현재 신청 가능한 설명회</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '20px' }}>
          {seminars.map((s, i) => (
            <article key={i} style={{ background: '#fff', border: '1px solid #D0D5DD', borderRadius: '14px', padding: '32px 30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={s.badgeStyle}><span style={s.dotStyle} aria-hidden="true"></span>{s.statusLabel}</p>
              <h3 style={{ font: "600 clamp(20px,1.6vw,24px)/1.4 var(--font-family-primary)", color: '#1849A9', margin: 0 }}>{s.title}</h3>
              <dl style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '10px 12px', margin: 0, font: "400 14px/1.6 var(--font-family-primary)" }}>
                <dt style={{ color: '#667085', margin: 0 }}>일시</dt><dd style={{ margin: 0 }}>{s.date} {s.time}</dd>
                <dt style={{ color: '#667085', margin: 0 }}>대상</dt><dd style={{ margin: 0 }}>{s.target}</dd>
                <dt style={{ color: '#667085', margin: 0 }}>장소</dt><dd style={{ margin: 0 }}>{s.place}</dd>
                <dt style={{ color: '#667085', margin: 0 }}>연사</dt><dd style={{ margin: 0 }}>{s.speaker}</dd>
              </dl>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
                <SiteLink href={s.href} className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '48px', padding: '0 22px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 14px/1 var(--font-family-primary)", textDecoration: 'none' }}>자세히 보기</SiteLink>
                <SiteLink href={s.reserveHref} style={reserveStyle}>설명회 예약하기</SiteLink>
              </div>
            </article>
          ))}
        </div>

        <h2 style={{ font: "600 12px/1 var(--font-family-primary)", letterSpacing: '.16em', color: '#1849A9', margin: '64px 0 22px' }}>지난 설명회</h2>
        <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '12px', padding: '30px 28px', margin: 0 }}>[지난 설명회 목록] — 종료된 설명회 기록이 등록되면 이곳에 표시됩니다.</p>
      </div>
    </section>
  )
}
