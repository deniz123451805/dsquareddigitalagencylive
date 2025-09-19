import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface PricingProps {
  onNavigate: (page: Page) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses looking to establish their digital presence',
      features: [
        'Social Media Management (2 platforms)',
        'Basic SEO Optimization',
        'Monthly Analytics Report',
        'Content Creation (8 posts/month)',
        'Email Support',
        'Basic Website Audit'
      ],
      popular: false,
      ctaText: 'Start Growing'
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Comprehensive digital marketing for growing businesses',
      features: [
        'Full Social Media Management (4 platforms)',
        'Advanced SEO & Content Marketing',
        'Paid Advertising Management',
        'Weekly Analytics & Reporting',
        'Content Creation (20 posts/month)',
        'Marketing Automation Setup',
        'Priority Support',
        'Quarterly Strategy Reviews'
      ],
      popular: true,
      ctaText: 'Scale Your Business'
    },
    {
      name: 'Enterprise',
      price: '$10,000+',
      period: '/month',
      description: 'Full-service digital marketing for established businesses',
      features: [
        'Omnichannel Marketing Strategy',
        'Advanced AI Automation',
        'Custom Analytics Dashboard',
        'Dedicated Account Manager',
        'Unlimited Content Creation',
        'Advanced Lead Generation',
        '24/7 Support',
        'Monthly Strategy Sessions',
        'Brand Development',
        'Custom Integrations'
      ],
      popular: false,
      ctaText: 'Dominate Your Market'
    }
  ];

  const addOns = [
    {
      name: 'Video Content Creation',
      price: '$1,500/month',
      description: 'Professional video content for social media and advertising'
    },
    {
      name: 'Advanced Analytics Dashboard',
      price: '$500/month',
      description: 'Custom analytics dashboard with real-time reporting'
    },
    {
      name: 'Additional Platform Management',
      price: '$750/platform/month',
      description: 'Expand to additional social media platforms'
    },
    {
      name: 'Conversion Rate Optimization',
      price: '$2,000/month',
      description: 'Dedicated CRO campaigns to maximize conversions'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-brass-accent mb-6">
            Investment in Your Success
          </h1>
          <p className="body-large text-ivory-mist max-w-4xl mx-auto">
            Transparent pricing for premium digital marketing services. Choose the package that fits your business goals and growth stage.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? 'border-brass-accent scale-105 lg:scale-110'
                    : 'border-brass-accent/30 hover:border-brass-accent/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-brass-accent text-ivory-mist px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="heading-tertiary text-charcoal-ink mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="data-display text-4xl lg:text-5xl text-brass-accent">{plan.price}</span>
                      <span className="body-regular text-charcoal-ink/70 ml-1">{plan.period}</span>
                    </div>
                    <p className="body-regular text-charcoal-ink/80">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-brass-accent rounded-full flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-ivory-mist" />
                        </div>
                        <p className="body-regular text-charcoal-ink/80">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Premium Add-Ons
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              Enhance your package with specialized services tailored to your unique business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {addOns.map((addon, index) => (
              <div key={index} className="card-flat p-8 hover:shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="heading-tertiary text-charcoal-ink">{addon.name}</h3>
                  <span className="data-display text-lg text-brass-accent">{addon.price}</span>
                </div>
                <p className="body-regular text-charcoal-ink/80">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-8">
            Why Invest in Premium Digital Marketing?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                value: '300%',
                label: 'Average ROI',
                description: 'Our clients see significant returns on their marketing investment'
              },
              {
                value: '6 months',
                label: 'Payback Period',
                description: 'Most clients recover their investment within the first 3 months'
              },
              {
                value: '95%',
                label: 'Client Retention',
                description: 'Long-term partnerships built on consistent results'
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="data-display text-4xl text-brass-accent mb-2">{stat.value}</div>
                <div className="heading-tertiary text-charcoal-ink mb-2">{stat.label}</div>
                <p className="body-regular text-charcoal-ink/80">{stat.description}</p>
              </div>
            ))}
          </div>
          
          <p className="body-large text-charcoal-ink/80 mb-8">
            Every dollar invested in professional digital marketing is an investment in your business's future. 
            Our proven strategies and expert execution ensure you get maximum value from your marketing budget.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Ready to Invest in Your Success?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Schedule a consultation to discuss which package is right for your business goals and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Schedule Consultation
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="btn-secondary text-xl px-10 py-5"
            >
              View Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;