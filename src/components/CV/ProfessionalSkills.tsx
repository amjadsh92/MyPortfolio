


function ProfessionalSkills(){

    return (
          <>
            <div className="ml-96 pt-8">
              <p className="text-slate-800 font-extrabold text-2xl text-white font-mono">
                {" "}
                Professional experience{" "}
              </p>
            </div>
            <div className=" group ml-[350px] pt-8 flex">
                <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
                <li className="group-hover:brightness-200" ><a href={"https://ecma-international.org/publications-and-standards/standards/ecma-262/"}>Javascript</a></li>
                <li className="group-hover:brightness-200"><a href={"https://html.spec.whatwg.org"}>HTML</a></li>
                <li className="group-hover:brightness-200"><a href={"https://w3.org/TR/CSS/#css"}>CSS</a></li>
                </ul>
                <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
                <li className="group-hover:brightness-200"><a href={"https://nextjs.org/"}>Next.js</a></li>
                <li className="group-hover:brightness-200"><a href={"https://react.dev/"}>ReactJS</a></li>
                <li className="group-hover:brightness-200"><a href={"https://tailwindcss.com/"}>Tailwind css</a></li>
                </ul>
                <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
                <li className="group-hover:brightness-200"><a href={"https://git-scm.com/"}>Git</a></li>
                <li className="group-hover:brightness-200"><a href={"https://kernel.org"}>Linux</a></li>
                <li className="group-hover:brightness-200"><a href={"https://www.python.org/"}>Python</a></li>
                </ul>
                <ul className="pl-16 space-y-5 text-gray-500 list-disc marker:text-blue-600">
                <li className="group-hover:brightness-200"><a href={"https://www.mysql.com/"}>MySQL</a></li>
                <li className="group-hover:brightness-200"><a href={"https://www.prisma.io/"}>Prisma ORM</a></li>
                <li className="group-hover:brightness-200"><a href={"https://nodejs.org/en"}>Node.js</a></li>
                </ul>

            </div>
            
          </>


        );


}



export default ProfessionalSkills