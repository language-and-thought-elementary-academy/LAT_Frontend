import SiteLink from '../common/SiteLink'
import { curriculumData } from '../../data/curriculum'

export default function CurriculumPreview() {
  return (
    <section aria-labelledby="cur-h" style={{ background: '#fff', padding: 'clamp(72px,9vw,140px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ font: "600 13px/1 'Noto Sans KR',sans-serif", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>언어와 사유 CURRICULUM</p>
        <h2 id="cur-h" style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 20px', letterSpacing: '-.01em' }}>학년이 올라갈수록<br />생각의 깊이도 달라집니다.</h2>
        <p style={{ font: "400 clamp(16px,1.2vw,18px)/1.75 'Noto Sans KR',sans-serif", color: '#667085', margin: '0 0 56px', maxWidth: '700px' }}>아이의 발달 단계에 맞춰<br />읽기에서 시작해 생각하고 표현하는 힘까지<br />단계적으로 확장합니다.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: '20px' }}>
          {curriculumData.map(c => (
            <article key={c.key} style={{ background: '#fff', border: '1px solid #D0D5DD', borderRadius: '14px', padding: '36px 30px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ font: "600 26px/1 'Noto Serif KR',serif", color: '#1849A9', margin: 0 }}>{c.num}</p>
              <p style={{ font: "600 12px/1 'Noto Sans KR',sans-serif", letterSpacing: '.14em', color: '#667085', margin: 0 }}>{c.code}</p>
              <h3 style={{ font: "600 clamp(21px,1.7vw,26px)/1.35 'Noto Serif KR',serif", color: '#1849A9', margin: 0 }}>{c.title}</h3>
              <p style={{ font: "400 15px/1.75 'Noto Sans KR',sans-serif", color: '#667085', margin: 0, flex: 1 }}>{c.grade} · {c.summaryShort}</p>
              <p style={{ font: "400 13px/1.7 'Noto Sans KR',sans-serif", color: '#101828', margin: 0, paddingTop: '14px', borderTop: '1px solid #E4EDF7' }}>{c.keywords}</p>
              <SiteLink href={'#/curriculum/' + c.key} className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '48px', padding: '0 22px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 14px/1 'Noto Sans KR',sans-serif", textDecoration: 'none', alignSelf: 'flex-start' }}>자세히 보기</SiteLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
