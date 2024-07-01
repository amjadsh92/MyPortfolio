import Image from "next/image";

function ToDoListApp() {
  return (
    <>
      <p className="font-sans font-semibold text-black text-base 3xs:text-lg 2xs:text-base xs:text-lg sm:text-xl md:text-2xl mt-8">
        {" "}
        To-Do-List App
      </p>
      <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl mt-8">
        {" "}
        It is a simple application, where we list our daily tasks, so we can
        remeber them and manage the day more efficiently.
        <br /> When you open the To-Do-List page, you will see three blocks:{" "}
        <span className="font-semibold">1-</span>To-do
        <span className="font-semibold"> 2- </span> To-do-Items{" "}
        <span className="font-semibold"> 3-</span>Details.{" "}
      </p>
      <ToDoPhoto />
      <ToDoItemsPhoto />
      <DetailsPhoto />
    </>
  );
}

export default ToDoListApp;

function ToDoPhoto() {
  return (
    <>
      <div className="mt-24">
        <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl mb-4">
          The To-do block: Here you submit your task with showing some details
          pertaining it in the Description section
        </p>
        <Image
          src="/Todo.png"
          width={700}
          height={700}
          alt="Picture of the author"
        />
      </div>
    </>
  );
}

function ToDoItemsPhoto() {
  return (
    <>
      <div className="mt-24">
        <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl mb-4">
          The To-do-items block: All the tasks that you have submitted in the
          to-do block will be shown here
        </p>
        <Image
          src="/ToDoItems.png"
          width={700}
          height={700}
          alt="Picture of the author"
        />
      </div>
    </>
  );
}

function DetailsPhoto() {
  return (
    <>
      <div className="mt-24">
        <p className="font-mono font-semibold text-black text-sm 3xs:text-base 2xs:text-sm xs:text-base sm:text-lg md:text-xl mb-4">
          The Details block: when you press the show button for a certain task,
          the details the you have written in the desciption section in the
          to-do block will appear in the Details-block with the name of the task
          and its ID. You can also hide the details by pressing the Hide button.{" "}
        </p>
        <Image
          src="/Details.png"
          width={700}
          height={700}
          alt="Picture of the author"
        />
      </div>
    </>
  );
}
