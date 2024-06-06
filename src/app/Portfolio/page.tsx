import Links from "@/components/Navbar/Links";
import Avatar from "@/components/Portfolio/Avatar";
import IntroductionParagraph from "@/components/Portfolio/IntroductionParagraph";
import MovingTitle from "@/components/Portfolio/MovingTitle";
import Projects from "@/components/Portfolio/Projects";

function Portfolio() {
  return (
    <>
      <Links />
      <MovingTitle />
      <IntroductionParagraph />
      <Projects />
      <Avatar />

    </>
  );
}

export default Portfolio;
