import React from 'react';
import { ArrowRight, Share2, Search, Target, Bot, Palette, BarChart } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact' | 
           'social-media' | 'seo-content' | 'paid-advertising' | 'marketing-automation' | 'brand-strategy' | 'analytics-reporting';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Build engaged communities and convert followers into customers with strategic social media management across all major platforms.',
      features: [
        'Content Strategy & Creation',
        'Community Management & Engagement',
        'Paid Social Media Advertising',
        'Influencer Partnership Management',
        'Social Media Analytics & Reporting',
        'Brand Voice Development'
      ],
      ctaText: 'Explore Social Media Services',
      pageId: 'social-media' as Page,
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Search,
      title: 'SEO & Content Marketing',
      description: 'Dominate search results and attract qualified leads with comprehensive SEO strategies and compelling content marketing.',
      features: [
        'Technical SEO Optimization',
        'Keyword Research & Strategy',
        'Content Creation & Optimization',
        'Link Building & Authority Development',
        'Local SEO & Google My Business',
        'SEO Analytics & Performance Tracking'
      ],
      ctaText: 'Boost Your Search Rankings',
      pageId: 'seo-content' as Page,
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Drive immediate results with strategic paid advertising campaigns across Google, Facebook, LinkedIn, and other platforms.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Advertising',
        'LinkedIn B2B Campaigns',
        'Campaign Strategy & Optimization',
        'Landing Page Development',
        'ROI Tracking & Reporting'
      ],
      ctaText: 'Launch Your Ad Campaigns',
      pageId: 'paid-advertising' as Page,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bot,
      title: 'Marketing Automation',
      description: 'Streamline your marketing operations with AI-powered automation that nurtures leads and personalizes customer experiences.',
      features: [
        'Email Marketing Automation',
        'Lead Scoring & Nurturing',
        'Customer Journey Mapping',
        'CRM Integration & Setup',
        'Workflow Automation',
        'Performance Analytics & Optimization'
      ],
      ctaText: 'Automate Your Marketing',
      pageId: 'marketing-automation' as Page,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Palette,
      title: 'Brand Strategy',
      description: 'Build a powerful brand that commands attention, builds trust, and drives customer loyalty in your market.',
      features: [
        'Brand Positioning & Strategy',
        'Visual Identity Design',
        'Brand Voice & Messaging',
        'Brand Guidelines Development',
        'Market Research & Analysis',
        'Brand Implementation & Rollout'
      ],
      ctaText: 'Develop Your Brand',
      pageId: 'brand-strategy' as Page,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Transform data into actionable insights with comprehensive analytics and reporting that drives smarter marketing decisions.',
      features: [
        'Custom Analytics Dashboards',
        'Performance Tracking & Monitoring',
        'Conversion Rate Optimization',
        'Competitive Intelligence',
        'ROI Analysis & Attribution',
        'Strategic Recommendations'
      ],
      ctaText: 'Get Data-Driven Insights',
      pageId: 'analytics-reporting' as Page,
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800'
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
              className="btn-secondary text-xl px-10 py-5 border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
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