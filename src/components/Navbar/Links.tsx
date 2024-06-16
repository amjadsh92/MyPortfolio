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
    <div className=" xs:ml-[1%] sm:ml-[10%] md:ml-[0%] max-w-full pt-16 inline-block flex">
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
          ? "text-blue-600 font-bold  3xs:text-[10px] 3xs:ml-2 2xs:ml-2 2xs:text-[13px] xs:ml-8 xs:text-[15px] sm:ml-16 sm:text-base md:ml-20"
          : "text-slate-300 font-bold 3xs:text-[10px] 3xs:ml-2 2xs:ml-2 2xs:text-[13px] xs:ml-8 xs:text-[15px] sm:ml-16 sm:text-base md:ml-20 hover:text-white"
      }
    >
      {" "}
      {item.title}{" "}
    </Link>
  );
};

export default Links;
