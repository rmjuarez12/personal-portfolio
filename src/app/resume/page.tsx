import Heading from "@/components/ui/Heading";
import Timeline from "@/components/ui/Timeline";

import { TimelineSectionObj } from "@/utility/objTypes";
import { MdWork } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";

export default function About() {
  const jobHistory: Array<TimelineSectionObj> = [
    {
      date: "Sept 2021 - Present",
      title: "Story Squad | Milwaukee, WI",
      subtitle: "Software Engineer - Freelancer",
      description: (
        <>
          <ul>
            <li>
              Worked closely on converting Figma design into a functional
              ReactJS app.
            </li>
            <li>
              Worked in a team in creating a mobile app based on Flutter
              software development kit.
            </li>
            <li>
              I contributed to the backend development team of an ExpressJS
              application.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: "Feb 2016 - Oct 2019",
      title: "Lorraine Gregory Communications | Brentwood, NY",
      subtitle: "Senior Web Developer",
      description: (
        <>
          <ul>
            <li>
              Tested websites and performed troubleshooting prior to deployment.
            </li>
            <li>
              Optimized Images and Videos web assets for speed and performance.
            </li>
            <li>Developed, coded and updated Wordpress and HTML sites.</li>
            <li>
              Created site layout and user interface using HTML and CSS
              practices.
            </li>
            <li>
              Used programming capabilities in PHP, SQL and JavaScript and other
              libraries as needed.
            </li>
            <li>
              Created Wordpress custom themes from supplied layered files(PSD,
              PDF, or AI).
            </li>
          </ul>
        </>
      ),
    },
    {
      date: "Sept 2013 - Present",
      title: "MediaMax International | Doral, FL",
      subtitle: "Junior Web Developer - Freelancer",
      description: (
        <>
          <ul>
            <li>
              Created site layout and user interface using HTML and CSS
              practices.
            </li>
            <li>
              Created fully functional Wordpress themes based off of PSD files.
            </li>
            <li>Converted mockups into HTML, JavaScript, AJAX and JSON.</li>
            <li>
              Developed wireframes, site maps and content inventories for new
              website designs.
            </li>
            <li>
              Ensure all projects were fully functional prior to launching and
              setting the site live.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: "Sept 2013 - Oct 2015",
      title: "Ideasgt Corp | Miami, FL",
      subtitle: "Assistant Web Developer",
      description: (
        <>
          <ul>
            <li>
              Assisted with developing Websites in PHP/MySQL in order to work
              with a custom CMS.
            </li>
            <li>
              Assist with updating content, fixing any issues, and any
              maintenance a website requires.
            </li>
            <li>Design/modify graphics when needed.</li>
          </ul>
        </>
      ),
    },
  ];

  const educationHistory: Array<TimelineSectionObj> = [
    {
      date: "July 2020 - Aug 2021",
      title: "Bloom Institute of Technology (Formerly: Lambda School)",
      subtitle: "Full Stack Web Development & Computer Science",
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
      <div className='mb-12'>
        <Heading title='My Resume' subtitle='Experience' showBorder={true} />
      </div>

      <Timeline
        title='Experience'
        timelineData={jobHistory}
        icon={<MdWork />}
        iconColor='text-lime-500'
        className='mb-12'
      />

      <Timeline
        title='Education'
        timelineData={educationHistory}
        icon={<IoMdSchool />}
        iconColor='text-fuchsia-400'
      />
    </>
  );
}
