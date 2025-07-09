"use client";
import React, { useState, ChangeEvent } from "react";

import Innercard from "./Innercard";

export default function card() {
  type TextContent = {
    Image: string;
    IconPath: string;
    heading: string;
    text: string;
    button1text: string;
    button2text: string;
  };
  const textContent: Record<string, TextContent> = {
    option1: {
      Image: "/icons/Tree.svg",
      IconPath: "/icons/Rad.svg",
      heading: "RAD Studio 11.2",
      text: "RAD Studio® is ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option2: {
      Image: "/icons/Mobile.svg",
      IconPath: "/icons/Delfhi.svg",
      heading: "Delphi 11.2",
      text: "Delphi® is the original IDE for building single-source multi-platform native apps with powerful visual design features and best-in-class Windows integration and up to 5x productivity gains.",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option3: {
      Image: "/icons/Cmd.svg",
      IconPath: "/icons/C++.svg",
      heading: "C++ Builder 11.2",
      text: "Advanced IDE for modern C++ with high-productivity libraries that enable developers to deliver blazingly fast native apps with great user experience on Windows and iOS",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option4: {
      Image: "/icons/Blocks.svg",
      IconPath: "/icons/Interbase.svg",
      heading: "InterBase 2020 Update 3",
      text: "InterBase® is a full-featured, encryptable, scalable, embeddable and multi-platform relational SQL database with commercial-grade data security, disaster recovery and change synchronization ",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option5: {
      Image: "/icons/Switch.svg",
      IconPath: "/icons/RadServer.svg",
      heading: "RAD Server",
      text: "Enterprise-grade REST API application platform available as on-premise or deployable to the cloud. Generate database APIs instantly in Delphi® and C++Builder® to build apps faster",
      button1text: "Request a Product Demo",
      button2text: "View Details",
    },
  };
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleOptionChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=" gap-20 flex px-[150px] py-[150px]">
      <div className="  pt-[30px] ">
        <ul className="space-y-5">
          <li className="flex items-center gap-4">
            <input
              className="w-7 h-7 "
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <label className="text-black text-[20px] leading-[120%] font-[300] ">
              Rad Studio
            </label>
          </li>
          <li  className="flex items-center gap-4">
            <input
              className="w-7 h-7"
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor=""
             className="text-black text-[20px] leading-[120%] font-[300] "
            >
              Delphi
            </label>
          </li>
          <li  className="flex items-center gap-4">
            <input
              className="w-7 h-7"
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor=""
           className="text-black text-[20px] leading-[120%] font-[300] "
            >
              C++ Builder
            </label>
          </li>
          <li  className="flex items-center gap-4">
            <input
              className="w-7 h-7"
              type="radio"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor=""
             className="text-black text-[20px] leading-[120%] font-[300] "
            >
              InterBase
            </label>
          </li>
          <li  className="flex items-center gap-4">
            <input
              className="w-7 h-7"
              type="radio"
              value="option5"
              checked={selectedOption === "option5"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor=""
             className="text-black text-[20px] leading-[120%] font-[300] "
            >
              RadServer
            </label>
          </li>
        </ul>
      </div>

      <Innercard
        text={textContent[selectedOption]?.text ?? "Not Available"}
        head={textContent[selectedOption]?.heading ?? "Not Available"}
        IconPath={textContent[selectedOption]?.IconPath ?? "./icon/Airbnb.svg"}
        ImagePath={textContent[selectedOption]?.Image ?? "./icon/Airbnb.svg"}
        button1text={
          textContent[selectedOption]?.button1text ?? "Not available"
        }
        button2text={
          textContent[selectedOption]?.button2text ?? "Not available"
        }
      />
    </div>
  );
}
