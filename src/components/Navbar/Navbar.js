import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ currentSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Головна' },
    { id: 'services', label: 'Послуги' },
    { id: 'orders', label: 'Замовлення' },
    { id: 'contact', label: 'Контакти' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
            <span className="logo-accent">Pix</span>
            <span className="logo-text"> Software</span>
        </motion.div>

        <div className="nav-menu">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
              onClick={() => {
                scrollToSection(item.id);
                setIsOpen(false);
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <motion.div
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`mobile-nav-link ${currentSection === item.id ? 'active' : ''}`}
            onClick={() => {
              scrollToSection(item.id);
              setIsOpen(false);
            }}
            whileHover={{ x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.button>
        ))}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
