import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, CheckCircle } from 'lucide-react';

// TODO: Replace with your Web3Forms access key from https://web3forms.com
const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_KEY';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    { path: '/services/social-media', label: 'Social Media Management' },
    { path: '/services/seo-content', label: 'SEO & Content Marketing' },
    { path: '/services/paid-advertising', label: 'Paid Advertising' },
    { path: '/services/marketing-automation', label: 'Marketing Automation' },
    { path: '/services/brand-strategy', label: 'Brand Strategy' },
    { path: '/services/analytics-reporting', label: 'Analytics & Reporting' },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Newsletter Subscription — DsquaredDigital',
          from_name: 'DsquaredDigital Website',
          email,
          message: `New newsletter subscription from: ${email}`,
          botcheck: ''
        })
      });
      const result = await response.json();
      if (result.success) {
        setNewsletterStatus('success');
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setNewsletterStatus('error');
      }
    } catch {
      setNewsletterStatus('error');
    }
  };

  return (
    <footer className="bg-charcoal-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-16">

            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img src="/dsquaredlogo.png" alt="DsquaredDigital Logo" className="h-12 w-auto object-contain" />
                <div>
                  <span className="text-2xl font-serif font-bold text-brass-accent block">dsquareddigital</span>
                  <span className="text-xs text-ivory-mist/70 tracking-wider uppercase">Premium Digital Marketing</span>
                </div>
              </Link>
              <p className="text-ivory-mist/80 leading-relaxed mb-6">
                A Melbourne-based boutique digital marketing agency built for the AI age.
                We help businesses get noticed and thrive in the digital sphere.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-ivory-mist/80">
                  <Mail className="h-4 w-4 text-brass-accent flex-shrink-0" />
                  <a href="mailto:info@dsquareddigitalagency.com" className="text-sm hover:text-brass-accent transition-colors">
                    info@dsquareddigitalagency.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-ivory-mist/80">
                  <MapPin className="h-4 w-4 text-brass-accent flex-shrink-0" />
                  <span className="text-sm">Melbourne, Australia</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 lg:ml-8">
              <h4 className="text-lg font-semibold text-brass-accent mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brass-accent mb-4">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link to={service.path} className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brass-accent mb-4">Stay Connected</h4>
              <p className="text-ivory-mist/80 text-sm leading-relaxed mb-4">
                Subscribe for the latest digital marketing insights and trends.
              </p>
              {newsletterStatus === 'success' ? (
                <div className="flex items-center space-x-2 text-green-400 text-sm py-3">
                  <CheckCircle className="h-4 w-4" />
                  <span>You're subscribed — thanks!</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3 mb-6">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                  <input
                    type="email" name="email"
                    placeholder="Enter your email" required
                    className="px-4 py-3 bg-signal-white/10 border border-brass-accent/30 rounded-xl text-ivory-mist placeholder-ivory-mist/60 focus:ring-2 focus:ring-brass-accent focus:border-transparent transition-all duration-300"
                  />
                  <button type="submit" className="btn-primary">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  {newsletterStatus === 'error' && (
                    <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
              <div>
                <p className="text-ivory-mist/60 text-xs uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex space-x-3">
                  {[
                    { Icon: Facebook, href: 'https://facebook.com/dsquareddigital', label: 'Facebook' },
                    { Icon: Twitter, href: 'https://twitter.com/dsquareddigital', label: 'Twitter' },
                    { Icon: Instagram, href: 'https://instagram.com/dsquareddigital', label: 'Instagram' },
                    { Icon: Linkedin, href: 'https://linkedin.com/company/dsquareddigital', label: 'LinkedIn' },
                  ].map(({ Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 bg-signal-white/10 rounded-full flex items-center justify-center text-brass-accent hover:bg-brass-accent hover:text-charcoal-ink transition-all duration-300 transform hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-brass-accent/30 py-6 lg:py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-ivory-mist/80 text-sm">
              <p>&copy; {currentYear} DsquaredDigital. All rights reserved.</p>
              <div className="flex items-center flex-wrap gap-2 sm:gap-4">
                <Link to="/policies" className="hover:text-brass-accent transition-colors duration-300">Privacy Policy</Link>
                <span>•</span>
                <Link to="/policies" className="hover:text-brass-accent transition-colors duration-300">Terms of Service</Link>
                <span>•</span>
                <Link to="/policies" className="hover:text-brass-accent transition-colors duration-300">Cookie Policy</Link>
              </div>
            </div>
            <div className="text-ivory-mist/80 text-sm mt-4 lg:mt-0">
              <p className="font-semibold">get noticed — be good at marketing</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
