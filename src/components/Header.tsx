import React from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { id: 'home' as Page, label: 'HOME' },
    { id: 'about' as Page, label: 'ABOUT US' },
    { id: 'services' as Page, label: 'SERVICES' },
    { id: 'pricing' as Page, label: 'PRICING' },
    { id: 'blog' as Page, label: 'BLOG' },
    { id: 'contact' as Page, label: 'CONTACT' },
  ];

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    
    // Ensure smooth scroll to top for all navigation
    setTimeout(() => {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
    }, 50);
  };

  return (
    <>
      {/* NAVIGATION ENHANCEMENT: Made header sticky/fixed position */}
      <header className="fixed top-0 left-0 right-0 bg-signal-white shadow-lg border-b border-charcoal-ink/10 z-50 transition-all duration-300" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => handleNavigation('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleNavigation('home');
              }
            }}
            aria-label="DsquaredDigital home"
          >
            <img 
              src="src/components/7.png" 
              alt="DsquaredDigital Logo" 
              className="h-12 w-auto group-hover:scale-110 transition-all duration-300 object-contain"
            />
            <div>
              <h1 className="font-serif font-bold text-2xl text-charcoal-ink group-hover:text-brass-accent transition-colors duration-300">
                dsquareddigital
              </h1>
              <p className="text-xs text-charcoal-ink/70 tracking-wider font-medium uppercase">Premium Digital Marketing</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide text-charcoal-ink hover:text-brass-accent focus:text-brass-accent transition-colors duration-300 ${
                  currentPage === item.id
                    ? 'text-brass-accent after:w-full'
                    : 'after:w-0 hover:after:w-full'
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brass-accent after:transition-all after:duration-300`}
                aria-current={currentPage === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-ink hover:text-brass-accent focus:text-brass-accent transition-colors duration-300 p-2 rounded-lg hover:bg-brass-accent/10"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-signal-white rounded-xl mt-2 border border-brass-accent/20 shadow-xl">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`block px-4 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-lg ${
                    currentPage === item.id
                      ? 'text-brass-accent bg-brass-accent/15 font-semibold'
                      : 'text-charcoal-ink hover:text-brass-accent hover:bg-brass-accent/10'
                  }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      </header>
    </>
  );
};

export default Header;