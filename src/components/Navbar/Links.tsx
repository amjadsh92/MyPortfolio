"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface linktypes {
  title: string;
  path: string;
}

const Links = () => {
  const links: linktypes[] = [
    { title: "Profile", path: "/" },
    { title: "CV", path: "/CV" },
    { title: "Portfolio", path: "/Portfolio" },
    { title: "Publications & Documents", path: "/PublicationsAndDocuments" },
  ];

  return (
    <div className="inline-block justify-center pt-16 items-center gap-y-[16px] grid grid-cols-2 2xs:justify-between  2xs:pl-[0px]  2xs:pr-[0px] 2xs:flex ">
      {links.map((link) => {
        return (
          <div key={link.title}>
            <NavLink item={link} />
          </div>
        );
      })}
    </div>
  );
};

const NavLink = ({ item }: { item: linktypes }) => {
  const pathName : string = usePathname();

  return (
    <Link
      href={item.path}
      className={
        pathName === item.path
          ? "text-blue-600 font-bold text-[14px]  2xs:text-[13px]  xs:text-[14px]  sm:text-[15px] md:text-base"
          : "text-slate-300 font-bold hover:text-white text-[14px] 2xs:text-[13px]  xs:text-[14px]  sm:text-[15px] md:text-base "
      }
    >
      {" "}
      {item.title}{" "}
    </Link>
  );
};

export default Links;
