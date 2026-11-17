import { lazy, Suspense } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { Download, MapPin } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary.jsx';
import { profile } from '../data/portfolio.js';

const HeroScene = lazy(() => import('./HeroScene.jsx'));

function SceneFallback() {
  return (
    <div aria-hidden="true" className="relative h-full w-full">
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/25 blur-3xl md:h-[28rem] md:w-[28rem]" />
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 20 });
  const y = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 20 });

  const handlePointerMove = (e) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-32 md:px-10"
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-40 md:left-1/2 md:opacity-100">
        <ErrorBoundary fallback={<SceneFallback />}>
          <Suspense fallback={<SceneFallback />}>
            <HeroScene reduce={Boolean(reduce)} />
          </Suspense>
        </ErrorBoundary>
      </div>

      <motion.div style={{ x, y }} className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-mist backdrop-blur">
            <MapPin size={15} aria-hidden="true" />
            {profile.location}
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>

          <p className="mt-6 font-display text-2xl text-glow sm:text-3xl">{profile.title}</p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-mist">{profile.subtitle}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href={profile.resumePath} download className="btn-ghost">
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
