"use client";

import gsap from "gsap";

import Image from "next/image";
import Button from "./Button";

import { FaGithub } from "react-icons/fa6";
import { useEffect } from "react";

export default function ProjectBox(props: ProjectBoxProps) {
  useEffect(() => {
    gsap.to(".project-box", { opacity: 1, translateX: 0, duration: 0.5 });
    gsap.to(".project-box img", { opacity: 1, duration: 0.5, delay: 0.5 });
  }, []);

  return (
    <div
      className={`project-box md:p-6 border-slate-800 border-2 border-solid flex flex-row rounded-lg opacity-0 -translate-x-5`}
    >
      <div className='basis-1/2 p-4'>
        <Image
          className='mx-auto mb-6 w-auto h-auto rounded opacity-0'
          src={props.imageUrl}
          alt='Richard Rodriguez Photo'
          width={800}
          height={200}
          priority={false}
        />
      </div>

      <div className='basis-1/2 p-4'>
        <h3 className='text-2xl font-semibold mb-4'>{props.title}</h3>
        <p className='mb-4'>{props.description}</p>

        <div className='mb-6'>
          <p className='text-white mb-2 font-bold'>Technologies</p>
          <div>
            {props.technologies?.map((tech, index) => {
              return (
                <span
                  id={`tech-${index}`}
                  key={index}
                  className='text-lime-500 border border-lime-500 m-1 py-1 px-2 inline-block font-semibold bg-lime-950'
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        <div className='flex flex-row'>
          {props.codeURL && (
            <Button
              url={props.codeURL}
              btnTxt='Github'
              newTab={true}
              className='mr-3'
              icon={<FaGithub />}
            />
          )}
          {props.projectUrl && (
            <Button url={props.projectUrl} btnTxt='Website' newTab={true} />
          )}
        </div>
      </div>
    </div>
  );
}

interface ProjectBoxProps {
  imageUrl: string;
  title: string;
  description: string | React.ReactNode;
  technologies?: Array<string>;
  codeURL?: string;
  projectUrl?: string;
}
