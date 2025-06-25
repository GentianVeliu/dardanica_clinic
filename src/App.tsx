import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

const App: React.FC = () => (
  <Router>
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/dermatologji" element={<Dermatology />} />
          <Route path="/stomatologji" element={<Stomatology />} />
          <Route path="/estetika" element={<Estetika />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} /> */}
          <Route path="/" element={<ComingSoon />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  </Router>
);

export default App;