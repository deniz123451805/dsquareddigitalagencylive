import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Target, Users, Lightbulb, Award } from 'lucide-react';

const About: React.FC = () => {
  const navigate = useNavigate();

  const values = [
    { icon: Target, title: 'Results-Driven', description: 'Every strategy is crafted with measurable outcomes and ROI in mind' },
    { icon: Users, title: 'Client-Centric', description: 'Your success is our success. We partner with you for long-term growth' },
    { icon: Lightbulb, title: 'Innovation First', description: 'Leveraging cutting-edge AI and automation for competitive advantage' },
    { icon: Award, title: 'Premium Quality', description: 'Boutique service quality with enterprise-level expertise' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h1 className="heading-primary text-brass-accent">About us</h1>
              <p className="body-large text-ivory-mist">Dsquared Digital is a boutique digital marketing agency that caters to most digital marketing needs in the AI age.</p>
              <p className="body-regular text-ivory-mist/90">We specialise in creating comprehensive digital strategies that help businesses establish a powerful online presence and achieve sustainable growth in today’s competitive digital landscape.</p>
              <button onClick={() => navigate('/contact')} className="btn-primary">
                Contact us here! <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="lg:col-span-6 mt-12 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-brass-accent/20 rounded-3xl blur-3xl"></div>
                <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional office environment" className="relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl border-2 border-brass-accent/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-charcoal-ink mb-8">Our Mission</h2>
          <p className="heading-tertiary text-brass-accent mb-6">get noticed — be good at marketing</p>
          <p className="body-large text-charcoal-ink/80">We believe that every business deserves to shine in the digital world. Our mission is to help you cut through the noise, connect with your ideal customers, and build a brand that commands attention and drives results.</p>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-secondary text-charcoal-ink mb-4">What Drives Us</h2>
            <p className="body-large text-charcoal-ink/80">Our core values that guide every client relationship and campaign we create</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elevated p-8 group text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brass-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-ivory-mist" />
                </div>
                <h3 className="heading-tertiary text-charcoal-ink mb-3 group-hover:text-brass-accent transition-colors duration-300">{value.title}</h3>
                <p className="body-regular text-charcoal-ink/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6 mb-12 lg:mb-0">
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital marketing strategy session" className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-xl border-2 border-brass-accent/30" />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <h2 className="heading-secondary text-charcoal-ink">Expertise That Delivers</h2>
              <p className="body-large text-charcoal-ink/80">With experience across the digital marketing landscape, we’ve helped businesses achieve remarkable growth through strategic, data-driven campaigns.</p>
              <div className="space-y-4">
                {['AI-powered marketing automation and personalisation', 'Advanced SEO and SEM strategies that drive qualified traffic', 'Social media campaigns that build communities and convert', 'Comprehensive analytics and performance optimisation', 'Brand strategy and positioning for market leadership'].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-brass-accent rounded-full mt-3"></div>
                    <p className="body-regular text-charcoal-ink/80">{item}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/services')} className="btn-primary">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-secondary text-brass-accent mb-6">Ready to Get Noticed?</h2>
          <p className="body-large text-ivory-mist mb-8">Let’s discuss how we can help your business establish a commanding presence in the digital sphere.</p>
          <button onClick={() => navigate('/contact')} className="btn-primary text-xl px-10 py-5">
            Let’s Talk Strategy <ArrowRight className="ml-3 h-6 w-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
