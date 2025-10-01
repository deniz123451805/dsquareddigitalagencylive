import React from 'react';
import { ArrowRight, Bot, Zap, Users, BarChart, Mail, Workflow } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface MarketingAutomationProps {
  onNavigate: (page: Page) => void;
}

const MarketingAutomation: React.FC<MarketingAutomationProps> = ({ onNavigate }) => {
  const automationTypes = [
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Personalized email sequences that nurture leads and drive conversions',
      features: ['Welcome Series', 'Drip Campaigns', 'Behavioral Triggers', 'A/B Testing']
    },
    {
      icon: Users,
      title: 'Lead Scoring & Nurturing',
      description: 'Intelligent lead qualification and automated nurturing workflows',
      features: ['Lead Scoring', 'Progressive Profiling', 'Dynamic Content', 'Sales Handoff']
    },
    {
      icon: Workflow,
      title: 'Customer Journey Automation',
      description: 'End-to-end customer experience automation across all touchpoints',
      features: ['Multi-channel Workflows', 'Personalization', 'Lifecycle Marketing', 'Retention Campaigns']
    },
    {
      icon: BarChart,
      title: 'Analytics & Optimization',
      description: 'AI-powered insights and continuous optimization of automation workflows',
      features: ['Performance Analytics', 'Predictive Modeling', 'ROI Tracking', 'Optimization Recommendations']
    }
  ];

  const benefits = [
    {
      title: 'Save Time & Resources',
      description: 'Automate repetitive marketing tasks and focus on strategy and growth',
      stat: '75%',
      statLabel: 'Time Saved'
    },
    {
      title: 'Increase Lead Quality',
      description: 'Intelligent lead scoring identifies your most valuable prospects',
      stat: '3x',
      statLabel: 'Better Lead Quality'
    },
    {
      title: 'Boost Conversion Rates',
      description: 'Personalized messaging at the right time increases conversions',
      stat: '320%',
      statLabel: 'Conversion Increase'
    },
    {
      title: 'Scale Your Marketing',
      description: 'Handle thousands of leads with personalized, automated workflows',
      stat: '10x',
      statLabel: 'Marketing Scale'
    }
  ];

  const tools = [
    'HubSpot', 'Marketo', 'Pardot', 'ActiveCampaign', 'Mailchimp', 'Klaviyo',
    'Zapier', 'Microsoft Dynamics', 'Salesforce', 'Pipedrive'
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
                  Marketing Automation & AI
                </h1>
                <p className="body-large text-ivory-mist">
                  Transform your marketing with intelligent automation that nurtures leads, personalizes experiences, and drives growth 24/7.
                </p>
                <p className="body-regular text-ivory-mist/90">
                  Our AI-powered marketing automation solutions work around the clock to convert prospects into customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary"
                  >
                    Automate Your Marketing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="btn-secondary border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
                  >
                    View Automation Plans
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Marketing automation dashboard"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-brass-accent/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Complete Marketing Automation Solutions
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              From lead generation to customer retention, we automate every stage of your marketing funnel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {automationTypes.map((type, index) => (
              <div key={index} className="card-elevated p-8 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="h-8 w-8 text-ivory-mist" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-tertiary text-charcoal-ink mb-2 group-hover:text-brass-accent transition-colors duration-300">
                      {type.title}
                    </h3>
                    <p className="body-regular text-charcoal-ink/80 mb-4">{type.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {type.features.map((feature, featureIndex) => (
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

      {/* Benefits Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              The Power of Marketing Automation
            </h2>
            <p className="body-large text-charcoal-ink/80">
              See how automation transforms your marketing efficiency and results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-flat p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="data-display text-3xl text-brass-accent mb-2">{benefit.stat}</div>
                <div className="body-small text-brass-accent font-semibold mb-3">{benefit.statLabel}</div>
                <h3 className="heading-tertiary text-charcoal-ink mb-3">{benefit.title}</h3>
                <p className="body-regular text-charcoal-ink/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              We Work With Leading Platforms
            </h2>
            <p className="body-large text-charcoal-ink/80">
              Expert implementation and optimization across all major marketing automation tools
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="card-flat p-4 text-center hover:shadow-lg transition-all duration-300">
                <div className="font-semibold text-charcoal-ink">{tool}</div>
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
              Our Automation Implementation Process
            </h2>
            <p className="body-large text-charcoal-ink/80">
              A proven methodology that ensures successful automation deployment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Mapping',
                description: 'Map your customer journey and identify automation opportunities'
              },
              {
                step: '02',
                title: 'Platform Setup',
                description: 'Configure and integrate your chosen automation platform'
              },
              {
                step: '03',
                title: 'Workflow Creation',
                description: 'Build and test automated workflows and campaigns'
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description: 'Monitor performance and continuously optimize for better results'
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
            Ready to Automate Your Marketing Success?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Let's build intelligent automation workflows that work 24/7 to grow your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Start Your Automation
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

export default MarketingAutomation;