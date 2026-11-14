import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

export default function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 70, damping: 16 }), sy = useSpring(my, { stiffness: 70, damping: 16 })
  const rotY = useTransform(sx, [-0.5, 0.5], [-9, 9])
  const rotX = useTransform(sy, [-0.5, 0.5], [7, -7])
  const gx = useTransform(sx, [-0.5, 0.5], [-30, 30])
  const gy = useTransform(sy, [-0.5, 0.5], [-20, 20])
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const rise = (d) => ({ initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] } })
  return (
    <section id="top" onMouseMove={move} className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(180,186,200,0.13),transparent_60%)]" />
      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 md:px-8 lg:grid-cols-12">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <motion.h1 {...rise(0.1)} className="silver font-display text-[11.5vw] md:text-[9vw] lg:text-[min(7.2vw,6.8rem)] font-extrabold leading-[0.9] tracking-tight">HARDIK<br />DANGAR</motion.h1>
          <motion.p {...rise(0.25)} className="mt-6 flex items-center gap-3 font-display text-sm font-semibold tracking-[0.22em] text-zinc-300 sm:text-lg sm:tracking-[0.32em] md:text-xl"><Sparkles size={18} aria-hidden style={{ animation: 'spin-slow 9s linear infinite' }} /> AI VISUAL CREATOR</motion.p>
          <motion.p {...rise(0.4)} className="mt-8 max-w-xl font-display text-2xl font-semibold leading-snug text-white md:text-3xl">“I TURN IMAGINATION INTO VISUAL EXPERIENCES.”</motion.p>
          <motion.p {...rise(0.55)} className="mt-5 max-w-lg text-zinc-400">From a simple idea to a cinematic visual. I use AI-powered creativity to bring imagination to life.</motion.p>
          <motion.div {...rise(0.7)} className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold tracking-wider text-black transition hover:bg-zinc-200">EXPLORE MY WORK <ArrowDown size={16} className="transition group-hover:translate-y-0.5" /></a>
            <a href="#contact" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold tracking-wider text-white transition hover:border-white hover:bg-white/5">LET'S CREATE SOMETHING</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="order-1 mx-auto w-full max-w-[420px] lg:order-2 lg:col-span-5 lg:max-w-none lg:scale-110" style={{ perspective: 1000 }}>
          <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }} className="relative">
            <motion.div style={{ x: gx, y: gy }} className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2" aria-hidden>
              <div className="spin-slow absolute inset-0 rounded-full border border-white/10" style={{ animation: 'spin-slow 40s linear infinite', background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.18), transparent 40%)', maskImage: 'radial-gradient(circle, transparent 62%, #000 63%)', WebkitMaskImage: 'radial-gradient(circle, transparent 62%, #000 63%)' }} />
              <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(200,205,215,0.18),transparent_70%)] blur-2xl" />
            </motion.div>
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} style={{ transformStyle: 'preserve-3d' }}>
              <img src="/img/hardik.webp" alt="Hardik Dangar, AI Visual Creator" width="1222" height="1287" fetchpriority="high" className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]" style={{ transform: 'translateZ(40px)' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
