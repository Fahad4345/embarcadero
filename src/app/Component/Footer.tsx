import React from "react";
import Icons from "./Icon_Component";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className=" xl: mt-[128px] xl:px-[80px] xl:py-[48px] sm:px-[16px] sm:py-[32px] md:px-[24px] md:py-[40px]">
        <div className="flex sm:flex-col  sm:gap-[40px] md:flex-wrap md:gap-[48px]">
        <Image src={"/Assets/Logo.svg"} alt={""} width={138} height={40}/>
          
            
          
          <div className="flex  flex-wrap justify-center xl:gap-[70.8px] sm:gap-[48] md:gap-y-[48px] md:gap-x-[24px]  ">
            <div className="  flex-col flex-1 sm:min-w-[107.5px]   md:min-w-[215.67px] space-y-[24px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Products
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] md:leading-[16px] sm:leading[150%] font-[Archivo]">
                RAD STUDIO™
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading[150%] font-[Archivo]">
                DELPHI®
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading[150%] font-[Archivo]">
                C++BUILDER®
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading[150%]font-[Archivo]">
                INTERBASE®
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading[150%] font-[Archivo]">
                RAD SERVER™
              </p>
            </div>
            <div className=" flex-col flex-1 sm:min-w-[107.5px]   md:min-w-[215.67px]   space-y-[24px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Free Tools
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px]sm:leading[150%] font-[Archivo]">
                C++ Compiler
              </p>
              <p className="font-[400] text-wrap text-[#4B5563] text-[16px] md:leading-[16px]leading-[16px]sm:leading[150%] font-[Archivo]">
                C++Builder Community ED
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading[150%] font-[Archivo]">
                DELPHI Community ED
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]md:leading-[16px] sm:leading[150%] font-[Archivo]">
                REST Debugger
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]md:leading-[16px] sm:leading[150%]font-[Archivo]">
                INTERBASE Developer Edition
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]md:leading-[16px] sm:leading[150%] font-[Archivo]">
                FMX STENCILS
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading[150%]font-[Archivo]">
                DEV-C++
              </p>
            </div>

            <div className=" flex-col flex-1  sm:min-w-[107.5px]   md:min-w-[215.67px]  space-y-[24px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Resources
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px] font-[Archivo]">
                Events and Webinars
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px] font-[Archivo]">
                White Papers
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px] font-[Archivo]">
                Success Strories
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading[150%]font-[Archivo]">
                For Educators
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px] font-[Archivo]">
                Partners
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px] font-[Archivo]">
                Partners
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px]font-[Archivo]">
                Certifications
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]sm:leading[150%]  md:leading-[16px]font-[Archivo]">
                MVP Program
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px] font-[Archivo]">
                WEB APP Development
              </p>
            </div>
            <div className=" flex-col  flex-1 sm:min-w-[107.5px]   md:min-w-[215.67px]  space-y-[24px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Community
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px] font-[Archivo]">
                Blogs
              </p>
            </div>
            <div className=" flex-col flex-1 sm:min-w-[107.5px]   md:min-w-[215.67px] space-y-[24px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Compnay
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px]font-[Archivo]">
                About us
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%]md:leading-[16px] font-[Archivo]">
                Contact us
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%]md:leading-[16px] font-[Archivo]">
                Contact sales
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]sm:leading[150%] md:leading-[16px]font-[Archivo]">
                Legal
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%] md:leading-[16px]font-[Archivo]">
                Privacy Policy
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading[150%]md:leading-[16px] font-[Archivo]">
                Logo
              </p>
            </div>
            <div className=" flex-col flex-1 sm:min-w-[107.5px]   md:min-w-[215.67px]   space-y-[24px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] sm:leading[150%]md:leading-[16px] font-[Archivo]">
                Get in Touch
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px]sm:leading[150%]font-[Archivo]">
                US: 1 (512) 226-8080
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px]sm:leading[150%] font-[Archivo]">
                DE: +49 (0)6103-3866-100
              </p>
             
            </div>
          </div>
        </div>

        <div className="flex md:justify-between xl:mt-[81px] md:flex-row sm:flex-col-reverse sm:item-center  sm:mt-[32px] sm:gap-[16px] md:gap-[32px]">
        
          <div><p className="font-[400] sm:text-center text-[#4B5563] text-[14px] xl:leading-[14px] sm:leading-[22px] font-[Archivo]">
            2022 Embarcadero Inc. All Rights Reserved
          </p>
          </div>
        
          <div className="flex gap-[24px] sm:justify-center">
            <Icons IconPath={"/Assets/Twitter.svg"} width={24} height={24} />
            <Icons IconPath={"/Assets/FaceBook.svg"} width={24} height={24} />
            <Icons IconPath={"/Assets/Internet.svg"} width={24} height={24} />
            <Icons IconPath={"/Assets/Cat.svg"} width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
