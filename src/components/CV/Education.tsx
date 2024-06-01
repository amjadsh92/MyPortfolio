import Section from "./Section";
import Part from "./Part";




function Education() {
    return (
      <>
        <div className="ml-96 pt-8">
          <p className="text-slate-800 font-extrabold text-2xl text-white font-mono">
            {" "}
            Education{" "}
          </p>
        </div>
        <Section>
          <div className="min-w-32 pt-4">
            <Part status={"date"}>2023-present</Part>
          </div>
          <div className="pt-4 pb-4">
            <Part status={"title"}>Self learning sofware development</Part>
            <Part status={"content"}>
              With the guidance of the senior web-developer (<a href={"https://www.linkedin.com/in/dirkgroenen/"} className="group-hover:text-cyan-950">Dirk Groenen</a>), I studied web-development and I was able to learn the
              basics of its back-end and front-end part. I managed to create a
              software application by myself. You can check it in the Projects
              section. In the meantime, I am continuously learning and improving
              my skills in that domain.
            </Part>
          </div>
        </Section>
  
        <Section>
          <div className="min-w-32 pt-4">
            <Part status={"date"}>2017-2020</Part>
          </div>
          <div className="pt-4 pb-4">
            <Part status={"title"}>
              <a href="https://www.topuniversities.com/universities/iran-university-science-technology">Iran University of Science and Technology, Tehran, Iran</a>
            </Part>
            <Part status={"subtitle"}>
              Research Masters Degree in Theoretical Solid-state Physics
            </Part>
            <Part status={"content"}>
              Thesis: “Analyzing ballistic spin and charge transport in the
              presence of interfaces with spin-orbit coupling”.
              <br />
              My dissertation can be found in this <a href="https://drive.google.com/file/d/1fELqJWmaX-2kvb63V2Isvtg0WvT_DgYD/view" className="group-hover:text-cyan-950">link</a>
            </Part>
          </div>
        </Section>
  
        <Section>
          <div className="min-w-32 pt-4">
            <Part status={"date"}>2014-2015</Part>
          </div>
          <div className="pt-4 pb-4">
            <Part status={"title"}><a href="https://www.topuniversities.com/universities/lebanese-university">Lebanese University, Beirut, Lebanon</a></Part>
            <Part status={"subtitle"}>
              Master 1 Certificate in High Energy Physics (Coursework-Based)
            </Part>
          </div>
        </Section>
  
        <Section>
          <div className="min-w-32 pt-4">
            <Part status={"date"}>2010-2013</Part>
          </div>
          <div className="pt-4 pb-4">
            <Part status={"title"}><a href="https://www.topuniversities.com/universities/lebanese-university">Lebanese University, Nabatieh, Lebanon</a></Part>
            <Part status={"subtitle"}>Bachelors Degree in Physics</Part>
          </div>
        </Section>
      </>
    );
  }


  export default Education