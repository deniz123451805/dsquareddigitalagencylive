import React from 'react';
import { ArrowRight, Target, DollarSign, BarChart, Zap, TrendingUp, Users } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface PaidAdvertisingProps {
  onNavigate: (page: Page) => void;
}

const PaidAdvertising: React.FC<PaidAdvertisingProps> = ({ onNavigate }) => {
  const platforms = [
    {
      icon: Target,
      name: 'Google Ads',
      description: 'Search, Display, Shopping, and YouTube advertising campaigns',
      features: ['Search Campaigns', 'Display Network', 'Shopping Ads', 'YouTube Ads']
    },
    {
      icon: Users,
      name: 'Facebook & Instagram Ads',
      description: 'Highly targeted social media advertising across Meta platforms',
      features: ['Feed Ads', 'Stories Ads', 'Reels Ads', 'Messenger Ads']
    },
    {
      icon: TrendingUp,
      name: 'LinkedIn Ads',
      description: 'Professional B2B advertising for lead generation and brand awareness',
      features: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Lead Gen Forms']
    },
    {
      icon: Zap,
      name: 'TikTok & Twitter Ads',
      description: 'Emerging platform advertising for reaching younger demographics',
      features: ['In-Feed Ads', 'Brand Takeovers', 'Promoted Tweets', 'Video Ads']
    }
  ];

  const services = [
    {
      title: 'Campaign Strategy & Setup',
      description: 'Custom advertising strategies tailored to your business goals and target audience'
    },
    {
      title: 'Ad Creative Development',
      description: 'Compelling ad copy and visuals designed to maximize click-through rates and conversions'
    },
    {
      title: 'Audience Targeting',
      description: 'Precise audience segmentation using demographics, interests, and behavioral data'
    },
    {
      title: 'Bid Management',
      description: 'Automated and manual bid optimization to maximize ROI and minimize cost per acquisition'
    },
    {
      title: 'Landing Page Optimization',
      description: 'Conversion-focused landing pages that turn clicks into customers'
    },
    {
      title: 'Performance Tracking',
      description: 'Detailed analytics and reporting to measure campaign success and ROI'
    }
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
                  Paid Advertising
                </h1>
                <p className="body-large text-ivory-mist">
                  Drive immediate results with strategic paid advertising campaigns that deliver qualified leads and maximize your ROI.
                </p>
                <p className="body-regular text-ivory-mist/90">
                  Our data-driven approach ensures every advertising dollar works harder to grow your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary"
                  >
                    Launch Your Campaigns
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="btn-secondary border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
                  >
                    View Ad Packages
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Digital advertising dashboard"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-brass-accent/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Multi-Platform Advertising Excellence
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              Reach your ideal customers wherever they spend their time online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="card-elevated p-8 group">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full group-hover:scale-110 transition-transform duration-300">
                    <platform.icon className="h-8 w-8 text-ivory-mist" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-tertiary text-charcoal-ink mb-2 group-hover:text-brass-accent transition-colors duration-300">
                      {platform.name}
                    </h3>
                    <p className="body-regular text-charcoal-ink/80 mb-4">{platform.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {platform.features.map((feature, featureIndex) => (
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

      {/* Services Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Complete Advertising Management
            </h2>
            <p className="body-large text-charcoal-ink/80">
              From strategy to optimization, we handle every aspect of your paid advertising campaigns
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-flat p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="heading-tertiary text-charcoal-ink mb-3">{service.title}</h3>
                <p className="body-regular text-charcoal-ink/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-8">
            Advertising ROI That Speaks for Itself
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">450%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Average ROI</div>
              <p className="body-regular text-charcoal-ink/80">Return on advertising spend for our clients</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">65%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Cost Reduction</div>
              <p className="body-regular text-charcoal-ink/80">Lower cost per acquisition vs. industry average</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">2.8x</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Conversion Rate</div>
              <p className="body-regular text-charcoal-ink/80">Higher conversion rates through optimization</p>
            </div>
          </div>
          
          <div className="bg-signal-white rounded-2xl p-8 shadow-lg border border-brass-accent/20">
            <h3 className="heading-tertiary text-charcoal-ink mb-4">Why Our Paid Advertising Works:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Budget optimization across platforms</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Real-time performance monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Precision audience targeting</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Continuous campaign optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Ready to Scale Your Business with Paid Ads?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Let's create advertising campaigns that deliver immediate results and long-term growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Start Your Campaign
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

export default PaidAdvertising;