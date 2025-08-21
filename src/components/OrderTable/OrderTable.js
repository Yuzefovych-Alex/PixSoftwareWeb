import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrash, FaEdit, FaCheck, FaTimes } from 'react-icons/fa';
import './OrderTable.css';

const OrderTable = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: 'Іван Петренко',
      service: 'Веб-розробка',
      description: 'Створення корпоративного сайту',
      budget: '50000 грн',
      deadline: '2024-02-15',
      status: 'В роботі',
      priority: 'Високий'
    },
    {
      id: 2,
      customerName: 'Марія Коваленко',
      service: 'UI/UX Дизайн',
      description: 'Дизайн мобільного додатку',
      budget: '30000 грн',
      deadline: '2024-01-30',
      status: 'Завершено',
      priority: 'Середній'
    },
    {
      id: 3,
      customerName: 'Олександр Сидоренко',
      service: 'SEO Оптимізація',
      description: 'Покращення позицій сайту',
      budget: '15000 грн',
      deadline: '2024-02-10',
      status: 'Очікує',
      priority: 'Низький'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [formData, setFormData] = useState({
    customerName: '',
    service: '',
    description: '',
    budget: '',
    deadline: '',
    priority: 'Середній'
  });

  const services = [
    'Веб-розробка',
    'Мобільні додатки',
    'UI/UX Дизайн',
    'SEO Оптимізація',
    'Цифровий маркетинг',
    'Кібербезпека'
  ];

  const priorities = ['Низький', 'Середній', 'Високий'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingOrder) {
      // Update existing order
      setOrders(prev => prev.map(order => 
        order.id === editingOrder.id 
          ? { ...formData, id: order.id, status: order.status }
          : order
      ));
      setEditingOrder(null);
    } else {
      // Add new order
      const newOrder = {
        ...formData,
        id: Date.now(),
        status: 'Очікує'
      };
      setOrders(prev => [...prev, newOrder]);
    }

    // Reset form
    setFormData({
      customerName: '',
      service: '',
      description: '',
      budget: '',
      deadline: '',
      priority: 'Середній'
    });
    setShowForm(false);
  };

  const handleEdit = (order) => {
    setEditingOrder(order);
    setFormData({
      customerName: order.customerName,
      service: order.service,
      description: order.description,
      budget: order.budget,
      deadline: order.deadline,
      priority: order.priority
    });
    setShowForm(true);
  };

  const handleDelete = (orderId) => {
    setOrders(prev => prev.filter(order => order.id !== orderId));
  };

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Завершено': return '#10b981';
      case 'В роботі': return '#f59e0b';
      case 'Очікує': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Високий': return '#ef4444';
      case 'Середній': return '#f59e0b';
      case 'Низький': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className="order-table">
      <div className="order-container">
        <motion.div
          className="order-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="order-title">
            Система <span className="title-accent">Замовлень</span>
          </h2>
          <p className="order-subtitle">
            Створюйте та управляйте замовленнями на послуги
          </p>
        </motion.div>

        <motion.div
          className="order-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="add-order-btn"
            onClick={() => {
              setShowForm(true);
              setEditingOrder(null);
              setFormData({
                customerName: '',
                service: '',
                description: '',
                budget: '',
                deadline: '',
                priority: 'Середній'
              });
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus /> Новий Замовлення
          </motion.button>
        </motion.div>

        {/* Order Form */}
        {showForm && (
          <motion.div
            className="order-form-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="order-form"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="form-header">
                <h3>{editingOrder ? 'Редагувати Замовлення' : 'Новий Замовлення'}</h3>
                <button
                  className="close-btn"
                  onClick={() => {
                    setShowForm(false);
                    setEditingOrder(null);
                  }}
                >
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Ім'я клієнта</label>
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Послуга</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Оберіть послугу</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Опис замовлення</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="3"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Бюджет</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      placeholder="наприклад: 50000 грн"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Термін виконання</label>
                    <input
                      type="date"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Пріоритет</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    required
                  >
                    {priorities.map(priority => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn">
                    <FaCheck /> {editingOrder ? 'Оновити' : 'Створити'}
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => {
                      setShowForm(false);
                      setEditingOrder(null);
                    }}
                  >
                    Скасувати
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Orders Table */}
        <motion.div
          className="orders-table-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="table-wrapper">
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Клієнт</th>
                  <th>Послуга</th>
                  <th>Опис</th>
                  <th>Бюджет</th>
                  <th>Термін</th>
                  <th>Статус</th>
                  <th>Пріоритет</th>
                  <th>Дії</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <motion.tr
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-row"
                  >
                    <td>{order.customerName}</td>
                    <td>{order.service}</td>
                    <td className="description-cell">{order.description}</td>
                    <td>{order.budget}</td>
                    <td>{new Date(order.deadline).toLocaleDateString('uk-UA')}</td>
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                        style={{ color: getStatusColor(order.status) }}
                        className="status-select"
                      >
                        <option value="Очікує">Очікує</option>
                        <option value="В роботі">В роботі</option>
                        <option value="Завершено">Завершено</option>
                      </select>
                    </td>
                    <td>
                      <span
                        className="priority-badge"
                        style={{ backgroundColor: getPriorityColor(order.priority) }}
                      >
                        {order.priority}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="action-btn edit-btn"
                          onClick={() => handleEdit(order)}
                          title="Редагувати"
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="action-btn delete-btn"
                          onClick={() => handleDelete(order.id)}
                          title="Видалити"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {orders.length === 0 && (
            <div className="empty-state">
              <p>Поки що немає замовлень. Створіть перше замовлення!</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default OrderTable;
