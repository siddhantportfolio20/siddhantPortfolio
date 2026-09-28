import { Github, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { projects } from '../data/projects'
const host = u => u.replace(/^https?:\/\//, '').replace(/\/$/, '')
function Mockup({ p, big }) {
  return (
    <div className="border border-line bg-white/[0.02] overflow-hidden transition duration-500 group-hover:-translate-y-1 group-hover:border-accent/50">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line">
        <i className="w-2.5 h-2.5 rounded-full bg-paper/20" /><i className="w-2.5 h-2.5 rounded-full bg-paper/20" /><i className="w-2.5 h-2.5 rounded-full bg-paper/20" />
        <span className="ml-3 text-xs font-mono text-paper/40 truncate">{p.live ? host(p.live) : 'github.com/siddhantportfolio20'}</span>
      </div>
      <div className={`p-6 ${big ? 'md:p-10' : ''}`}>
        <p className="eyebrow mb-4">Features</p>
        <ul className={`grid gap-x-6 gap-y-2 text-sm text-paper/70 ${big ? 'sm:grid-cols-2' : ''}`}>{p.features.map(f => <li key={f}>· {f}</li>)}</ul>
      </div>
    </div>
  )
}
function Info({ p, big }) {
  return (
    <div>
      <span className="font-mono text-accent text-sm">{p.id}</span>
      <h3 className={`font-display mt-2 ${big ? 'text-5xl md:text-6xl' : 'text-3xl'}`}>{p.title}</h3>
      <p className="text-paper/90 mt-2">{p.subtitle}</p>
      <p className="text-paper/60 mt-4 max-w-md leading-relaxed">{p.description}</p>
      <ul className="flex flex-wrap gap-2 mt-5">{p.tech.map(t => <li key={t} className="font-mono text-xs border border-line px-2 py-1 text-paper/60">{t}</li>)}</ul>
      <div className="flex flex-wrap gap-3 mt-6">
        <a className="btn" href={p.github} target="_blank" rel="noreferrer"><Github size={16} />GitHub</a>
        {p.live && <a className="btn btn-solid" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16} />Live Demo</a>}
      </div>
    </div>
  )
}
export default function Projects() {
  const [feat, ...rest] = projects
  return (
    <section id="projects" className="py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">Selected Work</p>
        <h2 className="font-display text-4xl mb-16">A few things I've built.</h2>
        <Reveal className="group grid lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-5"><Info p={feat} big /></div>
          <div className="lg:col-span-7"><Mockup p={feat} big /></div>
        </Reveal>
        {rest.map((p, i) => (
          <Reveal key={p.id} className="group grid md:grid-cols-12 gap-10 items-center mb-20 last:mb-0">
            <div className={`md:col-span-6 ${i % 2 ? 'md:order-2' : ''}`}><Info p={p} /></div>
            <div className="md:col-span-6"><Mockup p={p} /></div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
