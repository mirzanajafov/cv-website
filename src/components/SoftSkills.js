import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './SoftSkills.css';

const SoftSkills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const softSkills = [
    {
      name: 'Team Collaboration',
      description: 'Successfully working in teams of various sizes, including a 50+ member team at Reconvert and 30+ member team at ThinkingIT, highlights exceptional teamwork skills, fostering a collaborative enviroment and contributing to the successfull delivery of projects.'
    },
    {
      name: 'Problem Solving',
      description: 'Strong analytical skills to identify complex technical issues and implement effective solutions. Experience in debugging, optimization, and system architecture improvements.'
    },
    {
      name: 'Time Management',
      description: 'Proven ability to prioritize tasks, meet deadlines, and manage multiple projects simultaneously. Experience in agile methodologies and sprint planning.'
    },
    {
      name: 'Adaptability',
      description: 'Quick learner with ability to adapt to new technologies and changing project requirements. Experience working with diverse tech stacks and methodologies.'
    },
    {
      name: 'Attention to Detail',
      description: 'The integration of payment systems and development of detailed database managment solutions, including creating PL/SQL programs during the Accenture Data Managment Bootcamp, reflect a meticulos approach to ensuring accuracy and efficiency in techincal tasks.'
    },
    {
      name: 'Creative Problem Solving',
      description: 'Initiating and executing the migration of a legacy .NET application to modern Node.js(NestJS) framework for falkon.az demonstrates innovative thinking in solving complex software engineering problems.'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="soft-skills" className="soft-skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Soft Skills
        </motion.h2>
        
        <motion.div 
          className="soft-skills-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {softSkills.map((skill, index) => (
            <motion.div 
              key={index}
              className="soft-skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills; 