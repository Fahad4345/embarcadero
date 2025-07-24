"use client";
import Image from "next/image";
import  React  from "react";

type TextContent = {
  Image: string;
  IconPath: string;
  heading_span: string;
  heading_version: string;
  text: string;
  button1text: string;
  button2text: string;
};

export default function Card({className}:{className:string}) {
  const textContent: Record<string, TextContent> = {
    option1: {
      Image: "/Assets/Tree.svg",
      IconPath: "/Assets/Rad.svg",
      heading_version: "11.2 ",
      heading_span: "RAD Studio",
      text: "RAD Studio® is the ultimate IDE for building single-source multi-platform native apps with Delphi® and modern C++ using advanced Windows desktop UI libraries ready for Windows 11.",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option2: {
      Image: "/Assets/Mobile.svg",
      IconPath: "/Assets/Delfhi.svg",
      heading_version: "11.2 ",
      heading_span: "Delphi",
      text: "Delphi® is the original IDE for building single-source multi-platform native apps with powerful visual design features and best-in-class Windows integration and up to 5x productivity gains.",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option3: {
      Image: "/Assets/Cmd.svg",
      IconPath: "/Assets/C++.svg",
      heading_version: "11.2 ",
      heading_span: "C++ Builder",
      text: "Advanced IDE for modern C++ with high-productivity libraries that enable developers to deliver blazingly fast native apps with great user experience on Windows and iOS.",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option4: {
      Image: "/Assets/Blocks.svg",
      IconPath: "/Assets/Interbase.svg",
      heading_version: "Update 3",
      heading_span: "InterBase  2020",
      text: "InterBase® is a full-featured, encryptable, scalable, embeddable and multi-platform relational SQL database with commercial-grade data security, disaster recovery and change synchronization.",
      button1text: "Start a Free Trial",
      button2text: "View Details",
    },
    option5: {
      Image: "/Assets/Switch.svg",
      IconPath: "/Assets/RadServer.svg",
      heading_span: "RAD Server",
      heading_version: "",
      text: "Enterprise-grade REST API application platform available as on-premise or deployable to the cloud. Generate database APIs instantly in Delphi® and C++Builder® to build apps faster.",
      button1text: "Request a Product Demo",
      button2text: "View Details",
    },
  };

  return (
    <div className={` flex flex-col   sm: mx-[16px] gap-[96px] md:my-[64px] md:mx-[90px] sm:my-[0px] ${className}` }>
      {Object.entries(textContent).map(([key, content]) => (
        <div
          key={key}
          className="flex sm:flex-col gap-[32px]"
        >
     
          <div className="  flex flex-col gap-[20px] ">

          <div className=" flex justify-center">
            <Image
              src={content.IconPath}
              alt="Icon"
              width={64}
              height={64}
              className=" transition duration-300   z-10 hover:scale-120  cursor-pointer"
            />

            
          </div>
          <div><div className="flex justify-center  gap-[12px]">
              <p className="text-[30px] font-[600] leading-[150%]  font-[Archivo] text-[#262626]">{content.heading_span}</p>
              <p className="text-[30px] font-[300] leading-[150%] text-[#262626] font-[Archivo]">{content.heading_version}</p>
            </div>
            <div><p className="font-[Archivo] text-center text-[18px] font-[400] leading-[150%] text-[#525252]">{content.text}</p>
            </div>
            </div>
            </div>

           
            
            <div className="flex   sm:flex-col md:flex-row justify-center gap-[12px]">
              <button  className="bg-[#262626] z-10  text-white  border-1   border-[#262626] rounded-[10px] py-[12px] px-[24px]  transition duration-300  hover:bg-[#262626]/90  cursor-pointer ">
                {content.button1text}
              </button>
              <button  className="rounded-[10px] z-10 border-[#262626]   text-[#262626] border-1 px-[24px] py-[12px]  hover:bg-[#262626]   hover:text-white transition duration-300     cursor-pointer ">
                {content.button2text}
              </button>
            </div>
          

          <div className="">
            <Image
              src={content.Image}
              alt="Main"
              width={720}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}