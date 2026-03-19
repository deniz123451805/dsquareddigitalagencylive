import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using Formspree — replace YOUR_FORM_ID with your actual Formspree endpoint ID
      // Sign up free at https://formspree.io and create a form to get your ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const services = [
    'Social Media Management',
    'SEO & Content Marketing',
    'Paid Advertising (Google/Facebook)',
    'Marketing Automation & AI',
    'Brand Strategy & Development',
    'Full-Service Digital Marketing',
    'Not Sure — Need Consultation'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-brass-accent mb-6">
            GET IN TOUCH
          </h1>
          <p className="heading-tertiary text-brass-accent mb-4">
            Help us get you noticed!
          </p>
          <p className="body-large text-ivory-mist max-w-4xl mx-auto">
            Contact us to enquire more as to how we can assist in your digital marketing needs.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="card-elevated p-8 lg:p-12">
                <h2 className="heading-secondary text-charcoal-ink mb-8">
                  Let's Start a Conversation
                </h2>

                {/* Success Message */}
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-green-800">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We'll get back to you within 1–2 business days.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-800">Something went wrong.</p>
                      <p className="text-red-700 text-sm">Please try again or email us directly at info@dsquareddigitalagency.com</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+61 4XX XXX XXX"
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="form-label">Services Needed *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        disabled={status === 'submitting'}
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">Tell us about your project *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Tell us about your business, goals, and how we can help you succeed..."
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="card-elevated p-8">
                  <h3 className="heading-tertiary text-charcoal-ink mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brass-accent rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-ivory-mist" />
                      </div>
                      <div>
                        <h4 className="body-regular font-semibold text-charcoal-ink">Email Us</h4>
                        <a
                          href="mailto:info@dsquareddigitalagency.com"
                          className="body-regular text-charcoal-ink/80 hover:text-brass-accent transition-colors"
                        >
                          info@dsquareddigitalagency.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brass-accent rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-ivory-mist" />
                      </div>
                      <div>
                        <h4 className="body-regular font-semibold text-charcoal-ink">Location</h4>
                        <p className="body-regular text-charcoal-ink/80">Melbourne, Australia</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brass-accent rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-ivory-mist" />
                      </div>
                      <div>
                        <h4 className="body-regular font-semibold text-charcoal-ink">Business Hours</h4>
                        <p className="body-regular text-charcoal-ink/80">Mon–Fri: 9:00 AM – 6:00 PM AEST</p>
                        <p className="body-regular text-charcoal-ink/80">Sat: 10:00 AM – 4:00 PM AEST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TidyCal Booking */}
                <div className="card-elevated p-8">
                  <h3 className="heading-tertiary text-charcoal-ink mb-4">Book a Free Strategy Session</h3>
                  <p className="body-regular text-charcoal-ink/80 mb-6">
                    Schedule a free 30-minute consultation to discuss your digital marketing goals.
                  </p>
                  <div className="tidycal-embed" data-path="dsquareddigitalagency/30-minute-meeting"></div>
                  <a
                    href="https://tidycal.com/dsquareddigitalagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full mt-4 flex items-center justify-center"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book a Session
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
