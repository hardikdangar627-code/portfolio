import Reveal from './Reveal'
import { TOOLS } from '../data'
export default function Toolkit() {
  const row = [...TOOLS, ...TOOLS]
  return (
    <section id="toolkit" className="scroll-mt-16 border-y border-white/5 bg-[#0d0d0f] py-24 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <Reveal as="h2" className="silver font-display text-[clamp(1.3rem,5.4vw,4rem)] font-extrabold leading-tight">POWERED BY AI.<br />DRIVEN BY IMAGINATION.</Reveal>
        <Reveal as="p" delay={0.1} className="mt-5 max-w-xl text-zinc-400">I combine different AI tools and creative workflows to transform concepts into engaging visual experiences.</Reveal>
      </div>
      <div className="marquee-wrap mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <ul className="marquee flex w-max gap-5">
          {row.map((t, i) => (
            <li key={i} aria-hidden={i >= TOOLS.length} className="flex items-center gap-4 rounded-full border border-white/10 bg-white/[0.02] px-8 py-5 font-display text-xl font-semibold text-zinc-300 transition hover:border-white/40 hover:text-white md:text-2xl">
              <span className="h-2 w-2 rounded-full bg-zinc-500" />{t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
