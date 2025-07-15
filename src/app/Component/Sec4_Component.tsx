"use client";
import React from "react";
import Span_Heading from "./Span_Heading";


export default function Sec4_Component() {
  return (
    <div className=" flex sm:flex-col items-center xl:ml-[192px]  xl:mt-[128px] sm:mt-[48px] sm:gap-[48px]  xl:gap-[20px]">
      <div className="   sm:px-[16px] sm:gap-[32px] ">
    <div className="sm:gap-[8px] flex flex-col">
      <div className="flex justify-center" >
       <Span_Heading
          className={"    inline-block xl:text-[48px] text-center sm:text-[30px] sm:font-[600] sm:leading-[140%]  md:text-[36px] uppercase  font-[Archivo] leading-[120%] Tracking-[-1px] text-[#262626]"}
          Span_Text={" Global Developer Community"}
          Regular_Text={"Join Our"} 
          
              />
     
    </div>
         
        <div className=" ">
          <p
            className=
              " sm:text-[20px]  sm:text-center sm:leading-[28px] font-[400] font-[Archivo] xl:text-[24px] xl:leading-[150%] text-[#525252]">
                
              Join our email list and receive the latest case studies, event updates, product news, and much more.
              </p>
          
          
            
          
        </div>
    
    </div>
        <div className=" flex sm:flex-col md:justify-center md:flex-row mt-[32px] gap-[8px]">
          
            <input
              className=" text-[#525252] text-[16px] leading-[150%] md:w-[386px]  font-[400]  sm:text-center  md:text-start border-[#D4D4D4] border-1 rounded-[10px]  px-[20px] py-[12px] "
              type="text"
              value="Your Email"
              onChange={() => {}}
            />
       
          <button className="rounded-[10px] border-[#262626] bg-[#262626] border-1 px-[24px] py-[12px] ">
            Subscribe
          </button>
        </div>
      </div>



      <div className=" xl:mr-[193px]">
        {" "}
        <img src="./Assets/Map.svg" alt="My Icon"  className="xl:w-[882px] xl:h-[438px] md:w-[696px] md:h-[323.97px] sm:w-[343px] sm:h-[209px] "/>
      </div>
    </div>
  );
}
