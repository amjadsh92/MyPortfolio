import { ReactNode } from "react";

function Section({ children }: { children: ReactNode }) {
  return (
    <>
      <section className="group border border-blue-600 rounded border-2 border-black mt-[4%]">
        {children}
      </section>
    </>
  );
}

export default Section;
