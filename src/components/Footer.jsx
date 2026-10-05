import { Link } from 'react-router-dom';

const github = 'https://github.com/jashwanth45469';
const linkedin = 'https://www.linkedin.com/in/jashwanth-kumar-757229371/';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 text-center text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p>© 2026 Jashwanth Kumar. All rights reserved.</p>

        <div className="flex items-center justify-center gap-4 sm:justify-end">
          <Link to="/" className="transition hover:text-white">Home</Link>
          <a href={github} target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
