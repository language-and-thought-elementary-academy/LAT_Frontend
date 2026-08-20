import { useCallback, useEffect, useRef, useState } from 'react'
import SiteLink from '../common/SiteLink'

const stories = [
  { number: '01', title: '교과 어휘', headline: '교과서의 모든 어휘, 기초가 다릅니다.', image: '/assets/brand-story/card-01-vocabulary.webp' },
  { number: '02', title: '독해', headline: '읽는 것을 넘어, 이해까지 연결합니다.', image: '/assets/brand-story/card-02-reading.webp' },
  { number: '03', title: '독서와 사유', headline: '다양한 글을 읽고, 생각의 깊이를 넓힙니다.', image: '/assets/brand-story/card-03-thinking.webp' },
  { number: '04', title: '말하기와 글쓰기', headline: '생각을 말하고, 글로 완성합니다.', image: '/assets/brand-story/card-04-expression.webp' },
  { number: '05', title: '언어와 사유', headline: '언어와 사유에서 생각하는 힘을 키워주세요.', image: '/assets/brand-story/card-05-consultation.webp' },
]

export default function BrandStoryCarousel() {
  const trackRef = useRef(null)
  const settleTimer = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })
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
    if (event.pointerType !== 'mouse' || event.button !== 0) return
    const track = trackRef.current
    drag.current = { active: true, startX: event.clientX, scrollLeft: track.scrollLeft }
    setDragging(true)
    track.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event) => {
    if (!drag.current.active) return
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
      goTo(Math.min(stories.length - 1, current + 1))
    }
  }

  return (
    <section className="brand-story" aria-labelledby="brand-story-heading">
      <div className="brand-story__inner">
        <div className="brand-story__heading-row">
          <div>
            <p className="brand-story__eyebrow">BRAND STORY</p>
            <h2 id="brand-story-heading">읽기에서 표현까지,<br />생각하는 힘의 여정</h2>
          </div>
          <p className="brand-story__count" aria-hidden="true"><strong>{String(current + 1).padStart(2, '0')}</strong> / 05</p>
        </div>

        <p className="sr-only" aria-live="polite">{current + 1}/5 {stories[current].title}</p>
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
          {stories.map((story, index) => (
            <article
              className={`brand-story__slide${index === current ? ' is-active' : ''}`}
              key={story.number}
              aria-label={`${index + 1}/5 ${story.title}. ${story.headline}`}
              aria-current={index === current ? 'true' : undefined}
              onClick={() => index !== current && goTo(index)}
            >
              <img src={story.image} alt={`${story.number} ${story.title} — ${story.headline}`} width="1024" height="307" draggable="false" />
            </article>
          ))}
        </div>

        <div className="brand-story__navigation">
          <div className="brand-story__dots" aria-label="카드 진행 상태">
            {stories.map((story, index) => (
              <button key={story.number} type="button" className={index === current ? 'is-active' : ''} onClick={() => goTo(index)} aria-label={`${index + 1}번 카드 ${story.title} 보기`} aria-current={index === current ? 'step' : undefined} />
            ))}
          </div>
          <div className="brand-story__arrows">
            <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="이전 카드 보기">←</button>
            <button type="button" onClick={() => goTo(current + 1)} disabled={current === stories.length - 1} aria-label="다음 카드 보기">→</button>
          </div>
        </div>

        <div className={`brand-story__consult${current === 4 ? ' is-visible' : ''}`} aria-hidden={current !== 4}>
          <SiteLink href="#/consult" tabIndex={current === 4 ? 0 : -1}>수강상담 신청하기 <span aria-hidden="true">→</span></SiteLink>
        </div>

        <p className="brand-story__closing">교과서의 한 단어에서, 자기 생각을 쓰는 힘까지. <span>어휘 → 독해 → 독서 → 사유 → 말하기 → 글쓰기</span></p>
      </div>
    </section>
  )
}
