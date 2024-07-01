import { ReactNode } from "react";

function Part({
  href,
  status,
  children,
}: {
  href: string;
  status: string;
  children: ReactNode;
}) {
  switch (status) {
    case "title":
      return (
        <p className="pt-4 pl-2 font-sans font-semibold text-slate-100 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base">
          {children}
        </p>
      );

    case "content":
      return (
        <p className="group-hover:brightness-200 pt-4 ml-2 mr-[12px] font-sans font-semibold text-slate-500 text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base">
          {children}
        </p>
      );

    case "button":
      return (
        <a href={href} target="_blank">
          <button className="hover:scale-110 ml-2 mb-4 mt-4 px-1 py-[1px] bg-lime-900 text-white text-[12px] 3xs:text-[14px] 2xs:text-[12px] xs:text-[14px] sm:text-[14px] md:text-base rounded-full">
            {children}
          </button>
        </a>
      );

    default:
      throw Error("Unknown level: " + status);
  }
}

export default Part;
