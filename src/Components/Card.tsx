import React,{ memo} from 'react'
 
interface Props{
   children:React.ReactNode
   className:string;
}
const Cards = memo(({children,className}:Props) => {
  return (
    <article className={`${className} border-2 text-black shadow-lg hover:shadow-primary rounded hover:border-primary bg-slate-50 hover:-translate-y-2 transition-all p-4`}>
      {children}
    </article>
  )
})

export default Cards