import CodeSnippet from "@/components/ui/CodeSnippet";
import Heading from "@/components/ui/Heading";
import TypewritterText from "@/components/ui/TypewritterText";
import Image from "next/image";
import Link from "next/link";

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
        proven track record of delivering high-quality code on time and within
        budget. Skilled in problem-solving and collaborating with
        cross-functional teams to drive project success. Passionate about
        staying up-to-date with emerging technologies and continuously enhancing
        skills to tackle complex technical challenges.
      </p>

      <CodeSnippet codeLines={codeLinesServices} />

      <Heading
        title={<>What I Offer</>}
        subtitle='Services'
        showBorder={true}
        className='mt-20'
      />
    </>
  );
}
