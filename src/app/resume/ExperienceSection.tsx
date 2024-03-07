import Timeline from "@/components/ui/Timeline";

import { TimelineSectionObj } from "@/utility/objTypes";
import { MdWork } from "react-icons/md";

export default function ExperienceSection() {
  const jobHistory: Array<TimelineSectionObj> = [
    {
      date: "Sept 2021 - Present",
      title: "Story Squad | Milwaukee, WI",
      headlingURL: "https://www.storysquad.education/",
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
      date: "Jan 2020 - Present",
      title: "Viola Media | Deer Park, NY",
      headlingURL: "https://viola.media/",
      subtitle: "Web Developer - Freelancer",
      description: (
        <>
          <ul>
            <li>Developed, coded and updated Wordpress and HTML sites.</li>
            <li>
              Perform maintenance on Wordpress websites, and ensure there are no
              compatibility errors.
            </li>
            <li>
              Used programming capabilities in PHP, SQL and JavaScript and other
              libraries as needed.
            </li>
          </ul>
        </>
      ),
    },
    {
      date: "Feb 2016 - Oct 2019",
      title: "Lorraine Gregory Communications | Brentwood, NY",
      subtitle: "Senior Web Developer",
      headlingURL: "https://www.lorrainegregory.com/",
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
      headlingURL: "https://mediamax.cc/",
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
      headlingURL: "https://www.upwork.com/agencies/425296043689971712/",
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

  return (
    <>
      <Timeline
        title='Experience'
        timelineData={jobHistory}
        icon={<MdWork />}
        iconColor='text-lime-500'
        className='mb-12'
      />
    </>
  );
}
