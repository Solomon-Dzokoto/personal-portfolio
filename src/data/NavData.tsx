import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";

interface Props{
    id:number;
    name:string;
    icon:React.ReactNode;
}
export const data:Props[] = [
    {id:1,name:"Home",icon:<FaHome/>},
    {id:2,name:"About",icon:<FcAbout/>},
    {id:3,name:"Skills",icon:<MdOutlineStackedBarChart/>},
    {id:4,name:"Projects",icon:<GrProjects/>},
    {id:5,name:"Contacts",icon:<IoMdContact/>},
]