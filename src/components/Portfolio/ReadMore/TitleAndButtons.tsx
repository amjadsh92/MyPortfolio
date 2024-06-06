function TitleAndButtons() {
  return (
    <div className="flex">
      <div className="pt-24 fixed">
        <a href="/Portfolio" className="pt-24 ml-4 ">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Go Back
          </button>
        </a>
        <a href="https://github.com/amjadsh92/MyProject" className="pt-24 ml-4 ">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            GitHub
          </button>
        </a>
      </div>
      <p className="font-sans font-semibold text-black text-3xl ml-[440px] mt-24">
        To-Do-List + Tic-Tac-Toe App
      </p>
    </div>
  );
}

export default TitleAndButtons;
