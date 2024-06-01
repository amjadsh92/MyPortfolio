import Section from "@/components/Portfolio/Section"


function Portfolio(){

return(

<div className="mt-24">

    <IntroductionParagraph />
    <Section>
        <div className="pt-4 pl-2 font-sans font-semibold text-lg text-slate-100">
            To-Do-List + Tic-Tac-Toe App
        </div>
        <div className="pt-4 pl-2 font-sans font-semibold text-slate-200">
            This app is composed of two apps: A To-Do-List application and a Tic-Tac-Toe game. In the To-Do-List app, you can assign tasks and show and hide the details of each. For the Tic-Tac-Toe game, you can enjoy playing the game and also go back in history to adjust previous moves! For specific details about the app, press the Read More button.
        </div>
    </Section>




</div>


)



}



function IntroductionParagraph(){

return(

<h2 className="font-mono text-lime-600 text-base inline-block mr-[200px] ml-[400px] pr-96 pt-8"> You can find in this page, the programming projects that I have finished recently. Take a look at them and tell me your opinion.</h2>


)




}



export default Portfolio