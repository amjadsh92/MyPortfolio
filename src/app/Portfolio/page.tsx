import Links from "@/components/Navbar/Links";
import Avatar from "@/components/Portfolio/Avatar";
import IntroductionParagraph from "@/components/Portfolio/IntroductionParagraph";
import MovingPortfolioTitle from "@/components/Portfolio/MovingPortfolioTitle";
import Projects from "@/components/Portfolio/Projects";

function Portfolio() {
  return (
    <>
      <Links />
      <MovingPortfolioTitle />
      <IntroductionParagraph />
      <Projects />
      <Avatar />

    </>
  );
}

export default Portfolio;
