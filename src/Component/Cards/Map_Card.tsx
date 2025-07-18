"use client";
import React from "react";
import Span_Heading from "../Elements/Span_Heading";


export default function Sec4_Component() {
  return (
    <div className=" z-10 flex sm:items-center xl:gap-[20px]   justify-center xl:mt-[128px] xl:ml-[192px] lg:ml-[80px] lg:mt-[132px] lg:flex-row  sm:flex-col  sm:gap-[48px]    ">
      <div className="   sm:px-[16px] sm:gap-[32px]  ">
    <div className=" flex flex-col sm:gap-[8px]  xl:w-[550px] lg:w-[512px] ">
      <div className="flex sm:justify-center lg:justify-start " >
       <Span_Heading
          className={"  xl:leading-[120%] xl:text-[48px] lg:text-[48px]   lg:leading-[120%] lg:text-start md:text-[36px] sm:text-center sm:text-[30px] sm:font-[600] sm:leading-[140%]   font-[Archivo]  Tracking-[-1px] text-[#262626]"}
        
          Span_Text={"Global Developer Community"}
          Regular_Text={"Join Our"} 
          
              />
     
    </div>
         
        <div className=" ">
          <p
            className=
              " sm:text-[20px] whitespace-normal sm:text-center lg:text-start sm:leading-[28px] font-[400] font-[Archivo] xl:text-[24px] xl:leading-[150%] text-[#525252]">
                
              Join our email list and receive the latest case studies, event updates, product news, and much more.
              </p>
          
          
            
          
        </div>
    
    </div>
        <div className=" z-10 flex sm:flex-col  lg:justify-start md:justify-center md:flex-row mt-[32px] gap-[8px]">
          
            <input
              className=" text-[#525252] text-[16px] leading-[150%] md:w-[386px]  font-[400]  sm:text-center  md:text-start border-[#D4D4D4] border-1 rounded-[8px]  px-[20px] py-[12px] "
              type="text"
              value="Your Email"
              
              onChange={() => {}}
            />
       
          <button className=" z-10 rounded-[10px] border-[#262626] bg-[#262626] border-1 px-[24px] py-[12px]  transition duration-300  hover:scale-110 cursor-pointer ">
            Subscribe
          </button>
        </div>
      </div>



      <div className=" xl:mr-[193px] lg:mr-[80px]">
        {" "}
        <img src="./Assets/Map.svg" alt="My Icon"  className="xl:w-[882px] xl:h-[438px] lg:w-[733.60px] lg:h-[341.52px] md:w-[696px] md:h-[323.97px] sm:w-[343px] sm:h-[209px] "/>
      </div>
    </div>
  );
}
