import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { CONTACT } from '../data'
import Reveal from './Reveal'

const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
const WhatsAppIcon = ({ size = 28 }) => <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true"><path d={WA_PATH} /></svg>

const ICONS = [
  { label: 'WhatsApp', href: CONTACT.whatsapp, icon: <WhatsAppIcon />, ext: true, hover: 'group-hover:border-[#25D366] group-hover:bg-[#25D366]', pulse: true },
  { label: 'Call', href: `tel:${CONTACT.phoneTel}`, icon: <Phone size={26} />, hover: 'group-hover:border-white group-hover:bg-white group-hover:text-black' },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: <Mail size={26} />, hover: 'group-hover:border-white group-hover:bg-white group-hover:text-black' },
]

export default function Contact() {
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Idea for a visual project')}`
  const row = 'group flex items-center justify-between gap-4 border-b border-white/10 py-6 transition hover:border-white/50'
  return (
    <section id="contact" className="scroll-mt-16 border-t border-white/5 bg-[#0d0d0f]">
      <div className="mx-auto max-w-[1440px] px-5 py-24 md:px-8 md:py-32">
        <Reveal as="h2" className="silver font-display text-[clamp(1.4rem,6vw,5rem)] font-extrabold leading-[1.02]">HAVE AN IDEA?<br />LET'S VISUALIZE IT.</Reveal>
        <Reveal as="p" delay={0.1} className="mt-6 max-w-xl text-lg text-zinc-400">Have a product, concept or imagination you'd love to bring to life? Let's create something unique.</Reveal>
        <div className="mt-12 max-w-2xl">
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className={row}>
            <span className="flex items-center gap-4"><WhatsAppIcon size={24} /><span><span className="block text-sm text-zinc-500">WhatsApp</span><span className="font-display text-lg font-semibold sm:text-2xl">{CONTACT.phoneDisplay}</span></span></span>
            <span className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-white">Chat now</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className={row}>
            <span className="flex min-w-0 items-center gap-4"><Mail aria-hidden /><span className="min-w-0"><span className="block text-sm text-zinc-500">Email</span><span className="break-all font-display text-base font-semibold sm:text-2xl">{CONTACT.email}</span></span></span>
            <span className="text-zinc-500 transition group-hover:translate-x-1 group-hover:text-white">Write</span>
          </a>
        </div>
        <a href={mail} className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wider text-black transition hover:bg-zinc-200"><Send size={16} /> SEND ME YOUR IDEA</a>

        <div className="mt-20 flex flex-wrap gap-8">
          {ICONS.map((it, i) => (
            <motion.a key={it.label} href={it.href} aria-label={it.label} {...(it.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12, type: 'spring', stiffness: 200, damping: 14 }} whileHover={{ y: -6 }}
              className="group flex flex-col items-center gap-3 text-sm text-zinc-400 transition hover:text-white">
              <span className={`relative flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition duration-300 group-hover:scale-110 ${it.hover}`}>
                {it.pulse && <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/30 motion-reduce:animate-none" aria-hidden />}
                <span className="relative">{it.icon}</span>
              </span>
              {it.label}
            </motion.a>
          ))}
        </div>

        <Reveal as="p" className="mt-20 font-display text-[clamp(1.1rem,3vw,2rem)] font-semibold tracking-wide text-zinc-400">I DON'T JUST CREATE VIDEOS. <span className="text-white">I VISUALIZE IMAGINATION.</span></Reveal>
        <p className="mt-8 text-sm text-zinc-600">© 2026 Hardik Dangar</p>
      </div>
    </section>
  )
}
