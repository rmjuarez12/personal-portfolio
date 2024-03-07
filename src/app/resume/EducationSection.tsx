import Timeline from "@/components/ui/Timeline";

import { TimelineSectionObj } from "@/utility/objTypes";
import { IoMdSchool } from "react-icons/io";

export default function EducationSection() {
  const educationHistory: Array<TimelineSectionObj> = [
    {
      date: "Nov 2021 - July 2022",
      title: "freeCodeCamp",
      subtitle: "Front End Development Libraries",
      headlingURL:
        "https://www.freecodecamp.org/learn/front-end-development-libraries/",
      description: (
        <>
          <ul>
            <li>
              Completed the courses and gain certification for Bootstrap,
              jQuery, React, Redux, and React/Redux.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: "July 2020 - Aug 2021",
      title: "Bloom Institute of Technology (Formerly: Lambda School)",
      subtitle: "Full Stack Web Development & Computer Science",
      headlingURL: "https://www.bloomtech.com/",
      description: (
        <>
          <ul>
            <li>
              Lambda School is an accelerated program with an immersive
              (full-time, 40+ hours/week) hands-on curriculum with a focus on
              computer science, software engineering, and web development.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: "Aug 2011 - July 2013",
      title: "Miami Dade College | Miami, FL",
      subtitle: "FrontEnd Web Development",
      description: (
        <>
          <ul>
            <li>
              Vocational courses designed to learn the basic and fundamentals
              for FrontEnd Web Development
            </li>
            <li>
              Several courses to specialized in working proficiently with
              languages, such as HTML, CSS, and JS
            </li>
            <li>
              Courses that were designed to learn on how to implement designs on
              the FrontEnd for CMS platforms, including Joomla, Wordpress, and
              Drupal
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <>
      <Timeline
        title='Education'
        timelineData={educationHistory}
        icon={<IoMdSchool />}
        iconColor='text-fuchsia-400'
        className='mb-12'
      />
    </>
  );
}
