"use client";
import React from "react";
import Span_Heading from "../Elements/Span_Heading";


export default function Sec4_Component() {
  return (
    <div className="  flex   z-10 w-full   bg-white  xl:justify-center xl:mt-[128px] lg:mt-[132px] lg:flex-row  sm:flex-col      ">
      <div className="   flex  flex-col    mx-auto sm:px-[16px]  md:px-[0px] gap-[32px]  ">
    <div className=" flex flex-col sm:gap-[8px]    xl:w-[647px] lg:w-[514px] md:w-[696px] sm:w-[370px] ">
      <div className="flex sm:justify-center lg:justify-start " >
       <Span_Heading
          className={"  xl:leading-[120%] xl:text-[48px] lg:text-[48px]   lg:leading-[120%] lg:text-start md:text-[36px]  sm:text-center sm:text-[30px] sm:font-[600] sm:leading-[140%]   font-[Archivo]  Tracking-[-1px] text-[#262626]"}
        
          Span_Text={"Global Developer Community"}
          Regular_Text={"Join Our"} 
          
              />
     
    </div>
         
        <div className=" ">
          <p
            className=
              " sm:text-[20px] sm:text-center lg:text-start sm:leading-[28px] font-[400] font-[Archivo] lg:text-[24px] lg:leading-[150%] text-[#525252]">
                
              Join our email list and receive the latest case studies, event updates, product news, and much more.
              </p>
          
          
            
          
        </div>
    
    </div>
        <div className=" z-10 flex sm:flex-col  lg:justify-start md:justify-center sm:item-center md:flex-row gap-[8px]">
          
            <input
              className=" text-[#525252] text-[16px] leading-[150%]    max-w-[386px] w-full z-10 font-[400]  sm:text-center  md:text-start border-[#D4D4D4] border-1 rounded-[8px]  px-[20px] py-[12px] "
              type="text"
              value="Your Email"
              
              onChange={() => {}}
            />
       
          <button className=" z-10 rounded-[10px] border-[#262626] text-white bg-[#262626]   hover:bg-[#262626]/90 border-1 px-[24px] py-[12px]  transition duration-300  cursor-pointer ">
            Subscribe
          </button>
        </div>
      </div>



      <div className=" xl:ml-[20px] lg:ml-[32px] mx-auto xl:mt-[0px] lg:mt-[0px] md:mt-[52px] sm:mt-[48px]">
        {" "}
        <img src="./Assets/Map.svg" alt="My Icon"  className="xl:w-[882px] xl:h-[438px] lg:w-[733.60px] lg:h-[341.52px] md:w-[696px] md:h-[323.97px] sm:w-[343px] sm:h-[209px] "/>
      </div>
    </div>
  );
}
