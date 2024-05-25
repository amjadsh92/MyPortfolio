import Link from "next/link"


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
           <div key={link.title} className="text-slate-200 font-bold ml-28"> 
          <NavLink item={link}  />
          </div>
           )})}
        </div>
    
    
    )
    
            }
    
    
            
  const NavLink = ({item}:{item: linktypes} ) => {
    
  
    return <Link href={item.path} > {item.title} </Link>
  
  }
  
  

  export default Links