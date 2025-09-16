import React from 'react';
import { ArrowRight, Star, Users, TrendingUp, Award, Play, CheckCircle, Quote, Shield, Clock, Target } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const benefits = [
    {
      icon: Target,
      title: 'Targeted Growth',
      description: 'Precision-targeted campaigns that reach your ideal customers and drive qualified leads'
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Data-driven strategies with clear ROI tracking and transparent performance reporting'
    },
    {
      icon: Shield,
      title: 'Proven Expertise',
      description: '5+ years of experience helping businesses dominate their digital markets'
    },
    {
      icon: Clock,
      title: 'Fast Implementation',
      description: 'Quick setup and rapid results - see improvements in your first 30 days'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CEO',
      content: 'DsquaredDigital transformed our online presence completely. Our leads increased by 400% in just 3 months!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'The ROI we\'ve seen is incredible. Best investment we\'ve made in our marketing efforts.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Retail Plus',
      role: 'Owner',
      content: 'Professional, results-driven, and always available. They truly care about our success.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const services = [
    {
      title: 'Social Media Mastery',
      description: 'Build engaged communities and convert followers into customers',
      features: ['Content Strategy', 'Community Management', 'Paid Social Ads']
    },
    {
      title: 'Search Domination',
      description: 'Dominate Google search results and drive qualified traffic',
      features: ['SEO Optimization', 'Google Ads', 'Local Search']
    },
    {
      title: 'AI Automation',
      description: 'Streamline operations with intelligent marketing automation',
      features: ['Lead Nurturing', 'Email Automation', 'Analytics']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with hero1.mp4 Video */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Hero Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source src="/src/components/hero1.mp4" type="video/mp4" />
            {/* Fallback image for slow connections */}
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Professional business environment"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-charcoal-ink/50"></div>
        </div>
        
        <div className="relative container-luxury w-full">
          <div className="flex items-center justify-start min-h-screen py-20">
            {/* Main Headline - Left Aligned */}
            <div className="max-w-3xl">
              <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-ivory-mist leading-tight tracking-tight text-left">
                If you don't exist online,
                <span className="text-brass-accent block">do you really exist?</span>
              </h1>
              
              {/* Primary CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-primary text-lg px-8 py-4 transform hover:scale-105 shadow-2xl"
                >
                  Get Your FREE Strategy Session
                  <ArrowRight className="ml-2 h-6 w-6" />
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="btn-secondary text-lg px-8 py-4 border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
                >
                  Discover Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 bg-signal-white border-b border-charcoal-ink/10">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-center">
            <div className="flex items-center space-x-2 text-charcoal-ink/80">
              <Shield className="h-5 w-5 text-brass-accent" />
              <span className="font-semibold">Trusted by 20+ Businesses</span>
            </div>
            <div className="flex items-center space-x-2 text-charcoal-ink/80">
              <Award className="h-5 w-5 text-brass-accent" />
              <span className="font-semibold">5+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 text-charcoal-ink/80">
              <Star className="h-5 w-5 text-brass-accent fill-current" />
              <span className="font-semibold">4.9/5 Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="container-luxury text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-6">
            Transform Your Business Into a Digital Powerhouse
          </h2>
          <p className="body-large text-charcoal-ink/80 max-w-4xl mx-auto mb-12">
            Stop letting your competitors steal your customers. We help ambitious businesses dominate their markets 
            through strategic digital marketing that delivers measurable results.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">300%</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Average ROI</div>
              <p className="body-regular text-charcoal-ink/80">Our clients see significant returns on investment</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">30 Days</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">To Results</div>
              <p className="body-regular text-charcoal-ink/80">See improvements in your first month</p>
            </div>
            <div className="text-center">
              <div className="data-display text-4xl text-brass-accent mb-2">24/7</div>
              <div className="heading-tertiary text-charcoal-ink mb-2">Support</div>
              <p className="body-regular text-charcoal-ink/80">Always available when you need us</p>
            </div>
          </div>
          
          <div className="bg-signal-white rounded-2xl p-8 shadow-lg border border-brass-accent/20">
            <h3 className="heading-tertiary text-charcoal-ink mb-4">Why Smart Businesses Choose Us:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Proven strategies that actually work</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Transparent reporting and ROI tracking</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">Dedicated account management</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-brass-accent flex-shrink-0" />
                <span className="body-regular text-charcoal-ink/80">AI-powered automation and optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Removed stats section as requested */}
      <section className="section-padding bg-signal-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-6">
              Our Winning Formula for Digital Success
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              Three core services that work together to dominate your market and 
              turn your website into a 24/7 sales machine.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-flat p-8 hover:shadow-xl transition-all duration-300 group text-center">
                <h3 className="heading-tertiary text-charcoal-ink mb-4 group-hover:text-brass-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="body-regular text-charcoal-ink/80 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-brass-accent flex-shrink-0" />
                      <span className="body-regular text-charcoal-ink/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-brass-accent font-semibold hover:text-brass-600 transition-colors duration-300 inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="btn-primary text-lg px-8 py-4"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-6">
              Why Smart Businesses Choose DsquaredDigital
            </h2>
            <p className="body-large text-charcoal-ink/80 max-w-3xl mx-auto">
              We don't just run campaigns – we build digital empires that generate consistent, 
              predictable revenue for your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-elevated p-8 text-center group hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-ivory-mist" />
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-4 group-hover:text-brass-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="body-regular text-charcoal-ink/80 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Social Proof */}
      <section className="section-padding bg-signal-white">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-6">
              What Our Clients Say About Working With Us
            </h2>
            <p className="body-large text-charcoal-ink/80">
              Don't just take our word for it – hear from businesses that have transformed their growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elevated p-8 relative text-center">
                <Quote className="h-8 w-8 text-brass-accent/30 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-brass-accent fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="body-regular text-charcoal-ink/80 mb-6 italic text-center">
                  "{testimonial.content}"
                </p>
                
                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brass-accent/30"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-charcoal-ink">{testimonial.name}</div>
                    <div className="text-sm text-charcoal-ink/70">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-charcoal-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-ink to-charcoal-900"></div>
        <div className="relative container-luxury text-center">
          <h2 className="heading-secondary text-ivory-mist mb-6">
            Ready to 10X Your Business Growth?
          </h2>
          <p className="body-large text-ivory-mist/90 mb-8 max-w-3xl mx-auto">
            Stop letting your competitors steal your customers. Book a free strategy session today and 
            discover exactly how we'll transform your business into a digital revenue machine.
          </p>
          
          {/* Urgency Element */}
          <div className="inline-flex items-center bg-brass-accent/20 border border-brass-accent/30 rounded-full px-6 py-3 mb-8">
            <Clock className="h-5 w-5 text-brass-accent mr-2" />
            <span className="text-brass-accent font-semibold">Limited Time: FREE Strategy Session (Value: $500)</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="btn-primary text-lg px-8 py-4 transform hover:scale-105 shadow-2xl"
            >
              Claim Your FREE Strategy Session
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="btn-secondary text-lg px-8 py-4 border-ivory-mist text-ivory-mist hover:bg-ivory-mist hover:text-charcoal-ink"
            >
              View Investment Options
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8 pt-8 border-t border-brass-accent/30">
            <div className="flex items-center space-x-2 text-ivory-mist/80">
              <Shield className="h-5 w-5 text-brass-accent" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2 text-ivory-mist/80">
              <Clock className="h-5 w-5 text-brass-accent" />
              <span>Results in 30 Days or Less</span>
            </div>
            <div className="flex items-center space-x-2 text-ivory-mist/80">
              <Award className="h-5 w-5 text-brass-accent" />
              <span>5+ Years Proven Track Record</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;