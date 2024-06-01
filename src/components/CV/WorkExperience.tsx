import Section from "./Section";
import Part from "./Part";






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
          <div className="min-w-32 pt-4">
            <Part status={"date"}>2022-2023</Part>
          </div>
          <div className="pt-4 pb-4">
            <Part status={"title"}>
              <a href="https://www.topuniversities.com/universities/radboud-university">Radboud University, Department of Theoretical Chemistry, Nijmegen,
              Netherlands</a>
            </Part>
            <Part status={"subtitle"}>PhD Candidate in Molecular Physics/ Theoretical Chemistry</Part>
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


export default WorkExperience   
