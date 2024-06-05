import Section from "./Section";
import Part from "./Part";
import { Thesis, Tutorial } from "@/Strings/PublicationsAndDocuments/Documents";

function Documents() {
  return (
    <>
      <Section>
        <Part status="title" href={""}>
          Analyzing ballistic spin and charge transport in the presence of
          interfaces with spin-orbit coupling
        </Part>
        <Part status="content" href={""}>
          This is my master&apos;s thesis was mainly focused on modelling the
          behaviour of spin and charge currents in a ballistic system where I
          used Python language to perform the simulations.
        </Part>

        <Part status="button" href={Thesis}>
          See Draft
        </Part>
      </Section>

      <Section>
        <Part status="title" href={""}>
          Physical Phenomena
        </Part>
        <Part status="content" href={""}>
          This document is a series of tutorials demystifying physical concepts.
          THe first chapter is about Interference and Diffraction of Light. It
          is a last-year high school or first-year university level. The
          document is not complete yet. I stopped writing it more than two years
          ago, but I may complete it in any later period of time in the future.
        </Part>

        <Part status="button" href={Tutorial}>
          See Draft
        </Part>
      </Section>
    </>
  );
}

export default Documents;
