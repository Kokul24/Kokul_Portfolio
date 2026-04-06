import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const projects = [
    {
      title: 'CareerLens AI',
      description: 'Developed an intelligent placement prediction platform using Logistic Regression with SHAP explainability to identify key factors affecting placement probability. Integrated a Random Forest model for stress and wellbeing monitoring and connected Gemini API for ATS resume analysis and personalized learning paths. Hosted backend services on AWS Elastic Beanstalk for scalable delivery.',
      technologies: ['MERN Stack', 'Gemini API', 'Machine Learning', 'AWS Elastic Beanstalk'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      liveUrl: 'https://career-lens-n8ta.vercel.app/',
      githubUrl: 'https://github.com/Kokul24/CareerLens',
      features: ['Logistic Regression Placement Prediction', 'SHAP Explainability', 'Random Forest Stress Monitoring', 'Gemini ATS Resume Analysis', 'Personalized Learning Paths', 'AWS Deployment']
    },
    {
      title: 'AgriTech Marketplace Platform',
      description: 'Engineered backend services for a full-stack agricultural marketplace that connects farmers directly to retailers, removing middlemen with secure JWT authentication. Implemented multilingual support using Google Translate API for 13+ Indian languages and integrated a logistic regression decision-support module on Agnamarknet datasets for crop posting and selling-time insights.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Machine Learning', 'JWT', 'Google Translate API'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      liveUrl: 'https://se-3-2.vercel.app/',
      githubUrl: 'https://github.com/JAY-cloudbuster/SE_3-2',
      features: ['JWT Authentication', 'Farmer-Retailer Direct Marketplace', 'Multilingual Support (13+ Languages)', 'Logistic Regression Decision Support', 'Agnamarknet Data Insights', 'Scalable Backend APIs']
    },
    {
      title: 'EduHash',
      description: 'Built a secure student fee portal aligned with NIST SP 800-63B and CIA Triad principles. Implemented AES-256-CBC encryption and RSA digital signatures with SHA-256 hashing for tamper-proof receipts. Designed low-latency authentication flows with Role-Based Access Control and Multi-Factor Authentication for secure role-wise operations.',
      technologies: ['MERN Stack', 'Cyber Security', 'AES-256-CBC', 'RSA Signatures', 'SHA-256', 'RBAC', 'MFA'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      liveUrl: 'https://github.com/Kokul24/EduHash',
      githubUrl: 'https://github.com/Kokul24/EduHash',
      features: ['NIST SP 800-63B Aligned Design', 'CIA Triad Security Model', 'AES-256-CBC Encryption', 'RSA + SHA-256 Tamper-proof Receipts', 'RBAC Authorization', 'MFA Authentication']
    }
  ];

  return (
    <motion.div
      className="projects page-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="projects-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            My <span className="highlight">Projects</span>
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Selected projects focused on full-stack engineering, AI/ML integration, and application security
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="project-image"
                style={{ background: project.image }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-overlay">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </motion.div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      className="feature-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="tech-tag"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="project-actions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-action btn-live"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-action btn-code"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
