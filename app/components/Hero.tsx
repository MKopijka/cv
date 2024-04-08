"use client";
import React from "react";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { scrolltoHash } from "./Scroll";

export default function Hero() {
  return (
    <div
      className="max-w-screen min-h-screen flex flex-col md:flex-row"
      id="home"
    >
      <div className="md:w-[50%] flex flex-col justify-center items-center mt-[110px] md:mt-0">
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <div className="mb-5 w-[81px] h-[40px] md:w-[243px] lg:w-[324px] md:h-[120px] lg:h-[160px]">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto"
            />
          </div>

          <div>Hello, I am</div>
          <div className="text-2xl md:text-3xl font-bold">MICHAŁ KOPIJKA</div>
          <div className="text-sm md:text-base uppercase tracking-widest text-mainTheme">
            Technical Support
          </div>

          <div className="text-xl mt-5 flex gap-7 md:gap-5">
            <Link
              href={
                "https://www.linkedin.com/in/micha%C5%82-kopijka-409b44298/"
              }
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="w-[28px] h-[28px] md:w-[35px] md:h-[35px] hover:text-mainTheme"
              />
            </Link>
            <Link href={"https://github.com/MKopijka"}>
              <FontAwesomeIcon
                icon={faGithub}
                className="w-[28px] h-[28px] md:w-[35px] md:h-[35px] hover:text-mainTheme"
              />
            </Link>
            <Link href={"https://twitter.com/KopijkaMic21937"}>
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-[28px] h-[28px] md:w-[35px] md:h-[35px] hover:text-mainTheme"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-[50%] flex flex-col justify-center items-start mt-[50px] md:mt-0 mb-10 md:mb-0">
        <div className="md:w-[90%] lg:w-[470px] flex flex-col">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center md:text-left mx-4 md:mx-0 leading-7 md:leading-none">
            Access{" "}
            <span className="text-mainTheme font-[500]">remote assistance</span>{" "}
            for hands-on troubleshooting
          </div>
          <span className="hidden md:block w-[100%] border-b-2 border-mainTheme opacity-30 mt-3 mb-5"></span>
          <div className="mx-4 text-center mt-7 md:mx-0 md:text-left md:mt-0 text-sm md:text-base">
            I am student of Applied Computer Science at the University of
            Economics and Computer Science. I am interested in network and
            server administration, I also have experience in technical support
            for computer hardware and operating systems. I am a very
            communicative, ambitious and open to new challenges
          </div>
          <div className="mt-5 flex justify-center md:justify-start">
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1Nxytz9RltUDsXOVFM18fOlVpQtQhoHtF/view?usp=sharing"
              }
              className="font-[500] text-sm md:text-base text-center border-[1px] border-white px-5 py-[14px] rounded-md hover:bg-[#fff] transition duration-300 hover:text-[#000]"
            >
              Download CV
            </Link>
            <button
              onClick={() => scrolltoHash("exp")}
              className="text-[#000] font-[500] text-center text-sm md:text-base bg-mainTheme px-5 py-[14px] rounded-md text-black ml-5 hover:bg-[#fff] transition duration-300"
            >
              My Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
