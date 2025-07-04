import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Stomatology from './pages/Stomatology';
import Dermatology from './pages/Dermatology';
import Estetika from './pages/Estetika';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ComingSoon from './pages/ComingSoon';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dermatologji" element={<Dermatology />} />
          <Route path="/stomatologji" element={<Stomatology />} />
          <Route path="/estetika" element={<Estetika />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="
        fixed bottom-6 right-6
        bg-gradient-to-r from-[#FEFE98] to-[#D3A54B]
        text-[#0B2944] p-3 sm:p-3 rounded-full shadow-lg
        hover:scale-110 transition-transform
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D3A54B]
        z-50
      "
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

    </div>
  </Router>
);

export default App;