import React from 'react';
import { motion } from 'framer-motion';


const FadeInAnimation = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  className = '',
  threshold = 0.3,
}) => {
  const directionVariants = {
    up: { y: 60, opacity: 0, scale: 0.95 },
    down: { y: -60, opacity: 0, scale: 0.95 },
    left: { x: 60, opacity: 0, scale: 0.95 },
    right: { x: -60, opacity: 0, scale: 0.95 },
  };

  // Determine which axis to animate based on direction
  const animateProps = { opacity: 1, scale: 1 };
  if (direction === 'up' || direction === 'down') {
    animateProps.y = 0;
  } else if (direction === 'left' || direction === 'right') {
    animateProps.x = 0;
  }

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{
        ...animateProps,
        transition: {
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15
        },
      }}
      viewport={{ 
        once: true,
        threshold: threshold,
        margin: "0px 0px -100px 0px"
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;