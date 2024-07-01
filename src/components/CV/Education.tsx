import Section from "./Section";
import Part from "./Part";
import { Dirk, IUST, LU, dissertation } from "@/Strings/CV/Education";
import Header from "./Header";

function Education() {
  return (
    <>
      <Header>Education</Header>

     
      <Section>
        <Part status={"date"}>2017-2020</Part>

        <div className="py-[2%] pr-[2%]">
          <Part status={"title"}>
            <a href={IUST} target="_blank">
              Iran University of Science and Technology, Tehran, Iran
            </a>
          </Part>
          <Part status={"subtitle"}>
            Research Masters Degree in Theoretical Solid-state Physics
          </Part>
          <Part status={"content"}>
            Thesis: “Analyzing ballistic spin and charge transport in the
            presence of interfaces with spin-orbit coupling”.
            <br />
            My dissertation can be found in this{" "}
            <a href={dissertation} target="_blank" className="group-hover:text-cyan-950">
              link
            </a>
          </Part>
        </div>
      </Section>

      <Section>
        <Part status={"date"}>2014-2015</Part>

        <div className="py-[2%] pr-[2%]">
          <Part status={"title"}>
            <a href={LU} target="_blank">Lebanese University, Beirut, Lebanon</a>
          </Part>
          <Part status={"subtitle"}>
            Master 1 Certificate in High Energy Physics (Coursework-Based)
          </Part>
        </div>
      </Section>

      <Section>
        <Part status={"date"}>2010-2013</Part>

        <div className="py-[2%] pr-[2%]">
          <Part status={"title"}>
            <a href={LU} target="_blank">Lebanese University, Nabatieh, Lebanon</a>
          </Part>
          <Part status={"subtitle"}>Bachelors Degree in Physics</Part>
        </div>
      </Section>
    </>
  );
}

export default Education;
