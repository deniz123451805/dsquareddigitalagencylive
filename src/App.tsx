import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import SEOContentMarketing from './pages/services/SEOContentMarketing';
import PaidAdvertising from './pages/services/PaidAdvertising';
import MarketingAutomation from './pages/services/MarketingAutomation';
import BrandStrategy from './pages/services/BrandStrategy';
import AnalyticsReporting from './pages/services/AnalyticsReporting';

// Scrolls to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="min-h-screen bg-ivory-mist pt-20">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="focus:outline-none" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/social-media" element={<SocialMediaManagement />} />
          <Route path="/services/seo-content" element={<SEOContentMarketing />} />
          <Route path="/services/paid-advertising" element={<PaidAdvertising />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/services/brand-strategy" element={<BrandStrategy />} />
          <Route path="/services/analytics-reporting" element={<AnalyticsReporting />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policies" element={<Policies />} />
          {/* Catch-all: redirect unknown routes to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
