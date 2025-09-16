import React from 'react';
import { ArrowLeft, Shield, FileText, Search, Cookie } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'pricing' | 'blog' | 'contact' | 'policies';

interface PoliciesProps {
  onNavigate: (page: Page) => void;
}

const Policies: React.FC<PoliciesProps> = ({ onNavigate }) => {
  const [activePolicy, setActivePolicy] = React.useState<string>('privacy');

  const policies = [
    { id: 'privacy', name: 'Privacy Policy', icon: Shield },
    { id: 'terms', name: 'Terms of Service', icon: FileText },
    { id: 'search', name: 'Search Policy', icon: Search },
    { id: 'cookies', name: 'Cookie Policy', icon: Cookie }
  ];

  const renderPolicyContent = () => {
    switch (activePolicy) {
      case 'privacy':
        return (
          <div className="space-y-6">
            <h2 className="heading-secondary text-charcoal-ink">Privacy Policy</h2>
            <p className="body-regular text-charcoal-ink/80">Last updated: January 2024</p>
            
            <div className="space-y-6">
              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Information We Collect</h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  subscribe to our newsletter, or contact us for support.
                </p>
                <ul className="space-y-2 body-regular text-charcoal-ink/80">
                  <li>• Personal information (name, email address, phone number)</li>
                  <li>• Business information (company name, industry, website)</li>
                  <li>• Communication preferences and marketing data</li>
                  <li>• Usage data and analytics information</li>
                </ul>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">How We Use Your Information</h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="space-y-2 body-regular text-charcoal-ink/80">
                  <li>• To provide and deliver our digital marketing services</li>
                  <li>• To send you technical notices and support messages</li>
                  <li>• To communicate with you about products, services, and events</li>
                  <li>• To monitor and analyze trends and usage</li>
                </ul>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Information Sharing</h3>
                <p className="body-regular text-charcoal-ink/80">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy or as required by law.
                </p>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Data Security</h3>
                <p className="body-regular text-charcoal-ink/80">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Contact Us</h3>
                <p className="body-regular text-charcoal-ink/80">
                  If you have any questions about this Privacy Policy, please contact us at 
                  info@dsquareddigitalagency.com.
                </p>
              </section>
            </div>
          </div>
        );

      case 'terms':
        return (
          <div className="space-y-6">
            <h2 className="heading-secondary text-charcoal-ink">Terms of Service</h2>
            <p className="body-regular text-charcoal-ink/80">Last updated: January 2024</p>
            
            <div className="space-y-6">
              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Acceptance of Terms</h3>
                <p className="body-regular text-charcoal-ink/80">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Service Description</h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">
                  DsquaredDigital provides digital marketing services including:
                </p>
                <ul className="space-y-2 body-regular text-charcoal-ink/80">
                  <li>• Social media management and advertising</li>
                  <li>• Search engine optimization (SEO)</li>
                  <li>• Pay-per-click (PPC) advertising</li>
                  <li>• Marketing automation and AI solutions</li>
                  <li>• Brand strategy and development</li>
                </ul>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Client Responsibilities</h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">
                  Clients agree to:
                </p>
                <ul className="space-y-2 body-regular text-charcoal-ink/80">
                  <li>• Provide accurate and complete information</li>
                  <li>• Respond to requests for information in a timely manner</li>
                  <li>• Comply with all applicable laws and regulations</li>
                  <li>• Pay all fees according to the agreed schedule</li>
                </ul>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Limitation of Liability</h3>
                <p className="body-regular text-charcoal-ink/80">
                  Our liability for any claim arising from our services shall not exceed the amount 
                  paid by the client for the specific services giving rise to the claim.
                </p>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Termination</h3>
                <p className="body-regular text-charcoal-ink/80">
                  Either party may terminate services with 30 days written notice. Upon termination, 
                  all outstanding fees become immediately due and payable.
                </p>
              </section>
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="space-y-6">
            <h2 className="heading-secondary text-charcoal-ink">Search Policy</h2>
            <p className="body-regular text-charcoal-ink/80">Last updated: January 2024</p>
            
            <div className="space-y-6">
              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Search Functionality</h3>
                <p className="body-regular text-charcoal-ink/80">
                  Our website includes search functionality to help you find relevant content, 
                  services, and information quickly and efficiently.
                </p>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Search Data Collection</h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">
                  When you use our search features, we may collect:
                </p>
                <ul className="space-y-2 body-regular text-charcoal-ink/80">
                  <li>• Search queries and terms</li>
                  <li>• Search results clicked</li>
                  <li>• Time and date of searches</li>
                  <li>• Device and browser information</li>
                </ul>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Use of Search Data</h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">
                  We use search data to:
                </p>
                <ul className="space-y-2 body-regular text-charcoal-ink/80">
                  <li>• Improve search functionality and relevance</li>
                  <li>• Understand user needs and preferences</li>
                  <li>• Enhance website content and structure</li>
                  <li>• Provide better user experience</li>
                </ul>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Search Privacy</h3>
                <p className="body-regular text-charcoal-ink/80">
                  Search queries are not linked to personal information unless you are logged into 
                  your account. We do not share individual search data with third parties.
                </p>
              </section>
            </div>
          </div>
        );

      case 'cookies':
        return (
          <div className="space-y-6">
            <h2 className="heading-secondary text-charcoal-ink">Cookie Policy</h2>
            <p className="body-regular text-charcoal-ink/80">Last updated: January 2024</p>
            
            <div className="space-y-6">
              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">What Are Cookies</h3>
                <p className="body-regular text-charcoal-ink/80">
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better experience by remembering your preferences.
                </p>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Types of Cookies We Use</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-charcoal-ink mb-2">Essential Cookies</h4>
                    <p className="body-regular text-charcoal-ink/80">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-ink mb-2">Analytics Cookies</h4>
                    <p className="body-regular text-charcoal-ink/80">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-ink mb-2">Marketing Cookies</h4>
                    <p className="body-regular text-charcoal-ink/80">
                      Used to track visitors across websites to display relevant advertisements.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Managing Cookies</h3>
                <p className="body-regular text-charcoal-ink/80 mb-4">
                  You can control cookies through your browser settings:
                </p>
                <ul className="space-y-2 body-regular text-charcoal-ink/80">
                  <li>• Block all cookies</li>
                  <li>• Allow only first-party cookies</li>
                  <li>• Delete cookies when you close your browser</li>
                  <li>• Get notified when cookies are set</li>
                </ul>
              </section>

              <section>
                <h3 className="heading-tertiary text-charcoal-ink mb-4">Third-Party Cookies</h3>
                <p className="body-regular text-charcoal-ink/80">
                  We may use third-party services like Google Analytics and social media plugins 
                  that set their own cookies. Please refer to their privacy policies for more information.
                </p>
              </section>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-ivory-mist">
      {/* Header */}
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="text-brass-accent hover:text-brass-600 mb-8 inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </button>
          
          <div className="text-center">
            <h1 className="heading-primary text-brass-accent mb-6">
              Legal Policies
            </h1>
            <p className="body-large text-ivory-mist max-w-3xl mx-auto">
              Our commitment to transparency and legal compliance
            </p>
          </div>
        </div>
      </section>

      {/* Policy Navigation */}
      <section className="py-8 bg-signal-white border-b border-charcoal-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {policies.map((policy) => {
              const IconComponent = policy.icon;
              return (
                <button
                  key={policy.id}
                  onClick={() => setActivePolicy(policy.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activePolicy === policy.id
                      ? 'bg-brass-accent text-ivory-mist'
                      : 'bg-charcoal-ink/10 text-charcoal-ink hover:bg-charcoal-ink/20'
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {policy.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section-padding bg-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-elevated p-8 lg:p-12">
            {renderPolicyContent()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;