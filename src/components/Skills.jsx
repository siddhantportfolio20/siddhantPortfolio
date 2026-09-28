import Reveal from './Reveal'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl mb-14">Skills</h2>
        <Reveal className="border-t border-line">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="grid md:grid-cols-12 gap-3 py-5 border-b border-line">
              <h3 className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-accent pt-1">{group}</h3>
              <ul className="md:col-span-9 flex flex-wrap gap-x-6 gap-y-1 text-lg">{items.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
