/**
 * This component is used to display the website's header
 */

"use client";

import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function Header() {
  useEffect(() => {
    gsap.to("#main-section", { opacity: 1, scale: 1, duration: 1 });
    gsap.to("#section-1", { opacity: 1, y: 0, duration: 0.5, delay: 1 });
    gsap.to("#section-3", { opacity: 1, y: 0, duration: 0.5, delay: 1 });
    gsap.to(".header", { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <header className='header py-5 opacity-0 -translate-y-20'>
      <div>
        <Link href='/'>
          <Image
            src='/static/images/logo.png'
            alt='Rick Rod Logo'
            width={200}
            height={50}
            className='w-auto h-auto'
          />
        </Link>
      </div>
    </header>
  );
}
