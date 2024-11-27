import { useContext } from "react";
import NavBar from "../NavBar"
import Hero from "../Hero";
import { IoColorPaletteOutline } from "react-icons/io5";
import { context } from "../../Hooks/useContextApi";

const Header = () => {
  const {setIsOpen}=useContext(context)
  
  return (
    <header className="min-h-screen md:min-h-full">
        <div style={{paddingInline:'clamp(.7rem,4vw,5rem)'}} className="flex justify-between items-center text-white py-3 bg-primary">
          <a style={{borderRadius:".5rem .2rem"}} className='bg-white px-2 border py-1 text-primary' href="#Home">Portfolio <span>•</span></a>
        <NavBar/>
        <IoColorPaletteOutline onClick={()=>setIsOpen((prev)=>!prev)} className="text-3xl cursor-pointer"/>
        </div>
        <Hero/>
    </header>
  )
}

export default Header
