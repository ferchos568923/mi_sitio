import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('es'); // Default to Spanish as per context of request
  const t = translations[language];

  return (
    <div className="App">
      <Navbar t={t} language={language} setLanguage={setLanguage} />
      <Hero t={t} />
      <Features t={t} />
      <Classes t={t} />
      <Membership t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
