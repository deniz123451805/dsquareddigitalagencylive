import React from 'react';
import { ArrowRight, Search, FileText, TrendingUp, Target, BarChart, Globe } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface SEOContentMarketingProps {
  onNavigate: (page: Page) => void;
}

const SEOContentMarketing: React.FC<SEOContentMarketingProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: Search,
      title: 'Technical SEO Optimization',
      description: 'Complete website optimization including site speed, mobile responsiveness, and search engine crawlability'
    },
    {
      icon: FileText,
      title: 'Content Strategy & Creation',
      description: 'High-quality, SEO-optimized content that engages your audience and ranks on search engines'
    },
    {
      icon: Target,
      title: 'Keyword Research & Strategy',
      description: 'In-depth keyword analysis to target the terms your customers are actually searching for'
    },
    {
      icon: Globe,
      title: 'Local SEO Optimization',
      description: 'Dominate local search results with Google My Business optimization and local citation building'
    }
  ];

  const contentTypes = [
    { type: 'Blog Posts', description: 'SEO-optimized articles that drive organic traffic' },
    { type: 'Landing Pages', description: 'Conversion-focused pages that rank and convert' },
    { type: 'Product Descriptions', description: 'Compelling copy that sells and ranks' },
    { type: 'Case Studies', description: 'Authority-building content that showcases results' },
    { type: 'Infographics', description: 'Visual content that earns backlinks naturally' },
    { type: 'Video Content', description: 'Engaging videos optimized for search discovery' }
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
                  SEO & Content Marketing
                </h1>
                <p className="body-large text-ivory-mist">
                  Dominate search results and attract qualified leads with our comprehensive SEO and content marketing strategies.
                </p>
                <p className="body-regular text-ivory-mist/90">
                  We combine technical SEO expertise with compelling content creation to drive organic traffic that converts.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary"
                  >
                    Boost Your Rankings
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="btn-secondary border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
                  >
                    View SEO Packages
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="SEO analytics dashboard"
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
              Complete SEO & Content Solutions
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              From technical optimization to content creation, we cover every aspect of search engine success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elevated p-8 text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-ivory-mist" />
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-3 group-hover:text-brass-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="body-regular text-charcoal-ink/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Content That Ranks & Converts
            </h2>
            <p className="body-large text-charcoal-ink/80">
              We create diverse content types optimized for search engines and user engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map((content, index) => (
              <div key={index} className="card-flat p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="heading-tertiary text-charcoal-ink mb-3">{content.type}</h3>
                <p className="body-regular text-charcoal-ink/80">{content.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Our Proven SEO Process
            </h2>
            <p className="body-large text-charcoal-ink/80">
              A systematic approach that delivers consistent, measurable results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'SEO Audit',
                description: 'Comprehensive analysis of your current SEO performance and opportunities'
              },
              {
                step: '02',
                title: 'Strategy Development',
                description: 'Custom SEO strategy based on your industry, competition, and goals'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Technical optimization, content creation, and link building execution'
              },
              {
                step: '04',
                title: 'Monitor & Optimize',
                description: 'Continuous tracking, reporting, and optimization for maximum results'
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

      {/* Results Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-8">
            SEO Results That Matter
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">300%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Organic Traffic Growth</div>
              <p className="body-regular text-charcoal-ink/80">Average increase in first 6 months</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">85%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">First Page Rankings</div>
              <p className="body-regular text-charcoal-ink/80">Keywords ranking on page 1 of Google</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">200%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Lead Generation</div>
              <p className="body-regular text-charcoal-ink/80">Increase in qualified organic leads</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Ready to Dominate Search Results?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Let's create an SEO strategy that drives qualified traffic and grows your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Get Your SEO Audit
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

export default SEOContentMarketing;