import Button from './Button'
import {data} from '../data/contactData'
import { useState } from 'react'
import {motion} from 'framer-motion'


const Contact = () => {
   const [name,setName]=useState<string>("")
   const [email,setEmail]=useState<string>("")
   const [message,setMessage]=useState<string>("")



  return (
    <section id='Contacts' className="mt-[4rem] min-h-[60vh] gap-8  grid md:grid-cols-2" style={{paddingInline:'clamp(.7rem,4vw,5rem)'}} >
      <div className="grid place-content-center">
      <h1 className="text-3xl mb-6 underline decoration-primary underline-offset-8  font-semibold">Contact <span className="text-primary">Me</span></h1>
      <p>
        If you enjoy my project or come across any bugs, feel free to reach out with suggestions for improvements or new features. I'd love to hear your feedback!
      </p>
      <h3 className="font-bold text-2xl mt-4 text-primary">Get In touch with me 👇🥰</h3>
      <motion.ul
       variants={{hidden:{opacity:0.2},show:{opacity:1,transition:{staggerChildren:0.2}}}}
       whileInView='show'
       initial='hidden'
       viewport={{amount:0.5}}
      className='flex mt-4 gap-2'>
        {
        data.map((item)=>(
         <motion.li variants={{hidden:{opacity:0,y:50},show:{opacity:1,y:0}}} key={item.id}>
            <a href={item.link} target='_blank'>
            <Button className='' variant='secondary' >
              {item.icon} 
            </Button>
            </a> 
         </motion.li>
        ))
        }
      </motion.ul>
      </div>
      <div className="">
      <h1 className="text-3xl mb-6 underline decoration-primary underline-offset-8  text-center md:text-end font-semibold"><span className="text-primary">Contact </span> Form</h1>
      <form  method="post" id="submit-contact-form">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="name" className="leading-7 py-4 text-lg text-gray-900">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  placeholder='Enter your name here'
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white rounded border border-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 py-4 text-lg text-gray-900">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  placeholder='example@gmail.com'
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white rounded border border-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="leading-7 py-4 text-lg text-gray-900">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  placeholder='Your Message'
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white rounded border border-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full text-center ">
              <button type='submit'>
                <Button variant='primary'
                  className="flex text-white border-0 py-4 px-6 focus:outline-none rounded text-xl font-bold shadow-lg mx-0 flex-col text-center g-recaptcha"
                >
                  Send Message ✉
                </Button>
              </button>
            </div>
          </form>
      </div>
    </section>
  )
}

export default Contact
