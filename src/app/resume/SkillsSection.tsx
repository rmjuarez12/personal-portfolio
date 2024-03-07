import Heading from "@/components/ui/Heading";
import IconBox from "@/components/ui/IconBox";
import { SkillObj } from "@/utility/objTypes";

import {
  FaReact,
  FaPhp,
  FaNodeJs,
  FaWordpressSimple,
  FaShopify,
  FaElementor,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { DiCss3 } from "react-icons/di";
import { SiMysql, SiCsharp, SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript, TbBrandNextjs } from "react-icons/tb";
import { BsStripe } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";

export default function SkillsSection() {
  const languages: Array<SkillObj> = [
    {
      title: "HTML5",
      icon: <TiHtml5 />,
    },
    {
      title: "CSS3",
      icon: <DiCss3 />,
    },
    {
      title: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      title: "PHP",
      icon: <FaPhp />,
    },
    {
      title: "MySQL",
      icon: <SiMysql />,
    },
    {
      title: "C#",
      icon: <SiCsharp />,
    },
  ];

  const frameworksSet: Array<SkillObj> = [
    {
      title: "Wordpress",
      icon: <FaWordpressSimple />,
    },
    {
      title: "Elementor",
      icon: <FaElementor />,
    },
    {
      title: "ReactJS",
      icon: <FaReact />,
    },
    {
      title: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      title: "ExpressJS",
      icon: <SiExpress />,
    },
    {
      title: "TypeScript",
      icon: <TbBrandTypescript />,
    },
    {
      title: "NextJS",
      icon: <TbBrandNextjs />,
    },
    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
    },
    {
      title: "Shopify",
      icon: <FaShopify />,
    },
    {
      title: "Stripe",
      icon: <BsStripe />,
    },
    {
      title: "Github",
      icon: <VscGithub />,
    },
  ];

  const generalSkills: Array<string> = [
    "Wordpress Site Migration",
    "Custom eCommerce Solution w/ Stripe",
    "WooCommerce",
    "Elementor",
    "PSD to Wordpress Theme",
    "PSD to Shopify Theme",
    "Hosting Maintenance",
    "Hosting Setup",
    "Domain Configuration",
  ];

  return (
    <div className='mb-12'>
      <Heading title='My Skills' subtitle='Tech Stack' showBorder={true} />

      <h3 className='mb-5 text-3xl font-semibold'>Technical Languages</h3>

      <div className='flex flex-row mb-6 flex-wrap'>
        {languages.map((skill: SkillObj, index: number) => {
          return (
            <IconBox
              key={index}
              icon={skill.icon}
              label={skill.title}
              title={skill.title}
              className='size-24 m-3'
              iconClassName='text-4xl mb-2'
            />
          );
        })}
      </div>

      <h3 className='mb-5 text-3xl font-semibold'>
        Technologies and Frameworks
      </h3>

      <div className='flex flex-row flex-wrap mb-6'>
        {frameworksSet.map((skill: SkillObj, index: number) => {
          return (
            <IconBox
              key={index}
              icon={skill.icon}
              label={skill.title}
              title={skill.title}
              className='size-24 m-3'
              iconClassName='text-4xl mb-2'
            />
          );
        })}
      </div>

      <h3 className='mb-5 text-3xl font-semibold'>General</h3>

      {generalSkills.map((skill: string, index: number) => {
        return (
          <div
            key={index}
            className='text-lime-500 border border-lime-500 m-1 py-1 px-2 inline-block font-semibold bg-lime-950'
          >
            {skill}
          </div>
        );
      })}
    </div>
  );
}
