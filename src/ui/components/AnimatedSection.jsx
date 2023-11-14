// AnimatedSection.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState({});
  const sections = ['section1', 'section2', 'section3', 'section4'];

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        setIsVisible((prev) => ({
          ...prev,
          [section]: scrollY > rect.top - window.innerHeight * 0.5,
        }));
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return { containerVariants, isVisible };
};

const AnimatedSection = ({ children, id }) => {
  const { containerVariants, isVisible } = useScrollAnimation();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={'visible' }
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
