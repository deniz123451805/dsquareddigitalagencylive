import React from 'react';
import { ArrowRight, Share2, Bot, Search, TrendingUp } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact' | 
           'social-media' | 'seo-content' | 'paid-advertising' | 'marketing-automation' | 'brand-strategy' | 'analytics-reporting';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Share2,
      title: 'Organic and Paid Social Media Management',
      description: 'Comprehensive social media strategies that build communities and drive conversions across all major platforms.',
      features: [
        'Organic Social Media Management',
        'Content Creation & Curation',
        'Paid Social Media Advertising',
        'Community Building & Engagement',
        'Influencer Partnership Management',
        'Social Media Analytics & Reporting'
      ],
      ctaText: 'Social Media Marketing',
      pageId: 'social-media' as Page,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bot,
      title: 'Workflow & Process Automation',
      description: 'AI-powered automation solutions that streamline your marketing operations and personalize customer experiences.',
      features: [
        'Machine Learning with personalised data inputs',
        'Advanced Data Analysis & Insights',
        'Automated Marketing Operations',
        'Customer Journey Automation',
        'Lead Scoring & Nurturing Systems',
        'Performance Optimization Algorithms'
      ],
      ctaText: 'Automation and AI',
      pageId: 'marketing-automation' as Page,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Search,
      title: 'Search Engine Advertising and Organic SEO',
      description: 'Complete search marketing solutions that drive qualified traffic and improve your online visibility.',
      features: [
        'Onsite and Offsite SEO solutions',
        'Paid Google Ads Management',
        'Quarterly/Monthly Analytics Reports',
        'Technical SEO Optimization',
        'Local SEO & Google My Business',
        'Conversion Rate Optimization'
      ],
      ctaText: 'Website Marketing',
      pageId: 'seo-content' as Page,
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: TrendingUp,
      title: 'General Marketing Strategy and Management',
      description: 'Strategic marketing consultation and comprehensive brand development to position your business for success.',
      features: [
        'Marketing Strategy Consultation',
        'Marketing Systems Setup & Integration',
        'Rebranding & Brand Design',
        'Market Research & Competitive Analysis',
        'Customer Persona Development',
        'Multi-Channel Campaign Management'
      ],
      ctaText: 'Marketing Strategy',
      pageId: 'brand-strategy' as Page,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-brass-accent mb-6">
            Premium Digital Marketing Services
          </h1>
          <p className="body-large text-ivory-mist max-w-4xl mx-auto">
            Comprehensive solutions designed to elevate your brand, engage your audience, and drive exceptional results in the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`lg:grid lg:grid-cols-12 lg:gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`lg:col-span-6 mb-12 lg:mb-0 ${index % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-brass-accent/30"
                    />
                  </div>
                </div>
                
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full mb-4">
                      <service.icon className="h-8 w-8 text-ivory-mist" />
                    </div>
                    
                    <h2 className="heading-secondary text-charcoal-ink">
                      {service.title}
                    </h2>
                    
                    <p className="body-large text-charcoal-ink/80">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-brass-accent rounded-full mt-3"></div>
                          <p className="body-regular text-charcoal-ink/80">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4">
                      <button
                        onClick={() => onNavigate(service.pageId)}
                        className="btn-primary"
                      >
                        {service.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </div>
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
              Our Proven Process
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              A systematic approach that ensures every campaign delivers exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Discovery',
                description: 'Deep dive into your business goals, target audience, and competitive landscape'
              },
              {
                step: '02',
                title: 'Planning & Design',
                description: 'Create comprehensive campaign strategies with measurable objectives and timelines'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute campaigns across all channels with precision and attention to detail'
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description: 'Continuous monitoring, analysis, and optimization for maximum ROI'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brass-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="data-display text-2xl text-ivory-mist">{process.step}</span>
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-3 group-hover:text-brass-accent transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="body-regular text-charcoal-ink/80">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Let's discuss which services will drive the most impact for your business goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="btn-secondary text-xl px-10 py-5"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;