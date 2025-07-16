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
        <div className={` w-[100%]   MainTab bg-white  flex flex-col  justify-center`}> 
         
         <div>
          <NavBar/><HeaderSec/>
         </div>
         
         

          
          <div className=" lg:ml-[79px] lg:mt-[88px] sm:px-[16px] xl:ml-[192px]">
            <div className="flex flex-wrap lg:flex-row lg:gap-[32px] 
             lg:justify-start sm:justify-center  ">
              <div className="flex  lg:justify-start lg:max-w-[600px] xl:max-w-[792px] sm:flex-col sm:mt-[11px] md:mt-[64px] sm:gap-[32px] ">
               


                  <div className="sm:items-center sm:justify-center lg:justify-start sm:flex gap-[33px]   ">
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
                    
                   <div className="sm:items-center lg:items-start  sm:justify-center sm:flex-col sm:gap-[16px] flex "> <p className="text-[#262626] mt-[33px] uppercase  xl:leading-[100%] xl:text-[80px] lg:text-[60px] lg:leading-[60px]  md:leading-[48px] md:text-[48px]  sm:text-[36px]   sm:leading-[40px]  font-[Archivo]    Tracking-[-2px]   font-black ">
                    ONE CODEBASE
                  </p>
                 


                 
                    <Span_Heading
                    className={" flex uppercase text-[80px]  xl:leading-[120%] xl:text-[80px] lg:text-[60px] lg:leading-[60px] md:leading-[48px]  md:text-[48px] sm:text-[36px]   sm:leading-[40px]   font-[Archivo]   Tracking-[-2px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] font-black"}
                    Span_Text={" All PLATFORMS"}
                    Regular_Text={""}                 />
                   
                    <div className="  lg:justify-start sm:justify-center sm:gap-[16px]  sm:flex-col gap-[32px] ">
                  
                    <p className="text-[#525252]  xl:leading-[150%] sm:leading-[28px]  sm:text-center lg:text-start text-[18px]  font-[Archivo] font-[400px] ">
                      Get to market 5x faster with a community full of
                      Technology Partners, MVPs, trainers, authors and
                      developers with the Original Universal Framework for
                      Enterprise App Development
                    </p>
                  </div>

                  </div>
                                  
              
                 
                  <div className="flex lg:justify-start md:flex-row sm:flex-col sm:justify-center sm:gap-[16px] ">
                    <button className="bg-[#262626]  text-white   rounded-[12px] px-[28px] py-[14px] ">
                      Free Trial
                    </button>
                    <button className="rounded-[12px] border-[#262626]   md:w-auto  text-[#262626] border-1 px-[28px] py-[14px] ">
                      Buy Now
                    </button>
                  </div>
                
              </div>

              <div className="  lg:mt-[96px] md:mt-[54px]  sm:mt-[33px] ">
                <img
                  src="/Assets/Tree.svg"
                  alt="My Icon"
                 className="sm:w-[343px] sm:h-[285px] sm:mx-[16px] md:w-[516px] md:h-[430px] lg:w-[624px] lg:h-[520px] xl:w-[720px] xl:h-[600px]"
                />
              </div>




              <div className=" flex lg-mt-[86px] md:mt-[64px] md:flex-row  sm:flex-col sm:justify-center sm:gap-[24px] sm:mt-[48px] ">


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
                  <h1 className="text-black sm:text-center  font-[IBM_Plex_Mono] sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                    3M+
                  </h1>
                  <p className="text-[#374151] text-[16px] sm:text-center   uppercase leading-[150%] font-[400] ">
                    Developer community
                  </p>
                </div>


                <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>
                
                
                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1 className="text-black font-[IBM_Plex_Mono] sm:text-center  sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                    30+
                  </h1>
                  <p className="text-[#374151]  text-[16px] uppercase sm:text-center   leading-[150%] font-[400] ">
                    Years in the business
                  </p>
                </div>



              </div>
            </div>

            <div className="lg:mt-[121px] md:justify-center lg:justify-center md:mt-[98px] flex sm:flex-wrap sm:gap-[32px] sm:mt-[86px] ">
              <div className="flex justify-center">
                <span className="text-[#525252] xl:text-[24px] text-center  lg:text-[24px] md:text-[20px] sm:text-center sm:text[20px] sm:font-[400]   leading-[150%]  font-[500]">
                  The <span className="text-[#525252]  xl:text-[24px]  md:text-[20px] sm:text-center sm:text[20px] sm:font-[500]   leading-[150%]  font-[500]">World’s Leading Companies</span> Rely on Software Built With
                  Embarcadero Products
                </span>
              </div>
              <div className=" flex flex-wrap  justify-center sm:gap-[62.42px] ">
                <Icons IconPath="/Assets/Airbnb.svg" className="sm:w-[74.67px]  sm:h-[28px] md:w-[106px]  md:h-[28px]"  />
                <Icons IconPath="/Assets/Amazon.svg"   className="sm:w-[64.17px]  sm:h-[28px] md:w-[91px]  md:h-[28px]"/>
                <Icons IconPath="/Assets/Gitlab.svg"   className="sm:w-[79.33px]  sm:h-[28px]  md:w-[113px]  md:h-[28px]"/>
                 <Icons IconPath="/Assets/Gitlab.svg"   className="sm:w-[79.33px]  sm:h-[28px]  md:w-[113px]  md:h-[28px] lg:hidden "/>
                 <Icons IconPath="/Assets/bruze.svg" width={76} height={40} className="sm:w-[53.67px]  sm:h-[28]  md:w-[76.67px]   md:h-[28px] lg:hidden"/>
             
               <Icons
                  IconPath="/Assets/Rippling.svg"
                  className="sm:w-[99.17px]  sm:h-[28px] md:w-[px]  md:h-[28px] md:hidden lg:flex "
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
                <Icons IconPath="/Assets/Sonos.svg" width={95} height={40} className="sm:w-[67.08px]  sm:h-[28px]  md:w-[95.72px]  md:h-[28px] lg:hidden "/>
              </div>
            
              
                </div>
          </div>
 <div className="sm:mx-[16px] ">    <Multiple_Span_Heading
            Span_Text={" Over Three Million Developers "}
            IconPath={"/Assets/line.svg"}
            Text_1={"Trusted by"}
            Text_2={"World Wide"}
            className={"  flex relative  justify-center text-center xl:mt-[196px] md:mt-[96px] sm:mt-[80px] lg:gap-[41px]"}
            Icon_Class={" sm:hidden md:hidden lg:flex absolute  lg:top-4 lg:left-10 xl:top-7 xl:left-70"}
          />
      </div>
          <Card />
           <SmCard className={" sm:flex md:flex lg:hidden xl:hidden"}/>
<div className="mx-[16px]"><Multiple_Span_Heading
            Span_Text={"Embarcadero Blog"}
            IconPath={"./Assets/Arrow.svg"}
            Text_1={"Learn More on the "}
            Text_2={""}
            className={" flex  relative text-center justify-center mt-[196px]"}
            Icon_Class={" absolute lg:right-60 lg:top-0 xl:right-128 xl:top-5 sm:hidden md:hidden lg:flex"}
          />
</div>
          <div className=" flex  flex-col   md:flex-col  md:gap-[96px] ">
           <div><Sec3_Component /></div> 
          <div><Sec4_Component /></div>
          <div className=" flex flex-col  mx-auto  md:gap-[48px]">
            <Multiple_Span_Heading
            Icon_Class={"sm:hidden md:hidden lg:flex absolute lg:top-853 lg:left-75 xl:top-939 xl:left-135"}
            className={
              "flex justify-center"
            }
            Text_1={"Frequently Asked "}
            Span_Text={"Questions"}
            Text_2={""}
            IconPath={"/Assets/Vector.svg"}
          />
          <FAQItem/>
      
          
          </div>
          <Footer />
          </div>
          
        </div>

  </body>
 </html>
      
        
  );
}
