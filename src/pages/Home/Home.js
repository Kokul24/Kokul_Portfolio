import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.05, 1],
      boxShadow: [
        '0 0 20px rgba(0, 255, 136, 0.3)',
        '0 0 40px rgba(0, 255, 136, 0.6)',
        '0 0 20px rgba(0, 255, 136, 0.3)'
      ],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  return (
    <motion.div
      className="home page-transition"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="home-container" variants={containerVariants}>
        {/* Text Content - Left Side */}
        <motion.div className="home-text-content" variants={itemVariants}>
          {/* Greeting */}
          <motion.p className="greeting" variants={itemVariants}>
            Hello, I'm
          </motion.p>

          {/* Name with gradient animation */}
          <motion.h1 className="name" variants={itemVariants}>
            <span className="gradient-text">Kokul M</span>
          </motion.h1>

          {/* Title */}
          <motion.h2 className="title" variants={itemVariants}>
            Computer Science Student & Developer
          </motion.h2>

          {/* Description */}
          <motion.p className="description" variants={itemVariants}>
            Third-year CSE student passionate about building innovative solutions and exploring cutting-edge technologies. Specializing in full-stack development with expertise in React, Flutter, and modern web technologies.
          </motion.p>

          {/* Social Icons */}
          <motion.div className="social-icons" variants={itemVariants}>
            <motion.a
              href="https://github.com/Kokul24"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kokul-m-71a171326"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:kokulkrishnan07@gmail.com"
              className="social-icon"
              variants={iconVariants}
              whileHover="hover"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="cta-buttons" variants={itemVariants}>
            <Link to="/projects">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
                <FaArrowRight className="btn-icon" />
              </motion.button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.button>
            </a>
            <Link to="/contact">
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Section - Right Side */}
        <motion.div className="home-image-section" variants={itemVariants}>
          <motion.div 
            className="large-image-container"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-background">
              <motion.div
                className="glow-circle glow-1"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="glow-circle glow-2"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
            <motion.div 
              className="profile-image-wrapper"
              animate={{ 
                y: [0, -15, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/profile-photo.jpg" 
                alt="Kokul M" 
                className="large-profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <span>📷</span>
                <p>Add your photo as<br/>profile-photo.jpg<br/>in public folder</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="floating-element floating-1"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="floating-element floating-2"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
};

export default Home;
