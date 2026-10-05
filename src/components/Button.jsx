import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const baseClass = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400/60';
  const variants = {
    primary: 'bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-900/40 hover:-translate-y-0.5 hover:shadow-sky-500/30',
    secondary: 'border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 hover:border-sky-300/30',
    ghost: 'text-sky-300 hover:text-white hover:bg-white/5'
  };

  const classes = `${baseClass} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
