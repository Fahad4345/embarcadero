import React from 'react'
import Image from "next/image";

export default function NavBar() {
  return (
     <div className="firsttab  bg-[#262626]  flex flex-wrap  sm:flex-col lg:flex-row md:flex-row sm:justify-center md:justify-between  sm:px-[16px]  xl:px-[80px] md:px-[24px] py-[16px] sm:gap-[16px]">
                <div className=" flex sm:flex-col md: flex-row ">
                 <div className=' flex sm:flex-col md:flex-row sm:justify-center gap-[8px]'> 
                    
                    <div><p className=" xl:text-[16px] text-[14px]   leading-[150%] font-[Archivo] text-white font-[300px]">
                    See what s new in{" "}
                    <span className=" xl:text-[16px] text-[14px] leading-[150%] font-[Archivo] text-white font-[500px]">
                      Delphi, C++ Builder, and RAD Studio {" "}
                    </span>
                  </p></div>
                  
                  <div className=' flex sm:justify-center'><a
                    href=""
                    className="xl:text-[16px] text-[14px] underline leading-[150%]   text-white font-[500px] decoration-solid font-[Archivo] decoration-white"
                  >
                    Watch the Replay
                  </a></div>

                    </div>
                  
                  
                
                  
                  </div>
                <div className=" flex  gap-[32px]  justify-center">
                  <div className=" flex gap-[32px] sm:hidden md:hidden lg:flex">
                    <a
                      href="http://"
                      className="text-white xl:text-[16px] text-[14px] hover:text-[#525252] font-[Archivo] leading-[150%] font-[500]"
                    >
                      My Downloads
                    </a>
                    <a
                      href="http://"
                      className="text-white hover:text-[#525252] xl:text-[16px] text-[14px] font-[Archivo] leading-[150%] font-[500]"
                    >
                      UpgradeCenter
                    </a>
                    <a
                      href="http://"
                      className="text-white  xl:text-[16px] text-[14px] hover:text-[#525252] font-[Archivo]  leading-[150%] font-[500]"
                    >
                      MyCustomerPortal
                    </a>
                    <a
                      href="http://"
                      className="text-white hover:text-[#525252] xl:text-[16px] text-[14px] font-[Archivo] leading-[150%] font-[500]"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className=" flex  justify-center gap-[16px]">
                    <Image
                      src="/Assets/search.svg"
                      alt="My Icon"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/Assets/Cart.svg"
                      alt="My Icon"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/Assets/Globe.svg"
                      alt="My Icon"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
  )
}
