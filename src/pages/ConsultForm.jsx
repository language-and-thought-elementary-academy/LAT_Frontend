import SiteLink from '../components/common/SiteLink'
import { formSpecs } from '../data/forms'
import { chipStyle, inputStyle, submitStyle } from '../utils/styleHelpers'
import { useSiteState } from '../context/SiteStateContext'

export default function ConsultForm({ formPath }) {
  const { form, fstate, ferr, consent, setField, pick, toggleConsent, submitForm } = useSiteState()
  const spec = formSpecs[formPath]
  const fv = form[spec.id] || {}
  const fe = ferr[spec.id] || { map: {}, list: [] }
  const fs = fstate[spec.id] || 'idle'

  const success = fs === 'success'
  const editing = fs !== 'success'
  const submitting = fs === 'submitting'

  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        {success && (
          <div role="status" style={{ maxWidth: '760px', background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '14px', padding: '44px 36px' }}>
            <p style={{ font: "600 11px/1 var(--font-family-primary)", letterSpacing: '.16em', color: '#1849A9', margin: '0 0 20px' }}>COMPLETED</p>
            <h2 style={{ font: "600 clamp(24px,2.4vw,32px)/1.4 var(--font-family-primary)", color: '#1849A9', margin: '0 0 18px' }}>{spec.successTitle}</h2>
            <p style={{ font: "400 16px/1.8 var(--font-family-primary)", color: '#667085', margin: '0 0 32px' }}>{spec.successDesc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <SiteLink href="#/" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>홈으로</SiteLink>
              <SiteLink href="#/schedule" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>시간표 보기</SiteLink>
            </div>
          </div>
        )}

        {editing && (
          <form onSubmit={e => submitForm(spec, e)} noValidate style={{ maxWidth: '760px', display: 'flex', flexDirection: 'column', gap: '34px' }}>
            {fe.list.length > 0 && (
              <div role="alert" style={{ background: '#FDF2F2', border: '1px solid #E9C4C4', borderRadius: '10px', padding: '20px 22px' }}>
                <p style={{ font: "600 15px/1.5 var(--font-family-primary)", color: '#9B2C2C', margin: '0 0 10px' }}>입력을 확인해주세요.</p>
                <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {fe.list.map((t, i) => (
                    <li key={i} style={{ font: "400 14px/1.6 var(--font-family-primary)", color: '#9B2C2C' }}>{t}</li>
                  ))}
                </ul>
              </div>
            )}

            {spec.groups.map(g => (
              <fieldset key={g.key} style={{ border: 'none', margin: 0, padding: 0 }}>
                <legend style={{ font: "600 15px/1.5 var(--font-family-primary)", color: '#1849A9', padding: 0, margin: '0 0 14px' }}>{g.label}{g.req ? ' *' : ''}</legend>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {g.options.map(o => {
                    const sel = fv[g.key] === o
                    return (
                      <button key={o} type="button" onClick={() => pick(spec.id, g.key, o)} aria-pressed={sel} style={chipStyle(sel)}>{o}</button>
                    )
                  })}
                </div>
              </fieldset>
            ))}

            {spec.fields.map(f => {
              const id = spec.id + '-' + f.key
              const invalid = !!fe.map[f.key]
              const value = fv[f.key] || ''
              const onChange = e => setField(spec.id, f.key, e.target.value)
              const fieldStyle = f.textarea
                ? { ...inputStyle(invalid), resize: 'vertical', minHeight: '130px' }
                : inputStyle(invalid)
              return (
                <div key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label htmlFor={id} style={{ font: "600 15px/1.5 var(--font-family-primary)", color: '#1849A9' }}>{f.label}{f.req ? ' *' : ''}</label>
                  {f.textarea ? (
                    <textarea id={id} value={value} onChange={onChange} rows={5} placeholder={f.ph || ''} aria-invalid={invalid} style={fieldStyle}></textarea>
                  ) : (
                    <input id={id} type={f.type || 'text'} value={value} onChange={onChange} placeholder={f.ph || ''} inputMode={f.inputMode || 'text'} aria-invalid={invalid} style={fieldStyle} />
                  )}
                  {f.hint && <p style={{ font: "400 13px/1.6 var(--font-family-primary)", color: '#667085', margin: 0 }}>{f.hint}</p>}
                </div>
              )
            })}

            <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '20px 22px', background: '#EFF8FF', border: '1px solid #B2DDFF', borderRadius: '10px', cursor: 'pointer' }}>
              <input type="checkbox" checked={!!consent[spec.id]} onChange={() => toggleConsent(spec.id)} style={{ width: '22px', height: '22px', margin: 0, accentColor: '#1849A9', flex: '0 0 auto' }} />
              <span style={{ font: "400 14px/1.7 var(--font-family-primary)", color: '#101828' }}>개인정보 수집 및 이용에 동의합니다. (필수)<br /><span style={{ color: '#667085' }}>수집 항목: 학생 이름, 학년, 보호자 연락처, 문의 내용 · 이용 목적: 상담 및 수업 안내 · 보유 기간: 상담 종료 후 1년</span></span>
            </label>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
              <button type="submit" disabled={submitting} style={submitStyle(submitting)}>{submitting ? '전송 중…' : spec.submitLabel}</button>
              <a href="tel:0225670548" style={{ font: "500 14px/1.6 var(--font-family-primary)", color: '#667085', textDecoration: 'none' }}>전화 상담 02-567-0548</a>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
