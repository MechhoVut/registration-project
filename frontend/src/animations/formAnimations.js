// Reusable Framer Motion animation variants for the registration form

export const formVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const titleVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 }
  }
};

export const errorVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 }
};

export const messageVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0 }
};

export const buttonMotionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 }
};