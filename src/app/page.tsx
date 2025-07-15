import Image from "next/image";
import Icons from "./Component/Icon_Component";
import Card from "./Component/Sec2_Component";
import Span_Heading from "./Component/Span_Heading";
import Multiple_Span_Heading from "./Component/Multiple _Span";
import Sec3_Component from "./Component/Sec3_Component";
import { Archivo } from "next/font/google";

import Sec4_Component from "./Component/Sec4_Component";

import Footer from "./Component/Footer";

import HeaderSec from "./Component/HeaderSec";
import NavBar from "./Component/NavBar";
import SmCard from "./Component/SmCard";
import FAQItem from"./Component/Question"
const archivo = Archivo({
  subsets: ["latin"],
});

export default function Home() {
  return (
 <html>
  <head></head>
  <body className={archivo.className}>
        <div className={` w-[100%]   MainTab bg-white `}>
         
         <div>
          <NavBar/><HeaderSec/>
         </div>
         
         

          
          <div className=" xl:ml-[192px] xl:mt-[88px] sm:px-[16px]">
            <div className="flex flex-wrap  sm:justify-center  ">
              <div className="flex  sm:flex-col sm:mt-[11px] md:mt-[64px] sm:gap-[32px]">
               


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
                    
                   <div className="sm:items-center sm:justify-center sm:flex-col sm:gap-[16px] flex"> <p className="text-[#262626] sm:text-[36px]   sm:leading-[40px]       mt-[33px] uppercase xl:text-[80px] lg:text-[60px] md:text-[48px]  font-[Archivo] xl:leading-[100%] lg:leading-[60px] md:leading-[48px]  Tracking-[-2px]   font-black ">
                    ONE CODEBASE
                  </p>
                 


                 
                    <Span_Heading
                    className={"sm:text-[36px]   sm:leading-[40px]   sm:items-center sm:justify-center  flex uppercase text-[80px]   xl:text-[80px] lg:text-[60px] md:text-[48px]  font-[Archivo] xl:leading-[120%] lg:leading-[60px] md:leading-[48px]   Tracking-[-2px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] font-black"}
                    Span_Text={" All PLATFORMS"}
                    Regular_Text={""}                 />
                    <div className="  sm:items-center sm:justify-center sm:gap-[16px]  sm:flex-col gap-[32px] ">
                  
                    <p className="text-[#525252] md sm:leading-[28px] text-[18px] text-center   xl:leading-[150px] font-[Archivo] font-[400px] ">
                      Get to market 5x faster with a community full of
                      Technology Partners, MVPs, trainers, authors and
                      developers with the Original Universal Framework for
                      Enterprise App Development
                    </p>
                  </div>

                  </div>
                                  
              
                 
                  <div className="flex md:flex-row sm:flex-col sm:justify-center sm:gap-[16px] ">
                    <button className="bg-[#262626]  text-white   rounded-[12px] px-[28px] py-[14px] ">
                      Free Trial
                    </button>
                    <button className="rounded-[12px] border-[#262626]   md:w-auto  text-[#262626] border-1 px-[28px] py-[14px] ">
                      Buy Now
                    </button>
                  </div>
                
              </div>

              <div className=" sm:mt-[33px] md:mt-[54px] ">
                <img
                  src="/Assets/Tree.svg"
                  alt="My Icon"
                 className="sm:w-[343px] sm:h-[285px] sm:mx-[16px] md:w-[516px] md:h-[430px]"
                />
              </div>




              <div className=" flex sm:flex-col md:flex-row sm:justify-center sm:gap-[24px] md:mt-[64px] sm:mt-[48px] ">


                <div className=" flex  sm:flex-col gap-[4px] " >
                  <h1 className="text-black font-[IBM_Plex_Mono]  sm:text-center sm:text-[28px] Titlecase leading-[120%]  font-[600] ">
                    90
                  </h1>
                  <p className="text-[#374151] sm:text-center  text-[16px] uppercase leading-[150%] font-[400] ">
                    Of the fortune 100
                  </p>
                </div>

                <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>
                
                
                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1 className="text-black sm:text-center  font-[IBM_Plex_Mono] sm:text-[28px]  Titlecase leading-[120%]  font-[600] ">
                    3M+
                  </h1>
                  <p className="text-[#374151] text-[16px] sm:text-center   uppercase leading-[150%] font-[400] ">
                    Developer community
                  </p>
                </div>


                <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>
                
                
                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1 className="text-black font-[IBM_Plex_Mono] sm:text-center  sm:text-[28px] Titlecase leading-[120%]  font-[600] ">
                    30+
                  </h1>
                  <p className="text-[#374151]  text-[16px] uppercase sm:text-center   leading-[150%] font-[400] ">
                    Years in the business
                  </p>
                </div>



              </div>
            </div>

            <div className="xl:py-[121px]  flex sm:flex-wrap sm:gap-[32px] sm:mt-[86px] md:mt-[98px]">
              <div className="flex justify-center">
                <span className="text-[#525252] sm:text-center sm:text[20px] sm:font-[400]  md:text-[20px] xl:text-[24px] leading-[150%]  font-[500]">
                  The <span className="text-[#525252] sm:text-center sm:text[20px] sm:font-[500]  md:text-[20px] xl:text-[24px] leading-[150%]  font-[500]">World’s Leading Companies</span> Rely on Software Built With
                  Embarcadero Products
                </span>
              </div>
              <div className=" flex flex-wrap  justify-center sm:gap-[62.42px] ">
                <Icons IconPath="/Assets/Airbnb.svg" className="sm:w-[74.67px]  sm:h-[28px] md:w-[106px]  md:h-[28px]"  />
                <Icons IconPath="/Assets/Amazon.svg"   className="sm:w-[64.17px]  sm:h-[28px] md:w-[91px]  md:h-[28px]"/>
                <Icons IconPath="/Assets/Gitlab.svg"   className="sm:w-[79.33px]  sm:h-[28px]  md:w-[113px]  md:h-[28px]"/>
                 <Icons IconPath="/Assets/Gitlab.svg"   className="sm:w-[79.33px]  sm:h-[28px]  md:w-[113px]  md:h-[28px]"/>
                 <Icons IconPath="/Assets/bruze.svg" width={76} height={40} className="sm:w-[53.67px]  sm:h-[28]  md:w-[76.67px]  md:h-[28px]"/>
             
               <Icons
                  IconPath="/Assets/Rippling.svg"
                  className="sm:w-[99.17px]  sm:h-[28px] md:w-[px]  md:h-[28px] md:hidden "
                  width={141}
                  height={40}
                />
                <Icons
                  IconPath="/Assets/Atlassian.svg"
                  className="sm:w-[103px]  sm:h-[28px]  md:w-[148px]  md:h-[28px]"
                  width={148}
                  height={40}
                />
                <Icons IconPath="/Assets/Google.svg" width={94} height={40} className="sm:w-[79.33px]  sm:h-[28px]"/>
                <Icons
                  IconPath="/Assets/Automatic.svg"
                  className="sm:w-[135.92px]  sm:h-[28px]  md:w-[194.18px]  md:h-[28px]"
                  width={194}
                  height={40}
                />{" "}
                <Icons IconPath="/Assets/Sonos.svg" width={95} height={40} className="sm:w-[67.08px]  sm:h-[28px]  md:w-[95.72px]  md:h-[28px]"/>
              </div>
            
              
                </div>
          </div>
 <div className="mx-[16px]">    <Multiple_Span_Heading
            Span_Text={" Over Three Million Developers "}
            IconPath={"/Assets/line.svg"}
            Text_1={"Trusted by"}
            Text_2={"World Wide"}
            className={"  flex justify-center  xl:mt-[196px] md:mt-[96px] sm:mt-[80px]"}
            Icon_Class={" sm:hidden md:hidden lg:flex"}
          />
      </div>
          <Card />
           <SmCard className={" sm:flex md:flex lg:hidden xl:hidden"}/>
<div className="mx-[16px]"><Multiple_Span_Heading
            Span_Text={"Embarcadero Blog"}
            IconPath={"./Assets/Arrow.svg"}
            Text_1={"Learn More on the "}
            Text_2={""}
            className={" flex justify-center mt-[196px]"}
            Icon_Class={" absolute right-119 top-646 sm:hidden md:hidden lg:flex"}
          />
</div>
          <div className=" md:flex md:flex-col md:gap-[96px]">
            <Sec3_Component />
          <Sec4_Component />
          <div className=" md:flex md:flex-col mx-[16px] md:gap-[48px]">
            <Multiple_Span_Heading
            Icon_Class={"sm:hidden md:hidden lg:flex"}
            className={
              "flex justify-center"
            }
            Text_1={"Frequently Asked "}
            Span_Text={"Questions"}
            Text_2={""}
            IconPath={"/Assets/Vector.svg"}
          />
          <FAQItem/>
          {/* <Sec5_Component /> */}
          
          </div>
          <Footer />
          </div>
          
        </div>

  </body>
 </html>
      
        
  );
}
