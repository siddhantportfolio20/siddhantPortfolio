import Reveal from './Reveal'
import { experience } from '../data/experience'
export default function Experience() {
  return (
    <section id="experience" className="py-28 border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-4xl mb-14">Experience</h2>
        <ol className="border-l border-line ml-1">
          {experience.map(x => (
            <Reveal as="li" key={x.company} className="relative pl-8 pb-14 last:pb-0 grid md:grid-cols-12 gap-4">
              <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent" />
              <p className="md:col-span-3 font-mono text-xs text-paper/50 pt-1.5">{x.period}</p>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl">{x.company}</h3>
                <p className="text-accent text-sm mb-4">{x.role}</p>
                <ul className="space-y-2 text-paper/70 max-w-2xl">{x.points.map(p => <li key={p}>— {p}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
