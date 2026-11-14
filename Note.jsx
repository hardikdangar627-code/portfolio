import { motion } from 'framer-motion'
export default function Note() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-8 md:pb-32">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-3xl p-px [background:linear-gradient(135deg,rgba(255,255,255,0.5),rgba(255,255,255,0.04)_40%,rgba(255,255,255,0.25))]">
        <div className="relative rounded-[calc(1.5rem-1px)] bg-[#0c0c0e] px-6 py-14 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <h2 className="silver relative font-display text-[clamp(1.4rem,6vw,4.4rem)] font-extrabold leading-[1]">IMAGINATION HAS NO LIMITS.<br />RESOURCES DO.</h2>
          <div className="relative mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-zinc-300">
            <p>Currently, I create using the AI tools and resources available to me. With limited resources and access to certain premium features, I continue to explore how far creativity can go.</p>
            <p>With access to advanced premium tools and plans such as Higgsfield Pro and Kling AI Pro, I can explore even more advanced workflows and push my video creations to another level.</p>
            <p className="font-display text-xl font-semibold text-white">I believe creativity should never be limited by the tools available.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
