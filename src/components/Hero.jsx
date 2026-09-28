import { Github, Linkedin } from 'lucide-react'
import { site } from '../data/site'
export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-14 items-center w-full">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">Full-Stack Developer · AI · Web</p>
          <h1 className="font-display text-[2.6rem] sm:text-6xl xl:text-7xl leading-[1.05] tracking-tight">I turn ideas into products people can actually use. <em className="text-accent not-italic"></em></h1>
          <p className="mt-8 max-w-xl text-paper/70 text-lg leading-relaxed">I'm Siddhant Tilak, a full-stack developer building modern web applications with React, Node.js, MongoDB, and AI. I enjoy taking an idea from a blank screen to a polished, functional product.</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-solid">View Projects</a>
            <a href="#contact" className="btn">Let's Connect</a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-paper/70">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent"><Github size={20} /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent"><Linkedin size={20} /></a>
            <span className="flex items-center gap-2 text-sm font-mono"><span className="w-2 h-2 rounded-full bg-emerald-400" />Open to opportunities</span>
          </div>
        </div>
        <div className="lg:col-span-5" aria-hidden="true">
          <div className="border border-line bg-white/[0.02] font-mono text-sm">
            <div className="flex gap-1.5 px-4 py-3 border-b border-line"><i className="w-2.5 h-2.5 rounded-full bg-paper/20" /><i className="w-2.5 h-2.5 rounded-full bg-paper/20" /><i className="w-2.5 h-2.5 rounded-full bg-paper/20" /><span className="ml-3 text-xs text-paper/40">developer.js</span></div>
            <pre className="p-5 overflow-x-auto leading-7 text-paper/80"><span className="text-accent">const</span> developer = {'{'}{'\n'}  name: <span className="text-emerald-300/80">"Siddhant"</span>,{'\n'}  stack: [<span className="text-emerald-300/80">"React"</span>, <span className="text-emerald-300/80">"Node"</span>, <span className="text-emerald-300/80">"MongoDB"</span>,...],{'\n'}  focus: <span className="text-emerald-300/80">"AI-powered products"</span>{'\n'}{'}'}<span className="inline-block w-2 h-4 bg-accent align-middle ml-1 animate-pulse" /></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
