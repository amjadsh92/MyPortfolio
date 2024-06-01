"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"



interface linktypes{

    title: string, 
    path: string
  
  }
  
  const Links = () => {
  
  
      
  
    const links:linktypes [] = [
        {title:"Profile",
            path:"/"},
        {title:"CV",
        path:"/CV"},
        {title:"Portfolio",
        path:"/Portfolio"},
        {title:"Publications",
        path:"/Publications"},
        
    
        
    ]
    
    //bg-neutral-50
    return(
        <div className="pl-28 inline-block flex ">
           {links.map((link) =>{ return (
           <div key={link.title} > 
          <NavLink item={link}  />
          </div>
           )})}
        </div>
    
    
    )
    
            }
    
    
            
  const NavLink = ({item}:{item: linktypes} ) => {
    const pathName = usePathname();
    
  
    return <Link href={item.path} className={ pathName === item.path ? "text-blue-600 font-bold ml-28": "text-slate-300 font-bold ml-28 hover:text-white"}  > {item.title} </Link>
  
  }
  
  

  export default Links