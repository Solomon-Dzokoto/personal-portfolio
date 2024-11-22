import {data} from '../data/NavData'


const Footer = () => {
  const date = new Date()
  return (
    <footer style={{paddingInline:'clamp(.7rem,4vw,5rem)'}}  className="bg-primary grid place-content-center min-h-[20vh]">
     <ul className='flex gap-4'>
      {
      data.map((item)=>(
        <a href={`#${item.name}`} className='text-white' key={item.id}>{item.name}</a>
      ))
      }
     </ul>
     <small className='text-white text-center mt[3rem]'>Copyright &copy; {date.getFullYear()} designed by MaaH-MooD | All right reserved</small>
    </footer>
  )
}

export default Footer
