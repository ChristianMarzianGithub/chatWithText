import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      className={clsx(
        'relative inline-flex h-9 w-16 shrink-0 cursor-pointer rounded-full border border-slate-200 bg-slate-100 px-1 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-800'
      )}
    >
      <span className="sr-only">Toggle dark mode</span>
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none absolute inset-y-1 flex w-7 items-center justify-center rounded-full bg-white shadow-md ring-0 transition-transform duration-300 dark:bg-slate-700',
          isDark ? 'translate-x-7' : 'translate-x-0'
        )}
      >
        {isDark ? (
          <MoonIcon className="h-4 w-4 text-slate-100" />
        ) : (
          <SunIcon className="h-4 w-4 text-amber-500" />
        )}
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
