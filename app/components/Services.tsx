import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <div
      className="min-h-screen flex flex-col justify-evenly items-center"
      id="services"
    >
      <div className="flex flex-col justify-center items-center mt-16 md:mt-4 mb-10 md:mb-0">
        <div className="text-mainTheme text-sm mb-1 brightness-[80%]">
          What I Offer
        </div>
        <div className="text-2xl font-[500]">Services</div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 w-full">
        <div className="w-[80%] md:w-[350px] h-[350px] border-[1px] border-[#fff] rounded-t-[15px] rounded-b-[40px] flex flex-col bg-[#00000020] hover:bg-[#0000] duration-300">
          <div className="text-[#000] md:text-lg font-[500] bg-[#fff] py-7 rounded-t-[13px] rounded-b-[40px] text-center">
            Active Directory
          </div>
          <div className="flex-grow flex flex-col justify-evenly items-center">
            <div className="flex text-sm md:text-base flex-grow flex-col justify-evenly lg:items-start mx-4 lg:mx-5 my-5">
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Managing user accounts</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Troubleshooting login issues</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Group management</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Implementation of AD functions</div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-last md:-order-none w-[90%] md:w-[350px] h-[400px] border-[1px] border-mainTheme text-mainTheme rounded-t-[15px] rounded-b-[40px] flex flex-col bg-[#00000045] hover:bg-[#0000] duration-300">
          <div className="text-[#000] md:text-lg font-[500] bg-mainTheme py-7 rounded-t-[13px] rounded-b-[40px] text-center">
            Support
          </div>
          <div className="flex-grow flex flex-col justify-evenly items-center">
            <div className="flex text-sm md:text-base flex-grow flex-col justify-evenly lg:items-start mx-4 lg:mx-5 my-5">
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">24/7 support</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Handling of reports</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Installing software</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Solving network problems</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Business software support</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] md:w-[350px] h-[350px] border-[1px] border-[#fff] rounded-t-[15px] rounded-b-[40px] flex flex-col bg-[#00000020] hover:bg-[#0000] duration-300">
          <div className="text-[#000] md:text-lg font-[500] bg-[#fff] py-7 rounded-t-[13px] rounded-b-[40px] text-center">
            Windows Server
          </div>
          <div className="flex-grow flex flex-col justify-evenly items-center">
            <div className="flex text-sm md:text-base flex-grow flex-col justify-evenly lg:items-start mx-4 lg:mx-5 my-5">
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Data backups and restoration</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Troubleshooting performance</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Software management</div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="w-[18px] h-[18px]"
                  />
                </div>
                <div className="mb-1">Permission management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
