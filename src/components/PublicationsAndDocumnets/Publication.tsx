import Section from "./Section";
import Part from "./Part";
import {
  OfficialPaper,
  Draft,
} from "@/Strings/PublicationsAndDocuments/Publications";

function Publication() {
  return (
    <Section>
      <Part status="title" href={""}>
        Ballistic spin transport through a metallic system of two junctions with
        strong spin-orbit coupling
      </Part>
      <Part status="content" href={""}>
        This article is a summary of the findings that I obtained in my
        master&apos;s project. It is published by the scientific journal{" "}
        <span className="group-hover:text-cyan-950">
          European Physical journal B{" "}
        </span>
        . You can check in the official website of ERJB or you can get its final
        draft by clicking the{" "}
        <span className="group-hover:text-cyan-950">See Draft</span> button.
      </Part>

      <Part status="button" href={OfficialPaper}>
        {" "}
        Website
      </Part>
      <Part status="button" href={Draft}>
        {" "}
        See Draft
      </Part>
    </Section>
  );
}

export default Publication;
