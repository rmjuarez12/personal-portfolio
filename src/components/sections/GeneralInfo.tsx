import Image from "next/image";
import TypewritterText from "../ui/TypewritterText";
import Button from "../ui/Button";

import { FaDownload } from "react-icons/fa6";

export default function GeneralInfo() {
  return (
    <>
      <Image
        className='rounded-xl shadow-slate-100 shadow-sm -mt-32 mx-auto mb-6'
        src='/static/images/profile-pic.jpg'
        alt='Richard Rodriguez'
        width={200}
        height={200}
      />

      <h2 className='text-2xl mb-2 text-center'>Richard Rodriguez</h2>

      <TypewritterText />

      <Button btnTxt='Download CV' newTab={true} icon={<FaDownload />} />
    </>
  );
}
