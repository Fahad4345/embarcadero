import React from "react";
import Icons from "../Elements/Icon_Component";
import Image from "next/image";

export default function Footer() {
  return (
    
      <div className="     sm:gap-[32px]  md:gap-[40px]  flex flex-col sm:pb-[32px] lg:px-[0px] sm:px-[16px]">
        <div className="flex sm:flex-col  xl:flex-row lg:flex-col xl:gap-[32px] lg:gap-[48px]  ">
        <div className=" flex justify-start  lg:mt-[0px] md:mt-[40px] sm:mt-[32px] xl:w-[447px] "><Image src={"/Assets/logo.svg"} alt={""} width={138} height={40}className="w-[138px] h-[35px]"/>
          </div>
            
          
          <div className=" flex lg:gap-[70.2px]  md:justify-center flex-wrap  sm:hidden md:hidden lg:flex  ">
            <div className="  flex flex-col  gap-[26px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Products
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] md:leading-[16px] sm:leading-[150%] font-[Archivo] hover:text-[#4B5563] transition duration-300 cursor-pointer hover:scale-105">
                RAD STUDIO™
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading-[150%] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">
                DELPHI®
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                C++BUILDER®
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading-[150%]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                INTERBASE®
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                RAD SERVER™
              </p>
            </div>
            <div className="  flex flex-col   gap-[26px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Free Tools
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px]sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                C++ Compiler
              </p>
              <p className="font-[400] text-wrap text-[#4B5563] text-[16px] md:leading-[16px]leading-[16px]sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                C++Builder Community ED
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                DELPHI Community ED
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]md:leading-[16px] sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                REST Debugger
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]md:leading-[16px] sm:leading-[150%]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                INTERBASE Developer Edition
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]md:leading-[16px] sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                FMX STENCILS
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px]sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                DEV-C++
              </p>
            </div>

            <div className="  flex flex-col    gap-[26px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Resources
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]  md:leading-[16px]sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Events and Webinars
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]  md:leading-[16px] sm:leading-[150%]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                White Papers
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]  md:leading-[16px]sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Success Strories
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px] sm:leading-[150%]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                For Educators
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]  md:leading-[16px] sm:leading-[150%]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Partners
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]  md:leading-[16px] sm:leading-[150%]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Partners
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading-[150%] md:leading-[16px]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Certifications
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]  sm:leading-[150%]md:leading-[16px]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                MVP Program
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading-[150%] md:leading-[16px] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                WEB APP Development
              </p>
            </div>
            <div className="  flex flex-col gap-[26px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Community
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]  md:leading-[16px]sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Blogs
              </p>
            </div>
            <div className="  flex flex-col  gap-[24px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
                Compnay
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading-[150%] md:leading-[16px]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                About us
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading-[150%]md:leading-[16px] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Contact us
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading-[150%]md:leading-[16px] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Contact sales
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px]sm:leading-[150%] md:leading-[16px]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Legal
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading-[150%] md:leading-[16px]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Privacy Policy
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] sm:leading-[150%]md:leading-[16px] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                Logo
              </p>
            </div>
            <div className="  flex flex-col gap-[26px]">
              <h1 className="font-[700]  text-[#1F2937] text-[20px] leading-[20px] sm:leading-[150%]md:leading-[16px] font-[Archivo]">
                Get in Touch
              </h1>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px]sm:leading-[150%]font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                US: 1 (512) 226-8080
              </p>
              <p className="font-[400]  text-[#4B5563] text-[16px] leading-[16px] md:leading-[16px]sm:leading-[150%] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
                DE: +49 (0)6103-3866-100
              </p>
             
            </div>
          </div>
        </div>

     

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:gap-[48px] sm:gap-[40px] xl:hidden lg:hidden ">

  <div className="  flex flex-col gap-[40px]">
    <div className="flex flex-col gap-[26px]">
      <h1 className="font-bold text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
        Products
      </h1>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] hover:text-[#4B5563] transition duration-300 cursor-pointer hover:scale-105">RAD STUDIO™</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">DELPHI®</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">C++BUILDER®</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">INTERBASE®</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">RAD SERVER™</p>
          </div>
           <div className="max-h-[60px]">
    <div className="flex flex-col gap-[26px] ">
      <h1 className="font-bold text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
        Community
      </h1>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Blogs</p>
    </div>
  </div>
  </div>


  <div>
    <div className="flex flex-col gap-[26px]">
      <h1 className="font-bold text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
        Free Tools
      </h1>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">C++ Compiler</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">C++Builder Community ED</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">DELPHI Community ED</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">REST Debugger</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">INTERBASE Developer Edition</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">FMX STENCILS</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">DEV-C++</p>
    </div>
        </div>

        


  <div>
    <div className="flex flex-col gap-[26px]">
      <h1 className="font-bold text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
        Resources
      </h1>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Events and Webinars</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">White Papers</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Success Stories</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">For Educators</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Partners</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Certifications</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">MVP Program</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">WEB APP Development</p>
    </div>
  </div>


 

 <div>
    <div className="flex flex-col gap-[26px]">
      <h1 className="font-bold text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
        Company
      </h1>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">About us</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Contact us</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Contact sales</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Legal</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Privacy Policy</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">Logo</p>
    </div>
  </div>


  <div>
    <div className="flex flex-col gap-[26px]">
      <h1 className="font-bold text-[#1F2937] text-[20px] leading-[20px] font-[Archivo]">
        Get in Touch
      </h1>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">US: 1 (512) 226-8080</p>
      <p className="font-normal text-[#4B5563] text-[16px] leading-[16px] font-[Archivo] transition duration-300 cursor-pointer hover:scale-105">DE: +49 (0)6103-3866-100</p>
    </div>
  </div>
</div>
         <div className="flex md:justify-between  md:flex-row sm:flex-col-reverse sm:item-center   sm:gap-[16px] md:gap-[32px]">
        
          <div className="z-10"><p className=" z-10 font-[400] sm:text-center text-[#4B5563] text-[14px] xl:leading-[14px] sm:leading-[22px] font-[Archivo]transition duration-300 cursor-pointer hover:scale-105">
            2022 Embarcadero Inc. All Rights Reserved
          </p>
          </div>
        
          <div className="  flex gap-[24px] sm:justify-center">
            <Icons IconPath={"/Assets/Twitter.svg"} width={24} height={24} className="transition duration-300 cursor-pointer hover:scale-130"/>
            <Icons IconPath={"/Assets/FaceBook.svg"} width={24} height={24} className="transition duration-300 cursor-pointer hover:scale-130"/>
            <Icons IconPath={"/Assets/Internet.svg"} width={24} height={24}className="transition duration-300 cursor-pointer hover:scale-130" />
            <Icons IconPath={"/Assets/Cat.svg"} width={24} height={24}className="transition duration-300 cursor-pointer hover:scale-130" />
          </div>
      </div>
      </div>
   
  );
}
