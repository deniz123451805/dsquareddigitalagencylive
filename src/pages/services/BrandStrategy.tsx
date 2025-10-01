import React from 'react';
import { ArrowRight, Target, Palette, MessageCircle, Award, Users, TrendingUp } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface BrandStrategyProps {
  onNavigate: (page: Page) => void;
}

const BrandStrategy: React.FC<BrandStrategyProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Target,
      title: 'Brand Positioning & Strategy',
      description: 'Define your unique market position and competitive advantage',
      features: ['Market Analysis', 'Competitive Research', 'Value Proposition', 'Brand Architecture']
    },
    {
      icon: Palette,
      title: 'Visual Identity Design',
      description: 'Create compelling visual elements that represent your brand',
      features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines']
    },
    {
      icon: MessageCircle,
      title: 'Brand Voice & Messaging',
      description: 'Develop consistent messaging that resonates with your audience',
      features: ['Brand Voice', 'Key Messages', 'Content Strategy', 'Communication Guidelines']
    },
    {
      icon: Award,
      title: 'Brand Experience Design',
      description: 'Craft memorable experiences across all customer touchpoints',
      features: ['Customer Journey', 'Touchpoint Design', 'Experience Strategy', 'Brand Standards']
    }
  ];

  const brandElements = [
    {
      title: 'Brand Discovery',
      description: 'Deep dive into your business, values, and market position',
      deliverables: ['Brand Audit', 'Stakeholder Interviews', 'Market Research', 'Competitive Analysis']
    },
    {
      title: 'Strategy Development',
      description: 'Create a comprehensive brand strategy and positioning',
      deliverables: ['Brand Strategy', 'Positioning Statement', 'Value Proposition', 'Brand Pillars']
    },
    {
      title: 'Visual Identity',
      description: 'Design visual elements that bring your brand to life',
      deliverables: ['Logo Design', 'Brand Colors', 'Typography', 'Visual Guidelines']
    },
    {
      title: 'Brand Implementation',
      description: 'Roll out your new brand across all marketing channels',
      deliverables: ['Brand Guidelines', 'Marketing Materials', 'Digital Assets', 'Training Materials']
    }
  ];

  const industries = [
    'Technology & SaaS',
    'Healthcare & Wellness',
    'Financial Services',
    'E-commerce & Retail',
    'Professional Services',
    'Manufacturing',
    'Real Estate',
    'Education',
    'Non-Profit',
    'Hospitality'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="space-y-6">
                <h1 className="heading-primary text-brass-accent">
                  Brand Strategy & Development
                </h1>
                <p className="body-large text-ivory-mist">
                  Build a powerful brand that commands attention, builds trust, and drives customer loyalty in your market.
                </p>
                <p className="body-regular text-ivory-mist/90">
                  Our strategic approach to branding creates memorable experiences that differentiate you from competitors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary"
                  >
                    Build Your Brand
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="btn-secondary border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
                  >
                    View Brand Packages
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Brand strategy workshop"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-brass-accent/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Complete Brand Development Services
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              From strategy to implementation, we create brands that resonate with your audience and drive business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elevated p-8 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-ivory-mist" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-tertiary text-charcoal-ink mb-2 group-hover:text-brass-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="body-regular text-charcoal-ink/80 mb-4">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brass-accent rounded-full"></div>
                      <span className="body-small text-charcoal-ink/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Our Brand Development Process
            </h2>
            <p className="body-large text-charcoal-ink/80">
              A systematic approach to building brands that stand out and drive results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandElements.map((element, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brass-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="data-display text-2xl text-ivory-mist">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-3 group-hover:text-brass-accent transition-colors duration-300">
                  {element.title}
                </h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">{element.description}</p>
                <div className="space-y-1">
                  {element.deliverables.map((deliverable, deliverableIndex) => (
                    <div key={deliverableIndex} className="flex items-center justify-center space-x-2">
                      <div className="w-1 h-1 bg-brass-accent rounded-full"></div>
                      <span className="body-small text-charcoal-ink/70">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Industries We Serve
            </h2>
            <p className="body-large text-charcoal-ink/80">
              Specialized brand strategies tailored to your industry's unique challenges and opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="card-flat p-4 text-center hover:shadow-lg transition-all duration-300">
                <div className="font-semibold text-charcoal-ink text-sm">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Impact Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-8">
            The Impact of Strong Branding
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">23%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Revenue Growth</div>
              <p className="body-regular text-charcoal-ink/80">Companies with strong brands see higher revenue growth</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">3.5x</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Brand Recognition</div>
              <p className="body-regular text-charcoal-ink/80">Better brand recognition leads to increased market share</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">68%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Customer Loyalty</div>
              <p className="body-regular text-charcoal-ink/80">Strong brands create more loyal customers</p>
            </div>
          </div>
          
          <div className="bg-signal-white rounded-2xl p-8 shadow-lg border border-brass-accent/20">
            <h3 className="heading-tertiary text-charcoal-ink mb-4">Why Brand Strategy Matters:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Builds customer trust and credibility</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Increases business value and equity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Differentiates from competitors</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Commands premium pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Ready to Build a Powerful Brand?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Let's create a brand strategy that sets you apart and drives sustainable business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Start Your Brand Journey
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="btn-secondary text-xl px-10 py-5 border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandStrategy;