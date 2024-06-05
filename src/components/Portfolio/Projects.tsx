import Section from "./Section"
import Part from "./Part"
import { ReadMore, GitHub  } from "@/Strings/Portfolio/Projects"

function Projects(){

    return(
    
    <Section>
          <Part status="title" href="" >To-Do-List + Tic-Tac-Toe App</Part>
          <Part status="content" href="" >This app is composed of two apps: A To-Do-List app and a Tic-Tac-Toe game. In the To-Do-List app, you can assign tasks with the ability to show and hide the details of each. For the Tic-Tac-Toe game, you can enjoy playing the game and also go back in history to adjust previous moves! For specific details about the app, press the <span className="group-hover:text-cyan-950 ">Read More</span> button.</Part>
          <Part status="button" href={ReadMore}>Read More</Part>
          <Part status="button" href={GitHub}>GitHub</Part>
   </Section>
    
    
    )
    
    
    }


export default Projects    