import { useState } from "react";
import Cards from "../Card";
import { data } from "../../data/ProjectData";
import Button from "../Button";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "react", "fullstack", "frontend"];

  const filteredProjects =
    filter === "all"
      ? data
      : data.filter((project) => project.category === filter);

  const variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section
      id="Projects"
      className="mt-[4rem] pb-16"
      style={{ paddingInline: "clamp(.7rem,4vw,5rem)" }}
    >
      <h1 className="text-3xl mb-4 text-center font-semibold">
        My <span className="text-primary">Projects</span>💻
      </h1>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        A showcase of my professional development work, featuring projects built
        with modern technologies and best practices. Each project demonstrates
        my technical skills and problem-solving approach.
      </p>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === category
                ? "bg-primary text-white"
                : "bg-transparent border border-gray-700 hover:border-primary hover:text-primary"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <motion.ul
        variants={variant}
        viewport={{ amount: 0.3 }}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((item) => (
          <motion.li variants={childVariant} className="flex" key={item.id}>
            <Cards className="p-5 flex flex-col min-h-[70vh] hover:border-primary transition-all group overflow-hidden">
              <div className="relative overflow-hidden h-[220px] rounded-lg">
                <img
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  src={item.src}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-primary bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={item?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white text-primary/80 border border-whirounded-full transform hover:scale-110 transition-all duration-300"
                    aria-label="View code on GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-primary/80 border border-white rounded-full transform hover:scale-110 transition-all duration-300"
                      aria-label="View live project"
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mt-4 mb-2">
                  <h2 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {item.title}
                  </h2>
                  <span className="px-2 py-1 text-xs bg-primary bg-opacity-20 text-white/60 rounded-full font-medium">
                    {item.category}
                  </span>
                </div>

                {item.technologies && (
                  <div className="flex gap-2 flex-wrap my-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs py-1 px-2 bg-primary bg-opacity-10 text-white/80 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-sm flex-grow">{item.desc}</p>

                <div className="mt-4 flex gap-3">
                  <Button className="flex-1 text-sm" variant="primary">
                    <a
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FaGithub /> View Code
                    </a>
                  </Button>
                  {item.liveUrl && (
                    <Button className="flex-1 text-sm" variant="secondary">
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt /> View Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Cards>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Projects;
