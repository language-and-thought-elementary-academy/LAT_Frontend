// Verbatim from the original `formSpec()`, keyed by route instead of a
// switch/if chain since each route maps to exactly one spec.
export const formSpecs = {
  '/consult': {
    id: 'consult', submitLabel: '상담 신청하기',
    successTitle: '상담 신청이 완료되었습니다.',
    successDesc: '담당자가 확인 후 보호자 연락처로 연락드리겠습니다.',
    groups: [
      { key: 'grade', label: '학생 학년', req: true, options: ['초1', '초2', '초3', '초4', '초5', '초6'] },
      { key: 'exp', label: '논술 수업 경험', req: false, options: ['처음', '6개월 미만', '6개월–1년', '1년 이상'] },
      { key: 'topic', label: '상담 분야', req: true, options: ['커리큘럼', '반 편성', '시간표', '수강료', '설명회', '기타'] },
    ],
    fields: [
      { key: 'name', label: '학생 이름', req: true, ph: '학생 이름을 입력해주세요' },
      { key: 'phone', label: '보호자 연락처', req: true, type: 'tel', inputMode: 'numeric', ph: '010-0000-0000', hint: '휴대전화 또는 유선 번호를 입력해주세요.' },
      { key: 'message', label: '문의사항', req: false, textarea: true, ph: '궁금한 점을 자유롭게 남겨주세요' },
    ],
  },
  '/enroll': {
    id: 'enroll', submitLabel: '수강신청',
    successTitle: '수강신청이 접수되었습니다.',
    successDesc: '담당자가 개설반 정원과 반편성을 확인한 후 연락드리겠습니다.',
    groups: [
      { key: 'cls', label: '신청 수업', req: true, options: ['초1–2 독서논술 기본반', '초3–4 독서논술 사고반', '초5–6 독서논술 논리반', '상담 후 결정'] },
      { key: 'grade', label: '학년', req: true, options: ['초1', '초2', '초3', '초4', '초5', '초6'] },
    ],
    fields: [
      { key: 'name', label: '학생 이름', req: true, ph: '학생 이름을 입력해주세요' },
      { key: 'school', label: '학교', req: false, ph: '재학 중인 학교' },
      { key: 'phone', label: '보호자 연락처', req: true, type: 'tel', inputMode: 'numeric', ph: '010-0000-0000' },
      { key: 'message', label: '요청사항', req: false, textarea: true, ph: '요청사항이 있으면 남겨주세요' },
    ],
  },
  '/reservation': {
    id: 'reservation', submitLabel: '예약 확인',
    successTitle: '예약 내용을 확인했습니다.',
    successDesc: '예약 종류 · 예약 일시 · 상태 · 안내사항은 담당자 확인 후 문자로 안내드립니다.',
    groups: [
      { key: 'type', label: '예약 종류', req: true, options: ['수강상담', '설명회'] },
    ],
    fields: [
      { key: 'name', label: '예약자명', req: true, ph: '예약자 성명' },
      { key: 'phone', label: '연락처', req: true, type: 'tel', inputMode: 'numeric', ph: '010-0000-0000' },
    ],
  },
}
