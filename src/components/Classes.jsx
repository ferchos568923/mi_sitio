import React from 'react';
import './Classes.css';

const Classes = ({ t }) => {
    const images = [
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1599447421405-0b320d7a8b93?auto=format&fit=crop&q=80&w=1350',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1350',
        'https://images.unsplash.com/photo-1517963879466-e9b5ce43f17d?auto=format&fit=crop&q=80&w=1350'
    ];

    const classes = t.classes.items.map((item, index) => ({
        ...item,
        image: images[index]
    }));

    return (
        <section className="classes-section" id="classes">
            <div className="container">
                <h2 className="section-title text-center">{t.classes.title} <span className="highlight-text">{t.classes.highlight}</span></h2>
                <div className="classes-grid">
                    {classes.map((item, index) => (
                        <div className="class-card" key={index} style={{ backgroundImage: `url(${item.image})` }}>
                            <div className="class-overlay">
                                <h3 className="class-name">{item.name}</h3>
                                <p className="class-time">{item.time}</p>
                                <button className="btn btn-primary btn-sm">{t.classes.join}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
