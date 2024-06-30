import WorkExperience from "@/components/CV/WorkExperience";
import Education from "@/components/CV/Education";
import ProfessionalSkills from "@/components/CV/ProfessionalSkills";
import MovingTitle from "@/components/CV/MovingTitle";
import Avatar from "@/components/CV/Avatar";
import Certificates from "@/components/CV/Certificates";
import Languages from "@/components/CV/Languages";
import Hobbies from "@/components/CV/Hobbies";
import Links from "@/components/Navbar/Links";
import AvatarSmall from "@/components/CV/AvatarSmall";

function MyCV() {
  return (
    <div className="max-w-full">
      <Avatar />
      <div className="block max-w-full w-3/4 2xs:w-1/2 mx-auto">
        <Links />
        <div className="mt-[16%]">
          <WorkExperience />
          <Education />
        </div>
      </div>
      <div className="block max-w-full ml-[12.5%] 2xs:ml-[25%]">
      <ProfessionalSkills />
      <Certificates />
      <Languages />
      <Hobbies />
     </div>
     <div className="w-1/2 block max-w-full ml-[12.5%] 2xs:ml-[25%] mx-auto pb-4 pt-4">
      <AvatarSmall />
     </div> 
    </div>
  );
}

export default MyCV;
