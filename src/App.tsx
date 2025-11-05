import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import HomePage from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { DarkModeProvider } from './hooks/useDarkMode';

const App = () => {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="imprint" element={<ImprintPage />} />
        </Route>
      </Routes>
    </DarkModeProvider>
  );
};

export default App;
