/**
 * This component is the third column, which displays the main menu
 */

"use client";

import { usePathname } from "next/navigation";
import MenuButton from "../ui/MenuButton";

import { RiPagesFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

export default function MainMenu() {
  // Get Pathname
  const pathname = usePathname();

  const mainMenu = [
    { name: "About", url: "/", icon: <FaUser /> },
    { name: "Resume", url: "/resume", icon: <RiPagesFill /> },
    { name: "Projects", url: "/projects", icon: <FaBriefcase /> },
  ];

  return (
    <div>
      {mainMenu.map((link) => {
        const isActive = pathname === link.url;

        return (
          <MenuButton
            name={link.name}
            url={link.url}
            key={link.url}
            icon={link.icon}
            isActive={isActive}
          />
        );
      })}
    </div>
  );
}
