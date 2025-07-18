import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface WhyUsSectionProps {
  heading?: string;
  features: Feature[];
}

export const defaultFeatures: Feature[] = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: 'Special Financing Offers',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2" viewBox="0 0 24 24">
        <path d="M12 2l2 7h7l-5.5 4 2 7-5.5-4-5.5 4 2-7L3 9h7z" />
      </svg>
    ),
    title: 'Trusted Car Dealership',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="7" rx="2" />
        <path d="M16 11V7a4 4 0 0 0-8 0v4" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="7" rx="2" />
        <circle cx="7.5" cy="16.5" r="1.5" />
        <circle cx="16.5" cy="16.5" r="1.5" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Expert Car Service',
    description: 'Our stress-free finance department that can find financial solutions to save you money.',
  },
];

const WhyUsSection: React.FC<WhyUsSectionProps> = ({ heading = 'Why Choose Us?', features }) => {
  return (
    <section className="py-5">
      <div className="container">
        {heading && <h2 className="text-center fw-bold mb-5">{heading}</h2>}
        <div className="row justify-content-center">
          {features.map((feature, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3 mb-4 d-flex align-items-stretch">
              <div className="w-100 text-center px-3">
                <div className="d-flex flex-column align-items-center mb-2">
                  {feature.icon}
                </div>
                <h5 className="fw-bold mb-2">{feature.title}</h5>
                <p className="text-muted small mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

WhyUsSection.defaultProps = {
  heading: 'Why Choose Us?',
  features: defaultFeatures,
};

export default WhyUsSection; 