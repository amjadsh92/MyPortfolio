import Links from "@/components/Navbar/Links";
import Avatar from "@/components/Portfolio/Avatar";
import IntroductionParagraph from "@/components/Portfolio/IntroductionParagraph";
import MovingTitle from "@/components/Portfolio/MovingTitle";
import Projects from "@/components/Portfolio/Projects";

function Portfolio() {
  return (
    <div className="max-w-full">
      <div className="block max-w-full w-3/4 2xs:w-1/2 mx-auto">
      <Links />
      <div className="mt-[16%]">
      <IntroductionParagraph />
      <Projects />
      <Avatar />
      </div>
      </div>
    </div>
  );
}

export default Portfolio;
