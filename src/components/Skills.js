import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    if (inView && !animatedSkills) {
      setAnimatedSkills(true);
    }
  }, [inView, animatedSkills]);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'PHP', level: 85 },
        { name: 'TypeScript', level: 90 }
      ]
    },
 
    {
      title: 'Frameworks & Tools',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 80 },
        { name: 'CI/CD', level: 80 },
        { name: 'REST API', level: 80 },
        { name: 'GraphQL', level: 80 },
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 80 },
        { name: 'TypeORM', level: 80 },
        { name: 'NestJS', level: 80 },
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 80 },
        { name: 'Mongoose', level: 85 },
        { name: 'Prisma', level: 80 },
      ]
    },
    {
      title: 'Frontend/ Markup & Styling',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'Bootstrap', level: 80 },
        { name: 'React', level: 70 },
        { name: 'Figma', level: 80 },
        { name: 'Framer Motion', level: 80 },
        { name: 'JQuery', level: 80 },
      ]
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          className="skills-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              variants={itemVariants}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={animatedSkills ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                  >
                    <span>{skill.name}</span>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={animatedSkills ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 