import Section from "./Section";
import Part from "./Part";
import {raboudUniversity} from "@/Strings/CV/Workexperience"

function WorkExperience() {
  return (
    <>
      <div className="ml-96">
        <p className="text-slate-800 font-extrabold text-2xl text-white font-mono">
          {" "}
          Work Experience{" "}
        </p>
      </div>
      <Section>
        
          <Part status={"date"}>2022-2023</Part>
        
        <div className="py-4 pr-4">
          <Part status={"title"}>
            <a href= {raboudUniversity} >
              Radboud University, Department of Theoretical Chemistry, Nijmegen,
              Netherlands
            </a>
          </Part>
          <Part status={"subtitle"}>
            PhD Candidate in Molecular Physics/ Theoretical Chemistry
          </Part>
          <Part status={"content"}>
            I worked on a project titled &apos;Field control of molecular
            collisions&apos;. During this period, I gained a lot of research,
            programming (Python + Scilab + Linux), teaching, and inter-personal
            skills.
          </Part>
        </div>
      </Section>
    </>
  );
}

export default WorkExperience;
