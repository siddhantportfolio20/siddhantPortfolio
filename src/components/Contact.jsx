import Reveal from './Reveal'
import { site } from '../data/site'
export default function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-line">
      <Reveal className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-5xl md:text-7xl leading-tight max-w-3xl">Have something worth building?</h2>
        <p className="mt-8 max-w-xl text-paper/70 text-lg leading-relaxed">I'm open to opportunities where I can work on meaningful products, solve real engineering problems and continue growing as a full-stack developer.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a className="btn btn-solid" href={`mailto:${site.email}`}>Email Me</a>
          <a className="btn" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="mt-10 font-mono text-sm text-paper/60 break-words">{site.email} · {site.phone}</p>
      </Reveal>
    </section>
  )
}
