import React from "react";
import Buttons from "./Button";


export default function Sec3_Component() {
  return (
    <div className="flex flex-wrap sm:mx-[16px] sm:gap-[40px] md:gap-[48px] mt-[80px] xl::ml-[192px]   ">
      <div className="  sm:justify-start  sm:w-[466px] md:w-[331.5px]  sm:gap-[16px] ">
        <p className="text-[#525252] sm:font-[400]  sm:text-[18px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] sm:font-[600] sm:text-[28px] leading-[150%] font-[Archivo] ">
          3 Main C++ Compiler Tips to Develop Successful Apps
        </h1>
        <Buttons
          className={
            "decoration-black  underline font-[Archivo] decoration-solid rounded-[10px] font-[500] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>

      <div className=" sm:justify-start  sm:w-[466px] md:w-[331.5px]  sm:gap-[16px] ">
        <p className="text-[#525252] sm:font-[400]  sm:text-[18px]  text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626]  sm:font-[600] sm:text-[28px] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          Top 5 Platforms For Windows Applications Development in 2022
        </h1>
        <Buttons
          className={
            "decoration-black underline font-[500] font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>

      <div className="  sm:justify-start  sm:w-[466px] md:w-[331.5px]  sm:gap-[16px] ">
        <p className="text-[#525252] sm:font-[400]  sm:text-[18px] text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] sm:font-[600] sm:text-[28px] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          Everything You Need to Know About Cross-Platform Development
        </h1>
        <Buttons
          className={
            "decoration-black underline  font-[500] font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className=" sm:justify-start  sm:w-[466px] md:w-[331.5px]  sm:gap-[16px]">
        <p className="text-[#525252] sm:font-[400]  sm:text-[18px] text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] sm:font-[600] sm:text-[28px] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          A Complete Guide To Programming In C++ – Visual Programming
        </h1>
        <Buttons
          className={
            "decoration-black underline font-[500] font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className="sm:justify-start  sm:w-[466px] md:w-[331.5px]  sm:gap-[16px]]">
        <p className="text-[#525252] sm:font-[400]  sm:text-[18px] text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] sm:font-[600] sm:text-[28px]  font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          A Complete Guide To Programming In C++ – Object Oriented Programming
        </h1>
        <Buttons
          className={
            "decoration-black underline  font-[500] font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className="sm:justify-start  sm:w-[466px] md:w-[331.5px]  sm:gap-[16px]">
        <p className="text-[#525252] sm:font-[400]  sm:text-[18px] text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] sm:font-[600] sm:text-[28px] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          How C++ Works With Libraries and More
        </h1>
        <Buttons
          className={
            "decoration-black underline font-[500] font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
    </div>
  );
}
