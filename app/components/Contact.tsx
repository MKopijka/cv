"use client";
import React, { FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      email: (e.target as HTMLFormElement).email.value,
      content: (e.target as HTMLFormElement).content.value,
    };
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col justify-evenly items-center mb-16 lg:mb-0"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center mt-10 lg:mt-4">
        <div className="text-mainTheme text-sm mb-1 brightness-[80%]">
          Get In Touch
        </div>
        <div className="text-2xl font-[500]">Contact</div>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-[50%] flex justify-center items-center my-8 lg:my-0">
          <div className="w-[90%] lg:w-[300px] h-[120px] lg:h-[160px] bg-[#0000004e] rounded-[20px] hover:border-[#fff] duration-200 border-[1px] border-mainTheme flex flex-col justify-evenly items-center">
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-[25px] h-[25px] lg:w-[30px] lg:h-[30px] mt-[10px] lg:mt-0"
              />
            </div>
            <div className="text-center">
              <div className="lg:text-xl font-[500]">Email</div>
              <div className="text-mainTheme text-sm lg:text-base mb-3">
                michal.kopijka@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] flex justify-center lg:justify-start items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center lg:items-start w-[90%] gap-5"
          >
            <input
              type="text"
              id="email"
              placeholder="Your email..."
              className="w-full lg:w-[80%] p-3 rounded-xl text-[#000] border-[#0000] focus:outline-none border-[4px] focus:border-mainTheme"
            />
            <textarea
              id="content"
              placeholder="Your message..."
              className="w-full lg:w-[80%] h-[300px] p-3 rounded-xl resize-none text-[#000] border-[#0000] focus:outline-none border-[4px] focus:border-mainTheme"
            />
            <div>
              <button
                type="submit"
                className="text-[#000] font-[500] bg-mainTheme px-5 py-[14px] rounded-md text-sm lg:text-base text-black hover:bg-[#fff] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
