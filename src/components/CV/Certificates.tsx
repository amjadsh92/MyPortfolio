function Certificates() {
  return (
    <div className="certificates ml-96 pt-8">
      <div>
        <p className="text-slate-800 font-extrabold text-2xl text-white font-mono">
          {" "}
          Certificates{" "}
        </p>
      </div>
      <div className="hover:brightness-200 mt-8">
        <div className="group mt-8 flex">
          <hr className="group-hover:w-8 pr-4 w-2 border-slate-600 inline-block" />
          <a
            href="https://www.coursera.org/learn/introduction-to-cloud"
            className="pl-2 mt-[-12px] font-sans font-semibold text-slate-500 inline-block"
          >
            {" "}
            Introduction to cloud computing(IBM){" "}
          </a>
          <a
            className="mt-[-12px]"
            href="https://drive.google.com/file/d/1dL6bgTWiFsbLNcAWXx2QX1vrjOx8IVDB/view?usp=sharing"
          >
            <button className="ml-8 px-1 py-[1px]  bg-lime-900 text-white invisible rounded-full group-hover:visible">
              Show Certificate
            </button>
          </a>
        </div>

        <div className="group mt-8 flex">
          <hr className=" group-hover:w-8 pr-4 w-2 border-slate-600 inline-block" />
          <a
            href="https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript"
            className="pl-2 mt-[-12px] font-sans font-semibold text-slate-500 inline-block"
          >
            {" "}
            Introduction to web development with HTML, CSS, and JavaScript (IBM){" "}
          </a>
          <a
            className="mt-[-12px]"
            href="https://drive.google.com/file/d/1wa9BLZN8cQJNoVHPVFDerAhksYoPn7fP/view?usp=sharing"
          >
            <button className="ml-8 px-1 py-[1px] bg-lime-900 text-white invisible rounded-full group-hover:visible">
              {" "}
              Show Certificate
            </button>{" "}
          </a>
        </div>

        <div className="group mt-8 flex">
          <hr className="group-hover:w-8  pr-4 w-2 border-slate-600 inline-block" />
          <a
            href="https://www.coursera.org/learn/getting-started-with-git-and-github"
            className="pl-2 mt-[-12px] font-sans font-semibold text-slate-500 inline-block"
          >
            {" "}
            Getting started with Git and GitHub(IBM){" "}
          </a>
          <a
            className="mt-[-12px]"
            href="https://drive.google.com/file/d/1nQPqcXUJHQbAh_s5_FhXfyOe-J9zd8ZB/view?usp=sharing"
          >
            <button className="ml-8 px-1 py-[1px] bg-lime-900 text-white invisible rounded-full group-hover:visible">
              {" "}
              Show Certificate
            </button>{" "}
          </a>
        </div>

        <div className="group mt-8 flex">
          <hr className="group-hover:w-8 pr-4 w-2 border-slate-600" />
          <a
            href="https://www.coursera.org/learn/developing-frontend-apps-with-react"
            className=" pl-2 mt-[-12px] font-sans font-semibold text-slate-500"
          >
            Developing Front-end apps with React(IBM)
          </a>
          <a
            className="mt-[-12px]"
            href="https://drive.google.com/file/d/1nQPqcXUJHQbAh_s5_FhXfyOe-J9zd8ZB/view?usp=sharing"
          >
            <button className="ml-8 px-1 py-[1px] bg-lime-900 text-white invisible rounded-full group-hover:visible">
              {" "}
              Show Certificate
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
