import React, { useState } from 'react';
import LeopardLogo from './components/LeopardLogo.svg?react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Policies from './pages/Policies';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact' | 'policies';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    // Enhanced smooth scroll to top when navigating between pages
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    
    // Also update URL hash to ensure proper navigation
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
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <>
      {/* COLOR SCHEME: Updated main background and added top padding for sticky header */}
      <div className="min-h-screen bg-ivory-mist pt-20">
        {/* Skip link for accessibility */}
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