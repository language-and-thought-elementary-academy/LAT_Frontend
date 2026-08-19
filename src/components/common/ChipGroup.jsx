import { chipStyle } from '../../utils/styleHelpers'

export default function ChipGroup({ ariaLabel, options, value, onChange, style }) {
  return (
    <div role="group" aria-label={ariaLabel} style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '6px', ...style }}>
      {options.map(opt => (
        <button key={opt} type="button" onClick={() => onChange(opt)} aria-pressed={value === opt} style={chipStyle(value === opt)}>{opt}</button>
      ))}
    </div>
  )
}
