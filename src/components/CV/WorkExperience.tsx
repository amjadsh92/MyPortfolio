import Section from "./Section";
import Part from "./Part";
import { raboudUniversity } from "@/Strings/CV/Workexperience";
import Header from "./Header";
import { Dirk } from "@/Strings/CV/Education";

function WorkExperience() {
  return (
    <>
      <Header>Work Experience</Header>

      <Section>
        <Part status={"date"}>2023-present</Part>

        <div className="py-[2%] pr-[2%]">
          <Part status={"title"}>Self-taught Web-Developer</Part>
          <Part status={"content"}>
            With the guidance of a senior web-developer (
            <a
              href={Dirk}
              target="_blank"
              className="group-hover:text-cyan-950"
            >
              Dirk Groenen
            </a>
            ), I studied web-development and aquired foundational knowledge of
            its back-end and front-end part. So far, I have built two software
            applications (This portfolio + another app) . You can check it in
            the Projects section. In the meantime, I am continuously learning
            and improving my skills in that domain.
          </Part>
        </div>
      </Section>
      <Section>
        <Part status={"date"}>2022-2023</Part>

        <div className="py-[2%] pr-[2%]">
          <Part status={"title"}>
            <a href={raboudUniversity} target="_blank">
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
