"use client";


import  React, { useState }  from "react";
import Dropdown from "../Elements/DropDown";
import Button from "./Button"

import Icons from "../Elements/Icon_Component";

import MenuBar from "./MenuBar";
 const MenuOpen=() => {
   const [isOpen, setIsOpen]=useState(false);
  return( <div>

  </div>);
};  


  


export default function HeaderSec() {

  return (
    <div className="xl:px-[196px] xl:py-[16px]  lg:px-[80px]  lg:py-[16px]  md:px-[24px] md:py-[16px] sm:py-[12px] sm:px-[16px]  flex  justify-between">
   
       {/* <Image src={"/Assets/Logo.svg"} alt={""} width={138.67} height={24}   /> */}
        
                      <Icons IconPath={"/Assets/logo.svg"} className="sm:w-[138.67px] sm:h-[24px]   transition duration-300  hover:scale-110  cursor-pointer" />
                    
          {/* <img src="/Assets/logo.svg" alt="My Icon" className="sm:w-[138.67px] sm:h-[24px]"/> */}
        

        <div>
        
          <Dropdown className="sm:hidden  md:hidden lg:flex"/>
        </div>

        <div className="flex  justify-center lg:gap-[8px] sm:gap-[24px]   ">
          <Button
            className={
              
              " bg-transparent pt-[10px] text-black sm:hidden  md:flex font-[Archivo]  font-[500] text-[14px] leading-[22px] cursor-pointer "
            }
            Button_text={"Sign In"}
          />
          <Button
            className={
              "  md:px-[16px] md:py-[8px] rounded-[10px] border-black font-[Archivo] sm:hidden  md:flex text-black border-1 lg:px-[20px] lg:py-[8px]  bg-[white] transition duration-300  hover:bg-[#262626]  hover:text-white  hover:scale-110  cursor-pointer"
            }
            Button_text={"Buy Now"}
          />
          <Button
            className={
                " md:px-[16px] md:py-[8px] sm:px-[16px] sm:py-[8px] sm:rounded-[8px] bg-[#262626]  text-white font-[Archivo]  hover:bg-white hover:text-[black] hover:rounded-[10px] border-3  hover:border-black  transition duration-300  hover:scale-110 cursor-pointer"
            }
            Button_text={"Free Trial"}
          />
            {/* <Icons IconPath={"./Assets/Menu.svg"} className=" hover:scale-140 transition duration-300 cursor-pointer" oncli /> */}
        
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={MenuOpen}>
<g clip-path="url(#clip0_1783_28822)">
<path d="M4 6H20" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12H20" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 18H20" stroke="#525252" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1783_28822">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

        </div>
      
      </div>
   
  );
}