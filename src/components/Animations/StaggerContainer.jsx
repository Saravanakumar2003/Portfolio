// components/Animations/StaggerContainer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const staggerDelay = 0.1; // Adjust the delay between items

const StaggerContainer = ({ children, className }) => {
    const customContainerVariants = {
      ...containerVariants,
      animate: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    };

  return (
    <motion.div
      className={className}
      variants={customContainerVariants}
      initial="initial"
      animate="animate"
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerContainer;