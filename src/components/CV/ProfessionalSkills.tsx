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
  Markdown,
} from "@/Strings/CV/ProfessionalSkills";
import Header from "./Header";

function ProfessionalSkills() {
  return (
    <div>
      <Header> Professional experience </Header>

      <ul className="group ml-[3%] pt-8 w-[80%] grid grid-cols-3 2xs:grid-cols-5 gap-y-4 gap-x-4 text-xs 3xs:text-sm 2xs:text-[13px] xs:text-sm md:text-base text-gray-500 list-disc marker:text-blue-600">
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={javascript}>Javascript</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={HTML}>HTML</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0 ">
          <a href={css}>CSS</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Nextjs}>Next.js</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Reactjs}>ReactJS</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Tailwindcss}>Tailwind css</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Git}>Git</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Linux}>Linux</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Python}>Python</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={MySQL}>MySQL</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={PrismaORM}>Prisma ORM</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Nodejs}>Node.js</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Typescript}>Typescript</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Expess}>Expressjs</a>
        </li>
        <li className="group-hover:brightness-200 min-h-0 min-w-0">
          <a href={Markdown}>Markdown</a>
        </li>
      </ul>
    </div>
  );
}

export default ProfessionalSkills;
