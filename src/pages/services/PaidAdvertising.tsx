import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const PaidAdvertising: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <section className="section-padding bg-charcoal-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-primary text-brass-accent mb-6">Paid Advertising</h1>
          <p className="body-large text-ivory-mist max-w-4xl mx-auto">Drive immediate results with strategic paid advertising campaigns across Google, Facebook, LinkedIn, and other platforms.</p>
        </div>
      </section>
      <section className="section-padding bg-gradient-to-br from-ivory-mist to-signal-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {['Google Ads Management', 'Facebook & Instagram Advertising', 'LinkedIn B2B Campaigns', 'Campaign Strategy & Optimisation', 'Landing Page Development', 'ROI Tracking & Reporting'].map((item, i) => (
              <div key={i} className="card-elevated p-6">
                <p className="body-regular font-semibold text-charcoal-ink">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate('/contact')} className="btn-primary">Get Started <ArrowRight className="ml-2 h-5 w-5" /></button>
            <button onClick={() => navigate('/services')} className="btn-secondary"><ArrowLeft className="mr-2 h-5 w-5" /> Back to Services</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaidAdvertising;
