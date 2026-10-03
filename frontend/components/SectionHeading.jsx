import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-relaxed text-zinc-600">{description}</p>
      )}
    </Reveal>
  );
}
