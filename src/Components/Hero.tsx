import image1 from "../assets/Header.jpeg"
import { context } from "../Hooks/useContextApi";
import { useContext } from "react";
import Button from "./Button";
import {motion} from 'framer-motion'
const Hero = () => {
    const { primaryColor } = useContext(context);

    const text ="Software Engineer"

    const variant = {
      hidden:{opacity:0},
      show : {
        opacity:1,
       transition:{
        duration:2,
        staggerChildren:0.2
       } 
      }
    }

   const letterVariant = {
    hidden:{opacity:0,y:80},
    show:{opacity:1,y:0}
   }

  return (
    <section style={{paddingInline:'clamp(.7rem,4vw,5rem)'}} id="Home" className="grid md:grid-cols-2">
      <motion.div initial={{opacity:0,rotate:90,x:200}} animate={{opacity:1,rotate:0,x:0}} transition={{duration:1,ease:"easeInOut"}} className="relative md:w-10/12 md:order-1 rounded-full overflow-hidden h-5/6 sm:w-72 w-7/12  m-auto">
        <img className=" " src={image1}alt="My Profile Picture" />
        <span style={{background:`${primaryColor}`,opacity:"0.1"}} className="absolute inset-0 backdrop-blur-1"></span>
      </motion.div>
      <motion.div whileInView='show' initial='hidden' variants={variant} className="text-center grid gap-2 place-content-center">
        <motion.p variants={{hidden:{opacity:0,y:100},show:{opacity:1,y:0}}} style={{fontSize:"clamp(1rem,3vw,1.6rem)"}} className="font-bold">Hello, It's Me</motion.p>
        <motion.h1 variants={{hidden:{opacity:0,y:100},show:{opacity:1,y:0}}} className="text-3xl font-semibold">Solomon Elorm Dzokoto</motion.h1>
        <motion.p variants={{hidden:{opacity:0,y:100},show:{opacity:1,y:0}}} style={{fontSize:"clamp(1rem,3vw,2rem)"}}  className="font-bold ">and I'm a <motion.span
         variants={variant}
         whileInView='show'
         initial='hidden'
         viewport={{amount:0.5}}
        style={{fontSize:"clamp(1.5rem,3vw,2rem)"}} className={` font-bold bg-gradient-to-r from-primary  to-sky-500 bg-clip-text text-transparent`}>
          {text.split("").map((char,i)=>(
            <motion.span
            variants={letterVariant}
            key={i} 
            >
              {char}
            </motion.span>
          ))}
          </motion.span></motion.p>
        <motion.p variants={{hidden:{opacity:0,y:100},show:{opacity:1,y:0}}} className="">
        I design responsive, high-performing websites that bring your vision to life. Let’s work together to create something truly exceptional!
        </motion.p>
        <motion.div variants={{hidden:{opacity:0,y:100},show:{opacity:1,y:0}}} className="btn flex justify-center gap-4">
            <a  href="#Contact">
                <Button className="" variant="primary">
                    Got a Project?
                </Button>
            </a>
            <a href="#Projects">
                <Button className="" variant="secondary">
                   My Work
                </Button>   
            </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
