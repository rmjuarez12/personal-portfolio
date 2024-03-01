"use client";

import gsap, { SteppedEase } from "gsap";
import { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { robotoMono } from "@/utility/fonts";

export default function TypewritterText() {
  useEffect(() => {
    var tl = gsap.timeline({
      paused: true,
    });

    tl.fromTo(
      ".typewritter-box",
      { height: 5 },
      {
        height: "auto",
        duration: 2,
      }
    );

    // letter animation
    tl.fromTo(
      ".anim-typewriter",
      {
        width: "0",
      },
      {
        width: "auto" /* same as CSS .line-1 width */,
        ease: SteppedEase.config(37),
        duration: 5,
      }
    );

    // text cursor animation
    tl.fromTo(
      ".anim-typewriter",
      {
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        duration: 1,
      }
    );

    tl.play();
  }, []);

  return (
    <div className='typewritter-box bg-slate-800 flex flex-row items-center p-2 w-fit rounded mb-6'>
      <div className='text-slate-500 text-2xl'>
        <IoIosArrowForward />
      </div>

      <div
        className={`anim-typewriter text-lime-500 font-bold ${robotoMono.className} text-2xl`}
      >
        Full-Stack Developer
      </div>
    </div>
  );
}
