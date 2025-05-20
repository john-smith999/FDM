import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, featuring product management, cart functionality, and secure payment processing.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    links: {
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.com"
    }
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team workspaces, and progress tracking features.",
    image: "/projects/taskmanager.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    links: {
      github: "https://github.com/yourusername/taskmanager",
      live: "https://taskmanager-demo.com"
    }
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive social media analytics dashboard providing insights and metrics visualization for multiple platforms.",
    image: "/projects/dashboard.jpg",
    tags: ["React", "D3.js", "GraphQL", "Material-UI"],
    links: {
      github: "https://github.com/yourusername/dashboard",
      live: "https://dashboard-demo.com"
    }
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile-first fitness tracking application with workout planning, progress monitoring, and social features.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    links: {
      github: "https://github.com/yourusername/fitness",
      live: "https://fitness-demo.com"
    }
  }
];

const Projects = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  return (
    <div className="space-y-16 transform-gpu perspective">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
          Featured Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A collection of my recent work showcasing web applications, mobile apps,
          and other software solutions I've built.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group transform-gpu perspective h-full"
            whileHover={{ scale: 1.02 }}
          >
            <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 
                          hover:shadow-xl transform-gpu preserve-3d hover:translate-z-10
                          group-hover:rotate-y-5 group-hover:rotate-x-5 h-full flex flex-col">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-primary/5 transform-gpu preserve-3d">
                {imageErrors[project.title] ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiImage className="w-16 h-16 text-primary/50" />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImageError(project.title)}
                    className="w-full h-full object-cover transition-transform duration-300 
                             group-hover:scale-105 transform-gpu preserve-3d"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-6 transform-gpu preserve-3d hover:translate-z-20 flex-grow flex flex-col">
                <h3 className="text-2xl font-semibold transform-gpu preserve-3d hover:translate-z-30">
                  {project.title}
                </h3>
                <p className="text-muted-foreground flex-grow">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary
                               transform-gpu preserve-3d hover:translate-z-20
                               transition-transform duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary 
                             transition-colors transform-gpu preserve-3d hover:translate-z-20"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary 
                             transition-colors transform-gpu preserve-3d hover:translate-z-20"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* More Projects Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16 transform-gpu perspective"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xl text-muted-foreground hover:text-primary 
                   transition-colors transform-gpu preserve-3d hover:translate-z-20"
        >
          <span>View more projects on GitHub</span>
          <FiExternalLink className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  );
};

export default Projects; 