import Header from "../Components/Sections/Header";
import About from "../Components/Sections/About";
import Projects from "../Components/Sections/Projects";
import Contact from "../Components/Sections/Contact";
import Footer from "../Components/Sections/Footer";
import Modal from "../Components/Modal";
import UseProvider from "../Hooks/useContextApi";
import Skills from "../Components/Sections/Skills";
import Experience from "../Components/Sections/Experience";
import ScrollToTop from "../Components/ScrollToTop";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <ScrollToTop />
      <UseProvider>
        <Header />
        <About />
        <Modal />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </UseProvider>
    </div>
  );
};

export default Layout;
