import { locationRows } from '../data/content'

export default function Location() {
  return (
    <section style={{ background: '#fff', padding: 'clamp(56px,7vw,104px) 0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '48px', alignItems: 'start' }}>
        <dl style={{ margin: 0, display: 'flex', flexDirection: 'column' }}>
          {locationRows.map(r => (
            <div key={r.k} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '16px', padding: '22px 0', borderTop: '1px solid #E4EDF7' }}>
              <dt style={{ font: "600 15px/1.6 var(--font-family-primary)", color: '#1849A9', margin: 0 }}>{r.k}</dt>
              <dd style={{ font: "400 16px/1.7 var(--font-family-primary)", color: '#667085', margin: 0 }}>{r.v}</dd>
            </div>
          ))}
        </dl>
        <div>
          <div role="img" aria-label="약도 준비 중" style={{ aspectRatio: '4/3', background: 'repeating-linear-gradient(135deg,#DCEBFA 0 8px,#F5FAFF 8px 16px)', border: '1px solid #B2DDFF', display: 'grid', placeItems: 'center', color: '#475467', font: '400 11px/1.5 ui-monospace,monospace', textAlign: 'center', padding: '12px' }}>[지도 — 확정 주소 등록 후 지도 삽입]</div>
          <a href="tel:0225670548" className="hover-bg-1849a9" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: '50px', padding: '0 26px', marginTop: '20px', background: '#155EEF', border: '1px solid #155EEF', borderRadius: '4px', color: '#fff', font: "600 15px/1 var(--font-family-primary)", textDecoration: 'none' }}>전화 문의 02-567-0548</a>
        </div>
      </div>
    </section>
  )
}
