import Header from "./Header";
import { IntroductionToCloudComputing, IntroductionToCloudComputingC, IntroductionToWebDev, IntroductionToWebDevC, GitHub, GitHubC, React, ReactC } from "@/Strings/CV/Certificates";

function Certificates() {
  return (
    <div>
      <Header>Certificates</Header>
         
      <div className="hover:brightness-200 ml-96 mt-8">
        <div className="group mt-8 flex">
          <hr className="group-hover:w-8 pr-4 w-2 border-slate-600 inline-block" />
          <a
            href={IntroductionToCloudComputing}
            className="pl-2 mt-[-12px] font-sans font-semibold text-slate-500 inline-block"
          >
            {" "}
            Introduction to cloud computing(IBM){" "}
          </a>
          <a
            className="mt-[-12px]"
            href={IntroductionToCloudComputingC}
          >
            <button className="ml-8 px-1 py-[1px]  bg-lime-900 text-white invisible rounded-full group-hover:visible">
              Show Certificate
            </button>
          </a>
        </div>

        <div className="group mt-8 flex">
          <hr className=" group-hover:w-8 pr-4 w-2 border-slate-600 inline-block" />
          <a
            href={IntroductionToWebDev}
            className="pl-2 mt-[-12px] font-sans font-semibold text-slate-500 inline-block"
          >
            {" "}
            Introduction to web development with HTML, CSS, and JavaScript (IBM){" "}
          </a>
          <a
            className="mt-[-12px]"
            href={IntroductionToWebDevC}
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
            href={GitHub}
            className="pl-2 mt-[-12px] font-sans font-semibold text-slate-500 inline-block"
          >
            {" "}
            Getting started with Git and GitHub(IBM){" "}
          </a>
          <a
            className="mt-[-12px]"
            href={GitHubC}
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
            href={React}
            className=" pl-2 mt-[-12px] font-sans font-semibold text-slate-500"
          >
            Developing Front-end apps with React(IBM)
          </a>
          <a
            className="mt-[-12px]"
            href={ReactC}
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
