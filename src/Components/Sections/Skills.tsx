import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faWordpress,
  faBootstrap,
  faGit,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import {
  SiTypescript,
  SiRedux,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const frontendSkills = [
    {
      name: "React",
      icon: <FontAwesomeIcon icon={faReact} className="text-blue-400" />,
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <FontAwesomeIcon icon={faJsSquare} className="text-yellow-400" />,
      level: 85,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-500" />,
      level: 80,
    },
    {
      name: "HTML5",
      icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-600" />,
      level: 95,
    },
    {
      name: "CSS3",
      icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500" />,
      level: 90,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 75 },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-white" />,
      level: 70,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-blue-400" />,
      level: 85,
    },
    {
      name: "Bootstrap",
      icon: <FontAwesomeIcon icon={faBootstrap} className="text-purple-500" />,
      level: 80,
    },
    {
      name: "Sass",
      icon: <FontAwesomeIcon icon={faSass} className="text-pink-500" />,
      level: 75,
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: <FontAwesomeIcon icon={faNodeJs} className="text-green-500" />,
      level: 80,
    },
    { name: "Express", icon: <SiExpress className="text-white" />, level: 75 },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-500" />,
      level: 70,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      level: 65,
    },
  ];

  const otherSkills = [
    {
      name: "Git",
      icon: <FontAwesomeIcon icon={faGit} className="text-orange-500" />,
      level: 85,
    },
    {
      name: "WordPress",
      icon: <FontAwesomeIcon icon={faWordpress} className="text-blue-500" />,
      level: 75,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="Skills"
      style={{ paddingInline: "clamp(.7rem,4vw,5rem)" }}
      className="mt-[4rem] pb-16"
    >
      <h1 className="text-3xl mb-4 text-center font-semibold">
        Technical <span className="text-primary">Skills</span>
      </h1>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        A comprehensive overview of my technical expertise and proficiency in
        various technologies, frameworks, and tools.
      </p>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                F
              </span>
              Frontend Development
            </h2>

            <motion.div
              className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="mb-4 last:mb-0"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Skills + Other */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                B
              </span>
              Backend Development
            </h2>

            <motion.div
              className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="mb-4 last:mb-0"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-2">
                O
              </span>
              Other Skills
            </h2>

            <motion.div
              className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {otherSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="mb-4 last:mb-0"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Skill Cloud Animation */}
        <div className="overflow-hidden rounded-lg p-4 mb-12 bg-gray-900 bg-opacity-30 border border-gray-800">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex space-x-12 items-center whitespace-nowrap"
          >
            {[...frontendSkills, ...backendSkills, ...otherSkills].map(
              (skill, index) => (
                <div
                  key={index}
                  className="text-4xl hover:scale-110 transition-transform cursor-pointer hover:text-primary"
                >
                  {skill.icon}
                </div>
              )
            )}
            {/* Duplicate set for seamless infinite scroll */}
            {[...frontendSkills, ...backendSkills, ...otherSkills].map(
              (skill, index) => (
                <div
                  key={`dup-${index}`}
                  className="text-4xl hover:scale-110 transition-transform cursor-pointer hover:text-primary"
                >
                  {skill.icon}
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
