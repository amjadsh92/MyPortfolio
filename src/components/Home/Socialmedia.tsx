import Image from "next/image"


function Socialmedia(){

    return(
      <div className="pl-80 flex">
  < a href="https://www.linkedin.com/in/amjad-sharafeddine-3968b911b/" className=" hover:scale-110 ml-16">
    <Image src="/linkedin.png" width={30}
        height={30}
        alt="Linkedin" />
  
  </a>
  
  < a href="https://github.com/amjadsh92" className=" hover:scale-110 ml-12 mt-[-4px]">
    <Image src="/github17.png" width={45}
        height={45}
        alt="GitHub" />
  
  </a>

  

  </div>
  
    )
  
  }


  export default Socialmedia
