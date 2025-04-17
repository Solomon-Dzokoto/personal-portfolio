import { context } from "../Hooks/useContextApi";
import { useContext } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const { primaryColor } = useContext(context);

  const text = "Software Engineer";

  const variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.2,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      style={{ paddingInline: "clamp(.7rem,4vw,5rem)" }}
      id="Home"
      className="grid md:grid-cols-2 min-h-screen items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-primary/5 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative md:w-10/12 md:order-1 rounded-xl overflow-hidden h-5/6 sm:w-72 w-7/12 m-auto shadow-xl"
      >
        <img
          className="h-full w-full object-cover"
          src="/assets/logo-1.jpg"
          alt="Solomon Elorm Dzokoto"
        />
        <span
          style={{ background: `${primaryColor}`, opacity: "0.1" }}
          className="absolute inset-0 backdrop-blur-1"
        ></span>
      </motion.div>

      <motion.div
        animate="show"
        initial="hidden"
        variants={variant}
        className="text-center md:text-left grid gap-3 place-content-center"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          style={{ fontSize: "clamp(1rem,3vw,1.6rem)" }}
          className="font-bold text-primary"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-4xl font-bold mb-1"
        >
          Solomon Elorm Dzokoto
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          style={{ fontSize: "clamp(1rem,3vw,1.8rem)" }}
          className="font-medium mb-2"
        >
          <motion.span
            variants={variant}
            animate="show"
            initial="hidden"
            viewport={{ amount: 0.5 }}
            style={{ fontSize: "clamp(1.5rem,3vw,2rem)" }}
            className="font-bold bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent"
          >
            {text.split("").map((char, i) => (
              <motion.span variants={letterVariant} key={i}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-gray-700 max-w-md mx-auto md:mx-0 mb-3"
        >
          I specialize in creating responsive, high-performing websites and
          applications that deliver exceptional user experiences. Let's build
          something remarkable together.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          className="flex justify-center md:justify-start gap-3 mb-6"
        >
          <a
            href="https://github.com/Solomon-Dzokoto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary bg-opacity-10 text-white p-3 rounded-full hover:bg-primary hover:text-white/50 transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/solomon-dzokoto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary bg-opacity-10 text-white p-3 rounded-full hover:bg-primary hover:text-white/50 transition-colors"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://twitter.com/SolomonDzokoto"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary bg-opacity-10 text-white p-3 rounded-full hover:bg-primary hover:text-white/50 transition-colors"
          >
            <FaTwitter size={18} />
          </a>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: { opacity: 1, y: 0 },
          }}
          className="btn flex justify-center md:justify-start gap-4"
        >
          <a href="#Contact">
            <Button className="px-6" variant="primary">
              Hire Me
            </Button>
          </a>
          <a href="#Projects">
            <Button className="px-6" variant="secondary">
              View Work
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
