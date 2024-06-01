import Image from "next/image"

function Avatar(){


    return(
      <div className="ml-[1200px] pt-20 absolute ">
      <div className="fixed"> 
      <Image
        className="w-44 h-50 rounded-full ml-14"
        src="/amjadprofile3.jpg"
        width={300}
        height={300}
        alt="Picture of the author"
      />
      <p className="font-mono text-lime-600 pt-4"> Email: amjadsharafeddien@gmail.com</p>
      <p className="font-mono text-lime-600 pt-4"> Address: Nijmegen, Netherlands</p>
      </div>
     </div>
    )
  
  }



  export default Avatar