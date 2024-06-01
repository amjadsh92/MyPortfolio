import { ReactNode } from "react";


function Part({
    status,
    children,
  }: {
    status: string;
    children: ReactNode;
  }) {
    switch (status) {
      case "date":
        return (
          <p className=" group-hover:brightness-200 pl-2 font-sans font-semibold text-slate-500">{children}</p>
        );
      case "title":
        return (
          <p  className="group-hover:text-lime-700 font-sans font-semibold text-slate-100 ">{children}</p>
        );
      case "subtitle":
        return (
          <p className="group-hover:text-lime-700 pt-2 font-sans italic text-slate-50 text-sm">
            {children}
          </p>
        );
      case "content":
        return (
          <p className=" group-hover:brightness-200 pt-4 font-sans font-semibold text-slate-500 ">
            {children}
          </p>
        );
  
      default:
        throw Error("Unknown level: " + status);
    }
  }


export default Part  