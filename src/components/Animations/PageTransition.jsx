import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';


const pageVariants = {
  initial: {
    opacity: 0,
    x: -20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: 20,
    scale: 0.98,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};


const PageTransition = ({ children }) => {
  const router = useRouter();

  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div
        key={router.asPath}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;