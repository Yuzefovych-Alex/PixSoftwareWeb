import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheck } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Телефон',
      value: '+380 (99) 123-45-67',
      link: 'tel:+380991234567'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'info@company.com',
      link: 'mailto:info@company.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Адреса',
      value: 'м. Київ, вул. Хрещатик, 1',
      link: '#'
    },
    {
      icon: <FaClock />,
      title: 'Робочі години',
      value: 'Пн-Пт: 9:00 - 18:00',
      link: '#'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут можна додати логіку відправки форми
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Скидання форми через 3 секунди
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">
            Зв'яжіться з <span className="title-accent">Нами</span>
          </h2>
          <p className="contact-subtitle">
            Готові обговорити ваш проект? Зв'яжіться з нами для безкоштовної консультації
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="info-title">Контактна інформація</h3>
            <p className="info-description">
              Наша команда завжди готова відповісти на ваші запитання та допомогти з реалізацією проектів.
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Слідкуйте за нами</h4>
              <div className="social-icons">
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>📘</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>📷</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>🐦</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span>💼</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-wrapper">
              <h3 className="form-title">Надішліть повідомлення</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="success-message"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">
                    <FaCheck />
                  </div>
                  <h4>Дякуємо за повідомлення!</h4>
                  <p>Ми зв'яжемося з вами найближчим часом.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Ім'я *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Ваше ім'я"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Телефон</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+380 (99) 123-45-67"
                      />
                    </div>
                    <div className="form-group">
                      <label>Тема *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Тема повідомлення"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Повідомлення *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      placeholder="Опишіть ваш проект або запитання..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="submit-btn"
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPaperPlane /> Надіслати повідомлення
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          className="map-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="map-placeholder">
            <div className="map-content">
              <FaMapMarkerAlt className="map-icon" />
              <h4>Наше розташування</h4>
              <p>м. Київ, вул. Хрещатик, 1</p>
              <button className="map-btn">Відкрити на карті</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
