import { Outlet, useLocation } from 'react-router-dom'
import InnerHero from './InnerHero'
import { heroFor } from '../../data/hero'

// Every non-home route renders the same breadcrumb + hero block above its
// own content (the original's `p.inner` block, which is `true` whenever
// `route !== '/'`, independent of which specific page block also matches).
export default function InnerPageLayout() {
  const location = useLocation()
  const hero = heroFor(location.pathname)
  return (
    <div className="inner-publication">
      <InnerHero hero={hero} />
      <Outlet />
    </div>
  )
}
