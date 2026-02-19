import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ t }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Construct WhatsApp message
        const waNumber = "1234567890"; // Replace with real number
        const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const url = `https://wa.me/${waNumber}?text=${text}`;

        window.open(url, '_blank');
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title text-center">
                    {t.contact.title} <span className="highlight-text">{t.contact.highlight}</span>
                </h2>

                <div className="contact-grid">
                    {/* Form Side */}
                    <div className="contact-col">
                        <form onSubmit={handleSubmit} className="contact-form-wrapper">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={t.contact.name}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder={t.contact.email}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder={t.contact.message}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">
                                {t.contact.send}
                            </button>
                        </form>
                    </div>

                    {/* Map Side */}
                    <div className="contact-col location-col">
                        <h3 className="location-title">{t.contact.location}</h3>
                        <div className="map-container">
                            <iframe
                                src="https://maps.google.com/maps?q=-0.123504,-78.467241&hl=es&z=17&output=embed"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
