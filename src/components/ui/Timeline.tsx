"use client";

import gsap from "gsap";

import { poppins } from "@/utility/fonts";
import { TimelineSectionObj } from "@/utility/objTypes";
import { useEffect } from "react";

export default function Timeline(props: TimelineProps) {
  const randomNumber = Math.floor(Math.random() * 1000) + 1;

  useEffect(() => {
    if (randomNumber != null) {
      gsap.to(`.timeline-container .timeline`, {
        height: "auto",
        paddingTop: 25,
        paddingBottom: 25,
        duration: 1,
      });
      gsap.to(`.timeline-container .timeline`, {
        overflow: "visible",
        duration: 0.1,
        delay: 1,
      });
      gsap.to(`.timeline-container .header`, {
        opacity: 1,
        translateX: 0,
        duration: 2,
      });
    }
  }, [randomNumber]);

  return (
    <div
      id={`timeline-${randomNumber}`}
      className={`${props.className} timeline-container relative z-10`}
    >
      <div className='header flex flex-row items-center mb-10 opacity-0 -translate-x-10'>
        {props.icon != null && (
          <div className={`${props.iconColor} text-4xl mr-3`}>{props.icon}</div>
        )}
        <h3 className={`${poppins.className} text-3xl`}>{props.title}</h3>
      </div>

      <div className='timeline relative overflow-hidden h-0'>
        {props.timelineData.map((timeline, index) => {
          return (
            <TimelineSection
              key={index}
              date={timeline.date}
              title={timeline.title}
              subtitle={timeline.subtitle}
              description={timeline.description}
            />
          );
        })}
      </div>
    </div>
  );
}

function TimelineSection(props: TimelineSectionObj) {
  return (
    <div className='timelineSection flex flex-row mb-4 relative pl-5 z-20'>
      <div className='basis-1/6 text-slate-400 text-lg font-semibold mr-6 pt-2'>
        {props.date}
      </div>

      <div className='basis-2/3'>
        <div className='font-bold text-2xl text-red-400'>{props.title}</div>
        <div className=' font-semibold text-lg mb-2'>{props.subtitle}</div>
        <div>{props.description}</div>
      </div>
    </div>
  );
}

interface TimelineProps {
  timelineData: Array<TimelineSectionObj>;
  title: string;
  className?: string;
  icon?: React.ReactNode;
  iconColor?: string;
}
