import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaUniversity, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const educationData = [
    {
      icon: <FaUniversity />,
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Amrita Vishwa Vidhyapeetham',
      period: '2023 - 2027 (Expected)',
      grade: 'CGPA: 6.85/10',
      description: 'Currently in third year, focusing on Data Structures, Algorithms, Web Development, and Database Management Systems.',
      color: '#667eea'
    },
    {
      icon: <FaSchool />,
      degree: 'Higher Secondary Education (12th Grade)',
      institution: 'Velammal Vidhyashram',
      period: '2020 - 2022',
      grade: 'Percentage: 88%',
      description: 'Specialized in Mathematics, and Physics. Developed strong analytical and problem-solving skills.',
      color: '#f093fb'
    }
  ];

  return (
    <motion.div
      className="education page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            My <span className="highlight">Education</span>
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Academic journey and achievements
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ x: 10 }}
            >
              <motion.div
                className="timeline-dot"
                style={{ borderColor: edu.color }}
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <div className="dot-inner" style={{ background: edu.color }}></div>
              </motion.div>

              <motion.div
                className="timeline-content"
                whileHover={{
                  boxShadow: `0 20px 60px ${edu.color}30`,
                  borderColor: edu.color
                }}
              >
                <motion.div
                  className="education-icon"
                  style={{ color: edu.color }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {edu.icon}
                </motion.div>

                <div className="education-header">
                  <h3 className="degree">{edu.degree}</h3>
                  <motion.span
                    className="period"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {edu.period}
                  </motion.span>
                </div>

                <div className="institution-info">
                  <h4 className="institution">{edu.institution}</h4>
                  <motion.div
                    className="grade"
                    style={{ color: edu.color }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaTrophy /> {edu.grade}
                  </motion.div>
                </div>

                <p className="description">{edu.description}</p>

                <motion.div
                  className="card-decoration"
                  style={{ background: `linear-gradient(135deg, ${edu.color}20, transparent)` }}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="placement-ready"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="placement-icon"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
          >
            🎯
          </motion.div>
          <h3>Ready for Placements 2025</h3>
          <p>Actively seeking opportunities to contribute and grow</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
