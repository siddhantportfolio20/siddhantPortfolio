import Reveal from './Reveal'
import { certifications } from '../data/site'
export default function Certifications() {
  return (
    <section className="py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-10">
        <h2 className="md:col-span-4 font-display text-4xl">Certifications</h2>
        <Reveal as="ul" className="md:col-span-8">
          {certifications.map(c => (
            <li key={c.title} className="flex flex-wrap justify-between gap-2 py-4 border-b border-line first:border-t">
              <span>{c.title}</span><span className="font-mono text-sm text-paper/50">{c.issuer}</span>
            </li>))}
        </Reveal>
      </div>
    </section>
  )
}
