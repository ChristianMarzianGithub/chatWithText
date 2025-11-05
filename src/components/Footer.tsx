import { NavLink } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/80 py-10 text-sm text-slate-600 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {year} MyApp. All rights reserved.</p>
        <nav className="flex flex-wrap items-center gap-4">
          <NavLink to="/privacy" className="hover:text-slate-900 dark:hover:text-white">
            Privacy Policy
          </NavLink>
          <NavLink to="/imprint" className="hover:text-slate-900 dark:hover:text-white">
            Imprint
          </NavLink>
          <NavLink to="/contact" className="hover:text-slate-900 dark:hover:text-white">
            Contact
          </NavLink>
          <button
            type="button"
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            Cookie Settings
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
