"use client";

import { robotoMono } from "@/utility/fonts";
import gsap, { SteppedEase } from "gsap";
import { useEffect } from "react";

export default function CodeSnippet({ codeLines }: CodeSnippetProps) {
  useEffect(() => {
    gsap.to(".codesnippet-box", {
      width: "auto",
      duration: 1,
    });
  }, []);

  return (
    <div className='bg-slate-800 py-2 rounded-sm codesnippet-box w-1 overflow-hidden'>
      {codeLines.map((item: any, index) => {
        return (
          <CodeLine
            key={index}
            lineNum={(index + 1).toString()}
            lineText={item?.text}
            isHighlight={item?.highlight}
          />
        );
      })}
    </div>
  );
}

interface CodeSnippetProps {
  codeLines: Array<any>;
}

function CodeLine(props: CodeLineProps) {
  return (
    <div
      className={`flex flex-row px-2 whitespace-nowrap ${
        robotoMono.className
      } ${
        props.isHighlight &&
        "bg-neutral-600 border-neutral-800 border-solid border-l-4 text-lime-500"
      }`}
    >
      <div
        className={`select-none ${
          props.isHighlight ? "mr-5 text-slate-800" : "mr-2 text-slate-600"
        }`}
      >
        {props.lineNum}
      </div>
      <div className='w-11/12'>{props.lineText}</div>
    </div>
  );
}

interface CodeLineProps {
  lineNum: string;
  lineText: JSX.Element | string;
  isHighlight: boolean;
}
