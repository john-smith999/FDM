import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ReactNode } from 'react';
import { getAnimationVariants, getTransition } from '../utils/animations';
import type { AnimationType } from '../types';

interface LazyLoadProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export const LazyLoad = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '-50px',
  animation = 'fade',
  delay = 0,
  duration = 0.5,
  once = true
}: LazyLoadProps) => {
  const { elementRef, isInView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: once
  });

  if (typeof window === 'undefined') {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getAnimationVariants(animation)}
      transition={getTransition(duration, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}; 