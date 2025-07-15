import React from "react";
import Dropdown from "./DropDown";
import Button from "./Button";

import Icons from "./Icon_Component";

export default function HeaderSec() {
  return (
    <div className="xl:px-[196px] xl:py-[16px]  lg:px-[80px]  lg:py-[16px]  md:px-[24px] md:py-[16px] sm:py-[12px] sm:px-[16px]  flex  justify-between bg-[#FFFFFF5C] ">
   
       {/* <Image src={"/Assets/Logo.svg"} alt={""} width={138.67} height={24}   /> */}
        
                      <Icons IconPath={"/Assets/Logo.svg"} className="sm:w-[138.67px] sm:h-[24px]" />
                    
          {/* <img src="/Assets/logo.svg" alt="My Icon" className="sm:w-[138.67px] sm:h-[24px]"/> */}
        

        <div>
        
          <Dropdown className="sm:hidden  md:hidden lg:flex"/>
        </div>

        <div className="flex  justify-center gap-[8px] sm:gap-[24px]   ">
          <Button
            className={
              
              " bg-transparent pt-[10px]  text-black sm:hidden  md:flex font-[Archivo]  font-[500] text-[14px] leading-[22px] "
            }
            Button_text={"Sign In"}
          />
          <Button
            className={
              "md:px-[16px] md:py-[8px] rounded-[10px] border-black font-[Archivo] sm:hidden  md:flex text-black border-1 lg:px-[20px] lg:py-[8px] "
            }
            Button_text={"Buy Now"}
          />
          <Button
            className={
                " md:px-[16px] md:py-[8px] sm:px-[16px] sm:py-[8px] sm:rounded-[8px] bg-black  text-white font-[Archivo]   "
            }
            Button_text={"Free Trial"}
          />
            <Icons IconPath={"./Assets/Menu.svg"} />
        </div>
      
      </div>
   
  );
}
