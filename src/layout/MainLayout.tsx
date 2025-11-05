import { Outlet } from 'react-router-dom';
import CookieBanner from '../components/CookieBanner';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 transition-colors duration-300 dark:bg-slate-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-24">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default MainLayout;
