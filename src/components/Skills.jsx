import { motion } from 'framer-motion';
import { Atom, Braces, Cpu, Database, GitBranch, Gauge, HardDrive, Plug, Radio, Route, Server, ShieldCheck } from 'lucide-react';
import { skills } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

const ICONS = { Atom, Braces, Cpu, Database, GitBranch, Gauge, HardDrive, Plug, Radio, Route, Server, ShieldCheck };

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl px-5 py-24 md:px-10">
      <SectionHeading
        id="skills-title"
        title="Skills"
        lead="The tools I use to build, connect and secure applications."
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, i) => {
          const Icon = ICONS[skill.icon];
          return (
            <li key={skill.name}>
              <Reveal delay={(i % 4) * 0.06} className="h-full">
                <article className="glass group relative h-full overflow-hidden p-5 transition-colors duration-300 hover:border-electric/40">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-electric/15 text-glow">
                      {Icon && <Icon size={20} aria-hidden="true" />}
                    </span>
                    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{skill.detail}</p>
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-electric via-glow to-transparent"
                  />
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
