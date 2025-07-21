"use client";
import React, { useState } from "react";
import Innercard from "../Elements/Innercard";


type TextContent = {
  Image: string;
  IconPath: string;
  heading_span: string;
  heading_version: string;
  text: string;
  button1text: string;
  button2text: string;
};

export default function Card() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const textContent: Record<string, TextContent> = {
    option1: {
      Image: "/Assets/Tree.svg",
      IconPath: "/Assets/Rad.svg",
      heading_version: "11.2 ",
      heading_span: " RAD Studio",
      text: "RAD Studio® is ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option2: {
      Image: "/Assets/Mobile.svg",
      IconPath: "/Assets/Delfhi.svg",
      heading_version: "11.2 ",
      heading_span: " Delphi",
      text: "Delphi® is the original IDE for building single-source multi-platform native apps with powerful visual design features and best-in-class Windows integration and up to 5x productivity gains.",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option3: {
      Image: "/Assets/Cmd.svg",
      IconPath: "/Assets/C++.svg",
      heading_version: "11.2 ",
      heading_span: "C++",
      text: "Advanced IDE for modern C++ with high-productivity libraries that enable developers to deliver blazingly fast native apps with great user experience on Windows and iOS",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option4: {
      Image: "/Assets/Blocks.svg",
      IconPath: "/Assets/Interbase.svg",
      heading_version: "11.2",
      heading_span: " InterBase 2020",
      text: "InterBase® is a full-featured, encryptable, scalable, embeddable and multi-platform relational SQL database with commercial-grade data security, disaster recovery and change synchronization ",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option5: {
      Image: "/Assets/Switch.svg",
      IconPath: "/Assets/RadServer.svg",
      heading_span: "RAD Server",
      heading_version: "",
      text: "Enterprise-grade REST API application platform available as on-premise or deployable to the cloud. Generate database APIs instantly in Delphi® and C++Builder® to build apps faster",
      button1text: "Request a Product Demo",
      button2text: "View Details",
    },
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className=" xl:justify-center flex xl:ml-[192px] lg:mt-[128px]  lg:h-[455px]  lg:gap-[85px] xl:gap-[128px] lg:mx-[81px] sm:hidden md:hidden lg:flex items-center">
      <div className="   flex  xl:py-[167.42px] ">
        <ul className=" flex flex-col gap-[24px]">
          <li  className="flex items-center gap-[16px] z-10 ">
            <input
            id="1"
              className="w-[12px] h-[12px] border-none cursor-pointer"
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <label
            htmlFor="1"
            
              onClick={()=>handleOptionChange}
              className={`text-[#525252]  Tracking-[-1px]  font-[Archivo] text-[20px] leading-[120%] cursor-pointer ${
                selectedOption === "option1" ? "font-[600]" : "font-[300]"
              }`}
            >
              Rad Studio
            </label>
          </li>
          <li className="flex items-center z-10  gap-[24px]">
        
            <input
            id="2"
              className="w-[12px] h-[12px] border-none cursor-pointer"
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="2"
              onClick={()=>handleOptionChange}
              className={`text-[#525252]  Tracking-[-1px]  font-[Archivo] text-[20px] leading-[120%] cursor-pointer ${
                selectedOption === "option2" ? "font-[600]" : "font-[300]"
              }`}
            >
              Delphi
            </label>
          </li>
          <li className="flex items-center z-10  gap-[24px]">
            <input
            id="3"
              className="w-[12px] h-[12px] border-none cursor-pointer"
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="3"
               
              onClick={()=>handleOptionChange}
              className={`text-[#525252]  Tracking-[-1px]  font-[Archivo] text-[20px] leading-[120%] cursor-pointer ${
                selectedOption === "option3" ? "font-[600]" : "font-[300]"
              }`}
            >
              C++ Builder
            </label>
          </li>
          <li className="flex items-center z-10  gap-[24px]">
            <input
             id="4"
              className="w-[12px] h-[12px] border-none cursor-pointer"
              type="radio"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="4"
             
              onClick={()=>handleOptionChange}
              className={`text-[#525252]  Tracking-[-1px]  font-[Archivo] text-[20px] leading-[120%] cursor-pointer ${
                selectedOption === "option4" ? "font-[600]" : "font-[300]"
              }`}
            >
              InterBase
            </label>
          </li>
          <li className="flex items-center  z-10 gap-[24px]">
            <input
            id="5"
              className="w-[12px] h-[12px] border-none cursor-pointer"
              type="radio"
              value="option5"
              checked={selectedOption === "option5"}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="5"
              
              onClick={()=>handleOptionChange}
              className={`text-[#525252]  Tracking-[-1px]  font-[Archivo] text-[20px] leading-[120%] cursor-pointer ${
                selectedOption === "option5" ? "font-[600]" : "font-[300]"
              }`}
            >
              RadServer
            </label>
          </li>
        </ul>
       
      </div>

      <Innercard
        
        text={textContent[selectedOption]?.text ?? "Not Available"}
        Head_span={textContent[selectedOption]?.heading_span ?? "Not Available"}
        Head_version={
          textContent[selectedOption]?.heading_version ?? "Not Available"
        }
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
