import { useState } from 'react'
import SiteLink from '../components/common/SiteLink'
import { faqData } from '../data/content'
import { faqIconStyle } from '../utils/styleHelpers'

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {faqData.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <li key={i} style={{ borderBottom: '1px solid #E4EDF7' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', background: 'none', border: 'none', padding: '26px 4px', cursor: 'pointer', textAlign: 'left', minHeight: '44px' }}
                >
                  <span style={{ font: "500 clamp(16px,1.3vw,18px)/1.6 'Noto Sans KR',sans-serif", color: '#1849A9' }}>{q}</span>
                  <span aria-hidden="true" style={faqIconStyle(isOpen)}>+</span>
                </button>
                {isOpen && (
                  <p style={{ font: "400 16px/1.8 'Noto Sans KR',sans-serif", color: '#667085', margin: 0, padding: '0 4px 28px', maxWidth: '720px' }}>{a}</p>
                )}
              </li>
            )
          })}
        </ul>
        <div style={{ marginTop: '44px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <a href="tel:0225670548" className="hover-bg-1849a9-fg-fff" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', border: '1px solid #1849A9', borderRadius: '4px', color: '#1849A9', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>상담센터 02-567-0548</a>
          <SiteLink href="#/consult" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 'Noto Sans KR',sans-serif", textDecoration: 'none' }}>수강상담 신청</SiteLink>
        </div>
      </div>
    </section>
  )
}
