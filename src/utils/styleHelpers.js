import { css } from './css'

// Same status → color/label mapping as the original `statusMeta()` method.
export function statusMeta(status) {
  const m = {
    OPEN: { label: '모집중', fg: '#1849A9', bg: '#EFF8FF', bd: '#B2DDFF', cta: '수강신청', href: '#/enroll', closed: false },
    LOW_SEATS: { label: '마감임박', fg: '#B54708', bg: '#FFFAEB', bd: '#FEDF89', cta: '수강신청', href: '#/enroll', closed: false },
    WAITLIST: { label: '대기신청', fg: '#344054', bg: '#EFF4FA', bd: '#C7D7E8', cta: '대기신청', href: '#/consult', closed: false },
    CLOSED: { label: '마감', fg: '#54596B', bg: '#F2F4F7', bd: '#E4E7EC', cta: '신청 마감', href: '#/consult', closed: true },
  }
  return m[status] || m.CLOSED
}

export function badgeStyle(meta) {
  return css(`display:inline-flex;align-items:center;gap:8px;align-self:flex-start;margin:0;padding:8px 14px;border-radius:999px;font:600 13px/1 'Noto Sans KR',sans-serif;color:${meta.fg};background:${meta.bg};border:1px solid ${meta.bd}`)
}

export function dotStyle(meta) {
  return css(`width:6px;height:6px;border-radius:50%;background:${meta.fg}`)
}

export function chipStyle(selected) {
  return css(
    "flex:0 0 auto;min-height:44px;padding:0 20px;border-radius:999px;cursor:pointer;font:600 14px/1 'Noto Sans KR',sans-serif;transition:background .2s,border-color .2s;" +
    (selected ? 'background:#155EEF;color:#fff;border:1px solid #155EEF;' : 'background:#fff;color:#155EEF;border:1px solid #D0D5DD;')
  )
}

export function inputStyle(invalid) {
  return css(`width:100%;min-height:52px;padding:14px 16px;border-radius:6px;font:400 16px/1.5 'Noto Sans KR',sans-serif;color:#101828;background:#fff;border:1px solid ${invalid ? '#C24545' : '#D0D5DD'};`)
}

export function classCtaStyle(meta) {
  return css(
    "display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:4px;font:600 14px/1 'Noto Sans KR',sans-serif;text-decoration:none;align-self:flex-start;" +
    (meta.closed ? 'background:#F0F1F3;color:#98A0AE;border:1px solid #E1E3E8;pointer-events:none;' : 'background:#155EEF;color:#fff;border:1px solid #155EEF;')
  )
}

export function faqIconStyle(open) {
  return css(`font:400 22px/1 'Noto Sans KR',sans-serif;color:#1849A9;transition:transform .2s;transform:rotate(${open ? '45deg' : '0deg'});flex:0 0 auto`)
}

export function submitStyle(submitting) {
  return css(
    `display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:0 34px;border-radius:4px;font:600 16px/1 'Noto Sans KR',sans-serif;border:1px solid #155EEF;cursor:${submitting ? 'wait' : 'pointer'};background:${submitting ? '#7CA8E8' : '#155EEF'};border-color:${submitting ? '#7CA8E8' : '#155EEF'};color:#fff`
  )
}

// Decorates a raw class record with the status-derived label/badge/CTA
// fields, exactly like the original `decorate()` closure in renderVals().
export function decorateClass(c) {
  const m = statusMeta(c.status)
  return {
    ...c,
    statusLabel: m.label,
    badgeStyle: badgeStyle(m),
    dotStyle: dotStyle(m),
    ctaLabel: m.cta,
    ctaHref: m.href,
    closed: m.closed,
    ctaStyle: classCtaStyle(m),
  }
}
