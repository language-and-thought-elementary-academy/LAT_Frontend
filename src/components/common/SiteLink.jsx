import { Link } from 'react-router-dom'

// The original stored every internal href as a literal `#/path` hash string
// and every external one (tel:, etc.) as-is. This bridges both cases to a
// single call site: hash hrefs become router `Link`s (HashRouter re-adds the
// `#`), everything else stays a plain anchor.
export default function SiteLink({ href, children, ...rest }) {
  if (href && href.startsWith('#')) {
    return <Link to={href.slice(1)} {...rest}>{children}</Link>
  }
  return <a href={href} {...rest}>{children}</a>
}
