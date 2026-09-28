import Reveal from './Reveal'
const exploring = ['AI-integrated applications', 'RAG systems', 'Generative AI', 'Scalable backend architecture', 'Advanced React patterns']
export default function About() {
  return (
    <section id="about" className="py-28 border-t border-line">
      <Reveal className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-display text-4xl mb-8">A little about me</h2>
          <img src="/siddhant.jpg" alt="Portrait of Siddhant Tilak" width="400" height="400" loading="lazy" className="w-full max-w-[260px] aspect-square object-cover border border-line grayscale-[30%] hover:grayscale-0 transition duration-500" />
        </div>
        <div className="md:col-span-8 grid sm:grid-cols-5 gap-10">
          <p className="sm:col-span-3 text-paper/75 leading-relaxed text-lg">Software Developer with hands-on experience building full-stack and responsive web applications using JavaScript,
React.js, Node.js, Express.js, and MongoDB. Experienced in developing RESTful APIs, reusable frontend components,
authentication workflows, database-driven applications, and third-party API integrations. Strong foundation in software
development, DSA, and problem-solving, with experience delivering real-world web applications.</p>
          <div className="sm:col-span-2">
            <p className="eyebrow mb-4">Currently exploring</p>
            <ul className="space-y-2 text-sm text-paper/70">{exploring.map(e => <li key={e} className="border-b border-line pb-2">{e}</li>)}</ul>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
