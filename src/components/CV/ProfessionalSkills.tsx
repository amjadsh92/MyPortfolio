import {
  javascript,
  HTML,
  css,
  Nextjs,
  Reactjs,
  Tailwindcss,
  Git,
  Linux,
  Python,
  MySQL,
  PrismaORM,
  Nodejs,
  Typescript,
  Expess,
  Markdown
} from "@/Strings/CV/ProfessionalSkills";
import Header from "./Header";

function ProfessionalSkills() {
  return (
    <>
      
      <Header> Professional experience </Header>  
      

      <div className=" group ml-[350px] pt-8 flex">
        <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
          <li className="group-hover:brightness-200">
            <a href={javascript}>Javascript</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={HTML}>HTML</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={css}>CSS</a>
          </li>
        </ul>
        <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
          <li className="group-hover:brightness-200">
            <a href={Nextjs}>Next.js</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={Reactjs}>ReactJS</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={Tailwindcss}>Tailwind css</a>
          </li>
        </ul>
        <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
          <li className="group-hover:brightness-200">
            <a href={Git}>Git</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={Linux}>Linux</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={Python}>Python</a>
          </li>
        </ul>
        <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
          <li className="group-hover:brightness-200">
            <a href={MySQL}>MySQL</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={PrismaORM}>Prisma ORM</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={Nodejs}>Node.js</a>
          </li>
        </ul>
        <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
          <li className="group-hover:brightness-200">
            <a href={Typescript}>Typescript</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={Expess}>Expressjs</a>
          </li>
          <li className="group-hover:brightness-200">
            <a href={Markdown}>Markdown</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProfessionalSkills;
