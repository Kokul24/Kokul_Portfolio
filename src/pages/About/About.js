import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaRocket, FaGraduationCap } from 'react-icons/fa';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: <FaCode />,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code following best practices'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full Stack Development',
      description: 'Building complete web applications from frontend to backend'
    },
    {
      icon: <FaRocket />,
      title: 'Quick Learner',
      description: 'Constantly exploring new technologies and frameworks'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Placement Ready',
      description: 'Preparing for opportunities with strong technical skills'
    }
  ];

  return (
    <motion.div
      className="about page-transition"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="section-header" variants={itemVariants}>
          <h1 className="section-title">
            About <span className="highlight">Me</span>
          </h1>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <motion.h2
              className="about-subtitle"
              whileInView={{ scale: [0.9, 1] }}
              transition={{ duration: 0.5 }}
            >
              Hello! I'm a passionate Computer Science student 👋
            </motion.h2>
            
            <motion.p
              className="about-description"
              variants={itemVariants}
            >
              I'm currently in my third year of Computer Science Engineering and actively building 
              impactful, real-world applications with a focus on scalability, security, and practical innovation.
            </motion.p>

            <motion.p
              className="about-description"
              variants={itemVariants}
            >
              My core interest is Full-Stack Development with AI/ML integrations. I enjoy combining 
              modern web technologies with machine learning models and LLM-based features to build 
              data-driven products that solve meaningful user problems.
            </motion.p>

            <motion.p
              className="about-description"
              variants={itemVariants}
            >
              I've participated in hackathons including Build2Break Hackathon and the Google Gemini 
              Hackathon by Devpost, and I continuously explore new tools and frameworks to stay 
              aligned with industry demands.
            </motion.p>

            <motion.div className="stats" variants={itemVariants}>
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3>3+</h3>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3>5+</h3>
                <p>Technologies Learned</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 40px rgba(0, 255, 136, 0.2)'
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    className="feature-icon"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
