import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../config/constants';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 ring-4 ring-primary/20 glass-card"
        >
          <img
            src="/vite.svg"
            alt={`${personalInfo.name}'s Profile`}
            className="w-full h-full object-cover bg-primary/10"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="gradient-text font-extrabold">{personalInfo.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
        >
          {personalInfo.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed glass-card p-6"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center space-x-6 mb-12"
        >
          {[
            { icon: <FiGithub className="w-6 h-6" />, href: personalInfo.social.github, label: "GitHub" },
            { icon: <FiLinkedin className="w-6 h-6" />, href: personalInfo.social.linkedin, label: "LinkedIn" },
            { icon: <FiMail className="w-6 h-6" />, href: `mailto:${personalInfo.social.email}`, label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-xl hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="button-gradient text-white px-8 py-3 rounded-full font-medium shadow-soft"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="glass-card px-8 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 