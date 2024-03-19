import CodeSnippet from "@/components/ui/CodeSnippet";
import Heading from "@/components/ui/Heading";
import ServiceBox from "@/components/ui/ServiceBox";
import TypewritterText from "@/components/ui/TypewritterText";

import { FaCode, FaMobileAlt } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { IoServerOutline } from "react-icons/io5";

export default function Home() {
  const codeLinesServices = [
    {
      text: (
        <>
          <span className='text-fuchsia-400'>const</span> myExpertise{" "}
          <span className='text-sky-300'>= [</span>
        </>
      ),
      highlight: false,
    },
    {
      text: "'Web Development',",
      highlight: true,
    },
    {
      text: "'Mobile App Development',",
      highlight: true,
    },
    {
      text: "'Backend Development'",
      highlight: true,
    },
    {
      text: (
        <>
          <span className='text-sky-300'>]</span>;
        </>
      ),
      highlight: false,
    },
    {
      text: "",
      highlight: false,
    },
    {
      text: (
        <>
          console.<span className='text-fuchsia-400'>log</span>(
          <span className='text-lime-500'>&apos;What I offer: &apos;</span>,
          myExpertise);
        </>
      ),
      highlight: false,
    },
  ];

  const services = [
    {
      icon: <FaCode />,
      iconColor: "text-lime-500",
      title: "Web Development",
      description:
        "From sleek and responsive designs to robust functionality, I bring your ideas to life with precision and flair. Let's collaborate to transform your online presence into something truly exceptional.",
    },
    {
      icon: <FaMobileAlt />,
      iconColor: "text-red-900",
      title: "Mobile Development",
      description:
        "As a seasoned mobile developer, I specialize in crafting dynamic and intuitive apps that captivate users and drive engagement. Let's create an app that not only meets but exceeds your expectations, delivering an unforgettable experience to your users.",
    },
    {
      icon: <IoServerOutline />,
      title: "Backend Development",
      iconColor: "text-fuchsia-400",
      description:
        "As a proficient backend developer, I specialize in building the robust infrastructure that powers your applications and websites. From architecting scalable databases to crafting efficient APIs, I ensure your platform operates seamlessly, handling complex tasks with ease.",
    },
    {
      icon: <MdWeb />,
      title: "Frontend Development",
      description:
        "As a dedicated frontend developer, I specialize in creating immersive and user-friendly interfaces that captivate and engage audiences. From pixel-perfect designs to seamless user experiences, I bring your vision to life with creativity and precision.",
    },
  ];

  return (
    <>
      <Heading
        title={
          <>
            Hello, I&apos;m
            <span className='text-red-400'> Richard Rodriguez</span>
          </>
        }
        subtitle='RICK ROD DEV'
        showBorder={false}
      />

      <TypewritterText />

      <p className='mb-4 text-lg'>
        I&apos;m a dynamic and results-driven software engineer with over 10yrs
        of experience developing and implementing innovative software solutions.
        Proficient in multiple programming languages and technologies, with a
        proven track record of delivering high-quality code on time. Skilled in
        problem-solving and collaborating with cross-functional teams to drive
        project success. Bilingual and well-spoken with ability to work closely
        with people of all different backgrounds and personalities.
      </p>

      <p className='mb-6 text-lg'>
        My favorite hobbies are: drawing, play music(I love me some guitar
        playing), and exercising. My utmost favorite hobby is eating, I am
        really passionate about it! I also like to do Leetcode challenges, as it
        helps my programming juices fresh and wired!
      </p>

      <CodeSnippet codeLines={codeLinesServices} />

      <Heading
        title={<>Let Me Support You With</>}
        subtitle='Services'
        showBorder={true}
        className='mt-20'
      />

      <div className='flex md:flex-row flex-col flex-wrap justify-between'>
        {services.map((service, index) => {
          return (
            <ServiceBox
              className='md:basis-5/12 basis-full m-5'
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              iconColor={service.iconColor}
            />
          );
        })}
      </div>
    </>
  );
}
