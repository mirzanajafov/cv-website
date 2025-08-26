import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      title: 'Software Engineer ',
      company: 'Thinking IT',
      period: '2025 - Present',
      achievements: [
        'Built full-stack web solutions from Figma designs to live websites, ensuring seamless UI/UX and responsive layouts',
        'Developed and maintained backend services using Node.js, NestJS, and relational databases, enabling secure data management and API integrations',
        'Optimized project workflows and implemented custom features, reducing development time by 20% and improving system performance'
      ]
    },
    {
      title: 'Backend Developer (Node.js, TypeScript, NestJS)',
      company: 'Reconvert LTD',
      period: '2022 - 2025',
      achievements: [
        'Spearheaded the development of multiple REST APIs, enhancing system efficiency and user experience, leading to a 20% reduction in response times for critical services',
        'Drove a significant codebase refactoring initiativem, improving codereadability and system performance by 25% which facilitatedeasier maintance and future development',
        'Implemented advanced code optimization techniques, resulting in a 15% improvement in system performance andreliability'
      ],
      projects: [
        {
          name: 'Minta.ai',
          description: 
          'Contributed to empowering platforms with Ai-driven (GPT) creative content, achieving a 30% increase in user engagement through automated video content creation for marketing needs. Also Paddle payment was integrated, with Shopify API and social media integrations (Meta , Tiktok, Pinterest and etc)'
        },
        {
          name: 'Reconvert.io',
          description: 'Developed a Shopify/Wix app that enhances e-commerce sales by showing related products and special offers alongside the main product. Built with a focus on user engagement, seamless integration, and real-time updates, helping store owners boost conversions and revenue.'
        },
        
        
      ]
    },
    {
      title: 'Freelance Developer',
      company: 'Freelance',
      period: '2019 - Present',
      achievements: [
        'Developed and maintained web applications',
        'Collaborated with clients to deliver projects on time',
        'API development with REST pattern',
        'Optimizing and refactoring existing codebase',
        'Building user interface from design'
      ]
    }
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        
        <motion.div 
          className="timeline"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-date">{exp.period}</p>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
                
                {exp.projects && exp.projects.length > 0 && (
                  <div className="timeline-projects">
                    <h5>Projects within experience:</h5>
                    {exp.projects.map((project, projectIdx) => (
                      <div key={projectIdx} className="project-item">
                        <h6>{project.name}</h6>
                        <p>{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 