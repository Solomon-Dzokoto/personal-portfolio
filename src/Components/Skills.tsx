import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faCss3Alt, faHtml5, faNodeJs,faWordpress, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { DiMongodb } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import Vite from '../assets/vite.svg 19-52-22-549.svg'
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <section id='Skills' style={{paddingInline:'clamp(.7rem,4vw,5rem)'}}  className='mt-[4rem] overflow-hidden'>
       <h1 className="text-3xl mb-8 text-center font-semibold"> <span className="text-primary">My</span> Stack</h1>
   <motion.div animate={{x:["100%","-100%"]}} transition={{duration:20,repeat:Infinity,ease:"linear"}} className="flex space-x-6 justify-center  mt-8">   
    <FontAwesomeIcon icon={faHtml5} className="text-orange-600 text-[5rem] hover:scale-110 transition-transform" />
    <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-[5rem] hover:scale-110 transition-transform" />
    <FontAwesomeIcon icon={faJsSquare} className="text-yellow-400 text-[5rem] hover:scale-110 transition-transform" />
    <FontAwesomeIcon icon={faReact} className="text-blue-400 text-[5rem] hover:scale-110 transition-transform" />
    <FontAwesomeIcon icon={faNodeJs} className="text-green-500 text-[5rem] hover:scale-110 transition-transform" />
    <FontAwesomeIcon icon={faWordpress} className="text-blue-400 text-[5rem] hover:scale-110 transition-transform" />
    <FontAwesomeIcon icon={faBootstrap} className="text-blue-400 text-[5rem] hover:scale-110 transition-transform" />
    <a className='text-green-500 text-[5rem] hover:scale-110 transition-transform' href=""><DiMongodb/></a>
    <a className='text-blue-400  text-[5rem] hover:scale-110 transition-transform' href=""><RiTailwindCssFill/></a>
    <img className='text-[5rem] hover:scale-110 transition-transform'  src={Vite} alt="vite" />
  </motion.div>
    </section>
  
  )
}

export default Skills
