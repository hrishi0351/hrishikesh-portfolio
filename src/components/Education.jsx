import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="mx-auto max-w-6xl px-5 py-24 md:px-10">
      <SectionHeading id="education-title" title="Education" />

      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <li key={item.degree}>
            <Reveal delay={i * 0.1} className="h-full">
              <article className="glass flex h-full gap-5 p-7">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-electric/15 text-glow">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-glow">{item.period}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.degree}</h3>
                  <p className="mt-1 text-mist">{item.school}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
