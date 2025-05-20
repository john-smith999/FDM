import { motion } from 'framer-motion';
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiSmartphone,
  FiGitBranch,
  FiPackage,
  FiCloud,
  FiBox,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiTool,
  FiUsers
} from 'react-icons/fi';
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazonaws,
  SiRedux,
  SiFirebase,
  SiJest,
  SiMui,
  SiGit
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FiLayout className="w-8 h-8 text-black dark:text-white" />,
    skills: [
      { name: "React.js", level: 95, icon: <SiReact className="w-4 h-4" /> },
      { name: "TypeScript", level: 90, icon: <SiTypescript className="w-4 h-4" /> },
      { name: "Next.js", level: 85, icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="w-4 h-4" /> }
    ]
  },
  {
    title: "Backend Development",
    icon: <FiServer className="w-8 h-8 text-black dark:text-white" />,
    skills: [
      { name: "Node.js", level: 90, icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: "Python", level: 85, icon: <SiPython className="w-4 h-4" /> },
      { name: "GraphQL", level: 80, icon: <SiGraphql className="w-4 h-4" /> },
      { name: "REST APIs", level: 95, icon: <FiGlobe className="w-4 h-4" /> }
    ]
  },
  {
    title: "Mobile Development",
    icon: <FiSmartphone className="w-8 h-8 text-black dark:text-white" />,
    skills: [
      { name: "React Native", level: 90, icon: <SiReact className="w-4 h-4" /> },
      { name: "iOS Development", level: 80, icon: <FiLayers className="w-4 h-4" /> },
      { name: "Android Development", level: 80, icon: <FiBox className="w-4 h-4" /> },
      { name: "Mobile UI/UX", level: 85, icon: <FiLayout className="w-4 h-4" /> }
    ]
  },
  {
    title: "Database & DevOps",
    icon: <FiDatabase className="w-8 h-8 text-black dark:text-white" />,
    skills: [
      { name: "PostgreSQL", level: 90, icon: <SiPostgresql className="w-4 h-4" /> },
      { name: "MongoDB", level: 85, icon: <SiMongodb className="w-4 h-4" /> },
      { name: "Docker", level: 85, icon: <SiDocker className="w-4 h-4" /> },
      { name: "AWS", level: 80, icon: <SiAmazonaws className="w-4 h-4" /> }
    ]
  }
];

const otherTechnologies = [
  { name: 'Redux', icon: <SiRedux className="text-black dark:text-white" /> },
  { name: 'GraphQL', icon: <SiGraphql className="text-black dark:text-white" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-black dark:text-white" /> },
  { name: 'Jest', icon: <SiJest className="text-black dark:text-white" /> },
  { name: 'Material-UI', icon: <SiMui className="text-black dark:text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-black dark:text-white" /> },
  { name: 'AWS Amplify', icon: <FiCloud className="text-black dark:text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-black dark:text-white" /> },
  { name: 'Testing', icon: <FiTool className="text-black dark:text-white" /> },
  { name: 'CI/CD', icon: <FiCpu className="text-black dark:text-white" /> },
  { name: 'Git', icon: <SiGit className="text-black dark:text-white" /> },
  { name: 'Agile', icon: <FiUsers className="text-black dark:text-white" /> },
  { name: 'DevOps', icon: <FiPackage className="text-black dark:text-white" /> }
];

const Skills = () => {
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
          Technical Skills
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          With extensive experience across various technologies, I bring a comprehensive skill set
          to tackle complex development challenges and deliver high-quality solutions.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="transform-gpu perspective h-full"
            whileHover={{ scale: 1.02 }}
          >
            <div className="glass-card rounded-xl p-8 transform-gpu preserve-3d hover:translate-z-10
                          transition-all duration-300 hover:shadow-xl group h-full flex flex-col">
              <div className="flex items-center gap-4 mb-8 transform-gpu preserve-3d hover:translate-z-20">
                <div className="text-gradient-primary p-3 rounded-lg glass-effect transform-gpu preserve-3d
                              hover:translate-z-30 transition-transform duration-300 animate-float-3d">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <div className="space-y-6 flex-grow">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="transform-gpu preserve-3d hover:translate-z-20
                             transition-transform duration-300"
                  >
                    <div className="flex justify-between mb-2 items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-primary/80">{skill.icon}</span>
                        <span className="text-lg font-medium">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm
                                  transform-gpu preserve-3d hover:translate-z-10">
                      <motion.div
                        className="h-full button-gradient"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 transform-gpu perspective"
      >
        <h2 className="text-3xl font-semibold mb-8 text-gradient-primary">Other Technologies</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {otherTechnologies.map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.05) }}
              className="glass-card px-6 py-3 rounded-full text-lg 
                        hover:bg-primary/5 transition-all duration-300 cursor-default
                        transform-gpu preserve-3d hover:translate-z-20
                        hover:shadow-lg group min-w-[120px] text-center
                        flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary/80">{tech.icon}</span>
              <span>{tech.name}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 