import Links from "@/components/Navbar/Links";
import IntroductionParagraph from "@/components/PublicationsAndDocumnets/IntroductionParagraph";
import Header from "@/components/PublicationsAndDocumnets/Header";
import Publication from "@/components/PublicationsAndDocumnets/Publication";
import Documents from "@/components/PublicationsAndDocumnets/Documents";
import MovingTitle from "@/components/PublicationsAndDocumnets/MovingTitle";

function PublicationAndDocuments() {
  return (
    <div className="max-w-full">
      <div className="block max-w-full w-3/4 2xs:w-1/2 mx-auto">  
      <Links />
      <div className="mt-16%">
        <IntroductionParagraph />
      </div>
      <div className="pb-16">
        <Header>Publications</Header>
        <Publication />

        <Header>Documents</Header>
        <Documents />
      </div>  
      </div>
    </div>
  );
}

export default PublicationAndDocuments;
