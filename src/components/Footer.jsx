import { site } from '../data/site'
export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-6 text-sm text-paper/60">
        <p className="font-display text-lg text-paper">Siddhant Tilak</p>
        <ul className="flex gap-6">
          <li><a className="hover:text-accent" href={site.github} target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a className="hover:text-accent" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-accent" href={`mailto:${site.email}`}>Email</a></li>
        </ul>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-wrap justify-between gap-2 font-mono text-xs text-paper/40">
        <span>© 2026 Siddhant Tilak</span><span>Built with React &amp; curiosity.</span>
      </div>
    </footer>
  )
}
