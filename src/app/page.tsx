"use client";
import Icons from "../Component/Elements/Icon_Component";
import LoadingIcon from "../Component/Elements/SvgIcon";
import Card from "../Component/Cards/Radio_Card";
import Span_Heading from "../Component/Elements/Span_Heading";
import Multiple_Span_Heading from "../Component/Elements/Multiple _Span";
import Sec3_Component from "../Component/Cards/Info_Card";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import Image from "next/image";

import Sec4_Component from "../Component/Cards/Map_Card";

import Footer from "../Component/Cards/Footer";

import HeaderSec from "../Component/Cards/HeaderSec";
import NavBar from "../Component/Cards/NavBar";
import SmCard from "../Component/Cards/Radio_card_sm";
import FAQItem from "../Component/Cards/Question_Card";

const archivo = Archivo({
  subsets: ["latin"],
});
const iBM_Plex_Mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <div
      className={`  w-100% MainTab bg-white   flex flex-col   overflow-hidden ${archivo.className}`}
    >
      <div className="relative flex flex-col">
        <NavBar />
        <HeaderSec />
      </div>
      <div className="   flex flex-col items-center">
        {" "}
        <div className="   relative lg:ml-[79px] lg:mt-[88px] sm:px-[16px] lg:px-[0px] xl:ml-[192px] sm:mt-[11px] md:mt-[64px] flex flex-col   items-start max-w-[1750px]">
          <div
            className="flex flex-wrap lg:flex-row xl:gap-x-[63px]  lg:gap-x-[32px] md:gap-y-[54px] sm:gap-y-[33.63px] sm:flex-col 
             lg:justify-start sm:justify-center md:flex-col  xl:justify-start"
          >
            <div className="flex  relative xl:max-w-[752px] xl:gap-[24px] lg:gap-[16px] lg:justify-start lg:max-w-[624px]  md:gap-[32px] sm:flex-col   sm:gap-[32px] ">
              <div className="sm:items-center lg:items-start  sm:justify-center sm:flex-col sm:gap-[32px] lg:gap-[32px] flex ">
                {" "}
                <div className="  sm:items-center sm:justify-center lg:justify-start sm:flex gap-[8px]">
                  <button className=" flex z-30  bg-[#F8FAFC]  border-[0.75px] border-[#E5E5E5] gap-[8px] text-center  hover:bg-[#262626] hover:opacity-[.90] transition duration-300  rounded-[12px]    px-[12px] py-[10px] text-[#262626] text-[14px] leading-[150%] font-[Archivo] font-[500px] hover:text-white  hover:scale-120 cursor-pointer  group]:">
                    <LoadingIcon className={""} />
                    RAD Studio 11.2 out now
                  </button>
                </div>
                <div className=" flex flex-col  sm:gap-[12px] ">
                  <p className="text-[#262626]  uppercase  xl:leading-[100%] xl:text-[80px] lg:text-[60px] lg:leading-[60px]  md:leading-[48px] md:text-[48px]  sm:text-[36px]   sm:leading-[40px]  font-[Archivo]    Tracking-[-2px]   font-[900] ">
                    ONE CODEBASE
                  </p>
                  <Span_Heading
                    className={
                      " flex uppercase text-[80px]  xl:leading-[120%] xl:text-[80px] lg:text-[60px] lg:leading-[60px] md:leading-[48px]  md:text-[48px] sm:text-[36px]   sm:leading-[40px]   font-[Archivo]   Tracking-[-2px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] font-black"
                    }
                    Span_Text={" All PLATFORMS"}
                    Regular_Text={""}
                  />
                </div>
              </div>
              <div className=" flex flex-col  xl:max-w-[615px] gap-[32px]">
                {" "}
                <div className="  lg:justify-start sm:justify-center sm:gap-[16px]  sm:flex-col gap-[32px] ">
                  <p className="text-[#525252]  xl:leading-[150%] sm:leading-[28px]  sm:text-center lg:text-start text-[18px]  font-[Archivo] font-[400px] ">
                    Get to market 5x faster with a community full of Technology
                    Partners, MVPs, trainers, authors and developers with the
                    Original Universal Framework for Enterprise App Development
                  </p>
                </div>
                <div className="flex  z-10 lg:justify-start md:flex-row sm:flex-col sm:justify-center sm:gap-[16px] ">
                  <button className="bg-[#262626]  text-white  z-30  rounded-[12px] px-[28px] py-[14px]  hover:bg-[#262626]/90   border-1 border-black  transition duration-300 cursor-pointer font-[500] text-[18px]  leading-[28px] font-[Archivo] ">
                    Free Trial
                  </button>
                  <button className="rounded-[12px] border-[#262626]  z-30  md:w-auto  text-[#262626] border-1 px-[28px] py-[14px] transition duration-300  hover:bg-[#262626] hover:text-white cursor-pointer font-[500] text-[18px]  leading-[28px] font-[Archivo]">
                    Buy Now
                  </button>
                </div>
              </div>

              <div
                className={` z-10  xl:w-[750px] lg:w-[699px] flex lg-mt-[86px] md:mt-[64px] md:flex-row  sm:flex-col   xl:gap-[0px] lg:gap-[32px] sm:gap-[24px] sm:mt-[48px] sm:hidden md:hidden lg:flex xl:flex`}
              >
                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1
                    className={`text-black ${iBM_Plex_Mono.className} lg:text-start sm:text-center sm:text-[28px] Titlecase leading-[120%]  font-[600] `}
                  >
                    90
                  </h1>
                  <p className="text-[#374151] sm:text-center md:text-start font-[Archivo]  text-[16px] uppercase leading-[150%] font-[400] ">
                    Of the fortune 100
                  </p>
                </div>

                <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1 className="text-black sm:text-center lg:text-start font-[IBM_Plex_Mono] sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                    3M+
                  </h1>
                  <p className="text-[#374151] text-[16px] sm:text-center lg:text-start   font-[Archivo] uppercase leading-[150%] font-[400] ">
                    Developer community
                  </p>
                </div>

                <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1 className="text-black lg:text-start font-[IBM_Plex_Mono] sm:text-center   sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                    30+
                  </h1>
                  <p className="text-[#374151]  text-[16px] uppercase sm:text-center lg:text-start   leading-[150%] font-[400] ">
                    Years in the business
                  </p>
                </div>
              </div>

              <div
                className="
 absolute
  w-[440px]
  h-[440px]
  left-[-200px]
  top-[520px]
  bg-[#6366F1]/10
  border
  border-white
  [filter:blur(250px)]
  box-border
"
              ></div>
              <div
                className="
  absolute
  w-[440px]
  h-[440px]
  left-[-200px]
  top-[520px]
  bg-[#6366F1]/10
  border
  border-white
  [filter:blur(250px)]
  box-border
"
              ></div>

            
            </div>

            <div className=" relative flex md:justify-center sm:justify-center">
              <img
                src="/Assets/Tree.svg"
                alt="My Icon"
                className=" sm:mx-[16px]    z-0 md:mx-[0px] sm:w-[343px] sm:h-[285px] md:w-[516px] md:h-[430px] lg:w-[624px] lg:h-[520px] xl:w-[720px] xl:h-[600px]"
              />
              <Image
                src={"/Assets/LGBackBox.svg"}
                alt={""}
                width={536.64}
                height={605}
                className=" absolute  z-0 sm:hidden md:hidden xl:hidden lg:flex  lg:left-[300px]  lg:top-[100px] w-[536px] h-[605px]"
              />
              <Image
                src={"/Assets/XLBackBox.png"}
                alt={""}
                width={536.64}
                height={605}
                className=" absolute  z-0 sm:hidden md:hidden  lg: hidden  xl:flex  xl:left-[400px] xl:top-[100px]"
              />
            </div>

            <div
              className={`flex     md:max-w-[696px] mx-auto lg-mt-[86px] md:mt-[64px] md:flex-row md:justify-center sm:flex-col  sm:gap-[24px] sm:mt-[48px] xl:hidden lg:hidden md:flex  sm:flex `}
            >
              <div className=" flex  sm:flex-col gap-[12px]  ">
                <h1
                  className={`text-[#000000]  font-[IBM_PLEX_MONO] lg:text-start md:text-start sm:text-center sm:text-[28px] Titlecase leading-[120%]  font-[600] `}
                >
                  90
                </h1>
                <p className="text-[#374151] sm:text-center lg:text-start  font-[Archivo] text-[16px] uppercase leading-[150%] font-[400] ">
                  Of the fortune 100
                </p>
              </div>

              <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

              <div className=" flex  sm:flex-col gap-[12px] ">
                <h1
                  className={`text-black sm:text-center  md:text-start font-[IBM_PLEX_MONO] sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] `}
                >
                  3M+
                </h1>
                <p className="text-[#374151] text-[16px] sm:text-center  font-[Archivo]  uppercase leading-[150%] font-[400] ">
                  Developer community
                </p>
              </div>

              <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

              <div className=" flex  sm:flex-col gap-[12px] ">
                <h1
                  className={`text-black font-[IBM_PLEX_MONO] sm:text-center lg:text-start  md:text-start sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] `}
                >
                  30+
                </h1>
                <p className="text-[#374151]  text-[16px] uppercase sm:text-center  font-[Archivo]  leading-[150%] font-[400] ">
                  Years in the business
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mt-[121px] md:justify-center lg:justify-start md:mt-[98px] flex sm:flex-wrap sm:gap-[32px] sm:mt-[86px] ">
            <div className="flex justify-center w-full">
              <span className="text-[#525252] xl:text-[24px] text-center  lg:text-[24px] md:text-[20px] sm:text-center sm:text[20px] sm:font-[400]   leading-[150%]  font-[500]">
                The{" "}
                <span className="text-[#525252]  xl:text-[24px]  md:text-[20px] sm:text-center sm:text[20px] sm:font-[500]   leading-[150%]  font-[500]">
                  World’s Leading Companies
                </span>{" "}
                Rely on Software Built With Embarcadero Products
              </span>
            </div>
            <div className=" z-30 flex flex-wrap w-full justify-center xl:justify-center md:justify-center sm:justify-center sm:gap-[62.42px] xl:gap-[64px]">
              <Icons
                IconPath="/Assets/Airbnb.svg"
                className="sm:w-[74.67px]  sm:h-[40px] md:w-[106.67px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
              />
              <Icons
                IconPath="/Assets/Amazon.svg"
                className="sm:w-[64.17px]  sm:h-[40px] md:w-[91.67px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
              />
              <Icons
                IconPath="/Assets/Gitlab.svg"
                className="sm:w-[79.33px]  sm:h-[40px]  md:w-[113.33px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
              />
              <Icons
                IconPath="/Assets/Gitlab.svg"
                className="sm:w-[79.33px]  sm:h-[40px]  md:w-[113px]  md:h-[40px] lg:hidden  transition duration-300  hover:scale-120  cursor-pointer"
              />
              <Icons
                IconPath="/Assets/bruze.svg"
                className="sm:w-[53.67px]  sm:h-[28]  md:w-[76.67px]   md:h-[40px] lg:hidden xl:flex  transition duration-300  hover:scale-120  cursor-pointer"
              />
              <Icons
                IconPath="/Assets/Rippling.svg"
                className="sm:w-[99.17px]  sm:h-[40px] lg:w-[141.67px]  lg:h-[40px] md:hidden lg:flex  transition duration-300  hover:scale-120  cursor-pointer "
              />
              <Icons
                IconPath="/Assets/Atlassian.svg"
                className="sm:w-[103px]  sm:h-[40px]  md:w-[148.33px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
              />
              <Icons
                IconPath="/Assets/Google.svg"
                width={94}
                height={40}
                className="sm:w-[79.33px]  sm:h-[40px] md:w-[94.17px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
              />
              <Icons
                IconPath="/Assets/Automatic.svg"
                className="sm:w-[135.92px]  sm:h-[40px]  md:w-[194.17px]  md:h-[48px]  transition duration-300  hover:scale-120  cursor-pointer"
              />{" "}
              <Icons
                IconPath="/Assets/Sonos.svg"
                width={95}
                height={40}
                className="sm:w-[67.08px]  sm:h-[40px]  md:w-[95.83px]  md:h-[40px]  lg:hidden xl:flex transition duration-300  hover:scale-120  cursor-pointer"
              />
            </div>
          </div>
                  <div
            className="
  absolute
   min-w-[869px]
   max-h-[869px]
  min-h-[869px]
  left-[900px]
  top-[400px]
  bg-[#F43F5E]/10
  border
  border-white
  [filter:blur(250px)]
  box-border
"
          ></div>
                   <div
            className="
  absolute
   min-w-[869px]
   max-h-[869px]
  min-h-[869px]
  left-[900px]
  top-[400px]
  bg-[#F43F5E]/10
  border
  border-white
  [filter:blur(250px)]
  box-border
"
          ></div>
          
          {/* <div className="min-w-[765px] absolute z-0 top-[-156px] left-[-156px] max-w-[765px] rounded-[100%] blur-[500px] min-h-[765px] bg-[#3B82F6]"></div> */}

          <div
            className=" absolute
  w-[765px]
  h-[765px]
  left-[-155px]
  top-[-156px]
  bg-[#3B82F6]/10
  [filter:blur(250px)]
"
          ></div>

          <div
            className="
  absolute
  w-[432px]
  h-[432px]
  left-[-144px]
  top-[-156px]
  bg-[#DC2626]/10
  border
  border-white
  [filter:blur(250px)]
  box-border
"
          ></div>
        </div>
        <div className="  z-30 sm:px-[16px] lg:mt-[206px] xl:mt-[196px] ">
          {" "}
          <Multiple_Span_Heading
            Span_Text={" Over Three Million  "}
            IconPath={"/Assets/line.svg"}
            Text_1={"Trusted by"}
            Text_2={" Developers World Wide"}
            className={
              "  flex justify-center text-center xl:mt-[196px] md:mt-[96px] sm:mt-[80px] "
            }
            Icon_Class={
              " sm:hidden md:hidden lg:flex absolute  lg:top-4 lg:left-[-100px] xl:top-8 xl:left-[-92px]"
            }
          />
        </div>
        <div className=" flex relative  justify-center ">
          <Card />
          <div
            className="
  absolute
  w-[906px]
  h-[906px]
  left-[-279px]
  top-[240px]
   bg-[#06B6D4]/10
  border
  border-white
  [filter:blur(250px)]
 
  box-border
"
          ></div>
          <div
            className="
  absolute
  w-[644px]
  h-[644px]
  right-[-300px]
  top-[435px]
 
   bg-[#6366F1]/10
  border
  border-white
  [filter:blur(250px)]

  box-border
"
          ></div>
        </div>
        <div className="  ">
          <SmCard
            className={
              "  z-10 sm:mt-[40px] flex justify-center sm:flex md:flex lg:hidden xl:hidden"
            }
          />
        </div>
        <div className="  flex flex-col   sm:gap-[80px]  md:gap-[96px] xl:gap-[128px] xl:mt-[196px] lg:mt-[173px] md:mt-[129px]  sm:mt-[80px] ">
          <div className=" flex    relative flex-col  xl:gap-[80px] lg:gap-[105px] md:gap-[64px] sm:gap-[30px]">
            <Multiple_Span_Heading
              Span_Text={"Embarcadero Blog"}
              IconPath={"./Assets/Arrow.svg"}
              Text_1={"Learn More on the "}
              Text_2={""}
              className={" flex  relative text-center justify-center "}
              Icon_Class={
                " absolute lg:right-[-90px] lg:top-0 xl:right-[-100px] xl:top-5 sm:hidden md:hidden lg:flex"
              }
            />{" "}
            <div className="flex justify-center  relative ">
              <Sec3_Component />
              <div
                className="
  absolute
  w-[650px]
  h-[650px]
  right-[0px]
  top-[430px]
   bg-[#DC2626]/10
  [filter:blur(250px)]
  border
  border-white

  box-border
"
              ></div>
            </div>
          </div>

          <div className=" ">
            <Sec4_Component />
          </div>

          <div className="   flex flex-col relative mx-auto sm:gap-[40px] md:gap-[48px] xl:w-[816px] lg:w-[842px] md:w-[696px] sm:w-[343px] ">
            <Multiple_Span_Heading
              Icon_Class={
                "sm:hidden md:hidden lg:flex absolute lg:top-5 lg:left-[-120px] xl:top-8 xl:left-[-120px]"
              }
              className={"flex  relative justify-center sm:text-center"}
              Text_1={"Frequently Asked "}
              Span_Text={"Questions"}
              Text_2={""}
              IconPath={"/Assets/Vector.svg"}
            />
            <FAQItem />
            <div
              className="
            
  absolute
  w-[497px]
  h-[497px]
  left-[-700px]
  top-[-30px]
    bg-[#6366F1]/10
     [filter:blur(250px)]

  border
  border-white
  
  box-border
"
            ></div>
            <div
              className="
  absolute
  w-[731px]
  h-[731px]
   right-[-585px]
  top-[0px]
   [filter:blur(250px)]
   bg-[#06B6D4]/10
  border
  border-white

"
            ></div>
            <div
              className="
  absolute
  w-[678px]
  h-[678px]
  left-[-604px]
  top-[-425px]
   
[filter:blur(250px)]
  border
  border-white
 
  box-border
"
            ></div>
          </div>
          <div className="  relative flex justify-center">
            <Footer />
            <div
              className="
  absolute
  w-[497px]
  h-[497px]
  right-[85px]
bottom-[-375px]
[filter:blur(250px)]
  bg-[#6366F1]/10
  border
  border-white
  
  box-border
"
            ></div>
            <div
              className="
  absolute
  w-[731px]
  h-[731px]
  left-[-400px]
  top-[100px]
  [filter:blur(250px)]
  border
  border-white
  bg-[#06B6D4]/10
  
  box-border
"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
