import Image from "next/image";
import Button from "../ui/Button";

import { FaDownload } from "react-icons/fa6";
import InfoCard from "../ui/InfoCard";

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

      <h2 className='text-2xl mb-4 text-center'>Richard Rodriguez</h2>

      <div className='mb-5 bg-slate-800 rounded'>
        {/* <InfoCard
          icon={<FaDownload />}
          label={"Phone"}
          description={"786.380.0965"}
          isLast={false}
        /> */}

        <InfoCard
          icon={<FaDownload />}
          label={"Email"}
          description={"rmjuarez12@gmail.com"}
          isLast={false}
        />

        <InfoCard
          icon={<FaDownload />}
          label={"Location"}
          description={"USA"}
          isLast={true}
        />
      </div>

      <Button btnTxt='Download CV' newTab={true} icon={<FaDownload />} />
    </>
  );
}
