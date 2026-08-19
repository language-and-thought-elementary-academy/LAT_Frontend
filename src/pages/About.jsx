import { principles, facilityShots } from '../data/content'

export default function About() {
  return (
    <>
      <section style={{ background: '#fff', padding: 'clamp(72px,9vw,132px) 0' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ font: "600 13px/1 'Noto Sans KR',sans-serif", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>ABOUT 언어와 사유</p>
          <p style={{ font: "400 clamp(18px,1.5vw,21px)/1.85 'Noto Sans KR',sans-serif", color: '#101828', margin: '0 0 30px' }}>언어와 사유 초등논술은<br />독서와 글쓰기를 따로 가르치지 않습니다.</p>
          <p style={{ font: "400 clamp(18px,1.5vw,21px)/1.85 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 30px' }}>읽고,<br />질문하고,<br />생각하고,<br />이야기하고,<br />자신의 언어로 쓰는 과정을 하나의 수업으로 연결합니다.</p>
          <p style={{ font: "400 17px/1.8 'Noto Sans KR',sans-serif", color: '#667085', margin: 0 }}>초등 시기에 필요한 독해력과 사고력,<br />그리고 자신의 생각을 정확하게 표현하는 힘을<br />단계적으로 길러갑니다.</p>
        </div>
      </section>

      <section style={{ background: '#EFF8FF', padding: 'clamp(72px,9vw,132px) 0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ font: "600 13px/1 'Noto Sans KR',sans-serif", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>OUR CLASS</p>
          <h2 style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 34px', letterSpacing: '-.01em' }}>읽고 끝나는 수업이<br />아닙니다.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '40px', maxWidth: '1000px' }}>
            <p style={{ font: "400 17px/1.85 'Noto Sans KR',sans-serif", color: '#667085', margin: 0 }}>책을 많이 읽는 것만으로<br />생각하는 힘이 자연스럽게 만들어지는 것은 아닙니다.<br /><br />무엇을 읽었는지 이해하고,<br />왜 그런지 질문하고,<br />다른 생각과 비교하고,<br />자신의 생각을 정리하여<br />말과 글로 표현하는 과정이 필요합니다.</p>
            <p style={{ font: "400 19px/1.85 'Noto Serif KR',serif", color: '#1849A9', margin: 0 }}>언어와 사유는 이 모든 과정을<br />한 번의 수업 안에서 연결합니다.</p>
          </div>
        </div>
      </section>

      <section id="principles" style={{ background: '#fff', padding: 'clamp(72px,9vw,132px) 0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ font: "600 13px/1 'Noto Sans KR',sans-serif", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>EDUCATION PRINCIPLES</p>
          <h2 style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 52px', letterSpacing: '-.01em' }}>언어와 사유의 수업 원칙</h2>
          <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
            {principles.map(pr => (
              <li key={pr.num} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px 40px', padding: '34px 0', borderTop: '1px solid #E4EDF7' }}>
                <div style={{ display: 'flex', gap: '18px', alignItems: 'baseline' }}>
                  <span style={{ font: "600 15px/1 'Noto Serif KR',serif", color: '#1849A9' }}>{pr.num}</span>
                  <h3 style={{ font: "600 clamp(20px,1.7vw,25px)/1.4 'Noto Sans KR',sans-serif", color: '#1849A9', margin: 0 }}>{pr.title}</h3>
                </div>
                <p style={{ font: "400 16px/1.8 'Noto Sans KR',sans-serif", color: '#667085', margin: 0 }}>{pr.d1}<br />{pr.d2}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ background: '#EFF8FF', padding: 'clamp(72px,9vw,132px) 0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ font: "600 13px/1 'Noto Sans KR',sans-serif", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>FACILITIES</p>
          <h2 style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 22px', letterSpacing: '-.01em' }}>언어와 사유의 학습 공간</h2>
          <p style={{ font: "400 17px/1.8 'Noto Sans KR',sans-serif", color: '#667085', margin: '0 0 44px', maxWidth: '680px' }}>읽기에 집중하고,<br />자유롭게 이야기하고,<br />차분하게 글을 쓸 수 있는<br />학습 환경을 제공합니다.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
            {facilityShots.map(f => (
              <figure key={f.caption} style={{ margin: 0 }}>
                <div role="img" aria-label={f.alt} style={{ aspectRatio: '3/2', background: 'repeating-linear-gradient(135deg,#DCEBFA 0 8px,#F5FAFF 8px 16px)', border: '1px solid #B2DDFF', display: 'grid', placeItems: 'center', color: '#475467', font: '400 11px/1.5 ui-monospace,monospace', letterSpacing: '.06em', textAlign: 'center', padding: '12px' }}>{f.slot}</div>
                <figcaption style={{ font: "400 13px/1.6 'Noto Sans KR',sans-serif", color: '#667085', margin: '10px 0 0' }}>{f.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
