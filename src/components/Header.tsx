import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT US' },
  { path: '/services', label: 'SERVICES' },
  { path: '/pricing', label: 'PRICING' },
  { path: '/blog', label: 'BLOG' },
  { path: '/contact', label: 'CONTACT' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-signal-white shadow-lg border-b border-charcoal-ink/10 z-50 transition-all duration-300"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-4 cursor-pointer group"
            aria-label="DsquaredDigital home"
          >
            <img
              src="/dsquaredlogo.png"
              alt="DsquaredDigital Logo"
              className="h-12 w-auto group-hover:scale-110 transition-all duration-300 object-contain"
            />
            <div>
              <span className="font-serif font-bold text-2xl text-charcoal-ink group-hover:text-brass-accent transition-colors duration-300 block">
                dsquareddigital
              </span>
              <span className="text-xs text-charcoal-ink/70 tracking-wider font-medium uppercase">
                Premium Digital Marketing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-300
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brass-accent after:transition-all after:duration-300
                  ${
                    isActive(item.path)
                      ? 'text-brass-accent after:w-full'
                      : 'text-charcoal-ink hover:text-brass-accent after:w-0 hover:after:w-full'
                  }`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-ink hover:text-brass-accent transition-colors duration-300 p-2 rounded-lg hover:bg-brass-accent/10"
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
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium w-full text-left transition-all duration-300 rounded-lg ${
                    isActive(item.path)
                      ? 'text-brass-accent bg-brass-accent/15 font-semibold'
                      : 'text-charcoal-ink hover:text-brass-accent hover:bg-brass-accent/10'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
