import React from 'react';
import './Features.css';

const Features = ({ t }) => {
    const getIcon = (index) => {
        switch (index) {
            case 0:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 16.326A7 7 0 1 1 15.68 8h1.9c1.66 0 3 1.34 3 3V15c0 1.66-1.34 3-3 3h-8c-1.66 0-3-1.34-3-3v-5c0-1.66 1.34-3 3-3h.03M6 16.326a6 7 0 1 0 10.32-6M10 16V10M14 16V10" />
                    </svg>
                );
            case 1:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
            case 2:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="10" width="20" height="8" rx="2" ry="2" />
                        <path d="M8 22v-4a2 0 0 1 2-2h4a2 0 0 1 2 2v4M12 2v8" />
                    </svg>
                );
            case 3:
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                );
            default: return null;
        }
    };

    return (
        <section className="features-section" id="features">
            <div className="container">
                <h2 className="section-title">
                    {t.features.title} <span className="highlight">Wolf's Center Gym</span>
                </h2>
                <div className="features-grid">
                    {t.features.items.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">
                                {getIcon(index)}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
