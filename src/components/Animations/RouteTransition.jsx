// components/Animations/RouteTransition.tsx
import React from 'react';
import { motion } from 'framer-motion';


const routeVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const RouteTransition = ({ children }) => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default RouteTransition;