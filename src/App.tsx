import React, { useState } from 'react';
import Header from './components/Header';
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
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact' | 'policies' |
           'social-media' | 'seo-content' | 'paid-advertising' | 'marketing-automation' | 'brand-strategy' | 'analytics-reporting';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'about':
        return <About onNavigate={handleNavigation} />;
      case 'services':
        return <Services onNavigate={handleNavigation} />;
      case 'pricing':
        return <Pricing onNavigate={handleNavigation} />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'policies':
        return <Policies onNavigate={handleNavigation} />;
      case 'social-media':
        return <SocialMediaManagement onNavigate={handleNavigation} />;
      case 'seo-content':
        return <SEOContentMarketing onNavigate={handleNavigation} />;
      case 'paid-advertising':
        return <PaidAdvertising onNavigate={handleNavigation} />;
      case 'marketing-automation':
        return <MarketingAutomation onNavigate={handleNavigation} />;
      case 'brand-strategy':
        return <BrandStrategy onNavigate={handleNavigation} />;
      case 'analytics-reporting':
        return <AnalyticsReporting onNavigate={handleNavigation} />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-ivory-mist pt-20">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header currentPage={currentPage} onNavigate={handleNavigation} />
        <main id="main-content" className="focus:outline-none" tabIndex={-1}>
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigation} />
      </div>
    </>
  );
}

export default App;
