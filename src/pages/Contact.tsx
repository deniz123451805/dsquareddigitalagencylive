import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    {/* CONTACT FORM CONFIGURATION: Updated to send to info@dsquareddigitalagency.com */}
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission - ${formData.service || 'General Inquiry'}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service Needed: ${formData.service}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:info@dsquareddigitalagency.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    alert('Thank you for your message! Your email client will open to send your inquiry.');
  };

  const services = [
    'Social Media Management',
    'SEO & Content Marketing',
    'Paid Advertising (Google/Facebook)',
    'Marketing Automation & AI',
    'Brand Strategy & Development',
    'Full-Service Digital Marketing',
    'Not Sure - Need Consultation'
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
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="form-label">
                        Services Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Tell us about your business, goals, and how we can help you succeed..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="space-y-8">
                {/* Contact Details */}
                <div className="card-elevated p-8">
                  <h3 className="heading-tertiary text-charcoal-ink mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brass-accent rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-ivory-mist" />
                      </div>
                      <div>
                        <h4 className="body-regular font-semibold text-charcoal-ink">Email Us</h4>
                        <p className="body-regular text-charcoal-ink/80">info@dsquareddigitalagency.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brass-accent rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-ivory-mist" />
                      </div>
                      <div>
                        <h4 className="body-regular font-semibold text-charcoal-ink">Call Us</h4>
                        <p className="body-regular text-charcoal-ink/80">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brass-accent rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-ivory-mist" />
                      </div>
                      <div>
                        <h4 className="body-regular font-semibold text-charcoal-ink">Business Hours</h4>
                        <p className="body-regular text-charcoal-ink/80">Mon-Fri: 9:00 AM - 6:00 PM</p>
                        <p className="body-regular text-charcoal-ink/80">Sat: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* TidyCal Integration Placeholder */}
                <div className="card-elevated p-8">
                  <h3 className="heading-tertiary text-charcoal-ink mb-4">
                    Schedule a Consultation
                  </h3>
                  <p className="body-regular text-charcoal-ink/80 mb-6">
                    Book a free 30-minute strategy session to discuss your digital marketing goals.
                  </p>
                  <div className="tidycal-embed" data-path="dsquareddigitalagency"></div>
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