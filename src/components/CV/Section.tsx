import { ReactNode } from "react";

function Section({ children }: { children: ReactNode }) {
    return (
      <>
        <section className="group border border-blue-600 rounded border-2 border-black w-[650px] mt-8 ml-96 flex">
          {children}
        </section>
      </>
    );
  }
  

export default Section  