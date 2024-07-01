import { ReactNode } from "react";

function Part({ status, children }: { status: string; children: ReactNode }) {
  switch (status) {
    case "date":
      return (
        <p className="group-hover:brightness-200 min-w-[27%] pt-[2%] pl-[1%] font-sans font-semibold text-slate-500 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base">
          {children}
        </p>
      );
    case "title":
      return (
        <p className="group-hover:text-lime-700 font-sans font-semibold text-slate-100 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base">
          {children}
        </p>
      );
    case "subtitle":
      return (
        <p className="group-hover:text-lime-700 pt-[1%] font-sans italic text-slate-50 text-[10px] 3xs:text-[12px] 2xs:text-[10px] xs:text-[12px] sm:text-[12px] md:text-sm">
          {children}
        </p>
      );
    case "content":
      return (
        <p className=" group-hover:brightness-200 pt-[2%] font-sans font-semibold text-slate-500 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base">
          {children}
        </p>
      );

    default:
      throw Error("Unknown level: " + status);
  }
}

export default Part;
