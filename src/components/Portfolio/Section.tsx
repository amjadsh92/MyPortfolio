import { ReactNode } from "react";

function Section({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="group border border-blue-600 rounded border-2 border-black w-[650px] mt-8 ml-[400px]">
        {children}
      </section>
    </>
  );
}

export default Section;
