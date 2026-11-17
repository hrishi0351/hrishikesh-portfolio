import { profile } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-mist">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite, Three.js and Framer Motion.
      </p>
    </footer>
  );
}
