import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { SECTION_IDS } from '../config/constants';
import type { SectionId } from '../types';

interface NextSectionProps {
  currentSection: SectionId;
}

export const NextSection = ({ currentSection }: NextSectionProps) => {
  const sections = Object.keys(SECTION_IDS) as SectionId[];
  const currentIndex = sections.indexOf(currentSection);
  const nextSection = sections[currentIndex + 1];

  if (!nextSection) return null;

  const scrollToNextSection = () => {
    const element = document.getElementById(SECTION_IDS[nextSection]);
    if (element) {
      const offset = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.button
      onClick={scrollToNextSection}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                 flex flex-col items-center justify-center gap-2 
                 text-foreground/70 hover:text-foreground dark:text-white/70 dark:hover:text-white
                 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium">Next Section</span>
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FiChevronDown className="w-6 h-6" />
      </motion.div>
    </motion.button>
  );
}; 