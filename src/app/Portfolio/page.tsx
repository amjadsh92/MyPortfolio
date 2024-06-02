import Section from "@/components/Portfolio/Section"
import Link from "next/link"
import Links from "@/components/Navbar/Links"


function Portfolio(){

return(
<>  
<div className="ml-44 pt-16">
      <Links />
       </div>
<div className="mt-24">

    <IntroductionParagraph />
    <Section>
        <div className="pt-4 pl-2 font-sans font-semibold text-lg text-slate-100">
            To-Do-List + Tic-Tac-Toe App
        </div>
        <div className="group-hover:brightness-200 pt-4 pl-2 font-sans font-semibold text-slate-500">
            This app is composed of two apps: A To-Do-List app and a Tic-Tac-Toe game. In the To-Do-List app, you can assign tasks with the ability to show and hide the details of each. For the Tic-Tac-Toe game, you can enjoy playing the game and also go back in history to adjust previous moves! For specific details about the app, press the <span className="group-hover:text-cyan-950 ">Read More</span> button.
        </div>

        <div>

        
            <button className="ml-2 mb-4 mt-4 px-1 py-[1px] bg-lime-900 text-white rounded-full">
             
              <Link href={"/Portfolio/ReadMore"}> Read More </Link>
            </button>
          

          <a
            
            href="https://github.com/amjadsh92/MyProject"
          >
            <button className="ml-2 mb-4 mt-4 px-1 py-[1px] bg-lime-900 text-white rounded-full">
            
              GitHub
            </button>
          </a>
        </div>
    </Section>




</div>

</>  
)



}



function IntroductionParagraph(){

return(

<h2 className="font-mono text-lime-600 text-base inline-block mr-[200px] ml-[400px] pr-96 pt-8"> You can find in this page, the programming projects that I have finished recently. Take a look at them and tell me your opinion.</h2>


)




}



export default Portfolio