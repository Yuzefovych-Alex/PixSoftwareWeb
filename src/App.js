import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Servicess/Services';
import OrderTable from './components/OrderTable/OrderTable';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="App">
      <Navbar currentSection={currentSection} scrollToSection={scrollToSection} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="orders">
          <OrderTable />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </motion.div>
    </div>
  );
}

export default App;


