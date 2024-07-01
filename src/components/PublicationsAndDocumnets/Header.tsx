import { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <p className="text-slate-800 mt-8 font-extrabold text-white text-base 3x:text-lg 2xs:text-base xs:text-xl sm:text-xl md:text-2xl font-mono">
      {children}
    </p>
  );
}

export default Header;
