import Heading from "@/components/ui/Heading";

import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";

export const metadata = {
  title: "Richard Rodriguez Portfolio | Resume",
};

export default function About() {
  return (
    <>
      <div className='mb-12'>
        <Heading title='My Resume' subtitle='Experience' showBorder={true} />
      </div>

      <ExperienceSection />

      <EducationSection />

      <div className='mb-12'>
        <SkillsSection />
      </div>
    </>
  );
}
