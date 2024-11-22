import { context} from "../Hooks/useContextApi";
import { useContext } from "react";

interface Props{
    children:React.ReactNode;
    variant?: "primary" | "secondary";
    className:string;
}
const Button = ({children,variant,className }:Props) => {
    const {isPrime}=useContext(context)
    let buttonStyle = "";

    if (variant === "primary" && isPrime === true) {
        buttonStyle = "bg-primary text-white hover:bg-white hover:text-primary";
      } else if (variant === "primary" && isPrime === false) {
        buttonStyle = "bg-white text-primary hover:bg-primary hover:text-white";
      } else if (variant === "secondary" && isPrime === true) {
        buttonStyle = "bg-white text-primary hover:bg-primary hover:text-white";
      } else if (variant === "secondary" && isPrime === false) {
        buttonStyle = "bg-primary text-white hover:bg-white hover:text-primary";
      }
  return (
    <button className={`${buttonStyle } ${className} border-2 border-primary  px-4 py-1 hover:translate-y-[-2px] active:bg-sky-500 shadow-current transition-all rounded-md `}>
      {children}
    </button>
  )
}
export default Button
