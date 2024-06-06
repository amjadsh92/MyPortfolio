import WorkExperience from "@/components/CV/WorkExperience";
import Education from "@/components/CV/Education";
import ProfessionalSkills from "@/components/CV/ProfessionalSkills";
import MovingTitle from "@/components/CV/MovingTitle";
import Avatar from "@/components/CV/Avatar";
import Certificates from "@/components/CV/Certificates";
import Languages from "@/components/CV/Languages";
import Hobbies from "@/components/CV/Hobbies";
import Links from "@/components/Navbar/Links";


function MyCV() {
  return (
    <>
    
      <Links />
       
    <div className="mt-32">
      
      <MovingTitle />
      <Avatar />
      <WorkExperience />
      <Education />
      <ProfessionalSkills />
      <Certificates />
      <Languages />
      <Hobbies />
    </div>

    </> 
  );
}

export default MyCV;













