import Reveal from './Reveal.jsx';

export default function SectionHeading({ id, title, lead }) {
  return (
    <Reveal className="max-w-2xl">
      <h2 id={id} className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-mist">{lead}</p>}
    </Reveal>
  );
}
