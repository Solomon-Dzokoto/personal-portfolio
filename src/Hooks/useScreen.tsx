import {useState,useEffect} from 'react'

const useScreen = () => {
    const [screenWidth,setScreenWidth]=useState<number>(window.innerWidth)
    useEffect(()=>{
     const windowWidth = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize",windowWidth)

    return ()=>{
        window.removeEventListener("resize",windowWidth)
    }
    },[])
  return screenWidth
}

export default useScreen
