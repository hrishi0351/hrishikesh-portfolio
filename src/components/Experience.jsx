import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { experience } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  const timeline = useRef(null);
  // The glowing line draws down the timeline as the section scrolls into view.
  const { scrollYProgress } = useScroll({ target: timeline, offset: ['start 75%', 'end 75%'] });

  return (
    <section id="experience" aria-labelledby="experience-title" className="mx-auto max-w-6xl px-5 py-24 md:px-10">
      <SectionHeading
        id="experience-title"
        title="Experience"
        lead="Two roles at Protovec Technologies, from intern to developer."
      />

      <ol ref={timeline} className="relative mt-14 max-w-4xl pl-8">
        <span aria-hidden="true" className="absolute -left-px top-0 h-full w-px bg-white/10" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-electric to-glow"
        />

        {experience.map((job) => (
          <li key={job.role + job.period} className="relative pb-14 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[2.375rem] top-2 h-3 w-3 rounded-full bg-electric shadow-glow"
            />
            <Reveal>
              <div className="glass p-6 sm:p-7">
                <p className="text-sm text-glow">{job.period}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{job.role}</h3>
                <p className="mt-1 text-mist">
                  {job.company}, {job.location}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-slate-300">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
