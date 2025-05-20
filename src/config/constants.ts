export const APP_CONFIG = {
  title: "John Smith Portfolio",
  email: "contact@johnsmith.dev",
  social: {
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    twitter: "https://twitter.com/johnsmith"
  }
};

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  delay: {
    short: 0.1,
    medium: 0.2,
    long: 0.3,
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export const SECTION_IDS = {
  home: 'home-section',
  about: 'about-section',
  projects: 'projects-section',
  skills: 'skills-section',
  contact: 'contact-section',
} as const;

export const personalInfo = {
  name: "John Smith",
  role: "Full Stack Developer & Mobile App Developer",
  bio: "Passionate about creating beautiful, functional, and user-friendly applications. I specialize in modern web technologies and love bringing ideas to life through code.",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com"
  }
} as const; 