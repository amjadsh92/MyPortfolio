import Section from "@/components/Portfolio/Section";
import Link from "next/link";
import Links from "@/components/Navbar/Links";
import IntroductionParagraph from "@/components/PublicationsAndDocumnets/IntroductionParagraph";
import Header from "@/components/PublicationsAndDocumnets/Header";
import Publication from "@/components/PublicationsAndDocumnets/Publication";
import Documents from "@/components/PublicationsAndDocumnets/Documents";

function PublicationAndDocuments() {
  return (
    <>
      <Links />

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
