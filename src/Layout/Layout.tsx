import Header from "../Components/Header"
import About from "../Components/About"
import Projects from "../Components/Projects"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Modal from "../Components/Modal"
import UseProvider from "../Hooks/useContextApi"
import Skills from "../Components/Skills"


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
