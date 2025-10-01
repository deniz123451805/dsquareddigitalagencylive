import React from 'react';
import { ArrowRight, BarChart, TrendingUp, Target, Eye, PieChart, Activity } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface AnalyticsReportingProps {
  onNavigate: (page: Page) => void;
}

const AnalyticsReporting: React.FC<AnalyticsReportingProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: BarChart,
      title: 'Custom Analytics Dashboards',
      description: 'Real-time dashboards that track your most important business metrics',
      features: ['Real-time Data', 'Custom KPIs', 'Interactive Charts', 'Mobile Access']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Comprehensive tracking across all marketing channels and campaigns',
      features: ['Multi-channel Tracking', 'Campaign Attribution', 'ROI Analysis', 'Goal Tracking']
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Data-driven insights to improve conversion rates and user experience',
      features: ['Funnel Analysis', 'A/B Testing', 'User Behavior', 'Optimization Recommendations']
    },
    {
      icon: Eye,
      title: 'Competitive Intelligence',
      description: 'Monitor competitor performance and identify market opportunities',
      features: ['Competitor Analysis', 'Market Share', 'Trend Identification', 'Opportunity Mapping']
    }
  ];

  const metrics = [
    {
      category: 'Website Analytics',
      metrics: ['Traffic Sources', 'User Behavior', 'Page Performance', 'Conversion Rates', 'Bounce Rates', 'Session Duration']
    },
    {
      category: 'Social Media Analytics',
      metrics: ['Engagement Rates', 'Follower Growth', 'Reach & Impressions', 'Share of Voice', 'Sentiment Analysis', 'Influencer Impact']
    },
    {
      category: 'Email Marketing Analytics',
      metrics: ['Open Rates', 'Click-through Rates', 'Conversion Rates', 'List Growth', 'Unsubscribe Rates', 'Revenue Attribution']
    },
    {
      category: 'Paid Advertising Analytics',
      metrics: ['Cost Per Click', 'Cost Per Acquisition', 'Return on Ad Spend', 'Quality Score', 'Impression Share', 'Conversion Value']
    }
  ];

  const tools = [
    'Google Analytics 4',
    'Google Tag Manager',
    'Google Data Studio',
    'Adobe Analytics',
    'Hotjar',
    'Mixpanel',
    'Tableau',
    'Power BI',
    'SEMrush',
    'Ahrefs'
  ];

  const reportTypes = [
    {
      title: 'Executive Summary Reports',
      description: 'High-level insights for leadership and stakeholders',
      frequency: 'Monthly'
    },
    {
      title: 'Campaign Performance Reports',
      description: 'Detailed analysis of individual marketing campaigns',
      frequency: 'Weekly'
    },
    {
      title: 'Website Analytics Reports',
      description: 'Comprehensive website performance and user behavior analysis',
      frequency: 'Monthly'
    },
    {
      title: 'Social Media Reports',
      description: 'Social media performance across all platforms',
      frequency: 'Monthly'
    },
    {
      title: 'ROI & Attribution Reports',
      description: 'Revenue attribution and return on investment analysis',
      frequency: 'Quarterly'
    },
    {
      title: 'Competitive Analysis Reports',
      description: 'Market position and competitive landscape insights',
      frequency: 'Quarterly'
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
                  Analytics & Reporting
                </h1>
                <p className="body-large text-ivory-mist">
                  Transform data into actionable insights with comprehensive analytics and reporting that drives smarter marketing decisions.
                </p>
                <p className="body-regular text-ivory-mist/90">
                  Our advanced analytics solutions provide the clarity you need to optimize performance and maximize ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-primary"
                  >
                    Get Data-Driven Insights
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button
                    onClick={() => onNavigate('pricing')}
                    className="btn-secondary border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
                  >
                    View Analytics Plans
                  </button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Analytics dashboard"
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
              Complete Analytics Solutions
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              From data collection to actionable insights, we provide comprehensive analytics services
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

      {/* Metrics Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Key Metrics We Track
            </h2>
            <p className="body-large text-charcoal-ink/80">
              Comprehensive tracking across all your marketing channels and touchpoints
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {metrics.map((category, index) => (
              <div key={index} className="card-flat p-6 hover:shadow-lg transition-all duration-300">
                <h3 className="heading-tertiary text-charcoal-ink mb-4">{category.category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brass-accent rounded-full"></div>
                      <span className="body-small text-charcoal-ink/80">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report Types Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Custom Reports & Dashboards
            </h2>
            <p className="body-large text-charcoal-ink/80">
              Tailored reporting solutions that provide the insights you need, when you need them
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((report, index) => (
              <div key={index} className="card-flat p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="heading-tertiary text-charcoal-ink">{report.title}</h3>
                  <span className="data-display text-sm text-brass-accent">{report.frequency}</span>
                </div>
                <p className="body-regular text-charcoal-ink/80">{report.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">
              Analytics Tools & Platforms
            </h2>
            <p className="body-large text-charcoal-ink/80">
              We work with industry-leading analytics platforms to provide comprehensive insights
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

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-8">
            The Power of Data-Driven Marketing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">5x</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Better ROI</div>
              <p className="body-regular text-charcoal-ink/80">Data-driven companies see 5x better ROI on marketing spend</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">73%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Faster Decisions</div>
              <p className="body-regular text-charcoal-ink/80">Faster decision-making with real-time insights</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">2.6x</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Revenue Growth</div>
              <p className="body-regular text-charcoal-ink/80">Higher revenue growth through data optimization</p>
            </div>
          </div>
          
          <div className="bg-signal-white rounded-2xl p-8 shadow-lg border border-brass-accent/20">
            <h3 className="heading-tertiary text-charcoal-ink mb-4">What Our Analytics Provide:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <PieChart className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Clear understanding of customer behavior</span>
              </div>
              <div className="flex items-center space-x-3">
                <Activity className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Real-time performance monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Actionable optimization recommendations</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Predictive insights for future planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="body-large text-ivory-mist mb-8">
            Let's build analytics solutions that turn your data into competitive advantage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-xl px-10 py-5"
            >
              Get Your Analytics Audit
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

export default AnalyticsReporting;