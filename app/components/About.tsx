"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { scrolltoHash } from "./Scroll";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" id="about">
      <div className="flex flex-col justify-center items-center mt-10 mb-20 md:mb-0">
        <div className="text-mainTheme text-sm mb-1 brightness-[80%]">
          Get To Know
        </div>
        <div className="text-2xl font-[500]">About Me</div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center flex-grow pb-10">
        <div className="md:w-[43%] flex justify-center items-center relative">
          <div className="w-[160px] h-[210px] md:w-[210px] lg:w-[250px] md:h-[290px] lg:h-[330px] bg-mainTheme rounded-[31px] custom-gradient2"></div>
          <div className="w-[160px] h-[210px] md:w-[210px] lg:w-[250px] md:h-[290px] lg:h-[330px] bg-[url(/profile.jpg)] bg-cover bg-[center_bottom_0rem] md:bg-[center_bottom_-0rem] grayscale rounded-[30px] absolute rotate-[10deg] hover:rotate-[0deg] transition duration-300"></div>
        </div>
        <div className="md:w-[57%] flex flex-col justify-center mt-16">
          <div className="md:w-[90%] lg:w-[70%] flex flex-col">
            <div className="flex flex-col md:flex-row items-center w-full gap-5">
              <div className="w-[90%] md:w-[50%] flex md:flex-col justify-center items-center bg-[#0000001e] rounded-xl px-2 py-5">
                <div className="md:mb-3 mx-5">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="w-[22px] h-[22px]"
                  />
                </div>
                <div className="flex flex-col justify-center md:items-center">
                  <div className="text-mainTheme">Work</div>
                  <div className="md:text-center text-sm text-[#ccc]">
                    ASTOR Technical Support <br /> Assistant
                  </div>
                </div>
              </div>
              <div className="w-[90%] md:w-[50%] flex md:flex-col justify-center items-center bg-[#0000001e] rounded-xl px-2 py-5">
                <div className="md:mb-3 mx-5">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="w-[22px] h-[22px]"
                  />
                </div>
                <div className="flex flex-col justify-center md:items-center">
                  <div className="text-mainTheme">Education</div>
                  <div className="md:text-center text-sm text-[#ccc]">
                    University of Economics and Computer Science in Krakow
                  </div>
                </div>
              </div>
            </div>
            <div className="md:text-lg mb-9 mt-7 mx-10 md:mx-0 font-[300] text-center md:text-left">
              I thrive on challenges and constantly seek out new opportunities
              to expand my knowledge and expertise in the field. My ambition
              drives me to push boundaries and strive for excellence in
              everything I do. Whether it's tackling complex networking issues
              or mastering new technologies, I approach each task with
              determination and enthusiasm.
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => scrolltoHash("contact")}
                className="text-[#000] text-sm md:text-base font-[500] bg-mainTheme px-5 py-[14px] rounded-md text-black hover:bg-[#fff] transition duration-300"
              >
                Get In Touch!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
