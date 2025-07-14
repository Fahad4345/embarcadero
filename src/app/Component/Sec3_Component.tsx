import React from "react";
import Buttons from "./Button";

export default function Sec3_Component() {
  return (
    <div className="flex flex-wrap mt-[80px] ml-[192px] gap-x-[32px] gap-y-[160px]   ">
      <div className="  justify-start  w-[466px] ">
        <p className="text-[#525252]  text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          3 Main C++ Compiler Tips to Develop Successful Apps
        </h1>
        <Buttons
          className={
            "decoration-black  underline font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>

      <div className="  justify-start  w-[466px] ">
        <p className="text-[#525252]  text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          Top 5 Platforms For Windows Applications Development in 2022
        </h1>
        <Buttons
          className={
            "decoration-black underline  font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>

      <div className="  justify-start  w-[466px] ">
        <p className="text-[#525252]  text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          Everything You Need to Know About Cross-Platform Development
        </h1>
        <Buttons
          className={
            "decoration-black underline  font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className="  justify-start  w-[466px] ">
        <p className="text-[#525252]  text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          A Complete Guide To Programming In C++ – Visual Programming
        </h1>
        <Buttons
          className={
            "decoration-black underline font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className="  justify-start  w-[466px] ">
        <p className="text-[#525252]  text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          A Complete Guide To Programming In C++ – Object Oriented Programming
        </h1>
        <Buttons
          className={
            "decoration-black underline  font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className="  justify-start  w-[466px] ">
        <p className="text-[#525252]  text-[20px] leading-[150%] font-[Archivo]">
          Learning & Development
        </p>
        <h1 className="text-[#262626] font-[600] text-[32px] leading-[150%] font-[Archivo] mt-[16px]">
          How C++ Works With Libraries and More
        </h1>
        <Buttons
          className={
            "decoration-black underline font-[Archivo] decoration-solid rounded-[10px] text-[18px] mt-[16px] flex justify-center text-[#262626]  leading-[28px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
    </div>
  );
}
