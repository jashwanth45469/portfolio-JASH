import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="text-lg font-bold tracking-wide text-white">
          Jashwanth<span className="text-sky-400">.</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xl">☰</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050816] md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm ${isActive ? 'bg-white/10 text-white' : 'text-slate-300'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
