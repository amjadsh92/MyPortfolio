import Header from "./Header";
import {
  IntroductionToCloudComputing,
  IntroductionToCloudComputingC,
  IntroductionToWebDev,
  IntroductionToWebDevC,
  GitHub,
  GitHubC,
  React,
  ReactC,
} from "@/Strings/CV/Certificates";

function Certificates() {
  return (
    <div>
      <Header>Certificates</Header>

      <div className="hover:brightness-200  mt-[4%]">
        <ul className="list-none">
          <li className="group mt-[1.75%] flex items-center">
            <a
              href={IntroductionToCloudComputing}
              className=" 4xs:max-sm:w-1/2 font-sans font-semibold text-slate-500 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base flex items-center"
            >
              <span className="group-hover:w-8 w-4 min-w-4 border-b-2 border-slate-600 inline-block mr-2 transition-all duration-300"></span>
              <span className="inline-block">Introduction to cloud computing (IBM)</span>
            </a>
            <a className="ml-[2%]"href={IntroductionToCloudComputingC}>
            <button className=" bg-lime-900 text-white text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base invisible rounded-full group-hover:visible">
              <span className="p-[4px]">Show Certificate</span>
            </button>
             </a>
          </li>
          <li className="group mt-[1.75%] flex items-center">
            <a
              href={IntroductionToWebDev}
              className="4xs:max-sm:w-1/2 font-sans font-semibold text-slate-500 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base flex items-center"
            >
              <span className="group-hover:w-8 min-w-4 w-4 border-b-2 border-slate-600 inline-block mr-2 transition-all duration-300"></span>
              <span className="inline-block">Introduction to web development with HTML, CSS, and JavaScript (IBM)</span>
            </a>
            <a className="ml-[2%]" href={IntroductionToWebDevC}>
            <button className=" bg-lime-900 text-white text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base invisible rounded-full group-hover:visible">
              <span className="p-[4px]">Show Certificate</span>
            </button>
             </a>
          </li>
          <li className="group mt-[1.75%] flex items-center">
            <a
              href={GitHub}
              className="4xs:max-sm:w-1/2 font-sans font-semibold text-slate-500 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base flex items-center"
            >
              <span className="group-hover:w-8 min-w-4 w-4 border-b-2 border-slate-600 inline-block mr-2 transition-all duration-300"></span>
              <span className="inline-block">Getting started with Git and GitHub (IBM)</span>
            </a>
            <a className="ml-[2%]" href={GitHubC}>
            <button className=" bg-lime-900 text-white text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base invisible rounded-full group-hover:visible">
              <span className="p-[4px]">Show Certificate</span>
            </button>
             </a>
          </li>
          <li className="group mt-[1.75%] flex items-center">
            <a
              href={React}
              className="4xs:max-sm:w-1/2 font-sans font-semibold text-slate-500 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base flex items-center"
            >
              <span className="group-hover:w-8 w-4 min-w-4 border-b-2 border-slate-600 inline-block mr-2 transition-all duration-300"></span>
              <span className="inline-block">Developing Front-end apps with React(IBM)</span>
            </a>
            <a  className="ml-[2%]" href={ReactC}>
            <button className=" bg-lime-900 text-white text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base invisible rounded-full group-hover:visible">
              <span className="p-[4px]">Show Certificate</span>
            </button>
             </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Certificates;
