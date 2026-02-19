import React from 'react';
import './Hero.css';

const Hero = ({ t }) => {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">
                    {t.hero.title} <br />
                    <span className="text-highlight">{t.hero.highlight}</span>
                </h1>
                <p className="hero-subtitle">
                    {t.hero.subtitle}
                </p>
                <div className="hero-buttons">
                    <a href="#membership" className="btn btn-primary">{t.hero.start}</a>
                    <a href="#classes" className="btn btn-outline">{t.hero.explore}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
