import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stomatology from './pages/Stomatology';
import Dermatology from './pages/Dermatology';
import Estetika from './pages/Estetika';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ComingSoon from './pages/ComingSoon';

const App: React.FC = () => (
  <Router>
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
          {/* Add more routes as needed */}
        </Routes>
      </main>
      {/* <footer className="bg-gray-800 text-[#F7DD72] py-4 text-center">
        © 2025 Dardanica Clinic
      </footer> */}
    </div>
  </Router>
);

export default App;