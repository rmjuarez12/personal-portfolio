"use client";

import gsap from "gsap";

import Image from "next/image";
import Button from "./Button";

import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

export default function ProjectBox(props: ProjectBoxProps) {
  const [openLightbox, setOpenLightbox] = useState(false);

  useEffect(() => {
    gsap.to(".project-box", { opacity: 1, translateX: 0, duration: 0.5 });
    gsap.to(".project-box img", { opacity: 1, duration: 0.5, delay: 0.5 });
  }, []);

  return (
    <div
      className={`${
        props.className != null && props.className
      } project-box md:p-6 border-slate-800 border-2 border-solid flex flex-row rounded-lg opacity-0 -translate-x-5`}
    >
      <div className='basis-1/2 p-4'>
        <Image
          className='mx-auto mb-6 w-auto h-auto rounded opacity-0 cursor-pointer'
          src={props.imageUrl}
          alt={props.title}
          width={800}
          height={200}
          priority={false}
          onClick={() => setOpenLightbox(true)}
        />
        <Lightbox
          className=' text-white'
          open={openLightbox}
          noScroll={{ disabled: false }}
          close={() => setOpenLightbox(false)}
          slides={[
            {
              src: props.imageUrl,
              width: 1080,
              height: 1620,
            },
          ]}
          render={{
            slide: ({ slide, offset, rect }) => {
              return (
                <div className='container'>
                  <Image
                    className='mx-auto mb-6 w-auto h-auto rounded'
                    src={props.imageUrl}
                    alt={props.title}
                    width={1000}
                    height={500}
                    priority={false}
                  />

                  <h3 className='text-center text-2xl mb-4'>{props.title}</h3>
                  <p className='text-lg text-center '>{props.description}</p>
                </div>
              );
            },
          }}
          plugins={[Fullscreen, Zoom]}
        />
      </div>

      <div className='basis-1/2 p-4'>
        <h3 className='text-2xl font-semibold mb-4'>{props.title}</h3>
        <p className='mb-4'>{props.description}</p>

        <div className='mb-6'>
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
              newTab={true}
              className='mr-3'
              icon={<FaGithub />}
              title='Github'
            />
          )}
          {props.projectUrl && (
            <Button
              url={props.projectUrl}
              newTab={true}
              icon={<FaExternalLinkAlt />}
              title='Website'
            />
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
  className?: string;
}
