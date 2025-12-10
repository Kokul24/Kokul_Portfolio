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
      title: 'StudSync - Student Management App',
      description: 'A comprehensive cross-platform mobile application built with Flutter that streamlines student and staff management for educational institutions. The app provides real-time access to attendance records, class schedules, staff availability, college events, and holiday information. Features an intuitive interface with Firebase backend for seamless data synchronization across devices.',
      technologies: ['Flutter', 'Firebase', 'Dart', 'Cloud Firestore'],
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      liveUrl: 'https://drive.google.com/file/d/1RcVuT3FFzpmnVZ9i9zE2lDJwpjgLYp0_/view',
      githubUrl: 'https://github.com/Kokul24/Stud-Sync',
      features: ['Attendance Tracking', 'Period Timetables', 'Staff Availability', 'College Events Calendar', 'Holiday Management', 'Real-time Updates']
    },
    {
      title: 'MediBot - Humanoid Medical Assistant',
      description: 'Display interface system for a humanoid medical robot using STM32 microcontroller. Collaborated in a 19-member team (4-person display sub-team) to integrate face recognition, voice recognition, and appointment booking modules. Built the orchestration layer with Python and Flask API, hosted on Raspberry Pi for seamless inter-module communication and real-time patient interaction.',
      technologies: ['Python', 'Flask', 'STM32', 'Raspberry Pi', 'API Integration', 'Embedded Systems'],
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      liveUrl: 'https://drive.google.com/drive/folders/1-O0HehGX6SSR0fnF-eXXuXOionMsvOBe?usp=sharing',
      githubUrl: 'https://github.com/AnanthaRam-GS/MediBot-Orchestrator',
      features: ['Face Recognition Integration', 'Voice Recognition', 'Appointment Booking System', 'Emergency Booking', 'Module Orchestration', 'Display Interface']
    },
    {
      title: 'NoteFreq - Secure Note Management Application',
      description: 'Full-stack MERN application with enterprise-grade security featuring JWT authentication and bcrypt password hashing. Create, organize, and manage personal notes with a beautiful gradient card interface and smooth animations. Includes smart search modal, real-time password strength indicators, visibility toggles, and a stunning frosted glass login design. Fully responsive with user-specific data protection through secured API routes.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt', 'REST API'],
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      liveUrl: 'https://drive.google.com/file/d/19_a2Hh8-bZtZZQ_CUkiPHpK5uo1F7zxt/view?usp=sharing',
      githubUrl: 'https://github.com/Kokul24/NoteFreq',
      features: ['JWT Authentication', 'Bcrypt Password Hashing', 'Rich Note Management', 'Smart Search Modal', 'Password Strength Indicator', 'Real-time Toast Notifications', 'User-Specific Notes', 'Responsive Design']
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
            Here are some of my recent projects showcasing my skills and passion for development
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
