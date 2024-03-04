import Image from "next/image";
import Button from "../ui/Button";

import { FaDownload } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { RiSpeakFill } from "react-icons/ri";
import InfoCard from "../ui/InfoCard";
import IconBox from "../ui/IconBox";

export default function GeneralInfo() {
  return (
    <>
      <Image
        className='rounded-xl shadow-slate-100 shadow-sm -mt-32 mx-auto mb-6 w-auto h-auto'
        src='/static/images/profile-pic.jpg'
        alt='Richard Rodriguez Photo'
        width={200}
        height={200}
        priority={true}
      />

      <h2 className='text-2xl mb-4 text-center'>Richard Rodriguez</h2>

      <div className='flex flex-row justify-center mb-6'>
        <IconBox
          icon={<FaLinkedinIn />}
          title='Linkedin'
          url='https://www.linkedin.com/in/rmjuarez12/'
        />
        <IconBox
          icon={<FiGithub />}
          title='Github'
          url='https://github.com/rmjuarez12'
        />
      </div>

      <div className='mb-5 bg-slate-800 rounded'>
        <InfoCard
          icon={<MdEmail />}
          label={"Email"}
          description={"rmjuarez12@gmail.com"}
          isLast={false}
        />

        <InfoCard
          icon={<IoLocationSharp />}
          label={"Location"}
          description={"USA"}
          isLast={false}
        />

        <InfoCard
          icon={<RiSpeakFill />}
          label={"I Fluently Speak"}
          description={"English, Spanish"}
          isLast={true}
        />
      </div>

      <Button
        btnTxt='Download CV'
        newTab={true}
        icon={<FaDownload />}
        url='https://docs.google.com/document/d/1xidQwUwknISKJSz7VXxoOEwOoxuBUdzvqgez8rAGSGU/edit?usp=sharing'
      />
    </>
  );
}
