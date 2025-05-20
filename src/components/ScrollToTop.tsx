import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = useCallback(() => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Only show button if there's enough content to scroll
    if (documentHeight > windowHeight * 1.5) {
      setIsVisible(scrollPosition > windowHeight * 0.3);
    } else {
      setIsVisible(false);
    }
  }, []);

  // Set the scroll event listener
  useEffect(() => {
    // Initial check
    toggleVisibility();

    // Throttle scroll event
    let timeoutId: ReturnType<typeof setTimeout>;
    const throttledScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [toggleVisibility]);

  // Scroll to top smoothly
  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, 0);
    }
  };

  if (typeof window === 'undefined') return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full 
                     bg-primary text-white shadow-lg 
                     dark:bg-primary/90 dark:text-white
                     hover:bg-primary/90 dark:hover:bg-primary
                     transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                     dark:focus:ring-offset-background"
          aria-label="Scroll to top"
        >
          <FiArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}; 