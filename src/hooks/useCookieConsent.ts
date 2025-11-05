import { useCallback, useEffect, useState } from 'react';

type ConsentState = 'granted' | 'unknown';

const STORAGE_KEY = 'myapp-cookie-consent';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<ConsentState>('unknown');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    if (stored === 'granted') {
      setConsent('granted');
    }
  }, []);

  const accept = useCallback(() => {
    setConsent('granted');
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, 'granted');
    }
  }, []);

  return { consent, accept, isAccepted: consent === 'granted' };
};
