import Image from "next/image"


function ReadMore(){


return(
<>
<div id="MainPage" className="bg-cyan-700 bg-cover" >
<div  id="title and buttons" className="flex" >
<div className="pt-24 fixed">    
<a href="/Portfolio" className="pt-24 ml-4 ">
<button type="button" className="text-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Go Back</button>
</a> 
<a href="/Portfolio" className="pt-24 ml-4 ">
<button type="button" className="text-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub</button>
</a> 
</div> 
<p className="font-sans font-semibold text-black text-3xl ml-[440px] mt-24">To-Do-List + Tic-Tac-Toe App</p>
</div>
<div className="  ml-[440px] mt-10 max-w-[800px] mb-4 ">
 <p className="font-sans font-semibold text-black text-2xl"> Motivation behind this project and glimpse of what I learned </p>
 <p className="font-mono font-semibold text-black text-xl mt-8"  > This application is composed of two apps, the tic-tac-toe game and a To-Do-List app.<br /> The two apps look unrelated this is because this is the first application that I have built. My goal was to learn the basics of the back-end and front-end development. So I started first by creating a To-Do-List app and then after succesfully building it and to enhance my skills and my understanding of the concepts, I started with a harder project, which is the Tic-Tac-Toe game <br /> Then to learn the concept of Routing, I merged the two projects into one project.<br /> Just by building these two applications, I learned the core concepts of front-end like: Making CRUD operations, understanding React principles, managing the state of the app using Redux library, and much more..<br /> In the app I also managed the back-end part and understood its basic concepts. For both apps, user&apos;s data is saved in a database, so your information will not get lost when you exit the page. You can register and log-in with your credentials, or you can just sign-in with your GitHuB account. </p>
 <p className="font-sans font-semibold text-black text-2xl mt-8"> To-Do-List App</p>
 <p className="font-mono font-semibold text-black text-xl mt-8"> It is a simple application, where we list our daily tasks, so we can remeber them and manage the day more efficiently.<br /> When you open the To-Do-List page, you will see three blocks: <span className="font-semibold">1-</span>To-do<span className="font-semibold"> 2- </span> To-do-Items <span className="font-semibold"> 3-</span>Details. </p>
 <ToDoPhoto />
 <ToDoItemsPhoto/>
 <Details />
 <p className="font-sans font-semibold text-black text-2xl mt-8"> Tic-Tac-Toe</p>
 <p className="font-mono font-semibold text-black text-xl mt-8"> It is a classical Tic-Tac-Toe game, while you are playing you can decide to reset the game or go back to any previous move!</p>
 <TicTacToePhoto />
 <p className="font-sans font-semibold text-black text-2xl mt-8"> Authentication</p>
 <p className="font-mono font-semibold text-black text-xl mt-8">If you clone the addAuthentication branch of the GitHub repositoy of this app, you will have the app with the authentication feature added to it. If you are not signed-in all pages will be protected which means that you can&apos;t access the pages of the app. You can either sign-in with your credentials or your GitHub account. Once you are signed-in, you will be directed to the Homepage, with your username and email shown there </p>
< SignInPhoto />
 <SignInPhoto1 />
</div>
</div>

</>

)


}

export default ReadMore





function ToDoPhoto(){


    return(
      <> 
        
      <div className="mt-24">
      <p className="font-mono font-semibold text-black text-xl mb-4" >The To-do block: Here you submit your task with showing some details pertaining it in the Description section</p>
      <Image
        
        src="/Todo.png"
        width={700}
        height={700}
        alt="Picture of the author"
      />
     </div>
     </> 
    )
  
  }



  function ToDoItemsPhoto(){


    return(
      <> 
        
      <div className="mt-24">
      <p className="font-mono font-semibold text-black text-xl mb-4" >The To-do-items block: All the tasks that you have submitted in the to-do block will be shown here</p>
      <Image
        
        src="/ToDoItems.png"
        width={700}
        height={700}
        alt="Picture of the author"
      />
     </div>
     </> 
    )
  
  }



  function Details(){


    return(
      <> 
        
      <div className="mt-24">
      <p className="font-mono font-semibold text-black text-xl mb-4" >The Details block: when you press the show button for a certain task, the details the you have written in the desciption section in the to-do block will appear in the Details-block with the name of the task and its ID. You can also hide the details by pressing the Hide button. </p>
      <Image
        
        src="/Details.png"
        width={700}
        height={700}
        alt="Picture of the author"
      />
     </div>
     </> 
    )
  
  }


  function TicTacToePhoto(){


    return(
      <> 
        
      <div className="mt-24">
      
      <Image
        
        src="/TicTacToe.png"
        width={700}
        height={700}
        alt="Picture of the author"
      />
     </div>
     </> 
    )
  
  }


  function SignInPhoto(){


    return(
      <> 
        
      <div className="mt-24">
      <p className="font-mono font-semibold text-black text-xl mb-4" >So you can sign-in from the sign-in page</p>
      <Image
        
        src="/authentication.png"
        width={400}
        height={400}
        alt="Picture of the author"
      />
     </div>
     </> 
    )
  
  }




  function SignInPhoto1(){


    return(
      <> 
        
      <div className="mt-24 pb-8">
      <p className="font-mono font-semibold text-black text-xl mb-4" >When you sign-in you will be directed to the home-page with your username and email shown. </p>
      <Image
        
        src="/authentication2.png"
        width={600}
        height={600}
        alt="Picture of the author"
      />
      <p className="font-mono font-semibold text-black text-xl pt-8" >When you logout, you will be redirected again to the sign-in page.</p>
     </div>
     </> 
    )
  
  }