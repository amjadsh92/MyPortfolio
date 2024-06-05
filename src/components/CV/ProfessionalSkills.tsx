import  {javascript, HTML, css, Nextjs, Reactjs, Tailwindcss, Git, Linux, Python, MySQL, PrismaORM, Nodejs} from "@/Strings/CV/ProfessionalSkills"
 

function ProfessionalSkills() {
  return (
    <>
     
        <div className="text-slate-800 ml-96 pt-8 font-extrabold text-2xl text-white font-mono">
          {" "}
          Professional experience{" "}
        </div>
      
      <div className=" group ml-[350px] pt-8 flex">
        <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
          <li className="group-hover:brightness-200">
            <a
              href={
                javascript
              }
            >
              Javascript
            </a>
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
      </div>
    </>
  );
}

export default ProfessionalSkills;
