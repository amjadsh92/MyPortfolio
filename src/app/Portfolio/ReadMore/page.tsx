import Motivation from "@/components/Portfolio/ReadMore/Motivation";
import TitleAndButtons from "@/components/Portfolio/ReadMore/TitleAndButtons";
import ToDoListApp from "@/components/Portfolio/ReadMore/ToDoListApp";
import TicTacToe from "@/components/Portfolio/ReadMore/TicTacToe";
import Authentication from "@/components/Portfolio/ReadMore/Authentication";

function ReadMore() {
  return (
    <>
      <div className="bg-cyan-700 bg-cover">
        <TitleAndButtons />
        <div className="  ml-[440px] mt-10 max-w-[800px] mb-4 ">
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
