import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaDatabase, FaJava, FaLaptopCode } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 200 }
    }
  };

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <FaPython />, level: 90, color: '#3776AB' },
        { name: 'Java', icon: <FaJava />, level: 90, color: '#007396' },
        { name: 'JavaScript', icon: <FaJs />, level: 85, color: '#F7DF1E' },
        { name: 'SQL', icon: <FaDatabase />, level: 80, color: '#4479A1' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 85, color: '#61DAFB' },
        { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 80, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
        { name: 'PostgreSQL', icon: <FaDatabase />, level: 75, color: '#336791' },
        { name: 'HTML', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS', icon: <FaCss3Alt />, level: 90, color: '#1572B6' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85, color: '#F05032' },
        { name: 'GitHub', icon: <FaGitAlt />, level: 85, color: '#181717' }
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Machine Learning', icon: <FaPython />, level: 80, color: '#ffb703' },
        { name: 'DBMS', icon: <FaDatabase />, level: 80, color: '#8ecae6' },
        { name: 'Networking', icon: <FaNodeJs />, level: 75, color: '#219ebc' },
        { name: 'OOPS', icon: <FaJava />, level: 85, color: '#007396' },
        { name: 'OS', icon: <FaLaptopCode />, level: 75, color: '#adb5bd' }
      ]
    }
  ];

  return (
    <motion.div
      className="skills page-transition"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title">
            My <span className="highlight">Skills</span>
          </h1>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="skill-category"
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h2 className="category-title">{category.title}</h2>
              
              <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      boxShadow: `0 20px 40px ${skill.color}20`
                    }}
                  >
                    <motion.div
                      className="skill-icon"
                      style={{ color: skill.color }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <h3 className="skill-name">{skill.name}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Icons */}
        <motion.div
          className="floating-icons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-icon-wrapper"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5
              }}
              style={{
                position: 'absolute',
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 90 + 5}%`,
              }}
            >
              <FaReact size={40} color="var(--primary-green)" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
