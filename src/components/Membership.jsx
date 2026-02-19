import React from 'react';
import './Membership.css';

const Membership = ({ t }) => {
    const plans = [
        {
            ...t.membership.plans[0],
            price: '$29',
            period: t.membership.period,
        },
        {
            ...t.membership.plans[1],
            price: '$59',
            period: t.membership.period,
        },
        {
            ...t.membership.plans[2],
            price: '$99',
            period: t.membership.period,
        }
    ];

    return (
        <section className="membership-section" id="membership">
            <div className="container">
                <h2 className="section-title text-center">{t.membership.title} <span className="highlight-text">{t.membership.highlight}</span></h2>
                <div className="plans-container">
                    {plans.map((plan, index) => (
                        <div className="plan-card" key={index}>
                            <div className="card-content-left">
                                <div className="plan-header-badge">
                                    <h3 className="plan-name">{plan.name}</h3>
                                </div>
                                <ul className="plan-features">
                                    {plan.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon">
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-content-right">
                                <div className="plan-price-wrapper">
                                    <div className="plan-price">
                                        <span className="currency">$</span>
                                        <span className="amount">{plan.price.replace('$', '')}</span>
                                    </div>
                                    <div className="period">{plan.period}</div>
                                </div>

                                <a
                                    href={`https://wa.me/+593983897277?text=Hola,%20me%20interesa%20el%20plan%20${plan.name}%20de%20Wolf's%20Center%20Gym`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-whatsapp"
                                >
                                    {t.membership.choose}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Membership;
