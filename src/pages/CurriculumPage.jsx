import SiteLink from '../components/common/SiteLink'
import { curriculumData } from '../data/curriculum'
import { css } from '../utils/css'

function detailCtaStyle(hidden) {
  return css(
    "display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 26px;border:1px solid #155EEF;border-radius:4px;color:#155EEF;font:600 15px/1 'Noto Sans KR',sans-serif;text-decoration:none;" +
    (hidden ? 'display:none;' : '')
  )
}

export default function CurriculumPage({ gradeKey }) {
  const gradeRoute = gradeKey ? curriculumData.find(c => c.key === gradeKey) : null
  const curSel = gradeRoute ? [gradeRoute] : curriculumData
  const isCurIndex = !gradeRoute

  return (
    <>
      {curSel.map((c, i) => (
        <section key={c.key} style={{ background: i % 2 === 0 ? '#fff' : '#EFF8FF', padding: 'clamp(64px,8vw,120px) 0' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
            {!gradeRoute && (
              <>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', margin: '0 0 18px' }}>
                  <span style={{ font: "600 15px/1 'Noto Serif KR',serif", color: '#1849A9' }}>{c.num}</span>
                  <p style={{ font: "600 13px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#667085', margin: 0 }}>{c.code} · {c.grade}</p>
                </div>
                <h2 style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 22px', letterSpacing: '-.01em' }}>{c.title}</h2>
                <p style={{ font: "400 clamp(17px,1.3vw,19px)/1.8 'Noto Sans KR',sans-serif", color: '#667085', margin: '0 0 56px', maxWidth: '700px' }}>{c.s1}<br />{c.s2}</p>
              </>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '44px' }}>
              <div>
                <h3 style={{ font: "600 12px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 22px' }}>학습 목표</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {c.goals.map((g, gi) => (
                    <li key={gi} style={{ font: "400 16px/1.6 'Noto Sans KR',sans-serif", color: '#101828', paddingLeft: '16px', borderLeft: '1px solid #D0D5DD' }}>{g}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 style={{ font: "600 12px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 22px' }}>수업에서 배웁니다</h3>
                <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {c.flow.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '12px', font: "500 16px/1.5 'Noto Sans KR',sans-serif", color: '#1849A9' }}>
                      <span aria-hidden="true" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#155EEF', flex: '0 0 auto' }}></span>{f}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 style={{ font: "600 12px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 22px' }}>이런 학생에게 추천합니다</h3>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {c.rec.map((r, ri) => (
                    <li key={ri} style={{ font: "400 16px/1.7 'Noto Sans KR',sans-serif", color: '#667085', background: '#fff', border: '1px solid #D0D5DD', borderRadius: '12px', padding: '20px 22px' }}>{r[0]}<br />{r[1]}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '48px' }}>
              <SiteLink href="#/schedule" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>{c.ctaLabel}</SiteLink>
              <SiteLink href={'#/curriculum/' + c.key} style={detailCtaStyle(!!gradeRoute)}>학년별 커리큘럼 자세히 보기</SiteLink>
            </div>
          </div>
        </section>
      ))}

      {isCurIndex && (
        <section style={{ background: '#102A56', padding: 'clamp(64px,7vw,110px) 0' }}>
          <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '24px' }}>
            <SiteLink href="#/curriculum/class-method" className="hover-border-84caff" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.18)', borderRadius: '14px', padding: '32px 28px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ font: "600 11px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#84CAFF' }}>HOW WE LEARN</span>
              <span style={{ font: "600 22px/1.4 'Noto Serif KR',serif", color: '#fff' }}>수업방식</span>
              <span style={{ font: "400 15px/1.7 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.7)' }}>한 번의 수업에서도 읽고, 생각하고, 씁니다.</span>
            </SiteLink>
            <SiteLink href="#/curriculum/feedback" className="hover-border-84caff" style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.18)', borderRadius: '14px', padding: '32px 28px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ font: "600 11px/1 'Noto Sans KR',sans-serif", letterSpacing: '.16em', color: '#84CAFF' }}>언어와 사유 FEEDBACK</span>
              <span style={{ font: "600 22px/1.4 'Noto Serif KR',serif", color: '#fff' }}>첨삭안내</span>
              <span style={{ font: "400 15px/1.7 'Noto Sans KR',sans-serif", color: 'rgba(255,255,255,.7)' }}>문장을 고치는 것에서 끝나지 않습니다.</span>
            </SiteLink>
          </div>
        </section>
      )}
    </>
  )
}
