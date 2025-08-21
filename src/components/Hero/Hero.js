import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaStar, FaCheckCircle, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2
    }));
    setParticles(newParticles);
  }, []);

  const features = [
    { icon: <FaRocket />, text: 'Швидке виконання' },
    { icon: <FaStar />, text: 'Висока якість' },
    { icon: <FaCheckCircle />, text: 'Гарантія результату' }
  ];

  return (
    <div className="hero">
      {/* Background particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="title-accent">Pix</span>
              Software
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Ми надаємо високоякісні послуги з гарантованим результатом. 
            Ваші замовлення виконуються вчасно та з дотриманням всіх стандартів якості.
          </motion.p>

          <motion.div
            className="hero-features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-text">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="btn-primary"
              onClick={() => scrollToSection('orders')}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Замовити Послугу
            </motion.button>
            
            <motion.button
              className="btn-secondary"
              onClick={() => scrollToSection('services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Дізнатися Більше
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="visual-container">
            <div className="gradient-circle"></div>
            <div className="floating-card card-1">
              <div className="card-icon">🚀</div>
              <div className="card-text">Швидко</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">⭐</div>
              <div className="card-text">Якісно</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">💎</div>
              <div className="card-text">Надійно</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={() => scrollToSection('services')}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowDown />
        </motion.div>
        <span>Прокрутіть вниз</span>
      </motion.div>
    </div>
  );
};

export default Hero;
