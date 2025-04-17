import Button from "../Button";
import { data } from "../../data/contactData";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulating form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");

        // Reset success message after some time
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section
      id="Contact"
      className="mt-[4rem] pb-16"
      style={{ paddingInline: "clamp(.7rem,4vw,5rem)" }}
    >
      <h1 className="text-3xl mb-2 text-center font-semibold">
        Get In <span className="text-primary">Touch</span>
      </h1>
      <p className="text-center max-w-2xl mx-auto mb-12">
        Have a project in mind or want to discuss potential opportunities? I'd
        love to hear from you! Reach out through the form below or connect with
        me directly.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-900 bg-opacity-50 p-8 rounded-lg border border-gray-800"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Contact <span className="text-primary">Information</span>
          </h2>
          <p className="mb-8">
            I'm interested in freelance opportunities, especially ambitious or
            large projects. If you have questions or feedback about my
            portfolio, don't hesitate to reach out!
          </p>

          <h3 className="font-bold text-xl mb-4 text-primary">
            Connect with me
          </h3>
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            whileInView="show"
            initial="hidden"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {data.map((item) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                key={item.id}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to ${item.name}`}
                >
                  <Button
                    className="flex items-center justify-center"
                    variant="secondary"
                  >
                    {item.icon}
                  </Button>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="bg-black bg-opacity-30 p-4 rounded-lg">
            <p className="text-sm italic">
              "The best way to predict the future is to create it." <br />-
              Abraham Lincoln
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">
            <span className="text-primary">Send Me</span> a Message
          </h2>

          {isSubmitted ? (
            <div className="bg-green-900 bg-opacity-20 border border-green-500 rounded-lg p-6 flex flex-col items-center justify-center h-[400px]">
              <FaCheckCircle className="text-5xl text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-center">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full bg-gray-900 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } focus:border-primary p-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="example@domain.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-gray-900 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } focus:border-primary p-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  placeholder="Write your message here..."
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className={`w-full bg-gray-900 rounded-lg border ${
                    errors.message ? "border-red-500" : "border-gray-700"
                  } focus:border-primary p-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className={`flex items-center justify-center gap-2 w-full py-3 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
