import { useCallback, useEffect, useRef, useState } from 'react'
import SiteLink from '../common/SiteLink'
import card01 from '../../carousel/card-01-vocabulary-4x5v2.png'
import card02 from '../../carousel/card-02-reading-4x5v2.png'
import card03 from '../../carousel/card-03-thinking-4x5v2.png'
import card04 from '../../carousel/card-04-expression-4x5v2.png'
import card05 from '../../carousel/card-05-consultation-4x5v2.png'

const cardImports = [card01, card02, card03, card04, card05]
const THEMES = ['교과 어휘', '독해', '독서와 사유', '말하기·글쓰기', '언어와 사유']
const ALTS = ['교과서 어휘 학습', '읽기에서 깊은 독해로', '독서와 사유를 통한 사고 확장', '생각을 말하고 글로 표현하는 과정', '언어와 사유 수강상담']
const storyCards = [1, 2, 3, 4, 5].map((n) => ({
  id: n,
  image: cardImports[n - 1],
  theme: THEMES[n - 1],
  alt: ALTS[n - 1],
}))

export default function BrandStoryCarousel() {
  const trackRef = useRef(null)
  const settleTimer = useRef(null)
  const drag = useRef({ active: false, moved: false, startX: 0, scrollLeft: 0 })
  const [current, setCurrent] = useState(0)
  const [dragging, setDragging] = useState(false)

  const goTo = useCallback((index, behavior = 'smooth') => {
    const track = trackRef.current
    const slide = track?.children[index]
    if (!track || !slide) return
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior })
    setCurrent(index)
  }, [])

  const syncCurrent = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const target = Array.from(track.children).reduce((nearest, slide, index) => {
      const distance = Math.abs(slide.offsetLeft - track.offsetLeft - track.scrollLeft)
      return distance < nearest.distance ? { index, distance } : nearest
    }, { index: 0, distance: Infinity })
    setCurrent(target.index)
  }, [])

  useEffect(() => () => clearTimeout(settleTimer.current), [])

  useEffect(() => {
    const alignCurrentSlide = () => goTo(current, 'auto')
    window.addEventListener('resize', alignCurrentSlide)
    return () => window.removeEventListener('resize', alignCurrentSlide)
  }, [current, goTo])

  const onScroll = () => {
    clearTimeout(settleTimer.current)
    settleTimer.current = setTimeout(syncCurrent, 80)
  }

  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    const track = trackRef.current
    drag.current = { active: true, moved: false, startX: event.clientX, scrollLeft: track.scrollLeft }
    setDragging(true)
    track.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!drag.current.active) return
    if (Math.abs(event.clientX - drag.current.startX) > 5) drag.current.moved = true
    event.preventDefault()
    trackRef.current.scrollLeft = drag.current.scrollLeft - (event.clientX - drag.current.startX)
  }

  const finishDrag = (event) => {
    if (!drag.current.active) return
    drag.current.active = false
    setDragging(false)
    if (trackRef.current.hasPointerCapture(event.pointerId)) trackRef.current.releasePointerCapture(event.pointerId)
    syncCurrent()
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goTo(Math.max(0, current - 1))
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goTo(Math.min(storyCards.length - 1, current + 1))
    }
  }

  return (
    <section className="brand-story" aria-labelledby="home-heading">
      <div className="brand-story__inner">
        <h1 id="home-heading" className="sr-only">언어와 사유 초등논술</h1>
        <p className="brand-story__count" aria-hidden="true"><strong>{String(current + 1).padStart(2, '0')}</strong>/05</p>

        <p className="sr-only" aria-live="polite">{current + 1}/5 — {storyCards[current].theme}</p>
        <div
          ref={trackRef}
          className={`brand-story__track${dragging ? ' is-dragging' : ''}`}
          tabIndex="0"
          aria-label="언어와 사유 카드뉴스. 좌우 방향키로 이동할 수 있습니다."
          onKeyDown={onKeyDown}
          onScroll={onScroll}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
        >
          {storyCards.map((story, index) => (
            <article
              className={`brand-story__slide${index === current ? ' is-active' : ''}`}
              key={story.id}
              aria-label={`${index + 1}/5 — ${story.theme}`}
              aria-current={index === current ? 'true' : undefined}
              onClick={() => !drag.current.moved && index !== current && goTo(index)}
            >
              <img src={story.image} alt={story.alt} width="2000" height="2500" loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} draggable="false" />
            </article>
          ))}
        </div>

        <div className="brand-story__navigation">
          <div className="brand-story__dots" aria-label="카드 진행 상태">
            {storyCards.map((story, index) => (
              <button key={story.id} type="button" className={index === current ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`${index + 1}번 카드 ${story.theme} 보기`} aria-current={index === current ? 'step' : undefined} />
            ))}
          </div>
          <div className="brand-story__arrows">
            <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="이전 카드 보기">←</button>
            <button type="button" onClick={() => goTo(current + 1)} disabled={current === storyCards.length - 1} aria-label="다음 카드 보기">→</button>
          </div>
        </div>

        <div className={`brand-story__consult${current === 4 ? ' is-visible' : ''}`} aria-hidden={current !== 4}>
          <SiteLink href="#/consult" tabIndex={current === 4 ? 0 : -1}>수강상담 신청하기 <span aria-hidden="true">→</span></SiteLink>
        </div>

      </div>
    </section>
  )
}
