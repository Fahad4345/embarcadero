import React from 'react'
import Image from "next/image";

export default function NavBar() {
  return (
     <div className="firsttab  bg-[#262626]  flex md:flex-row md:px-[24px] md:py-[16px] md:justify-between sm:flex-wrap  sm:flex-col sm:justify-center    sm:p-[16px] sm:gap-[16px]">
                <div className=" flex sm:flex-col  md:flex-row ">
                 <div className=' flex md:flex-row sm:flex-col  sm:justify-center sm:gap-[4px]'> 
                    
                    <div><p className="  sm:text-[14px]   sm:leading-[150%]  text-white sm:font-[300] font-[Archivo]">
                    See what s new in{" "}
                    <span className="  sm:text-[14px]  sm:leading-[150%] font-[Archivo] text-white sm:font-[500]">
                      Delphi, C++ Builder, and RAD Studio {" "}
                    </span>
                  </p></div>
                  
                  <div className=' flex sm:justify-center'><a
                    href=""
                    className=" sm:text-[14px] sm:font-[500px] sm:leading-[150%]  underline text-white  decoration-solid font-[Archivo] decoration-white"
                  >
                    Watch the Replay
                  </a></div>

                    </div>
                  
                  
                
                  
                  </div>
                <div className=" flex  gap-[32px]  justify-center">
                  <div className=" flex gap-[32px] sm:hidden md:hidden lg:flex">
                    <a
                      href="http://"
                      className="text-white  text-[14px] hover:text-[#525252] font-[Archivo] leading-[150%] font-[500]"
                    >
                      My Downloads
                    </a>
                    <a
                      href="http://"
                      className="text-white hover:text-[#525252] text-[14px] font-[Archivo] leading-[150%] font-[500]"
                    >
                      UpgradeCenter
                    </a>
                    <a
                      href="http://"
                      className="text-white text-[14px] hover:text-[#525252] font-[Archivo]  leading-[150%] font-[500]"
                    >
                      MyCustomerPortal
                    </a>
                    <a
                      href="http://"
                      className="text-white hover:text-[#525252]  text-[14px] font-[Archivo] leading-[150%] font-[500]"
                    >
                      Contact Us
                    </a>
                  </div>
                  <div className=" flex  justify-center sm:gap-[16px]">
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
