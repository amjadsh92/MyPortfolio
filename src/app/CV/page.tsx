import WorkExperience from "@/components/CV/WorkExperience";
import Education from "@/components/CV/Education";
import ProfessionalSkills from "@/components/CV/ProfessionalSkills";
import MovingCVTitle from "@/components/CV/MovingCVTitle";
import Avatar from "@/components/CV/Avatar";
import Certificates from "@/components/CV/Certificates";
import Languages from "@/components/CV/Languages";
import Hobbies from "@/components/CV/Hobbies";


function MyCV() {
  return (
    <div className="mt-32">
      <MovingCVTitle />
      <Avatar />
      <WorkExperience />
      <Education />
      <ProfessionalSkills />
      <Certificates />
      <Languages />
      <Hobbies />
    </div>
  );
}

export default MyCV;













