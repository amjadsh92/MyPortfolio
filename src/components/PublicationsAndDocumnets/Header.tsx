import { ReactNode } from "react";

function Header({children}:{children:ReactNode}){

return(
<p className="text-slate-800 ml-[400px] mt-8 font-extrabold text-2xl text-white font-mono">
    {children}
</p>
)

}


export default Header