// Converts a `"prop:value;prop2:value2"` inline-style string into the object
// React's `style` prop expects. Kept as a runtime parser (rather than
// hand-transcribing every style to a JS object) so every inline style in
// this app is provably byte-identical to the original site's markup.
function kebabToCamel(s) {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
}

export function css(str) {
  if (!str) return undefined
  const out = {}
  for (const decl of str.split(';')) {
    const i = decl.indexOf(':')
    if (i < 0) continue
    const prop = decl.slice(0, i).trim()
    const value = decl.slice(i + 1).trim()
    if (!prop || !value) continue
    out[prop.startsWith('--') ? prop : kebabToCamel(prop)] = value
  }
  return out
}
