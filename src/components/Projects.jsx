import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { projects } from '../data/portfolio.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

// Card that tilts toward the pointer and shows a light spot under it.
function ProjectCard({ project, delay }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 18 });

  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx - 0.5);
    py.set(ny - 0.5);
    ref.current.style.setProperty('--mx', `${nx * 100}%`);
    ref.current.style.setProperty('--my', `${ny * 100}%`);
  };

  const handleLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <Reveal delay={delay} className="h-full">
      <motion.article
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ rotateX: reduce ? 0 : rotateX, rotateY: reduce ? 0 : rotateY, transformPerspective: 900 }}
        className="spotlight glass h-full p-7 transition-colors duration-300 hover:border-electric/40"
      >
        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        <p className="mt-1 text-sm text-glow">{project.subtitle}</p>
        <p className="mt-5 leading-relaxed text-mist">{project.description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              {tag}
            </li>
          ))}
        </ul>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="mx-auto max-w-6xl px-5 py-24 md:px-10">
      <SectionHeading
        id="projects-title"
        title="Projects"
        lead="Monitoring, automation and workflow applications I have built."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
