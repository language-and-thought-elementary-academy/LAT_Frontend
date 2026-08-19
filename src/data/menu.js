// Desktop header nav + dropdown items, verbatim from the original `menuData()`.
export const desktopMenu = [
  { label: '학원안내', href: '#/about', items: [
    { label: '언어와 사유 초등논술', href: '#/about' },
    { label: '수업 원칙', href: '#/about' },
    { label: '시설안내', href: '#/about' },
    { label: '수업안내 · 수강료', href: '#/classes' },
    { label: '오시는 길', href: '#/location' },
  ] },
  { label: '강사진안내', href: '#/teachers', items: [
    { label: '전체 강사진', href: '#/teachers' },
    { label: '강사 상세', href: '#/teachers/1' },
  ] },
  { label: '커리큘럼', href: '#/curriculum', items: [
    { label: '전체 커리큘럼', href: '#/curriculum' },
    { label: '초등 1–2학년', href: '#/curriculum/grade-1-2' },
    { label: '초등 3–4학년', href: '#/curriculum/grade-3-4' },
    { label: '초등 5–6학년', href: '#/curriculum/grade-5-6' },
    { label: '수업방식', href: '#/curriculum/class-method' },
    { label: '첨삭안내', href: '#/curriculum/feedback' },
  ] },
  { label: '시간표', href: '#/schedule', items: [] },
  { label: '설명회', href: '#/seminar', items: [
    { label: '예정 설명회', href: '#/seminar' },
    { label: '설명회 상세', href: '#/seminar/1' },
  ] },
  { label: '수업후기', href: '#/classroom', items: [
    { label: '실제수업', href: '#/classroom' },
    { label: '학생 글쓰기', href: '#/student-work' },
    { label: '학부모 후기', href: '#/reviews' },
  ] },
  { label: '예약확인/신청', href: '#/consult', items: [
    { label: '수강상담', href: '#/consult' },
    { label: '수강신청', href: '#/enroll' },
    { label: '설명회 예약', href: '#/seminar' },
    { label: '예약확인', href: '#/reservation' },
  ] },
]

// Flat mobile menu list, verbatim from the original hardcoded `mobileMenu`.
export const mobileMenu = [
  { label: '학원안내', href: '#/about' },
  { label: '강사진안내', href: '#/teachers' },
  { label: '커리큘럼', href: '#/curriculum' },
  { label: '시간표', href: '#/schedule' },
  { label: '수업안내', href: '#/classes' },
  { label: '설명회', href: '#/seminar' },
  { label: '수업후기', href: '#/classroom' },
  { label: '입학/수강안내', href: '#/admission' },
  { label: '공지사항', href: '#/notice' },
  { label: 'FAQ', href: '#/faq' },
  { label: '예약확인', href: '#/reservation' },
  { label: '오시는 길', href: '#/location' },
]

// Footer nav links, verbatim from the original hardcoded `footerLinks`.
export const footerLinks = [
  { label: '학원안내', href: '#/about' },
  { label: '강사진', href: '#/teachers' },
  { label: '커리큘럼', href: '#/curriculum' },
  { label: '시간표', href: '#/schedule' },
  { label: '수업안내', href: '#/classes' },
  { label: '설명회', href: '#/seminar' },
  { label: '공지사항', href: '#/notice' },
  { label: '수강상담', href: '#/consult' },
  { label: 'FAQ', href: '#/faq' },
  { label: '오시는 길', href: '#/location' },
]

export const gradeChips = ['전체', '초1–2', '초3–4', '초5–6']
