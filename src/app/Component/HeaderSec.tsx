import React from "react";
import Dropdown from "./DropDown";
import Button from "./Button";
import Image from "next/image";
import Icons from "./Icon_Component";

export default function HeaderSec() {
  return (
    <div className="xl:px-[196px] py-[16px]  lg:px-[80px]  md:px-[24px] sm:px-[16px] sm:py-[12px] flex  justify-between bg-[#FFFFFF5C] ">
   
        <div className="justify-center flex">
          <Image src="/Assets/logo.svg" alt="My Icon" width={400} height={24} className="sm:w-[138.67px] sm:h-[24px]"/>
        </div>

        <div>
        
          <Dropdown className="sm:hidden  md:hidden lg:flex"/>
        </div>

        <div className="flex  justify-center gap-[8px] md:gap-[24px]  ">
          <Button
            className={
              
              " bg-transparent pt-[10px]  text-black sm:hidden  md:flex font-[Archivo]  font-[500] text-[14px] leading-[22px] "
            }
            Button_text={"Sign In"}
          />
          <Button
            className={
              "rounded-[10px] border-black font-[Archivo] sm:hidden  md:flex text-black border-1 px-[20px] py-[8px] "
            }
            Button_text={"Buy Now"}
          />
          <Button
            className={
                "sm:px-[16px]  bg-black  text-white font-[Archivo]  rounded-[10px] px-[20px] py-[8px]"
            }
            Button_text={"Free Trial"}
          />
            <Icons IconPath={"./Assets/Menu.svg"} width={24} height={24}/>
        </div>
      
      </div>
   
  );
}
