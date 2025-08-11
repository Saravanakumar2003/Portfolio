import React from 'react';
import { motion } from 'framer-motion';


const FadeInAnimation = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
}) => {
  const directionVariants = {
    up: { y: 30, opacity: 0 },
    down: { y: -30, opacity: 0 },
    left: { x: 30, opacity: 0 },
    right: { x: -30, opacity: 0 },
  };

  // Determine which axis to animate based on direction
  const animateProps = { opacity: 1 };
  if (direction === 'up' || direction === 'down') {
    animateProps.y = 0;
  } else if (direction === 'left' || direction === 'right') {
    animateProps.x = 0;
  }

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      animate={{
        ...animateProps,
        transition: {
          duration,
          delay,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;