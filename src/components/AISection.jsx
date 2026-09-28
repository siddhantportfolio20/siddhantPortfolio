import Reveal from './Reveal'
const flow = ['User', 'React', 'API', 'AI Model', 'Useful Product']
export default function AISection() {
  return (
    <section className="py-28 border-t border-line">
      <Reveal className="max-w-6xl mx-auto px-6">
        <p className="eyebrow mb-3">Building with AI</p>
        <h2 className="font-display text-4xl max-w-2xl">Traditional full-stack engineering, extended with AI.</h2>
        <p className="mt-6 max-w-2xl text-paper/70 leading-relaxed">I'm interested in combining solid full-stack fundamentals with AI capabilities — AI API integration, generative AI, RAG and AI-assisted applications that power intelligent product workflows. It's an area I'm actively building and learning in, and I've applied it in projects like CareXpertAI.</p>
        <ol className="mt-12 flex flex-wrap items-center gap-3 font-mono text-sm">
          {flow.map((f, i) => (<li key={f} className="flex items-center gap-3">
            <span className={`border px-4 py-2 ${i === flow.length - 1 ? 'border-accent text-accent' : 'border-line'}`}>{f}</span>
            {i < flow.length - 1 && <span className="text-paper/30" aria-hidden="true">→</span>}
          </li>))}
        </ol>
      </Reveal>
    </section>
  )
}
