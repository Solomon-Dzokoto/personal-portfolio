import Image  from "../../assets/IMG_3969 2.jpg"
import { FaCode,FaMobileAlt,FaServer} from "react-icons/fa"
import Cards from "../Card"
import { FaAward } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { BiHappyHeartEyes } from "react-icons/bi";
import Resume from '../../assets/Resume (1).pdf'
import Button from "../Button";
import {motion} from 'framer-motion'


const About = () => {
  const data =[
    {id:1,icon:< FaAward />,title:'Experience',desc:'1+ Years'},
    {id:2,icon:< TbBooks  />,title:'Projects',desc:'80+ Done'},
    {id:3,icon:< BiHappyHeartEyes />,title:'Clients',desc:'50+ Clients'},
]

const variant = {
  hidden:{opacity:1},
  show:{
    opacity:1,
    transition:{
      duration:3,
      staggerChildren:0.2
    }
  },
}

 const divVariant = {
  hidden:{opacity:0,y:100},
  show:{opacity:1,y:0}
 }

  return (
    <section id="About" style={{paddingInline:'clamp(.7rem,4vw,5rem)'}} className="mt-8">
      <h1 className="font-semibold  mb-8 text-center text-3xl ">About <span className="text-primary">Me</span></h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-custom gap-4">
      <div  className="border-[.8rem] hidden lg:block border-transparent h-fit max-h-[40rem]  hover:border-0 transition-all">
        <img className='object-cover ' src={Image} alt="My Picture" />
      </div>
      <div className="text-primary grid grid-cols-3 md:grid-cols-1 gap-4 place-content-center ">
        <div className="flex relative before:content-[''] before:absolute before:bottom-[-.7rem] before:rounded-full before:left-[-.3rem] before:w-[.4rem]  before:h-[.4rem] md:before:bg-primary gap-4 py-6 border-l-4 border-primary px-1 items-center">
           <span className=""><FaCode/></span>
           <p className="font-bold">Website Development</p>
        </div>
        <div className="flex relative before:content-[''] before:absolute before:bottom-[-.7rem] before:rounded-full before:left-[-.3rem] before:w-[.4rem]  before:h-[.4rem] md:before:bg-primary gap-4 py-6 border-l-4 border-primary px-1 items-center">
           <span className=""><FaMobileAlt/></span>
           <p className="font-bold">App Development</p>
        </div>
        <div className="flex gap-4 py-6 px-1 border-l-4 border-primary  items-center">
           <span className=""><FaServer/></span>
           <p className="font-bold">Website Hoisting</p>
        </div>
      </div>
      <div className="">
        <motion.ul variants={variant} whileInView='show' initial='hidden' className="grid gap-3 grid-cols-3 md:grid-flow-col">
          {
            data.map((item)=>(
              <motion.li variants={divVariant}  key={item.id}>
              <Cards  className="text-center group">
              <span className="inline-grid group-hover:text-primary text-3xl">{item.icon}</span>
              <h3 className="font-bold">{item.title}</h3>
              <small className="">{item.desc}</small>
              </Cards>
              </motion.li>
            ))
          }
        </motion.ul>
        <p className="mt-4 font-thin">
        Crafting projects that my clients genuinely love has always been my driving force. With over a year of experience in the web development industry and the privilege of working with more than 50 satisfied clients worldwide, I’m constantly inspired to push boundaries and deliver even more value.
        </p>
        <br />
        <p>
        I’m  a full-stack web developer based in Accra, Ghana, holding a Bachelor’s degree in Computer Science. My mission is to bring your business online the right way—delivering sleek, industry-standard designs paired with all the functionality you need to thrive in the digital world. Let’s collaborate on your next big project! Feel free to reach out with your project details, and don’t forget to check out my resume below!
        </p>
      </div>
      </div>
      <div className="text-center mt-4">
      <Button className="" variant="secondary">
       <a className="" href={Resume} download="Solomon_Elorm_Dzokoto">Download my Resume</a>
      </Button> 
      </div>
   
    </section>
  )
}

export default About
