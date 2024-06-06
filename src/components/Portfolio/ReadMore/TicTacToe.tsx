import Image from "next/image";

function TicTacToe() {
  return (
    <>
      <p className="font-sans font-semibold text-black text-2xl mt-8">
        {" "}
        Tic-Tac-Toe
      </p>
      <p className="font-mono font-semibold text-black text-xl mt-8">
        {" "}
        It is a classical Tic-Tac-Toe game, while you are playing you can decide
        to reset the game or go back to any previous move!
      </p>
      <TicTacToePhoto />
    </>
  );
}

export default TicTacToe;

function TicTacToePhoto() {
  return (
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
  );
}
