const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/jashwanth45469',
    icon: 'GH'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jashwanth-kumar-757229371/',
    icon: 'in'
  }
];

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? 'justify-center' : ''}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-slate-200 transition-all duration-200 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-white"
          aria-label={link.label}
          title={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
