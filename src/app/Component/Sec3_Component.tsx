import React from "react";
import Buttons from "./Button";

export default function Sec3_Component() {
  return (
    <div className="flex flex-wrap  xl:gap-[80px] lg:gap-[82px] md:gap-[96px] sm:gap-[80px] xl:pl-[192px] lg:pl-[80px] ">
      <div className="  bg-amber-300  justify-start  xl:w-[466px] lg:w-[250px]  md:w-[331px] ">
        <p>Learning & Development</p>
        <h1>3 Main C++ Compiler Tips to Develop Successful Apps</h1>
        <Buttons
          className={
            "rounded-[10px] flex justify-center border-black text-black border-3 px-[10px] py-[10px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className=" justify-start space-y-5 xl:w-[466px] xl:h-[166px] lg:w-[250px] md:w-[331px] md:h-[213px]">
        <p>Learning & Development</p>
        <h1>Top 5 Platforms For Windows Applications Development in 2022</h1>
        <Buttons
          className={
            "rounded-[10px] flex  border-black text-black border-3 px-[10px] py-[10px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div>
        <p>Learning & Development</p>
        <p>Everything You Need to Know About Cross-Platform Development</p>
        <Buttons
          className={
            "rounded-[10px] flex  border-black text-black border-3 px-[10px] py-[10px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className=" justify-start space-y-5 xl:w-[466px] xl:h-[166px] lg:w-[405px] lg:h-[234px] md:w-[331px] md:h-[213px]">
        <p>Learning & Development</p>
        <p>A Complete Guide To Programming In C++ – Visual Programming</p>
        <Buttons
          className={
            "rounded-[10px] flex  border-black text-black border-3 px-[10px] py-[10px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className=" justify-start space-y-5 xl:w-[466px] xl:h-[166px] lg:w-[405px] lg:h-[234px] md:w-[331px] md:h-[213px]">
        <p>Learning & Development</p>
        <p>
          A Complete Guide To Programming In C++ – Object Oriented Programming
        </p>
        <Buttons
          className={
            "rounded-[10px] flex  border-black text-black border-3 px-[10px] py-[10px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
      <div className=" justify-start space-y-5 xl:w-[466px] xl:h-[166px] lg:w-[405px] lg:h-[234px] md:w-[331px] md:h-[213px]">
        <p>Learning & Development</p>
        <p>How C++ Works With Libraries and More</p>
        <Buttons
          className={
            "rounded-[10px] flex  border-black text-black border-3 px-[10px] py-[10px] "
          }
          Button_text={"Read More"}
          IconPath={"./Assets/RightArrow.svg"}
        />
      </div>
    </div>
  );
}
