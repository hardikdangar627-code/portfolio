import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = [['Work', '#work'], ['Toolkit', '#toolkit'], ['Approach', '#approach'], ['Contact', '#contact']]
export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-[#0a0a0b]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-display text-lg font-extrabold tracking-wide">HD</a>
        <nav className="hidden gap-9 text-sm text-zinc-400 md:flex" aria-label="Main">
          {links.map(([l, h]) => <a key={h} href={h} className="transition hover:text-white">{l}</a>)}
        </nav>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/5 px-5 pb-4 md:hidden" aria-label="Mobile">
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-zinc-300">{l}</a>)}
        </nav>
      )}
    </header>
  )
}
