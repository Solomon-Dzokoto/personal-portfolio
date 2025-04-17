import Image from "../../assets/IMG_3969 2.jpg";
import { FaCode, FaMobileAlt, FaServer, FaDownload } from "react-icons/fa";
import Cards from "../Card";
import { FaAward } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { BiHappyHeartEyes } from "react-icons/bi";
import Resume from "../../assets/Resume (1).pdf";
import Button from "../Button";
import { motion } from "framer-motion";

const About = () => {
  const data = [
    { id: 1, icon: <FaAward />, title: "Experience", desc: "1+ Years" },
    { id: 2, icon: <TbBooks />, title: "Projects", desc: "80+ Done" },
    {
      id: 3,
      icon: <BiHappyHeartEyes />,
      title: "Clients",
      desc: "50+ Clients",
    },
  ];

  const variant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.2,
      },
    },
  };

  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const services = [
    {
      icon: <FaCode />,
      title: "Website Development",
      description:
        "Creating responsive, modern websites optimized for performance and user experience.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      description:
        "Building cross-platform mobile applications with React Native and native technologies.",
    },
    {
      icon: <FaServer />,
      title: "Web Hosting & Deployment",
      description:
        "Setting up reliable hosting solutions and continuous deployment pipelines.",
    },
  ];

  return (
    <section
      id="About"
      style={{ paddingInline: "clamp(.7rem,4vw,5rem)" }}
      className="mt-16 pb-12"
    >
      <h1 className="font-semibold mb-6 text-center text-3xl">
        About <span className="text-primary">Me</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border-[.5rem] border-gray-800 max-w-md mx-auto hidden lg:block rounded-lg overflow-hidden shadow-2xl hover:border-primary transition-all duration-500">
          <img
            className="object-cover w-full h-full"
            src={Image}
            alt="My Profile"
          />
        </div>

        <div className="space-y-6 lg:col-span-2 ">
          <motion.ul
            variants={variant}
            whileInView="show"
            initial="hidden"
            className="grid gap-4 grid-cols-1 sm:grid-cols-3"
          >
            {data.map((item) => (
              <motion.li variants={divVariant} key={item.id}>
                <Cards className="text-center group p-4 hover:border-primary transition-all duration-300">
                  <span className="inline-grid group-hover:text-primary text-3xl transition-colors duration-300">
                    {item.icon}
                  </span>
                  <h3 className="font-bold mt-2">{item.title}</h3>
                  <small className="opacity-80">{item.desc}</small>
                </Cards>
              </motion.li>
            ))}
          </motion.ul>

          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800">
            <p className="mb-4 leading-relaxed">
              Crafting projects that my clients genuinely love has always been
              my driving force. With over a year of experience in the web
              development industry and the privilege of working with more than
              50 satisfied clients worldwide, I'm constantly inspired to push
              boundaries and deliver even more value.
            </p>
            <p className="leading-relaxed">
              I'm a full-stack web developer based in Accra, Ghana, holding a
              Bachelor's degree in Computer Science. My mission is to bring your
              business online the right way—delivering sleek, industry-standard
              designs paired with all the functionality you need to thrive in
              the digital world. Let's collaborate on your next big project!
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              className="flex items-center gap-2 mx-auto"
              variant="secondary"
            >
              <FaDownload />
              <a href={Resume} download="Solomon_Elorm_Dzokoto">
                Download my Resume
              </a>
            </Button>
            <Button
              className="flex items-center gap-2 mx-auto"
              variant="secondary"
            >
              <FaDownload />
              <a
                href="https://docs.google.com/document/d/1Xz8HJODsC7pwyPn9wF_ZcMxo6tckg23H8AjjNO55Hd4/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
              >
                Read my Resume
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-semibold text-2xl mb-6 text-center">
            My <span className="text-primary">Services</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300"
              >
                <div className="text-primary text-3xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm opacity-80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
