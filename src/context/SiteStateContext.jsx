import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SiteStateContext = createContext(null)

// Mirrors the original single-component `state` object. Several fields
// (sGrade, sOpenOnly, tGrade, nCat, form/fstate/ferr/consent) are only ever
// reset by a full page reload in the source site — navigating between
// routes does NOT clear them (its hashchange handler only resets
// menuOpen/dd/faq) — so they live here instead of inside individual pages.
export function SiteStateProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dd, setDd] = useState(null)
  const [w, setW] = useState(() => window.innerWidth)
  const [scrolled, setScrolled] = useState(false)

  const [sGrade, setSGrade] = useState('전체')
  const [sOpenOnly, setSOpenOnly] = useState(false)
  const [tGrade, setTGrade] = useState('전체')
  const [nCat, setNCat] = useState('전체')

  const [form, setForm] = useState({})
  const [fstate, setFstate] = useState({})
  const [ferr, setFerr] = useState({})
  const [consent, setConsent] = useState({})

  useEffect(() => {
    const onResize = () => setW(window.innerWidth)
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const setField = useCallback((id, k, v) => {
    setForm(prev => ({ ...prev, [id]: { ...prev[id], [k]: v } }))
  }, [])

  const pick = useCallback((id, k, v) => {
    setForm(prev => {
      const cur = (prev[id] || {})[k]
      return { ...prev, [id]: { ...prev[id], [k]: cur === v ? '' : v } }
    })
  }, [])

  const toggleConsent = useCallback(id => {
    setConsent(prev => ({ ...prev, [id]: !prev[id] }))
  }, [])

  const submitForm = useCallback((spec, e) => {
    e.preventDefault()
    const v = form[spec.id] || {}
    const errs = {}
    const list = []
    spec.groups.forEach(g => { if (g.req && !v[g.key]) { errs[g.key] = 1; list.push(g.label + '을(를) 선택해주세요.') } })
    spec.fields.forEach(f => {
      const val = (v[f.key] || '').trim()
      if (f.req && !val) { errs[f.key] = 1; list.push(f.label + '을(를) 입력해주세요.') }
      else if (f.key === 'phone' && val && !/^0\d{1,2}-?\d{3,4}-?\d{4}$/.test(val)) { errs[f.key] = 1; list.push('연락처 형식을 확인해주세요. (예: 010-0000-0000)') }
    })
    if (!consent[spec.id]) { errs.consent = 1; list.push('개인정보 수집 및 이용에 동의해주세요.') }

    setFerr(prev => ({ ...prev, [spec.id]: { map: errs, list } }))
    if (list.length) {
      setFstate(prev => ({ ...prev, [spec.id]: 'error' }))
      return
    }
    setFstate(prev => ({ ...prev, [spec.id]: 'submitting' }))
    setTimeout(() => {
      setFstate(prev => ({ ...prev, [spec.id]: 'success' }))
      window.scrollTo(0, 0)
    }, 700)
  }, [form, consent])

  const isDesktop = w >= 1024
  const isMobile = !isDesktop

  const value = useMemo(() => ({
    menuOpen, setMenuOpen, dd, setDd, w, isDesktop, isMobile, scrolled,
    sGrade, setSGrade, sOpenOnly, setSOpenOnly, tGrade, setTGrade, nCat, setNCat,
    form, fstate, ferr, consent, setField, pick, toggleConsent, submitForm,
  }), [menuOpen, dd, w, isDesktop, isMobile, scrolled, sGrade, sOpenOnly, tGrade, nCat,
    form, fstate, ferr, consent, setField, pick, toggleConsent, submitForm])

  return <SiteStateContext.Provider value={value}>{children}</SiteStateContext.Provider>
}

export function useSiteState() {
  const ctx = useContext(SiteStateContext)
  if (!ctx) throw new Error('useSiteState must be used within SiteStateProvider')
  return ctx
}

// Closes the nav dropdown/mobile menu and scrolls to top on every route
// change, matching the original hashchange handler. Skips the very first
// render so initial page load doesn't force-scroll (the original only did
// this on `hashchange`, not on mount).
export function RouteChangeEffects() {
  const { setMenuOpen, setDd } = useSiteState()
  const location = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) { first.current = false; return }
    setMenuOpen(false)
    setDd(null)
    window.scrollTo(0, 0)
  }, [location.pathname, setMenuOpen, setDd])

  return null
}
