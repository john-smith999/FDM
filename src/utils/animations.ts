import type { AnimationType } from '../types';

interface AnimationVariants {
  hidden: any;
  visible: any;
}

export const getAnimationVariants = (type: AnimationType): AnimationVariants => {
  const variants = {
    'fade': {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    'slide-up': {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    'slide-down': {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    'slide-left': {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    'slide-right': {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    'scale': {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return variants[type];
};

export const getTransition = (duration: number, delay: number = 0) => ({
  duration,
  delay,
  ease: "easeOut"
}); 