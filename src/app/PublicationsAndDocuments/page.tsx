import Links from "@/components/Navbar/Links";
import IntroductionParagraph from "@/components/PublicationsAndDocumnets/IntroductionParagraph";
import Header from "@/components/PublicationsAndDocumnets/Header";
import Publication from "@/components/PublicationsAndDocumnets/Publication";
import Documents from "@/components/PublicationsAndDocumnets/Documents";
import MovingTitle from "@/components/PublicationsAndDocumnets/MovingTitle";

function PublicationAndDocuments() {
  return (
    <>
      <Links />
      < MovingTitle />
      <IntroductionParagraph />
      <div className="pb-16">
        <Header>Publications</Header>
        <Publication />

        <Header>Documents</Header>
        <Documents />
      </div>
    </>
  );
}

export default PublicationAndDocuments;
