import Header from "../Components/Sections/Header"
import About from "../Components/Sections/About"
import Projects from "../Components/Sections/Projects"
import Contact from "../Components/Sections/Contact"
import Footer from "../Components/Sections/Footer"
import Modal from "../Components/Modal"
import UseProvider from "../Hooks/useContextApi"
import Skills from "../Components/Sections/Skills"


const Layout = () => {
  return (
    <div>
      <UseProvider>
      <Header/>
      <About/>
      <Modal/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </UseProvider>
     
    </div>
  )
}

export default Layout
