"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../Elements/DropDown";

import Icons from "../Elements/Icon_Component";

type MenuItem = {
  label: string;
  DropDownItem?: string[];
};

export default function HeaderSec() {
  const MenuData: MenuItem[] = [
    {
      label: "Product",
      DropDownItem: ["RAD Studio", "Delphi", "C++ Builder", "RAD Server", "InterBase"],
    },
    {
      label: "Free Tool",
      DropDownItem: [
        "C++ Compiler",
        "C++ Builder Community Ed.",
        "Rest Debugger",
        "InterBase Developer Edition",
        "FMX Stencils",
        "Dev-C++",
        "PyScripter",
        "CPP Check",
        "Python Libraries",
      ],
    },
    {
      label: "Blog",
    },
    {
      label: "Resources",
      DropDownItem: ["Learn", "Partner", "Support"],
    },
    {
      label: "Get It",
    },
    {
      label: "New Tool",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setOpenIndexes([]); 
  };

  const toggleDropdown = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenIndexes([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="xl:px-[196px] z-10  bg-white xl:py-[16px] lg:px-[80px] lg:py-[16px] md:px-[24px] md:py-[16px] sm:py-[12px] sm:px-[16px] flex  justify-between mx-auto max-w-[1920px] w-full
    ">






      <Icons
        IconPath={"/Assets/logo.svg"}
        className="sm:w-[138.67px] sm:h-[24px] transition duration-300 hover:scale-110 cursor-pointer"
      />

      <div>
        <Dropdown className="sm:hidden md:hidden lg:flex" />
    </div>
{isOpen ?(<div className="flex justify-center lg:gap-[8px] sm:gap-[24px]">
        

        <div className="relative">
      
          {!isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              <path
                d="M4 6H20"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              <path
                d="M16.9492 7.05078L7.04972 16.9503"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.05078 7.05078L16.9503 16.9503"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>):(<div className="flex justify-center gap-[24px] ">
          <div className="  flex  flex-row lg:gap-[8px] sm:gap-[24px]">
            <button  className="bg-transparent  flex  items-center gap-[8px] rounded-[8px] text-black sm:hidden md:flex font-[Archivo] font-[500] text-[14px] leading-[22px] cursor-pointer">Sign In</button>
           <button className="md:px-[16px] md:py-[8px] rounded-[10px] border-[#262626] font-[Archivo] sm:hidden md:flex text-[#262626]  font-[500] text-[14px] leading-[22px] border-1 lg:px-[20px] lg:py-[8px] bg-[white] transition duration-300 hover:bg-[#262626]  hover:text-white  cursor-pointer"
         >Buy Now</button>
       <button  className="md:px-[16px] md:py-[8px] sm:px-[16px] sm:py-[8px] sm:rounded-[8px] lg:rounded-[10px] bg-[#262626] text-white font-[Archivo] font-[500] text-[14px] leading-[22px] hover:bg-[#262626]/90 hover:border-black transition duration-300 cursor-pointer"
         > Free Trial</button>
       </div>
        

        <div className=" xl:hidden lg:hidden md:flex mt-[7px] ">
       
          {!isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              <path
                d="M4 6H20"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18H20"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
              className="cursor-pointer"
            >
              <path
                d="M16.9492 7.05078L7.04972 16.9503"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.05078 7.05078L16.9503 16.9503"
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>)}
      
  
      {isOpen && (
       
        

          <div
            ref={menuRef}
            className="fixed md:top-[120px] sm:top-[160px] right-0 z-50 md:w-[360px]  sm:w-full h-[calc(100vh-120px)] bg-white p-[24px] overflow-y-auto flex flex-col gap-[32px]"
          >
         
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-wrap gap-[24px]">
                <a
                  href="#"
                  className="text-[#262626] text-[14px] hover:text-[#525252] font-[Archivo] font-[500] leading-[150%]"
                >
                  My Downloads
                </a>
                <a
                  href="#"
                  className="text-[#262626] text-[14px] hover:text-[#525252] font-[Archivo] font-[500] leading-[150%]"
                >
                  Upgrade Center
                </a>
              </div>
              <div className="flex flex-wrap gap-[24px]">
                <a
                  href="#"
                  className="text-[#262626] text-[14px] hover:text-[#525252] font-[Archivo] font-[500] leading-[150%]"
                >
                  My Customer Portal
                </a>
                <a
                  href="#"
                  className="text-[#262626] text-[14px] hover:text-[#525252] font-[Archivo] font-[500] leading-[150%]"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-[32px]">
              {MenuData.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="text-[#262626] w-full flex justify-between items-center font-[400] gap-[4px] font-[Archivo] text-[14px] leading-[150%]  transition  hover:text-amber-500 duration-300 cursor-pointer"
                  >
                    <div>{item.label}</div>
                    {item.DropDownItem && item.DropDownItem.length > 0 && (
                      <Icons
                        IconPath="/Assets/DownArrow.svg"
                        width={16}
                        height={16}
                      />
                    )}
                  </button>

                  {openIndexes.includes(index) && item.DropDownItem && (
                    <div className="ml-4 mt-2">
                      <ul>
                        {item.DropDownItem.map((subItem, i) => (
                          <li
                            key={i}
                            className="p-2 cursor-pointer text-[#262626] font-[Archivo] hover:bg-gray-100"
                          >
                            {subItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
          </div>   <div className="  flex  flex-col gap-[16px] ">
            <button  className="md:px-[16px] md:py-[8px] sm:px-[16px] sm:py-[8px] sm:rounded-[8px] lg:rounded-[10px] bg-[#171717] text-white font-[Archivo] font-[500] text-[14px] leading-[22px] hover:bg-[#171717]/90 hover:text-[black] border-1 border-black transition duration-300 cursor-pointer"
            > Free Trial</button>
             <button className="md:px-[16px] md:py-[8px] sm:px-[16px] sm:py-[8px] sm:rounded-[8px] lg:rounded-[10px] bg-[#171717] text-[#171717] font-[Archivo] font-[500] text-[14px] leading-[22px] hover:bg-[#171717]/90 hover:text-black border-1 hover:border-black transition duration-300 cursor-pointer"
           >Buy Now</button>
       
              <button className= "md:px-[16px] md:py-[8px] sm:px-[16px] sm:py-[8px] sm:rounded-[8px] lg:rounded-[10px] bg-transparent text-[#262626] font-[Archivo] font-[500] text-[14px] leading-[22px] transition duration-300 cursor-pointer hover:underline"
          >Sign In</button>
          
          
     
   
          </div>
       
          </div>
        
  
      )}
    </div>
  );
}
