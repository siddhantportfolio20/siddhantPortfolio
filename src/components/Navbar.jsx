import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site'
const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setScrolled(window.scrollY > 24); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-ink/85 backdrop-blur border-b border-line' : 'border-b border-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main">
        
        <a
  href="#top"
  className="flex items-center gap-3 group"
>
  <img
    src="/siddhant.jpg"
    alt="Siddhant Tilak"
    className="w-9 h-9 rounded-full object-cover border border-line group-hover:border-accent transition"
  />

  <span className="font-mono text-sm tracking-widest">
    SIDDHANT TILAK
  </span>
</a>
        <a href="#top" className="font-mono text-sm tracking-widest">SIDDHANT TILAK</a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-paper/70">
          {links.map(l => <li key={l}><a className="hover:text-accent transition" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
          <li><a href={site.resume} target="_blank" rel="noreferrer" className="border border-line px-3 py-1.5 hover:border-accent hover:text-accent transition">Resume</a></li>
        </ul>
        <button className="md:hidden p-2 -mr-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <ul className="md:hidden px-6 pb-6 flex flex-col text-lg">
        {[...links, 'Resume'].map(l => <li key={l} className="border-t border-line"><a className="block py-4" onClick={() => setOpen(false)} href={l === 'Resume' ? site.resume : `#${l.toLowerCase()}`}>{l}</a></li>)}
      </ul>}
    </header>
  )
}
