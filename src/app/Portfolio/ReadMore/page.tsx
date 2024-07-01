import Motivation from "@/components/Portfolio/ReadMore/Motivation";
import ToDoListApp from "@/components/Portfolio/ReadMore/ToDoListApp";
import TicTacToe from "@/components/Portfolio/ReadMore/TicTacToe";
import Authentication from "@/components/Portfolio/ReadMore/Authentication";
import Title from "@/components/Portfolio/ReadMore/Title";
import Buttons from "@/components/Portfolio/ReadMore/Buttons";


function ReadMore() {
  return (
    <>
      <div className="max-w-full bg-cyan-700 bg-cover">
        <Buttons />
        <div className="block w-2/3 2xs:ml-[30%] 2xs:max-w-[50%] mb-[5%] mx-auto">
          
          <Title />
          <Motivation />
          <ToDoListApp />
          <TicTacToe />
          <Authentication />
        </div>
      </div>
    </>
  );
}

export default ReadMore;
