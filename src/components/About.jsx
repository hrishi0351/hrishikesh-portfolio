import { Check } from 'lucide-react';
import { about } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-5 py-24 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <h2 id="about-title" className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            About me
          </h2>
          <p className="mt-6 text-2xl leading-snug text-white">{about.statement}</p>
          <p className="mt-6 leading-relaxed text-mist">{about.paragraph}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="glass space-y-5 p-7">
            {about.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-slate-200">
                <Check size={20} className="mt-0.5 shrink-0 text-glow" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
