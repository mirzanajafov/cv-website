import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'Task Management App',
      description: 'A task management app built with React, TypeScript, and Express.js.',
      technologies: ['React', 'TypeScript', 'Express.js','Tailwind CSS', 'Axios'],
      icon: FaCode,
      demoLink: '#',
      codeLink: 'https://github.com/mirzanajafov/Task-Managment-app',
      screenshot: '/project-screenshots/todo.png'
    },
    {
      title: 'CMS Dashboard',
      description: 'Full-stack CMS dashboard with React and NestJS',
      technologies: [  "React",
        "TypeScript",
        "NestJS", 
        "Node.js",
        "TypeORM",
        "JWT",
        "Tailwind CSS"],
      icon: FaCode,
      demoLink: '#',
      codeLink: 'https://github.com/mirzanajafov/cms-dashboard',
      screenshot: '/project-screenshots/cms.png'
    },
    {
      title: 'Real Time Chat App',
      description: 'A real-time chat application built with React, Node.js, and Socket.io.',
      technologies: ['React', 'Node.js', 'Socket.io', 'NestJS'],
      icon: FaCode,
      demoLink: '#',
      codeLink: 'https://github.com/mirzanajafov/real-time-chat-app',
      screenshot: '/project-screenshots/rtca.png'
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
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div 
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="project-image">
                  {project.screenshot ? (
                    <img 
                      src={project.screenshot} 
                      alt={project.title}
                      className="project-screenshot"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className="project-icon">
                    <IconComponent />
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link">
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a href={project.codeLink} className="project-link">
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 