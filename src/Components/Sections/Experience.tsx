import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Freelance",
      date: "Jan 2023 - Present",
      description:
        "Developed responsive web applications for clients using React, Node.js, and MongoDB. Improved client satisfaction through excellent communication and on-time delivery.",
      type: "work",
    },
    {
      id: 2,
      title: "Front-End Developer",
      company: "GhanaWeb Solutions",
      date: "Jun 2022 - Dec 2022",
      description:
        "Collaborated with designers to implement responsive user interfaces. Enhanced website performance by 40% through code optimization and modern practices.",
      type: "work",
    },
    {
      id: 3,
      title: "Bachelor of Science, Computer Science",
      company: "University of the People",
      date: "2023 - present",
      description:
        "Aspiring Graduant with honors. Specialized in web technologies and software development. Led team projects in web application development.",
      type: "education",
    },
    {
      id: 4,
      title: "Web Development Certification",
      company: "FreeCodeCamp",
      date: "2021",
      description:
        "Completed comprehensive certification in Responsive Web Design and JavaScript Algorithms and Data Structures.",
      type: "education",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="Experience"
      className="mt-[4rem]"
      style={{ paddingInline: "clamp(.7rem,4vw,5rem)" }}
    >
      <h1 className="text-3xl mb-8 text-center font-semibold">
        My <span className="text-primary">Experience</span>
      </h1>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="relative pl-8 pb-8 border-l-2 border-primary ml-6 last:pb-0"
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              {exp.type === "work" ? (
                <FaBriefcase className="text-xs text-white" />
              ) : (
                <FaGraduationCap className="text-xs text-white" />
              )}
            </div>

            <div className="bg-background border border-gray-700 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow ml-2 hover:border-primary">
              <div className="mb-2 flex justify-between flex-wrap">
                <h3 className="font-bold text-lg text-primary">{exp.title}</h3>
                <span className="text-sm opacity-75">{exp.date}</span>
              </div>
              <h4 className="font-medium mb-2">{exp.company}</h4>
              <p className="text-sm">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
