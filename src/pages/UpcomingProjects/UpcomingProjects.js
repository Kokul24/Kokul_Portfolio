import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaLightbulb, FaRocket } from 'react-icons/fa';
import './UpcomingProjects.css';

const UpcomingProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  const upcomingProjects = [
    {
      title: 'UrbanPulse - City Infrastructure Health Monitoring',
      description: 'Final year project that combines Computer Vision and NLP to automate city infrastructure inspection. The system analyzes street view imagery and dashcam footage to detect road damage, broken streetlights, and infrastructure issues, while also processing citizen complaints from social media to create comprehensive maintenance reports.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'NLP', 'Google Street View API', 'Machine Learning'],
      status: 'In Progress',
      icon: <FaRocket />,
      progress: 15,
      features: [
        'Pothole & crack detection using CV',
        'Citizen complaint analysis via NLP',
        'Geo-tagged damage mapping',
        'Priority-based repair reports',
        'Predictive maintenance algorithms',
        'Municipal dashboard'
      ],
      timeline: 'Expected: Dec 2026',
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'AI-Powered Career Development Platform',
      description: 'A comprehensive full-stack platform built on the MERN stack designed to revolutionize how students and professionals navigate their career journey. This intelligent system serves as a personal career coach, leveraging cutting-edge Artificial Intelligence to identify skill gaps, create personalized learning pathways, and optimize job application materials for maximum success. The platform addresses the critical disconnect between academic education and industry requirements by providing data-driven insights and automated resume optimization for Applicant Tracking Systems.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AI/ML APIs', 'Natural Language Processing'],
      status: 'In Development',
      icon: <FaRocket />,
      progress: 25,
      features: [
        'AI Roadmap Generator with salary predictions',
        'Skill gap analysis & visualization',
        'ATS Resume Scorer with PDF parsing',
        'Job description matching algorithms',
        'Personalized learning path recommendations',
        'Industry demand trend analysis'
      ],
      timeline: 'Expected: June 2025',
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  return (
    <motion.div
      className="upcoming-projects page-transition"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <div className="upcoming-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="header-icon"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            <FaClock />
          </motion.div>
          <h1 className="section-title">
            <span className="highlight">Upcoming</span> Projects
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Exciting projects currently in development
          </p>
        </motion.div>

        <motion.div
          className="upcoming-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={index}
              className="upcoming-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: '0 25px 60px rgba(0, 255, 136, 0.3)'
              }}
            >
              <div className="card-header" style={{ background: project.color }}>
                <motion.div
                  className="project-icon"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {project.icon}
                </motion.div>
                <motion.div
                  className="status-badge"
                  animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 10px rgba(0, 255, 136, 0.3)',
                      '0 0 20px rgba(0, 255, 136, 0.6)',
                      '0 0 10px rgba(0, 255, 136, 0.3)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  {project.status}
                </motion.div>
              </div>

              <div className="card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="progress-section">
                  <div className="progress-header">
                    <span>Development Progress</span>
                    <span className="progress-percentage">{project.progress}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                <div className="features-section">
                  <h4>Planned Features</h4>
                  <div className="features-list">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="feature-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        whileHover={{ x: 5, color: 'var(--primary-green)' }}
                      >
                        <span className="feature-dot"></span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="tech-stack">
                  <h4>Tech Stack</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + idx * 0.1 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="timeline"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <FaClock />
                  <span>{project.timeline}</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stay-tuned"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3>Stay tuned for updates! 🚀</h3>
          <p>Follow my journey as these projects come to life</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UpcomingProjects;
