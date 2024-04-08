"use client";
import React, { useState, useEffect } from "react";
import { scrolltoHash } from "./Scroll";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faFile,
  faFolder,
  faHome,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    const sections = ["home", "about", "exp", "services", "contact"]; // IDs of sections
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setCurrentSection(section);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const navbarStyle = {
    transition: "top 0.4s",
    top: visible ? "15px" : "-65px",
  };

  return (
    <>
      <div
        className="hidden z-10 md:block min-w-[50%] fixed right-0 bg-[#00000076] px-5 py-1 rounded-s-full backdrop-blur-sm"
        style={navbarStyle}
      >
        <ul className="flex gap-4 mx-4">
          <li
            className={`px-3 cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "home" ? "mainTheme" : "#fff"
            } py-4 border-b-[1px]  ${
              currentSection === "home"
                ? "border-mainTheme"
                : "border-[#00000000]"
            }`}
            onClick={() => scrolltoHash("home")}
          >
            HOME
          </li>
          <li
            className={`px-3 cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "about" ? "mainTheme" : "#fff"
            } py-4 border-b-[1px]  ${
              currentSection === "about"
                ? "border-mainTheme"
                : "border-[#00000000]"
            }`}
            onClick={() => scrolltoHash("about")}
          >
            ABOUT
          </li>
          <li
            className={`px-3 cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "exp" ? "mainTheme" : "#fff"
            } py-4 border-b-[1px]  ${
              currentSection === "exp"
                ? "border-mainTheme"
                : "border-[#00000000]"
            }`}
            onClick={() => scrolltoHash("exp")}
          >
            EXPERIENCE
          </li>
          <li
            className={`px-3 cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "services" ? "mainTheme" : "#fff"
            } py-4 border-b-[1px]  ${
              currentSection === "services"
                ? "border-mainTheme"
                : "border-[#00000000]"
            }`}
            onClick={() => scrolltoHash("services")}
          >
            SERVICES
          </li>
          <li
            className={`px-3 cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "contact" ? "mainTheme" : "#fff"
            } py-4 border-b-[1px]  ${
              currentSection === "contact"
                ? "border-mainTheme"
                : "border-[#00000000]"
            }`}
            onClick={() => scrolltoHash("contact")}
          >
            CONTACT
          </li>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1Nxytz9RltUDsXOVFM18fOlVpQtQhoHtF/view?usp=sharing"
            }
            className="px-3 cursor-pointer py-4 hover:text-mainTheme duration-300"
          >
            RESUME
          </Link>
        </ul>
      </div>
      <div
        className="md:hidden z-10 w-[90%] left-[50%] translate-x-[-50%] fixed bg-[#00d9ff1b] px-1 py-1 rounded-full backdrop-blur-sm"
        style={navbarStyle}
      >
        <ul className="flex justify-evenly gap-4">
          <li
            className={` cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "home" ? "mainTheme" : "#fff"
            } py-2 `}
            onClick={() => scrolltoHash("home")}
          >
            <FontAwesomeIcon icon={faHome} className="w-[17px] h-[17px]" />
          </li>
          <li
            className={` cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "about" ? "mainTheme" : "#fff"
            } py-2 `}
            onClick={() => scrolltoHash("about")}
          >
            <FontAwesomeIcon icon={faUser} className="w-[17px] h-[17px]" />
          </li>
          <li
            className={` cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "exp" ? "mainTheme" : "#fff"
            } py-2 `}
            onClick={() => scrolltoHash("exp")}
          >
            <FontAwesomeIcon
              icon={faRectangleList}
              className="w-[17px] h-[17px]"
            />
          </li>
          <li
            className={` cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "services" ? "mainTheme" : "#fff"
            } py-2 `}
            onClick={() => scrolltoHash("services")}
          >
            <FontAwesomeIcon icon={faFolder} className="w-[17px] h-[17px]" />
          </li>
          <li
            className={` cursor-pointer hover:text-mainTheme duration-300 text-${
              currentSection === "contact" ? "mainTheme" : "#fff"
            } py-2 `}
            onClick={() => scrolltoHash("contact")}
          >
            <FontAwesomeIcon
              icon={faCommentDots}
              className="w-[17px] h-[17px]"
            />
          </li>
          <Link
            target="_blank"
            href={
              "https://drive.google.com/file/d/1Nxytz9RltUDsXOVFM18fOlVpQtQhoHtF/view?usp=sharing"
            }
            className=" cursor-pointer py-2 hover:text-mainTheme duration-300"
          >
            <FontAwesomeIcon icon={faFile} className="w-[17px] h-[17px]" />
          </Link>
        </ul>
      </div>
    </>
  );
}
