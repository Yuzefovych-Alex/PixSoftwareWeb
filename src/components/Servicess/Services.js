import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaSearch, FaChartLine, FaShieldAlt, FaArrowRight, FaTimes } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-development',
      icon: <FaCode />,
      title: 'Веб-розробка',
      shortDescription: 'Створення сучасних веб-сайтів та веб-додатків',
      description: 'Ми створюємо високоякісні веб-рішення, які допомагають бізнесу зростати в цифровому світі.',
      features: ['React/Next.js', 'Node.js/Express', 'Бази даних', 'API інтеграція'],
      details: {
        technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'MySQL', 'MongoDB'],
        process: [
          'Аналіз вимог та планування',
          'Дизайн інтерфейсу',
          'Розробка функціоналу',
          'Тестування та оптимізація',
          'Запуск та підтримка'
        ],
        benefits: [
          'Сучасні технології',
          'Адаптивний дизайн',
          'SEO оптимізація',
          'Швидка завантаження',
          'Безпека даних'
        ],
        pricing: {
          basic: 'від 50,000 грн',
          standard: 'від 100,000 грн',
          premium: 'від 200,000 грн'
        }
      }
    },
    {
      id: 'mobile-apps',
      icon: <FaMobile />,
      title: 'Мобільні додатки',
      shortDescription: 'Розробка нативних та крос-платформних додатків',
      description: 'Створюємо інноваційні мобільні додатки для iOS та Android, які завойовують серця користувачів.',
      features: ['React Native', 'Flutter', 'Swift/Kotlin', 'Push-повідомлення'],
      details: {
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'],
        process: [
          'Концепція та прототипування',
          'UI/UX дизайн',
          'Розробка функціоналу',
          'Тестування на пристроях',
          'Публікація в магазинах'
        ],
        benefits: [
          'Крос-платформність',
          'Нативна продуктивність',
          'Офлайн функціонал',
          'Push-повідомлення',
          'Аналітика користувачів'
        ],
        pricing: {
          basic: 'від 80,000 грн',
          standard: 'від 150,000 грн',
          premium: 'від 300,000 грн'
        }
      }
    },
    {
      id: 'ui-ux-design',
      icon: <FaPalette />,
      title: 'UI/UX Дизайн',
      shortDescription: 'Створення красивих та функціональних інтерфейсів',
      description: 'Розробляємо інтуїтивні та привабливі інтерфейси, які покращують користувацький досвід.',
      features: ['Figma/Sketch', 'Прототипування', 'Анімації', 'Адаптивний дизайн'],
      details: {
        technologies: ['Figma', 'Sketch', 'Adobe XD', 'InVision', 'Principle'],
        process: [
          'Дослідження користувачів',
          'Створення персонажів',
          'Інформаційна архітектура',
          'Візуальний дизайн',
          'Прототипування та тестування'
        ],
        benefits: [
          'Збільшення конверсії',
          'Покращення UX',
          'Брендинг',
          'Адаптивність',
          'Доступність'
        ],
        pricing: {
          basic: 'від 30,000 грн',
          standard: 'від 60,000 грн',
          premium: 'від 120,000 грн'
        }
      }
    },
    {
      id: 'seo-optimization',
      icon: <FaSearch />,
      title: 'SEO Оптимізація',
      shortDescription: 'Покращення видимості сайту в пошукових системах',
      description: 'Підвищуємо позиції вашого сайту в пошукових системах та збільшуємо органічний трафік.',
      features: ['Технічне SEO', 'Контент-маркетинг', 'Аналітика', 'Локальне SEO'],
      details: {
        technologies: ['Google Analytics', 'Search Console', 'Ahrefs', 'SEMrush', 'Yoast SEO'],
        process: [
          'SEO аудит сайту',
          'Технічна оптимізація',
          'Робота з контентом',
          'Побудова посилань',
          'Моніторинг результатів'
        ],
        benefits: [
          'Збільшення трафіку',
          'Покращення позицій',
          'Цільова аудиторія',
          'Довгострокові результати',
          'ROI відстеження'
        ],
        pricing: {
          basic: 'від 15,000 грн/міс',
          standard: 'від 25,000 грн/міс',
          premium: 'від 50,000 грн/міс'
        }
      }
    },
    {
      id: 'digital-marketing',
      icon: <FaChartLine />,
      title: 'Цифровий маркетинг',
      shortDescription: 'Комплексні маркетингові стратегії для зростання',
      description: 'Розробляємо ефективні маркетингові стратегії, які приносять реальні результати вашому бізнесу.',
      features: ['SMM', 'Google Ads', 'Email-маркетинг', 'Контент-стратегія'],
      details: {
        technologies: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot', 'Google Analytics'],
        process: [
          'Аналіз ринку та конкурентів',
          'Визначення цільової аудиторії',
          'Розробка стратегії',
          'Запуск кампаній',
          'Оптимізація та масштабування'
        ],
        benefits: [
          'Збільшення продажів',
          'Покращення брендингу',
          'Висока конверсія',
          'Швидкі результати',
          'Детальна аналітика'
        ],
        pricing: {
          basic: 'від 20,000 грн/міс',
          standard: 'від 40,000 грн/міс',
          premium: 'від 80,000 грн/міс'
        }
      }
    },
    {
      id: 'cybersecurity',
      icon: <FaShieldAlt />,
      title: 'Кібербезпека',
      shortDescription: 'Захист ваших цифрових активів',
      description: 'Забезпечуємо повну безпеку ваших даних та систем від кіберзагроз.',
      features: ['Аудит безпеки', 'Шифрування', 'Backup системи', 'Моніторинг'],
      details: {
        technologies: ['SSL/TLS', 'VPN', 'Firewall', 'Antivirus', 'Backup системи'],
        process: [
          'Аудит безпеки',
          'Виявлення вразливостей',
          'Впровадження захисту',
          'Налаштування моніторингу',
          'Регулярні перевірки'
        ],
        benefits: [
          'Захист даних',
          'Відповідність стандартам',
          'Довіра клієнтів',
          'Зменшення ризиків',
          '24/7 моніторинг'
        ],
        pricing: {
          basic: 'від 25,000 грн/міс',
          standard: 'від 50,000 грн/міс',
          premium: 'від 100,000 грн/міс'
        }
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="services">
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="services-title">
            Наші <span className="title-accent">Послуги</span>
          </h2>
          <p className="services-subtitle">
            Ми надаємо широкий спектр професійних послуг для розвитку вашого бізнесу
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(139, 92, 246, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService(service)}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.shortDescription}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="service-feature">
                    <span className="feature-bullet">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="service-overlay">
                <div className="overlay-content">
                  <span>Дізнатися більше</span>
                  <FaArrowRight />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Detail Modal */}
        {selectedService && (
          <motion.div
            className="service-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="service-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div className="modal-title">
                  <div className="modal-icon">{selectedService.icon}</div>
                  <h3>{selectedService.title}</h3>
                </div>
                <button
                  className="modal-close"
                  onClick={() => setSelectedService(null)}
                >
                  <FaTimes />
                </button>
              </div>

              <div className="modal-content">
                <p className="modal-description">{selectedService.description}</p>

                <div className="modal-sections">
                  <div className="modal-section">
                    <h4>Технології</h4>
                    <div className="tech-tags">
                      {selectedService.details.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-section">
                    <h4>Процес роботи</h4>
                    <ol className="process-list">
                      {selectedService.details.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="modal-section">
                    <h4>Переваги</h4>
                    <ul className="benefits-list">
                      {selectedService.details.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-section">
                    <h4>Тарифи</h4>
                    <div className="pricing-cards">
                      <div className="pricing-card">
                        <h5>Базовий</h5>
                        <p className="price">{selectedService.details.pricing.basic}</p>
                      </div>
                      <div className="pricing-card featured">
                        <h5>Стандартний</h5>
                        <p className="price">{selectedService.details.pricing.standard}</p>
                      </div>
                      <div className="pricing-card">
                        <h5>Преміум</h5>
                        <p className="price">{selectedService.details.pricing.premium}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-actions">
                  <motion.button
                    className="modal-btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedService(null);
                      // Тут можна додати логіку переходу до форми замовлення
                    }}
                  >
                    Замовити послугу
                  </motion.button>
                  <button
                    className="modal-btn-secondary"
                    onClick={() => setSelectedService(null)}
                  >
                    Закрити
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Готові почати проект?</h3>
          <p>Зв'яжіться з нами для безкоштовної консультації</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Замовити Консультацію
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
