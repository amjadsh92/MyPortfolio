import Links from "@/components/Navbar/Links";
import Name from "@/components/Home/Name";
import Avatar from "@/components/Home/Avatar";
import Board from "@/components/Home/Board";
import Socialmedia from "@/components/Home/Socialmedia";

export default function Home() {
  return (
    <div className="container mx-auto ">
      <div className="relative block md:max-w-[70%] md:ml-[0%]">
      <Links />
      
      <div className=" xs:ml-[1%] sm:ml-[10%] md:ml-[0%] md:max-w-[70%] flex">
        <Name />
        <Avatar />
      </div>
      <div className="xs:ml-[1%] sm:ml-[10%] md:ml-[8%] md:max-w-[70%]">
        <Board />
      </div>
      </div>
      <div className="pt-16 ml-72">
        <Socialmedia />
      </div>
    </div>
  );
}
