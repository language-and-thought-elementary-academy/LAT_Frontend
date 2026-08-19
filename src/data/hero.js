import { curriculumData } from './curriculum'

// Verbatim from the original `heroFor()` route → breadcrumb/hero-copy map.
const H = {
  '/about': { crumb: '학원안내', eyebrow: 'ABOUT 언어와 사유', t1: '언어와 사유 초등논술을', t2: '소개합니다.', lines: ['읽고, 질문하고, 생각하고, 이야기하고, 자신의 언어로 쓰는 과정을 하나의 수업으로 연결합니다.'] },
  '/teachers': { crumb: '강사진안내', eyebrow: '언어와 사유 TEACHERS', t1: '아이의 생각을 이끄는', t2: '언어와 사유 선생님', lines: ['좋은 논술 수업은 선생님이 정답을 많이 알려주는 수업이 아니라', '아이에게 좋은 질문을 던지는 수업이라고 생각합니다.'] },
  '/curriculum': { crumb: '커리큘럼', eyebrow: '언어와 사유 CURRICULUM', t1: '읽기에서 시작해', t2: '생각하고 쓰는 힘까지.', lines: ['초등 시기의 학습 발달에 맞춰 읽기, 사고, 토론, 글쓰기의 수준을 단계적으로 높여갑니다.'] },
  '/curriculum/class-method': { crumb: '수업방식', eyebrow: 'HOW WE LEARN', t1: '한 번의 수업에서도', t2: '읽고, 생각하고, 씁니다.', lines: [] },
  '/curriculum/feedback': { crumb: '첨삭안내', eyebrow: '언어와 사유 FEEDBACK', t1: '문장을 고치는 것에서', t2: '끝나지 않습니다.', lines: [] },
  '/schedule': { crumb: '시간표', eyebrow: 'CLASS SCHEDULE', t1: '학년별 개설 수업을', t2: '확인하세요.', lines: ['현재 개설된 언어와 사유 초등논술 수업과 모집 현황을 확인할 수 있습니다.'] },
  '/classes': { crumb: '수업안내', eyebrow: 'CLASS INFORMATION', t1: '언어와 사유 초등논술', t2: '수업 안내', lines: [] },
  '/seminar': { crumb: '설명회', eyebrow: '언어와 사유 PARENT SEMINAR', t1: '언어와 사유', t2: '학부모 설명회', lines: ['초등 독서와 논술 교육, 학년별 학습 방향,', '언어와 사유의 커리큘럼과 수업을 학부모님께 직접 설명드립니다.'] },
  '/classroom': { crumb: '실제수업', eyebrow: 'REAL CLASSROOM', t1: '언어와 사유에서는', t2: '이렇게 공부합니다.', lines: ['아이들이 실제로 읽고, 질문하고, 이야기하고, 글을 쓰는 언어와 사유의 수업을 소개합니다.'] },
  '/student-work': { crumb: '학생 글쓰기', eyebrow: 'STUDENT WORK', t1: '생각의 변화가', t2: '글의 변화로 이어집니다.', lines: [] },
  '/reviews': { crumb: '학부모 후기', eyebrow: 'PARENT REVIEWS', t1: '언어와 사유를 경험한', t2: '학부모 이야기', lines: ['언어와 사유 초등논술 수업을 경험한 학부모님들의 이야기를 확인하세요.'] },
  '/admission': { crumb: '처음 방문하셨나요?', eyebrow: 'FIRST TIME AT 언어와 사유', t1: '언어와 사유 초등논술,', t2: '이렇게 시작하세요.', lines: [] },
  '/consult': { crumb: '수강상담', eyebrow: 'CONSULTATION', t1: '우리 아이에게 맞는', t2: '수업을 안내해드립니다.', lines: ['어떤 수업을 선택해야 할지 고민된다면 학생의 학년과 현재 학습 상황을 알려주세요.', '확인 후 적합한 프로그램과 수강 가능한 수업을 안내해드립니다.'] },
  '/enroll': { crumb: '수강신청', eyebrow: 'ENROLLMENT', t1: '언어와 사유 초등논술', t2: '수강신청', lines: ['신청할 수업을 확인한 후 학생 정보를 입력해주세요.'] },
  '/reservation': { crumb: '예약확인', eyebrow: 'RESERVATION', t1: '예약 내용을', t2: '확인하세요.', lines: ['수강상담과 설명회 예약 내용을 확인할 수 있습니다.'] },
  '/faq': { crumb: 'FAQ', eyebrow: 'FAQ', t1: '자주 묻는 질문', t2: '', lines: [] },
  '/notice': { crumb: '공지사항', eyebrow: 'NOTICE', t1: '언어와 사유 초등논술', t2: '공지사항', lines: ['수업 일정과 신규 개강, 설명회 등 언어와 사유의 새로운 소식을 안내합니다.'] },
  '/location': { crumb: '오시는 길', eyebrow: 'LOCATION', t1: '언어와 사유', t2: '오시는 길', lines: [] },
  '/seminar/1': { crumb: '설명회 상세', eyebrow: 'PARENT SEMINAR', t1: '[설명회 제목]', t2: '', lines: [] },
  '/teachers/1': { crumb: '강사 상세', eyebrow: '언어와 사유 TEACHER', t1: '[강사명]', t2: '', lines: [] },
}

export function heroFor(route) {
  const c = curriculumData.find(x => route === '/curriculum/' + x.key)
  if (c) return { crumb: c.grade, eyebrow: c.code + ' · ' + c.grade, t1: c.title, t2: '', lines: [c.s1 + ' ' + c.s2] }
  return H[route] || { crumb: 'NOT FOUND', eyebrow: '404', t1: '페이지를 찾을 수 없습니다.', t2: '', lines: [] }
}
