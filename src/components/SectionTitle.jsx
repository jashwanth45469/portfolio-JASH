export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div style={{ animation: 'fadeInUp 0.6s ease' }} className="mb-10">
      {eyebrow && <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 max-w-2xl text-base text-slate-300">{description}</p>}
    </div>
  );
}
