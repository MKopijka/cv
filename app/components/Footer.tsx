"use client";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { scrolltoHash } from "./Scroll";

export default function Footer() {
  return (
    <div className="flex lg:h-[300px] bg-[#00000093] flex-col justify-center items-center gap-5 py-10 lg:py-0">
      <div className="mb-5">
        <Image src={"/logo.png"} alt="logo" width={81} height={40} />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 text-sm text-center">
        <div
          className="hover:text-mainTheme cursor-pointer duration-300"
          onClick={() => scrolltoHash("home")}
        >
          HOME
        </div>
        <div
          className="hover:text-mainTheme cursor-pointer duration-300"
          onClick={() => scrolltoHash("about")}
        >
          ABOUT
        </div>
        <div
          className="hover:text-mainTheme cursor-pointer duration-300"
          onClick={() => scrolltoHash("exp")}
        >
          EXPERIENCE
        </div>
        <div
          className="hover:text-mainTheme cursor-pointer duration-300"
          onClick={() => scrolltoHash("services")}
        >
          SERVICES
        </div>
        <div
          className="hover:text-mainTheme cursor-pointer duration-300"
          onClick={() => scrolltoHash("contact")}
        >
          CONTACT
        </div>
        <Link
          target="_blank"
          href={
            "https://drive.google.com/file/d/1Nxytz9RltUDsXOVFM18fOlVpQtQhoHtF/view?usp=sharing"
          }
          className="hover:text-mainTheme cursor-pointer duration-300"
        >
          RESUME
        </Link>
      </div>
      <div className="text-xl mt-5 flex gap-5">
        <Link
          href={"https://www.linkedin.com/in/micha%C5%82-kopijka-409b44298/"}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="w-[35px] h-[35px] hover:text-mainTheme duration-200"
          />
        </Link>
        <Link href={"https://github.com/MKopijka"}>
          <FontAwesomeIcon
            icon={faGithub}
            className="w-[35px] h-[35px] hover:text-mainTheme duration-200"
          />
        </Link>
        <Link href={"https://twitter.com/KopijkaMic21937"}>
          <FontAwesomeIcon
            icon={faTwitter}
            className="w-[35px] h-[35px] hover:text-mainTheme duration-200"
          />
        </Link>
      </div>
    </div>
  );
}
