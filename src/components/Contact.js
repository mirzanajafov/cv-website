import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaInstagram 
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'mirzanajafo@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+994 77 322 12 21'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Baku, Azerbaijan'
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/mirza-nacafov/', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com/mirzanajafov', label: 'GitHub' },
    { icon: FaInstagram, url: 'https://www.instagram.com/nacafovmirza/', label: 'Instagram' }
  ];

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('mirzanajafo@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

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
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.div 
          className="contact-content"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div 
                  key={index}
                  className="contact-item"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent />
                  <div>
                    <h3>{info.title}</h3>
                    <p 
                      onClick={info.title === 'Email' ? handleEmailClick : undefined}
                      style={{ cursor: info.title === 'Email' ? 'pointer' : 'default' }}
                    >
                      {copiedEmail && info.title === 'Email' ? 'Email copied!' : info.value}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div className="social-links" variants={itemVariants}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <IconComponent />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 