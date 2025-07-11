"use client"
import React from "react";
import Span_Heading from "./Span_Heading";
import Text from "./Text"
import Image from "next/image";

export default function Sec4_Component() {
 
  return (
    <div className=" flex items-center ml-[192px] mt-[128] gap-[20px]">
      <div className=" ">
        <div className=""><Span_Heading
          className={
            "text-[48px] font-[600] flex flex-col uppercase  font-[Archivo] leading-[120%] Tracking-[-1px] text-[#262626]" 
          }
          Span_Text={" Global Developer Community"}
          Regular_Text={"Join Our"}
        />
        </div>
        <div className=""><Text className={"font-[400] font-[Archivo] text-[24px] leading-[150%] text-[#525252]"} Text={"Join our email list and receive the latest case studies, event updates, product news, and much more."}/>
      </div>
        <div className=" flex mt-[32px] gap-2"> <div className="   border-[#D4D4D4] border-1 rounded-[10px] w-[361px] h-[48px]">
        <input
              className=" text-[#525252] text-[16px] leading-[150%] font-[400] pl-[4px] pt-[8px] "
              type="text"
              value="Your Email"
              onChange={()=>{}}
              
              
            /></div>
            <button className="rounded-[10px] border-[#262626] bg-[#262626] border-1 px-[28px] py-[14px] ">
                  Subscribe
                </button>
        
      </div>
       </div>
            <div className=" mr-[193px]"> <Image src="./Assets/Map.svg" alt="My Icon" width={882} height={438} /></div>
      
    </div>
  );
}
