import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useLanguage } from '../contexts/LanguageContext';
import { IoLanguage } from 'react-icons/io5';
import { ThemeToggle } from './ThemeToggle';
import { useScrollTo } from '../hooks/useScrollTo';
import type { Language } from '../types';
import { SECTION_IDS } from '../config/constants';

type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SECTION_IDS.home);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t, isLoading, availableLanguages } = useLanguage();
  const { scrollToSection } = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sections = Object.values(SECTION_IDS);
      let currentActiveSection = sections[0];

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 100; // Adjust this value based on your navbar height
          if (rect.top <= offset && rect.bottom > offset) {
            currentActiveSection = section;
          }
        }
      });

      setActiveSection(currentActiveSection);
    };

    // Initial check
    handleScroll();

    // Throttle scroll event
    let timeoutId: ReturnType<typeof setTimeout>;
    const throttledScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLangDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const navItems = [
    { label: t('nav.home'), id: SECTION_IDS.home },
    { label: t('nav.about'), id: SECTION_IDS.about },
    { label: t('nav.skills'), id: SECTION_IDS.skills },
    { label: t('nav.projects'), id: SECTION_IDS.projects },
    { label: t('nav.contact'), id: SECTION_IDS.contact },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleSectionClick(SECTION_IDS.home)} 
            className="text-2xl font-bold"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="gradient-text"
            >
              {t('nav.portfolio')}
            </motion.span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <button
                  onClick={() => handleSectionClick(item.id)}
                  className={`px-4 py-2 rounded-lg transition-colors relative ${
                    activeSection === item.id
                      ? 'text-primary'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
                      transition={{ type: "spring", stiffness: 50, damping: 20 }}
                    />
                  )}
                  {item.label}
                </button>
              </motion.div>
            ))}
            <div className="flex items-center space-x-2">
              {/* Language Dropdown */}
              <div className="relative" ref={langDropdownRef}>
                <motion.button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="p-2 rounded-lg hover:bg-accent flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                  aria-label="Select language"
                >
                  <IoLanguage className="w-5 h-5" />
                  <span className="text-sm font-medium">{t(`language.name.${language}`)}</span>
                  <FiChevronDown className={`w-4 h-4 transition-transform ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 py-2 w-48 bg-background rounded-lg shadow-lg border border-accent/20 glass-effect"
                    >
                      {availableLanguages.map((lang: Language) => (
                        <button
                          key={lang}
                          onClick={() => handleLanguageSelect(lang)}
                          className={`w-full px-4 py-2 text-left hover:bg-accent/30 transition-colors ${
                            language === lang ? 'text-primary font-medium' : 'text-foreground/70'
                          }`}
                          disabled={isLoading}
                        >
                          {t(`language.name.${lang}`)}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className={`w-full px-4 py-2 text-left rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/70 hover:text-foreground hover:bg-accent/30'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 