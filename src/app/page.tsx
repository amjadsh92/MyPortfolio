import Image from "next/image";
import Link from "next/link";
import Links from "@/components/Navbar/Links";

//bg-orange-600
export default function Home() {
  return (
    <>
    
      <Links />
       
    <div className="flex">
      <Name />
      <Avatar />
    </div>
    <div className="ml-32 mr-32" >
     <Board />
    </div>
    <div className="pt-16 ml-72">
      <Socialmedia />
    </div>
    
    </>
    
  );
}


function Avatar(){


  return(
    <div className="pl-16 pt-36">
    <Image
      className=" w-40 h-40 rounded-full"
      src="/amjadprofile.jpg"
      width={300}
      height={300}
      alt="Picture of the author"
    />
   </div>
  )

}

function Name(){
return(
<div className=" pt-52 pl-80 inline-block" >
        <h1 className="text-slate-200 pl-16  text-4xl font-bold tracking-tight inline-block"> Amjad Sharafeddine </h1> <br />
        <h2 className=" text-slate-200 pl-16  text-lg font-medium tracking-tight inline-block"> Junior Front-end developer</h2> <br />
        
</div>
)
}
//bg-neutral-50 
function Board(){

  return(
<div className="inline-block">
<h2 className="font-mono text-lime-600 inline-block pl-64 pr-96 pt-8"> Welcome to my website! My name is Amjad from Lebanon and I currently live in the Netherlands. I am a webdeveloper who recently shifted his career from Physics into software development.In practicaly three months I teached myself the basics of back-end and front-end developemnt.In the meantime, I am more intersted in the front-end part and going more deep into it using ReactJS, Next.js, Typescript, and Tailwind css.Have fun by navigating my site and checking my physics and software development works!</h2>

</div>

  )

}


function Socialmedia(){

  return(
    <div className="pl-64 flex">
< a href="https://www.linkedin.com/in/amjad-sharafeddine-3968b911b/" className="ml-16">
  <Image src="/linkedin.png" width={30}
      height={30}
      alt="Linkedin" />

</a>

< a href="https://github.com/amjadsh92" className="ml-16">
  <Image src="/github.png" width={30}
      height={30}
      alt="GitHub" />

</a>
</div>

  )

}