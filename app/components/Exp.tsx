import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Exp() {
  return (
    <div
      className="min-h-screen flex flex-col justify-evenly items-center"
      id="exp"
    >
      <div className="flex flex-col justify-center items-center mt-4 mb-8 md:mb-0">
        <div className="text-mainTheme text-sm mb-1 brightness-[80%]">
          What I&apos;ve Learned
        </div>
        <div className="text-2xl font-[500]">My Experience</div>
      </div>
      <div className="lg:w-[70%] md:w-[80%] w-[90%] md:h-[450px] lg:h-[400px] select-none bg-[#00000046] hover:bg-[#0000] border-[1px] border-[#00000000] transition duration-400 hover:border-[#fff] box-border rounded-[30px] flex flex-col items-center justify-center">
        <div className="font-[500] text-lg mt-7 mb-3">Technical Support</div>
        <div className="flex-grow w-full flex flex-col justify-evenly">
          <div className="flex flex-wrap justify-center">
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/office.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Microsoft Office</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/lin.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Linux</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/lap.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Hardware</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/ip.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">TCP/IP</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/azure.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Azure</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/power.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">PowerShell</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/ex.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Microsoft Exchange</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/vm.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Virtual Machine</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/ad.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Active Directory</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/web.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Web Server</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/globe.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">VPN</div>
            </div>
            <div className="flex justify-evenly py-3 w-1/2 sm:w-1/3 lg:w-1/4 flex-col items-center">
              <div className="flex items-center flex-col mb-1 md:mb-3">
                <Image src={"/wss.png"} alt="logo" width={40} height={40} />
              </div>
              <div className="text-sm md:text-base">Windows Server</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
