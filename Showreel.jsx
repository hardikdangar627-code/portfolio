import Reveal from './Reveal'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, X, Maximize2 } from 'lucide-react'
import { GROUPS } from '../data'

function Card({ v, i, onOpen }) {
  const ref = useRef(null)
  const start = () => ref.current?.play().catch(() => {})
  const stop = () => { const el = ref.current; if (el) { el.pause(); el.currentTime = 0 } }
  return (
    <motion.button
      type="button" onClick={() => onOpen(v)} onMouseEnter={start} onMouseLeave={stop} onFocus={start} onBlur={stop}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      aria-label={`Play ${v.title}`}
      className="group relative block w-full max-w-full overflow-hidden rounded-2xl bg-zinc-900 text-left ring-1 ring-white/10 transition duration-500 [aspect-ratio:var(--r)] hover:ring-white/40 sm:w-auto sm:h-[400px] lg:h-full lg:[aspect-ratio:auto] lg:[flex:var(--r)_1_0%]"
      style={{ '--r': v.ratio }}
    >
      <img src={`/posters/${v.id}.jpg`} alt={v.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <video ref={ref} src={`/videos/${v.id}.mp4`} poster={`/posters/${v.id}.jpg`} preload="none" muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <span className="absolute right-4 top-4 rounded-full bg-black/55 px-2.5 py-1 text-xs backdrop-blur">{v.dur}</span>
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black transition duration-300 group-hover:scale-110"><Play size={22} fill="currentColor" /></span>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h4 className="font-display text-xl font-bold">{v.title}</h4>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-300">{v.desc}</p>
      </div>
    </motion.button>
  )
}

function Lightbox({ v, onClose }) {
  const vid = useRef(null)
  useEffect(() => {
    const key = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', key)
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = prev }
  }, [onClose])
  const full = () => { const el = vid.current; (el.requestFullscreen || el.webkitEnterFullscreen || el.webkitRequestFullscreen)?.call(el) }
  const tall = v.ratio < 1
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/92 p-4 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={v.title}>
      <div className="absolute right-4 top-4 flex gap-2">
        <button onClick={(e) => { e.stopPropagation(); full() }} className="rounded-full bg-white/10 p-3 hover:bg-white/20" aria-label="Fullscreen"><Maximize2 size={18} /></button>
        <button onClick={onClose} className="rounded-full bg-white/10 p-3 hover:bg-white/20" aria-label="Close"><X size={18} /></button>
      </div>
      <motion.div initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: v.ratio, height: tall ? '78vh' : 'auto', width: tall ? 'auto' : 'min(94vw, 1100px)', maxWidth: '94vw', maxHeight: '78vh' }} className="overflow-hidden rounded-xl bg-black">
        <video ref={vid} src={`/videos/${v.id}.mp4`} poster={`/posters/${v.id}.jpg`} controls autoPlay playsInline loop className="h-full w-full object-contain" />
      </motion.div>
      <div className="mt-4 max-w-xl text-center" onClick={(e) => e.stopPropagation()}>
        <h4 className="font-display text-xl font-bold">{v.title}</h4>
        <p className="mt-1 text-sm text-zinc-400">{v.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Showreel() {
  const [active, setActive] = useState(null)
  return (
    <section id="work" className="mx-auto max-w-[1440px] scroll-mt-16 px-5 py-24 md:px-8 md:py-32">
      <Reveal as="h2" className="silver font-display text-[clamp(1.4rem,6vw,5.5rem)] font-extrabold leading-[0.95]">IMAGINATION,<br />VISUALIZED.</Reveal>
      <Reveal as="p" delay={0.1} className="mt-6 max-w-xl text-lg text-zinc-400">Every visual begins with an idea. Here's how I transform ideas into cinematic product advertisements.</Reveal>
      {GROUPS.map((g) => (
        <div key={g.id} className="mt-16">
          <h3 className="mb-6 border-b border-white/10 pb-3 font-display text-sm font-semibold tracking-[0.25em] text-zinc-400">{g.title.toUpperCase()}</h3>
          {g.note && <p className="-mt-3 mb-6 text-sm text-zinc-500">{g.note}</p>}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:flex-wrap sm:items-stretch lg:flex-nowrap lg:[aspect-ratio:var(--sum)] lg:[max-width:calc(var(--sum)*var(--cap))]" style={{ '--sum': g.videos.reduce((a, v) => a + v.ratio, 0) + 0.12, '--cap': g.cap || '3000px' }}>
            {g.videos.map((v, i) => <Card key={v.id} v={v} i={i} onOpen={setActive} />)}
          </div>
        </div>
      ))}
      <AnimatePresence>{active && <Lightbox v={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}
