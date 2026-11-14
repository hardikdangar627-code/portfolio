import Reveal from './Reveal'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STEPS } from '../data'
gsap.registerPlugin(ScrollTrigger)

export default function Approach() {
  const root = useRef(null)
  useLayoutEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.step').forEach((el) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 82%' } })
        tl.from(el.querySelectorAll('.ch'), { yPercent: 115, duration: 0.8, ease: 'power4.out', stagger: 0.04 })
          .from(el.querySelector('.num'), { opacity: 0, x: -30, duration: 0.8, ease: 'power3.out' }, 0)
          .from(el.querySelector('.desc'), { opacity: 0, y: 20, duration: 0.7, ease: 'power3.out' }, 0.3)
      })
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section id="approach" ref={root} className="mx-auto max-w-[1440px] scroll-mt-16 px-5 py-24 md:px-8 md:py-32">
      <Reveal as="h2" className="silver font-display text-[clamp(1.5rem,6.5vw,4rem)] font-extrabold">MY CREATIVE APPROACH</Reveal>
      <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
        {STEPS.map((s) => (
          <div key={s.n} className="step grid items-center gap-3 py-9 md:grid-cols-12 md:gap-6 md:py-12">
            <span className="num outline-text font-display text-5xl font-extrabold md:col-span-2 md:text-7xl">{s.n}</span>
            <h3 className="font-display text-3xl font-extrabold tracking-wide md:col-span-5 md:text-5xl" aria-label={s.t}>
              <span className="block overflow-hidden pb-1" aria-hidden>{[...s.t].map((c, i) => <span key={i} className="ch inline-block">{c}</span>)}</span>
            </h3>
            <p className="desc max-w-md text-zinc-400 md:col-span-5">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
