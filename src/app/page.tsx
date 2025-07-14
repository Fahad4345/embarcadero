import Image from "next/image";
import Icons from "./Component/Icon_Component";
import Card from "./Component/Sec2_Component";
import Span_Heading from "./Component/Span_Heading";
import Multiple_Span_Heading from "./Component/Multiple _Span";
import Sec3_Component from "./Component/Sec3_Component";
// import { Archivo } from "next/font/google";

import Sec4_Component from "./Component/Sec4_Component";
import Sec5_Component from "./Component/Sec5_Component";
import Footer from "./Component/Footer";

import HeaderSec from "./Component/HeaderSec";
import NavBar from "./Component/NavBar";
// const archivo = Archivo({
//   subsets: ["latin"],
// });

export default function Home() {
  return (
 
      
        <div className={` w-[100%]   MainTab bg-white `}>
         
         <div>
          <NavBar/><HeaderSec />
         </div>
         
         

          
          <div className=" xl:ml-[192px] xl:mt-[88px] sm:px-[16px]">
            <div className="flex flex-wrap  sm:justify-center  ">
              <div className="flex  sm:flex-col pt-[50px]  sm:gap-[32px]">
               


                  <div className="sm:items-center sm:justify-center sm:flex gap-[33px]  ">
                    <button>
                      <div className="  flex  bg-white   rounded-[12px]   border-[0.75px] px-[12px] py-[10px]">
                        <Image
                          src="/Assets/loading.svg"
                          alt="My Icon"
                          width={24}
                          height={24}
                        />
                        <p className="text-[#262626] text-[14px] leading-[150%] font-[Archivo] font-[500px]">
                          RAD Studio 11.2 out now
                        </p>
                      </div>
                    </button>
                
                  </div>
                    
                   <div className="sm:items-center sm:justify-center sm:flex-col sm:gap-[16px] flex"> <h1 className="text-[#262626] mt-[33px] uppercase xl:text-[80px] lg:text-[60px] md:text-[48px]  font-[Archivo] xl:leading-[100%] lg:leading-[60px] md:leading-[48px]  sm:text-[36px]   sm:leading-[40px] Tracking-[-2px]   font-black ">
                    ONE CODEBASE
                  </h1>
                 


                 
                    <Span_Heading
                    className={
                      
                      "text-[80px]  sm:items-center sm:justify-center  flex uppercase   xl:text-[80px] lg:text-[60px] md:text-[48px]  font-[Archivo] xl:leading-[120%] lg:leading-[60px] md:leading-[48px]  sm:text-[36px]   sm:leading-[40px]  Tracking-[-2px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] font-black"
                    }
                    Span_Text={" All PLATFORMS"}
                    Regular_Text={""}
                  />
                    <div className="  sm:items-center sm:justify-center sm:gap-[16px]  sm:flex-col gap-[32px] ">
                  
                    <p className="text-[#525252] text-[18px] text-center leading-[150%] font-[Archivo] font-[400px] ">
                      Get to market 5x faster with a community full of
                      Technology Partners, MVPs, trainers, authors and
                      developers with the Original Universal Framework for
                      Enterprise App Development
                    </p>
                  </div>

                  </div>
                                  
              
                 
                  <div className="flex sm:flex-col sm:justify-center  md:flex-row gap-[16px]  xl:mt-[24px]">
                    <button className="bg-[#262626]  text-white  sm:w-[100%]  md:w-auto rounded-[12px] px-[28px] py-[14px] ">
                      Free Trial
                    </button>
                    <button className="rounded-[12px] border-[#262626]  sm:w-[100%] md:w-auto  text-[#262626] border-1 px-[28px] py-[14px] ">
                      Buy Now
                    </button>
                  </div>
                
              </div>

              <div className=" ml-[70px] ">
                <Image
                  src="/Assets/Tree.svg"
                  alt="My Icon"
                  width={720}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className=" flex  md:flex-row sm:flex-col sm:justify-center gap-[34.5px] pt-12">
                <div className="flex-row   sm:item-center">
                  <h1 className="text-black font-[IBM_Plex_Mono]  sm:text-center text-[30px] Titlecase leading-[120%]  font-[600] ">
                    90
                  </h1>
                  <p className="text-[#374151]  text-[16px] uppercase leading-[150%] font-[400] ">
                    Of the fortune 100
                  </p>
                </div>
                <div className="w-[1px] bg-[#D1D5DB]"></div>
                <div>
                  <h1 className="text-black sm:text-center  font-[IBM_Plex_Mono] text-[30px] Titlecase leading-[120%]  font-[600] ">
                    3M+
                  </h1>
                  <p className="text-[#374151] text-[16px]  uppercase leading-[150%] font-[400] ">
                    Developer community
                  </p>
                </div>
                <div className="w-[1px] bg-[#D1D5DB]"></div>
                <div>
                  <h1 className="text-black font-[IBM_Plex_Mono] sm:text-center  text-[30px] Titlecase leading-[120%]  font-[600] ">
                    30+
                  </h1>
                  <p className="text-[#374151]  text-[16px] uppercase   leading-[150%] font-[400] ">
                    Years in the business
                  </p>
                </div>
              </div>
            </div>

            <div className="xl:py-[121px] sm:py-[86px] md:py-[98px]">
              <div className="flex justify-center">
                <p className="text-[#525252] sm:text-center sm:text[20px] md:text-[20px] xl:text-[24px] leading-[150%] sm:font-[400] font-[500]">
                  The World’s Leading Companies Rely on Software Built With
                  Embarcadero Products
                </p>
              </div>
              <div className=" flex flex-wrap gap-[64px] py-[32px]">
                <Icons IconPath="/Assets/Airbnb.svg" width={106} height={40} />
                <Icons IconPath="/Assets/Amazon.svg" width={91} height={40} />
                <Icons IconPath="/Assets/Gitlab.svg" width={113} height={40} />
                <Icons
                  IconPath="/Assets/Rippling.svg"
                  width={141}
                  height={40}
                />
                <Icons
                  IconPath="/Assets/Atlassian.svg"
                  width={148}
                  height={40}
                />
                <Icons IconPath="/Assets/Google.svg" width={94} height={40} />
                <Icons
                  IconPath="/Assets/Automatic.svg"
                  width={194}
                  height={40}
                />{" "}
                <Icons IconPath="/Assets/Sonos.svg" width={95} height={40} />
                <Icons IconPath="/Assets/bruze.svg" width={76} height={40} />
              </div>
            </div>
          </div>

          <Multiple_Span_Heading
            Span_Text={" Over Three Million Developers "}
            IconPath={"/Assets/line.svg"}
            Text_1={"Trusted by"}
            Text_2={"World Wide"}
            className={"  flex justify-center  mt-[196px]"}
            Icon_Class={"absolute left-75 top-395"}
          />
          <Card />

          <Multiple_Span_Heading
            Span_Text={"Embarcadero Blog"}
            IconPath={"./Assets/Arrow.svg"}
            Text_1={"Learn More on the "}
            Text_2={""}
            className={" flex justify-center mt-[196px]"}
            Icon_Class={" absolute right-119 top-646"}
          />

          <Sec3_Component />
          <Sec4_Component />
          <Multiple_Span_Heading
            Icon_Class={""}
            className={
              " flex  gap-[4px] ml-[33px] mt-[128px] justify-center text-[48px] font-[600] leading-[120%] Tracking-[-1px]"
            }
            Text_1={"Frequently Asked "}
            Span_Text={"Questions"}
            Text_2={""}
            IconPath={"/Assets/Vector.svg"}
          />
          <Sec5_Component />
          <Footer />
        </div>
    
  );
}
