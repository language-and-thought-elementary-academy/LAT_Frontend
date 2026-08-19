import SiteLink from '../common/SiteLink'
import TeacherCard from '../common/TeacherCard'
import { teachersPlaceholder } from '../../data/content'

export default function TeachersPreview() {
  return (
    <section aria-labelledby="teach-h" style={{ background: '#EFF8FF', padding: 'clamp(72px,9vw,140px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ font: "600 13px/1 'Noto Sans KR',sans-serif", letterSpacing: '.18em', color: '#1849A9', margin: '0 0 20px' }}>언어와 사유 TEACHERS</p>
        <h2 id="teach-h" style={{ font: "600 clamp(28px,3.4vw,42px)/1.28 'Noto Serif KR',serif", color: '#1849A9', margin: '0 0 20px', letterSpacing: '-.01em' }}>언어와 사유 선생님을<br />소개합니다.</h2>
        <p style={{ font: "400 clamp(16px,1.2vw,18px)/1.75 'Noto Sans KR',sans-serif", color: '#667085', margin: '0 0 52px', maxWidth: '680px' }}>아이의 이야기를 듣고,<br />질문을 통해 생각을 이끌어내며,<br />그 생각을 글로 완성할 수 있도록 함께합니다.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '20px' }}>
          {teachersPlaceholder.map((t, i) => <TeacherCard key={i} t={t} headingLevel="h3" linkMinHeight />)}
        </div>
        <div style={{ marginTop: '36px' }}>
          <SiteLink href="#/teachers" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 28px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none', background: '#fff' }}>강사진 보기</SiteLink>
        </div>
      </div>
    </section>
  )
}
