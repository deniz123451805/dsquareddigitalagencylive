import React from 'react';
import { ArrowRight, Users, Share2, TrendingUp, Target, Calendar, MessageCircle } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface SocialMediaManagementProps {
  onNavigate: (page: Page) => void;
}

const SocialMediaManagement: React.FC<SocialMediaManagementProps> = ({ onNavigate }) => {
  const features = [
    {
      icon: Share2,
      title: 'Content Strategy & Creation',
      description: 'Custom content calendars with engaging posts tailored to your brand voice and audience'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Active engagement with your audience, responding to comments and building relationships'
    },
    {
      icon: Target,
      title: 'Paid Social Advertising',
      description: 'Targeted ad campaigns across Facebook, Instagram, LinkedIn, and Twitter for maximum ROI'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking with monthly reports showing growth and engagement metrics'
    }
  ];

  const platforms = [
    { name: 'Facebook', users: '2.9B+', strength: 'Community Building' },
    { name: 'Instagram', users: '2B+', strength: 'Visual Storytelling' },
    { name: 'LinkedIn', users: '900M+', strength: 'B2B Networking' },
    { name: 'Twitter', users: '450M+', strength: 'Real-time Engagement' },
    { name: 'TikTok', users: '1B+', strength: 'Viral Content' },
    { name: 'YouTube', users: '2.7B+', strength: 'Video Marketing' }
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
                  Social Media Management
                </h1>
                <p className="body-large text-ivory-mist">
                  Transform your social media presence into a powerful customer acquisition engine with our comprehensive management services.
                </p>
                <p className="body-regular text-ivory-mist/90">
                  We create engaging content, build authentic communities, and drive measurable results across all major social platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary"
                  >
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="btn-secondary border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
                  >
                    View Pricing
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Social media management dashboard"
                  className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-brass-accent/30"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Complete Social Media Solutions
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your social media presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-elevated p-8 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-ivory-mist" />
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-3 group-hover:text-brass-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="body-regular text-charcoal-ink/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              We Manage All Major Platforms
            </h2>
            <p className="body-large text-charcoal-ink/80">
              Reach your audience wherever they are with platform-specific strategies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="card-flat p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="heading-tertiary text-charcoal-ink">{platform.name}</h3>
                  <span className="data-display text-sm text-brass-accent">{platform.users}</span>
                </div>
                <p className="body-regular text-charcoal-ink/80">{platform.strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-8">
            Proven Results for Our Clients
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">400%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Engagement Increase</div>
              <p className="body-regular text-charcoal-ink/80">Average engagement growth in first 3 months</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">250%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Follower Growth</div>
              <p className="body-regular text-charcoal-ink/80">Quality follower increase within 6 months</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">180%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Lead Generation</div>
              <p className="body-regular text-charcoal-ink/80">More qualified leads from social channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Ready to Dominate Social Media?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Let's create a social media strategy that turns followers into customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Start Your Social Strategy
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

export default SocialMediaManagement;