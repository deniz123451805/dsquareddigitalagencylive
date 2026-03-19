import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Award, CheckCircle, Shield, Clock, Target } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const benefits = [
    { icon: Target, title: 'Targeted Growth', description: 'Precision-targeted campaigns that reach your ideal customers and drive qualified leads' },
    { icon: TrendingUp, title: 'Measurable Results', description: 'Data-driven strategies with clear ROI tracking and transparent performance reporting' },
    { icon: Shield, title: 'Proven Expertise', description: 'Deep experience helping businesses establish and grow their digital presence' },
    { icon: Clock, title: 'Fast Implementation', description: 'Quick setup and a clear strategy from day one — no waiting months to see momentum' },
  ];

  const services = [
    { title: 'Social Media Mastery', description: 'Build engaged communities and convert followers into customers', features: ['Content Strategy', 'Community Management', 'Paid Social Ads'] },
    { title: 'Search Domination', description: 'Dominate Google search results and drive qualified traffic', features: ['SEO Optimisation', 'Google Ads', 'Local Search'] },
    { title: 'AI Automation', description: 'Streamline operations with intelligent marketing automation', features: ['Lead Nurturing', 'Email Automation', 'Analytics'] },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920">
            <source src="https://pub-4876dba2f5bd41f2b53a4f2a5a4cd596.r2.dev/hero1.mp4" type="video/mp4" />
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Professional business environment" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-charcoal-ink/50"></div>
        </div>
        <div className="relative container-luxury w-full">
          <div className="flex items-center justify-start min-h-screen py-20">
            <div className="max-w-3xl">
              <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-ivory-mist leading-tight tracking-tight text-left">
                If you don't exist online,
                <span className="text-brass-accent block">do you really exist?</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button onClick={() => navigate('/contact')} className="btn-primary text-lg px-8 py-4">
                  Get Your FREE Strategy Session <ArrowRight className="ml-2 h-6 w-6" />
                </button>
                <button onClick={() => navigate('/services')} className="btn-secondary text-lg px-8 py-4 border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink">
                  Discover Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-signal-white border-b border-charcoal-ink/10">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-center">
            <div className="flex items-center space-x-2 text-charcoal-ink/80"><Shield className="h-5 w-5 text-brass-accent" /><span className="font-semibold">Melbourne-Based Agency</span></div>
            <div className="flex items-center space-x-2 text-charcoal-ink/80"><Award className="h-5 w-5 text-brass-accent" /><span className="font-semibold">Boutique &amp; Results-Focused</span></div>
            <div className="flex items-center space-x-2 text-charcoal-ink/80"><Star className="h-5 w-5 text-brass-accent fill-current" /><span className="font-semibold">AI-Powered Marketing</span></div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="container-luxury text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-6">Transform Your Business Into a Digital Powerhouse</h2>
          <p className="body-large text-charcoal-ink/80 max-w-4xl mx-auto mb-12">
            Stop letting your competitors steal your customers. We help ambitious businesses dominate their markets through strategic digital marketing that delivers measurable results.
          </p>
          <div className="bg-signal-white rounded-2xl p-8 shadow-lg border border-brass-accent/20">
            <h3 className="heading-tertiary text-charcoal-ink mb-4">Why Smart Businesses Choose Us:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {['Proven strategies built around your business goals', 'Transparent reporting and clear ROI tracking', 'Dedicated account management throughout', 'AI-powered automation and campaign optimisation'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brass-accent flex-shrink-0" />
                  <span className="body-regular text-charcoal-ink/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-signal-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-6">Our Winning Formula for Digital Success</h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">Three core services that work together to dominate your market and turn your website into a 24/7 sales machine.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-flat p-8 hover:shadow-xl transition-all duration-300 group text-center">
                <h3 className="heading-tertiary text-charcoal-ink mb-4 group-hover:text-brass-accent transition-colors duration-300">{service.title}</h3>
                <p className="body-regular text-charcoal-ink/80 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-brass-accent flex-shrink-0" />
                      <span className="body-regular text-charcoal-ink/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => navigate('/services')} className="text-brass-accent font-semibold hover:text-brass-600 transition-colors duration-300 inline-flex items-center">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => navigate('/services')} className="btn-primary text-lg px-8 py-4">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-6">Why Smart Businesses Choose DsquaredDigital</h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">We don't just run campaigns – we build digital strategies that generate consistent, predictable attention for your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-elevated p-8 text-center group hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-ivory-mist" />
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-4 group-hover:text-brass-accent transition-colors duration-300">{benefit.title}</h3>
                <p className="body-regular text-charcoal-ink/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built on Real Results */}
      <section className="section-padding bg-signal-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-6">Built on Real Results</h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">We're a growing boutique agency. Every engagement is treated as a long-term partnership — your success is how we grow.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Strategy First', description: 'Every campaign starts with a deep understanding of your business, your audience, and your goals — not a template.' },
              { icon: TrendingUp, title: 'Transparent Reporting', description: 'You always know exactly what's happening, what's working, and what we're optimising next.' },
              { icon: Shield, title: 'Your Brand, Protected', description: 'We treat your brand with the same care as our own. No shortcuts, no vanity metrics, no noise.' },
            ].map((item, index) => (
              <div key={index} className="card-elevated p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brass-accent/10 rounded-full mb-6">
                  <item.icon className="h-7 w-7 text-brass-accent" />
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">{item.title}</h3>
                <p className="body-regular text-charcoal-ink/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-charcoal-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-ink to-charcoal-900"></div>
        <div className="relative container-luxury text-center">
          <h2 className="heading-secondary text-ivory-mist mb-6">Ready to Build Your Digital Presence?</h2>
          <p className="body-large text-ivory-mist/90 mb-8 max-w-3xl mx-auto">Book a free strategy session today and discover exactly how we'll help your business get noticed in a crowded digital world.</p>
          <div className="inline-flex items-center bg-brass-accent/20 border border-brass-accent/30 rounded-full px-6 py-3 mb-8">
            <Clock className="h-5 w-5 text-brass-accent mr-2" />
            <span className="text-brass-accent font-semibold">Free 30-minute Strategy Session</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="btn-primary text-lg px-8 py-4 transform hover:scale-105 shadow-2xl">
              Claim Your FREE Strategy Session <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            <button onClick={() => navigate('/pricing')} className="btn-secondary text-lg px-8 py-4 border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink">
              View Investment Options
            </button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 pt-8 border-t border-brass-accent/30">
            <div className="flex items-center space-x-2 text-ivory-mist/80"><Shield className="h-5 w-5 text-brass-accent" /><span>No lock-in contracts</span></div>
            <div className="flex items-center space-x-2 text-ivory-mist/80"><Clock className="h-5 w-5 text-brass-accent" /><span>Clear strategy from Day 1</span></div>
            <div className="flex items-center space-x-2 text-ivory-mist/80"><Award className="h-5 w-5 text-brass-accent" /><span>Melbourne-based team</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
