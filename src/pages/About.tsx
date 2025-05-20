import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout } from 'react-icons/fi';

const About = () => {
  return (
    <div className="space-y-16 transform-gpu perspective">
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="transform-gpu preserve-3d"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gradient-primary">About Me</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-xl leading-relaxed transform-gpu preserve-3d hover:translate-z-10
                       transition-transform duration-300">
            I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences.
            With years of experience in web development, I specialize in building modern, responsive applications
            that solve real-world problems.
          </p>
          <p className="text-xl leading-relaxed transform-gpu preserve-3d hover:translate-z-10
                       transition-transform duration-300">
            My journey in tech started with a curiosity about how things work, which evolved into a career
            building solutions that make a difference. I believe in writing clean, maintainable code and
            staying up-to-date with the latest technologies and best practices.
          </p>
        </div>
      </motion.div>

      {/* Skills Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >
        {[
          {
            icon: <FiCode className="w-8 h-8" />,
            title: "Frontend Development",
            description: "Creating responsive and intuitive user interfaces with modern frameworks and tools."
          },
          {
            icon: <FiDatabase className="w-8 h-8" />,
            title: "Backend Development",
            description: "Building robust and scalable server-side applications and APIs."
          },
          {
            icon: <FiLayout className="w-8 h-8" />,
            title: "UI/UX Design",
            description: "Designing beautiful and functional user experiences that delight users."
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="transform-gpu perspective h-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="glass-card p-8 rounded-xl space-y-4 transform-gpu preserve-3d
                          hover:translate-z-20 transition-all duration-300 group
                          hover:shadow-xl h-full flex flex-col">
              <div className="text-blue-800 dark:text-white p-3 rounded-lg glass-effect w-fit
                            transform-gpu preserve-3d hover:translate-z-30
                            transition-transform duration-300 animate-float-3d">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold transform-gpu preserve-3d
                           hover:translate-z-20 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground transform-gpu preserve-3d
                          hover:translate-z-10 transition-transform duration-300 flex-grow">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Education & Experience */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 space-y-12 transform-gpu perspective"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gradient-primary">Education & Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Computer Science Degree",
              organization: "Tech University",
              period: "2016 - 2020",
              description: "Specialized in Software Engineering with a focus on web technologies and distributed systems. Graduated with honors."
            },
            {
              title: "Senior Developer",
              organization: "Tech Corp",
              period: "2020 - Present",
              description: "Leading development of enterprise web applications, mentoring junior developers, and implementing best practices for scalable solutions."
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="transform-gpu perspective h-full"
              whileHover={{ scale: 1.05 }}
            >
              <div className="glass-card p-8 rounded-xl space-y-4 transform-gpu preserve-3d
                            hover:translate-z-20 transition-all duration-300 group
                            hover:shadow-xl h-full flex flex-col">
                <h3 className="text-2xl font-medium text-gradient-primary transform-gpu preserve-3d
                             hover:translate-z-30 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-primary font-medium transform-gpu preserve-3d hover:translate-z-20">
                  {item.organization} • {item.period}
                </p>
                <p className="text-muted-foreground transform-gpu preserve-3d hover:translate-z-10 flex-grow">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About; 