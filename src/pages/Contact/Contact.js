import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'kokulkrishnan07@gmail.com',
      link: 'mailto:kokulkrishnan07@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 86107 62285',
      link: 'tel:+918610762285'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/Kokul24', color: '#333' },
    { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/kokul-m-71a171326', color: '#0077B5' }
  ];

  return (
    <motion.div
      className="contact page-transition"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            Get In <span className="highlight">Touch</span>
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's discuss opportunities and collaborate on amazing projects
          </p>
        </motion.div>

        <motion.div
          className="contact-content-centered"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="info-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2>Contact Information</h2>
            <p>Feel free to reach out through any of these channels</p>
          </motion.div>

          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="card-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {info.icon}
                </motion.div>
                <h3>{info.title}</h3>
                <p>{info.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            className="social-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3>Connect on Social Media</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  {social.icon}
                  <span className="social-tooltip">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
