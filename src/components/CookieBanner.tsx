import { useEffect, useState } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

const CookieBanner = () => {
  const { isAccepted, accept } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isAccepted) {
      setIsVisible(true);
    }
  }, [isAccepted]);

  if (!isVisible || isAccepted) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <div className="max-w-3xl rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700 dark:text-slate-200">
            We use cookies to enhance your browsing experience, serve personalized content and analyze our traffic. By clicking
            “Accept cookies” you consent to our use of cookies.
          </p>
          <button
            type="button"
            onClick={accept}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Accept cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
