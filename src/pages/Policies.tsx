import React from 'react';
import { useNavigate } from 'react-router-dom';

const Policies: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen section-padding bg-ivory-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="heading-primary text-charcoal-ink mb-8">Policies</h1>
        <p className="body-large text-charcoal-ink/80 mb-8">Our privacy policy, terms of service, and cookie policy govern your use of DsquaredDigital’s website and services.</p>
        <button onClick={() => navigate('/')} className="btn-primary">Back to Home</button>
      </div>
    </div>
  );
};

export default Policies;
