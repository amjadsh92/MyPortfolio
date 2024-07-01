import Links from "@/components/Navbar/Links";
import Name from "@/components/Home/Name";
import Avatar from "@/components/Home/Avatar";
import Board from "@/components/Home/Board";
import Socialmedia from "@/components/Home/Socialmedia";

export default function Home() {
  return (
    <div>
      <div className="block max-w-full w-3/4 2xs:w-1/2 mx-auto">
        <Links />

        <div className="relative flex flex-col 2xs:flex-row">
          <Name />
          <Avatar />
        </div>
        <div>
          <Board />
        </div>
        <div className="ml-[40%]">
          <Socialmedia />
        </div>
      </div>
    </div>
  );
}
