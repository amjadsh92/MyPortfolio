import Links from "@/components/Navbar/Links";
import Name from "@/components/Home/Name";
import Avatar from "@/components/Home/Avatar";
import Board from "@/components/Home/Board";
import Socialmedia from "@/components/Home/Socialmedia";


export default function Home() {
  return (
    <>
      <Links />
      <div className="flex">
        <Name />
        <Avatar />
      </div>
      <div className="ml-32 mr-32">
        <Board />
      </div>
      <div className="pt-16 ml-72">
        <Socialmedia />
      </div>
    </>
  );
}
