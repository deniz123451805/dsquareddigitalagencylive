import React from 'react';
import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact' | 'policies' |
           'social-media' | 'seo-content' | 'paid-advertising' | 'marketing-automation' | 'brand-strategy' | 'analytics-reporting';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'about' as Page, label: 'About Us' },
    { id: 'services' as Page, label: 'Services' },
    { id: 'pricing' as Page, label: 'Pricing' },
    { id: 'blog' as Page, label: 'Blog' },
    { id: 'contact' as Page, label: 'Contact' }
  ];

  const services = [
    { name: 'Social Media Management', id: 'social-media' as Page },
    { name: 'SEO & Content Marketing', id: 'seo-content' as Page },
    { name: 'Paid Advertising', id: 'paid-advertising' as Page },
    { name: 'Marketing Automation', id: 'marketing-automation' as Page },
    { name: 'Brand Strategy', id: 'brand-strategy' as Page },
    { name: 'Analytics & Reporting', id: 'analytics-reporting' as Page }
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    // Send to same Formspree form with a newsletter flag
    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email, type: 'Newsletter subscription' })
      });
    } catch {}

    (e.currentTarget as HTMLFormElement).reset();
    alert('Thanks for subscribing! We\'ll be in touch soon.');
  };

  return (
    <footer className="bg-charcoal-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-16">

            {/* Company Info */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/dsquaredlogo.png"
                  alt="DsquaredDigital Logo"
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-brass-accent">dsquareddigital</h3>
                  <p className="text-xs text-ivory-mist/70 tracking-wider uppercase">Premium Digital Marketing</p>
                </div>
              </div>

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
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brass-accent mb-4">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => onNavigate(service.id)}
                      className="text-ivory-mist/80 hover:text-brass-accent transition-colors duration-300 text-sm"
                    >
                      {service.name}
                    </button>
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

              <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3 mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="px-4 py-3 bg-signal-white/10 border border-brass-accent/30 rounded-xl text-ivory-mist placeholder-ivory-mist/60 focus:ring-2 focus:ring-brass-accent focus:border-transparent transition-all duration-300"
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>

              {/* Social Media Links */}
              <div>
                <p className="text-ivory-mist/60 text-xs uppercase tracking-wider mb-3">Follow Us</p>
                <div className="flex space-x-3">
                  {[
                    { Icon: Facebook, href: 'https://facebook.com/dsquareddigital', label: 'Facebook' },
                    { Icon: Twitter, href: 'https://twitter.com/dsquareddigital', label: 'Twitter' },
                    { Icon: Instagram, href: 'https://instagram.com/dsquareddigital', label: 'Instagram' },
                    { Icon: Linkedin, href: 'https://linkedin.com/company/dsquareddigital', label: 'LinkedIn' }
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 bg-signal-white/10 rounded-full flex items-center justify-center text-brass-accent hover:bg-brass-accent hover:text-charcoal-ink transition-all duration-300 transform hover:scale-110"
                    >
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
                <button onClick={() => onNavigate('policies')} className="hover:text-brass-accent transition-colors duration-300">
                  Privacy Policy
                </button>
                <span>•</span>
                <button onClick={() => onNavigate('policies')} className="hover:text-brass-accent transition-colors duration-300">
                  Terms of Service
                </button>
                <span>•</span>
                <button onClick={() => onNavigate('policies')} className="hover:text-brass-accent transition-colors duration-300">
                  Cookie Policy
                </button>
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
