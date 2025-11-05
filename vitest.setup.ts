import '@testing-library/jest-dom/vitest';

if (!window.matchMedia) {
  const createMatchMedia = (query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => void 0,
    removeEventListener: () => void 0,
    addListener: () => void 0,
    removeListener: () => void 0,
    dispatchEvent: () => false,
  });

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: createMatchMedia,
  });
}
