import Cards from "./Card"
import {data} from '../data/ProjectData'
import Button from './Button';
import {motion} from 'framer-motion'

const Projects = () => {
  const variant = {
    hidden:{opacity:0.2},
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.2
      }
    }
  }
  const childVariant = {
    hidden:{opacity:0.2,y:100},
    show:{opacity:1,y:0}
  }
  return (
    <section id="Projects" className="mt-[4rem]" style={{paddingInline:'clamp(.7rem,4vw,5rem)'}} >
      <h1 className="text-3xl mb-8 text-center font-semibold">My <span className="text-primary">Projects</span>💻</h1>
      <motion.ul variants={variant} viewport={{amount:0.1}} initial='hidden' whileInView='show' className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
          data.map((item)=> (
            <motion.li variants={childVariant} className="" key={item.id}>
            <Cards className="p-8 grid min-h-[70vh] gap-2">
              <div className="">
               <img className="h-[30vh] w-[220rem]" src={item.src} alt={item.title}/>
              </div>
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.desc}</p>
              <Button className="w-fit" variant="primary" > 
                <a href={item?.link} target="_blank">View Code</a>
              </Button>
            </Cards>
            </motion.li>
          ))
        }
      </motion.ul>
  
    </section>
  )
}

export default Projects
