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
        <Image
                  src={"/Assets/SmBackBox.svg"}
                  alt={""}
                  width={536.64}
                  height={605}
                  className="   absolute   md:hidden xl:hidden lg:hidden sm:flex  sm:left-[35px]  sm:top-[50px] w-[536px] h-[605px]"
        />
        <Image
                  src={"/Assets/MdBackBox.svg"}
                  alt={""}
                  width={536.64}
                  height={605}
                  className="  absolute   md:flex xl:hidden lg:hidden sm:hidden  sm:left-[265px]  sm:top-[60px] w-[536px] h-[605px]"
                />
      </div>
      <div className="   flex flex-col  ">
        {" "}
        <div className=" flex justify-center">
          <div className=" relative lg:ml-[79px] lg:mt-[88px] sm:px-[16px] lg:px-[0px] xl:ml-[192px] sm:mt-[11px] md:mt-[64px] flex flex-col   items-start max-w-[1750px]">
            <div
              className="flex flex-wrap lg:flex-row xl:gap-x-[63px]  lg:gap-x-[32px] md:gap-y-[54px] sm:gap-y-[33.63px] sm:flex-col 
             lg:justify-start sm:justify-center md:flex-col  xl:justify-start"
            >
              <div className="flex  relative xl:max-w-[752px] xl:gap-[24px] lg:gap-[16px] lg:justify-start lg:max-w-[624px]  md:gap-[32px] sm:flex-col   sm:gap-[32px] ">
                <div className="sm:items-center lg:items-start  sm:justify-center sm:flex-col sm:gap-[32px] lg:gap-[32px] flex ">
                  {" "}
                  <div className="  sm:items-center sm:justify-center lg:justify-start sm:flex gap-[8px]">
                    <button className=" flex  z-10  bg-[#F8FAFC]  border-[0.75px] border-[#E5E5E5] gap-[8px] text-center  hover:bg-[#262626] hover:opacity-[.90] transition duration-300  rounded-[12px]    px-[12px] py-[10px] text-[#262626] text-[14px] leading-[150%] font-[Archivo] font-[500px] hover:text-white  hover:scale-120 cursor-pointer  group]:">
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
                  <div className="flex   z-10 lg:justify-start md:flex-row sm:flex-col sm:justify-center sm:gap-[16px] ">
                    <button className="bg-[#262626]  text-white    rounded-[12px] px-[28px] py-[14px]  hover:bg-[#262626]/90   border-1 border-black  transition duration-300 cursor-pointer font-[500] text-[18px]  leading-[28px] font-[Archivo] ">
                      Free Trial
                    </button>
                    <button className=" z-10 rounded-[12px] border-[#262626]    md:w-auto  text-[#262626] border-1 px-[28px] py-[14px] transition duration-300  hover:bg-[#262626] hover:text-white cursor-pointer font-[500] text-[18px]  leading-[28px] font-[Archivo]">
                      Buy Now
                    </button>
                  </div>
                </div>

                <div
                  className={`   xl:w-[750px] lg:w-[699px] flex xl:mt-[81px] lg:mt-[129px] md:mt-[64px] md:flex-row  sm:flex-col   xl:gap-[0px] lg:gap-[32px] sm:gap-[24px] sm:mt-[48px] sm:hidden md:hidden lg:flex xl:flex`}
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

                <div className="absolute w-[440px] h-[440px] lg:left-[-138px] lg:top-[520px] md:left-[-150px] md:top-[650px] sm:left-[-368px] sm:top-[650px] bg-[#6366F1]/10 [filter:blur(250px)] border border-white box-border"></div>
                <div className="absolute w-[440px] h-[440px] lg:left-[-127px] lg:top-[520px] md:left-[-150px] md:top-[650px] sm:left-[-379px] sm:top-[650px] bg-[#6366F1]/10 [filter:blur(250px)] border border-white box-border"></div>
                <div className="absolute box-border w-[869px] h-[869px] md:left-[150px] md:top-[270px]   lg:hidden xl:hidden sm: hidden md:flex bg-[#F43F5E]/10 border border-white [filter:blur(250px)] "></div>
                <div className="absolute box-border w-[869px] h-[869px] md:left-[450px] md:top-[270px] sm:left-[205px] sm:top-[270px] lg:hidden xl:hidden sm:flex md: flex bg-[#E11D48]/10 border border-white [filter:blur(250px)]"></div>



                <div className="absolute box-border w-[869px] h-[869px] lg:left-[-665px] lg:top-[520px]  bg-[#3B82F6] opacity-10 border border-white blur-[250px] rounded-full "></div>
              </div>

              <div className=" relative flex md:justify-center sm:justify-center">
                <img
                  src="/Assets/Tree.svg"
                  alt="My Icon"
                  className=" sm:mx-[16px]     md:mx-[0px] sm:w-[343px] sm:h-[285px] md:w-[516px] md:h-[430px] lg:w-[624px] lg:h-[520px] xl:w-[720px] xl:h-[600px]"
                />
                
                <Image
                  src={"/Assets/LGBackBox.svg"}
                  alt={""}
                  width={536.64}
                  height={605}
                  className=" absolute   sm:hidden md:hidden xl:hidden lg:flex  lg:left-[300px]  lg:top-[100px] w-[536px] h-[605px]"
                />
                <Image
                  src={"/Assets/XLBackBox.png"}
                  alt={""}
                  width={536.64}
                  height={605}
                  className=" absolute   sm:hidden md:hidden  lg: hidden  xl:flex  xl:left-[400px] xl:top-[100px]"
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

                <div className=" w-[64px] border-[1px] h-[1px] mx-auto bg-[#D1D5DB]"></div>

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

                <div className="w-[64px]  h-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

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
              <div className="  flex flex-wrap  justify-start xl:justify-between md:justify-between sm:justify-between sm:gap-[62.42px] xl:gap-[64px]">
                <Icons
                  IconPath="/Assets/Airbnb.svg"
                  className="sm:w-[74.67px] z-10  sm:h-[40px] md:w-[106.67px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/Amazon.svg"
                  className="sm:w-[64.17px] z-10   sm:h-[40px] md:w-[91.67px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/Gitlab.svg"
                  className="sm:w-[79.33px] z-10  sm:h-[40px]  md:w-[113.33px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/Gitlab.svg"
                  className="sm:w-[79.33px] z-10  sm:h-[40px]  md:w-[113px]  md:h-[40px] lg:hidden  transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/bruze.svg"
                  className="sm:w-[53.67px] z-10  sm:h-[28]  md:w-[76.67px]   md:h-[40px] lg:hidden xl:flex  transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/Rippling.svg"
                  className="sm:w-[99.17px] z-10   sm:h-[40px] lg:w-[141.67px]  lg:h-[40px] md:hidden lg:flex  transition duration-300  hover:scale-120  cursor-pointer "
                />
                <Icons
                  IconPath="/Assets/Atlassian.svg"
                  className="sm:w-[103px] z-10  sm:h-[40px]  md:w-[148.33px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/Google.svg"
                 
                  className="sm:w-[79.33px] z-10  sm:h-[40px] md:w-[94.17px]  md:h-[40px]  transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/Automatic.svg"
                  className="sm:w-[135.92px] z-10  sm:h-[40px]  md:w-[194.17px]  md:h-[48px]  transition duration-300  hover:scale-120  cursor-pointer"
                />{" "}
                <Icons
                  IconPath="/Assets/Sonos.svg"
                
                  className="sm:w-[67.08px] z-10  sm:h-[40px]  md:w-[95.83px]  md:h-[40px]  lg:hidden xl:flex transition duration-300  hover:scale-120  cursor-pointer"
                />
                <Icons
                  IconPath="/Assets/Hotjar.svg"
               
                  className="sm:w-[65.92px] z-10  sm:h-[28px]  md:w-[94.17px]  md:h-[40px]  sm:flex md:flex lg:hidden xl:hidden transition duration-300  hover:scale-120  cursor-pointer"
                /><Icons
                  IconPath="/Assets/Squarespace.svg"
                
                  className="sm:w-[128.33px] z-10  sm:h-[28px]  md:w-[182.75px]  md:h-[26.45px]  sm:flex md:flex lg:hidden xl:hidden transition duration-300  hover:scale-120  cursor-pointer"
                /><Icons
                  IconPath="/Assets/Clearbit.svg"
                
                  className="sm:w-[87.5px] z-10  sm:h-[28px]  md:w-[125px]  md:h-[40px]   sm:flex md:flex lg:hidden xl:hidden transition duration-300  hover:scale-120  cursor-pointer"
                /><Icons
                  IconPath="/Assets/Contentfull.svg"
                  
                  className="sm:w-[95.08px] z-10  sm:h-[28px]  md:w-[135.83px]  md:h-[40px]  sm:flex md:flex lg:hidden xl:hidden transition duration-300  hover:scale-120  cursor-pointer"
                /><Icons
                  IconPath="/Assets/Insta.svg"
                
                  className="sm:w-[72.92px] z-10  sm:h-[28px]  md:w-[104.17px]  md:h-[40px]   sm:flex md:flex lg:hidden xl:hidden transition duration-300  hover:scale-120  cursor-pointer"
                />
              </div>
            </div>
            <div className="absolute min-w-[869px] max-h-[869px] min-h-[869px] lg:left-[1100px] lg:top-[350px] sm:right-[-590px] sm:top-[270px] bg-[#F43F5E]/10 border border-white [filter:blur(250px)] box-border sm:hidden md:hidden lg:flex"></div>
            <div className="absolute min-w-[869px] max-h-[869px] min-h-[869px] lg:left-[900px] lg:top-[350px] sm:right-[-590px] sm:top-[270px] bg-[#F43F5E]/10 [filter:blur(250px)] sm:hidden md:hidden lg:flex border border-white box-border"></div>
            <div className="absolute w-[765px] h-[765px] lg:left-[-155px] lg:top-[-156px] bg-[#3B82F6]/10 [filter:blur(250px)] sm:hidden md:hidden lg:flex"></div>
            <div className="absolute w-[432px] h-[432px] lg:left-[-144px] lg:top-[-156px] bg-[#DC2626]/10 border border-white [filter:blur(250px)] box-border sm:hidden md:hidden lg:flex"></div>







          </div>
        </div>

        <div className="   relative sm:px-[16px] lg:mt-[206px] xl:mt-[196px] md:mt-[96px] sm:mt-[80px] ">
          {" "}
          <Multiple_Span_Heading
            Span_Text={" Over Three Million  "}
            IconPath={"/Assets/Line.svg"}
            Text_1={"Trusted by"}
            Text_2={" Developers World Wide"}
            className={
              "  flex justify-center text-center   "
            }
            Icon_Class={
              " sm:hidden md:hidden lg:flex absolute  lg:top-4 lg:left-[-100px] xl:top-8 xl:left-[-92px]"
            }
          />
          <div className="absolute box-border w-[906px] h-[906px] lg:hidden xl:hidden sm:flex md:flex md:left-[-250px] md:top-[150px] sm:left-[-520px] sm:top-[-100px]  bg-cyan-500 opacity-10 border border-white [filter:blur(250px)]"></div>
        </div>
        <div className=" flex relative  mx-auto  justify-center ">
          <Card />
          <div className="absolute w-[906px] h-[906px] lg:left-[-279px] lg:top-[240px] bg-[#06B6D4]/10 border border-white [filter:blur(250px)] sm:hidden md:hidden lg:flex box-border"></div>
          <div className="absolute w-[644px] h-[644px] lg:right-[-300px] lg:top-[435px] bg-[#6366F1]/10 border border-white [filter:blur(250px)] sm:hidden md:hidden lg:flex box-border"></div>


        </div>
        <div className="  relative">
          <SmCard
            className={
              "   sm:mt-[40px] flex justify-center sm:flex md:flex lg:hidden xl:hidden"
            }
          />
          {/* eclipse17 */}
          <div className="absolute box-border w-[650px] h-[650px] md:right-[-500px] md:top-[860px] sm:right-[-450px] sm:top-[860px] lg:hidden xl:hidden sm:flex md:flex  bg-[#DC2626] opacity-10 border border-white blur-[250px] rounded-full "></div>
          {/* eclipse18 */}
          <div className="  absolute box-border w-[497px] h-[497px] md:left-[-145px] md:top-[2150px] sm:left-[-385px] sm:top-[1900px] lg:hidden xl:hidden sm:flex md:flex bg-[#6366F1] opacity-10 border border-white blur-[250px] rounded-full "></div>
          {/*eclipse19 */}
          <div className="absolute box-border w-[731px] h-[731px] lg:hidden xl:hidden sm:flex md:flex  md:left-[380px] md:top-[1950px] sm:left-[142px] sm:top-[1850px] bg-[#06B6D4] opacity-10 border border-white blur-[250px] rounded-full"></div>
          {/* eclipse20 */}
          <div className="box-border absolute w-[678px] h-[678px]  lg:hidden xl:hidden sm:flex md:flex md:left-[-52px] md:top-[1750px] sm:left-[-292px] sm:top-[1500px]bg-indigo-500 opacity-10 border border-white blur-[250px] rounded-full"></div>
          {/*  eclipse21 */}
          <div className="absolute box-border w-[497px] h-[497px] lg:hidden xl:hidden sm:flex md:flex  md:right-[-250px] md:top-[3150px] sm:right-[-330px] sm:top-[2900px] bg-[#6366F1] opacity-10 border border-white blur-[250px] rounded-full"></div>
          {/* eclipse22 */}
          <div className="absolute box-border w-[731px] h-[731px]  lg:hidden xl:hidden sm:flex md:flex  md:left-[-295px] md:top-[2880px] sm:left-[-535px] sm:top-[2650px] bg-[#06B6D4] opacity-10 border border-white blur-[250px] rounded-full"></div>
          {/* eclipse23 */}
          <div className="absolute box-border w-[650px] h-[650px]  md:right-[-330px] md:top-[3870px]  sm:right-[-460px] sm:top-[3630px]  lg:hidden xl:hidden sm:flex md:flex bg-[#DC2626] opacity-10 border border-white blur-[250px] rounded-full"></div>

          <div className="  absolute box-border w-[869px] h-[869px]  lg:hidden xl:hidden sm:flex md:flex  sm:left-[142px] sm:top-[5070px]  md:left-[382px] md:top-[4890px] bg-[#06B6D4]  opacity-10 border border-white blur-[250px] rounded-full "></div>
        </div>
        <div className="  flex flex-col  xl:mt-[196px] lg:mt-[173px] md:mt-[129px]  sm:mt-[80px] ">
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

            <div className="flex   z-30   justify-center  relative ">
              <div className=" flex "><Sec3_Component /></div>
              {/* eclipse24 */}
              <div className="box-border absolute w-[731px] h-[731px]   lg:hidden xl:hidden sm:flex md:flex  sm:left-[142px]  sm:top-[904px]  md:left-[382px]  md:top-[380px]bg-[#06B6D4] opacity-10 border border-white blur-[250px]"></div>
              {/* eclipse25 */}
              <div className="box-border absolute w-[497px] h-[497px] lg:hidden xl:hidden sm:flex md:flex md:left-[-145px] md:top-[520px] sm:left-[-385px] sm:top-[670px] bg-[#6366F1] opacity-10 border border-white blur-[250px]"></div>
              {/* eclipse26 */}
              <div className="box-border absolute w-[869px] h-[869px]  lg:hidden xl:hidden sm:flex md:flex  md:left-[-243px] md:top-[-750px] sm:left-[-483px] sm:top-[-630px] bg-rose-600 opacity-10 border border-white blur-[250px]"></div>
                
              <div className="  box-border absolute w-[650px] h-[650px]  md:hidden sm:hidden xl:flex lg:flex lg:left-[1280px] lg:top-[300px] bg-[#DC2626]/10 border border-white [filter:blur(250px)]"></div>

            </div>
          </div>
          <div className=" flex justify-center z-50 lg:bg-white  relative xl:mt-[128px] lg:mt-[132px] md:mt-[64px] sm:mt-[48px]">
            <Sec4_Component />
            {/* eclipse27 */}
         
           

          </div>

          <div className="   flex flex-col relative mx-auto sm:gap-[40px] md:gap-[48px] lg:gap-[80px] md:mt-[96px] sm:mt-[80px] lg:mt-[128px] xl:w-[816px] lg:w-[842px] md:w-[696px] sm:w-[343px] ">
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
            {/*eclipse28 */}
            <div className="box-border absolute w-[869px] h-[869px] lg:hidden xl:hidden sm:flex md:flex  sm:left-[-483px] sm:top-[-450px]  md:left-[-243px] md:top-[-280px] bg-rose-600 opacity-10 border border-white blur-[250px]"></div>

            <div className="absolute w-[497px] h-[497px] lg:left-[-700px] lg:top-[-30px] bg-[#6366F1]/10 [filter:blur(250px)] sm:hidden md:hidden lg:flex border border-white box-border"></div>

            <div className="absolute w-[731px] h-[731px] lg:right-[-585px] lg:top-[0px] [filter:blur(250px)] bg-[#06B6D4]/10 border border-white sm:hidden md:hidden lg:flex"></div>


            <div className="z-0 absolute w-[678px] h-[678px] lg:left-[-604px] lg:top-[-425px] bg-[#666F1]/10 sm:hidden md:hidden lg:flex [filter:blur(250px)] border border-white box-border"></div>


          </div>
          <div className=" flex   justify-center bg-white  relative  xl:mt-[128px] lg:mt-[133px] md:mt-[96px] sm:mt-[80px] lg:px-[80px] lg:py-[48px] sm:px-[16px] ">
            <div className="    relative flex justify-center items-center">
              <Footer />
              {/* eclipse29 */}
              <div className="-z-10 box-border absolute w-[906px] h-[906px] sm:left-[-520px] sm:top-[-220px] md:left-[-280px] md:top-[90px] bg-cyan-500 opacity-10 border border-white blur-[250px]"></div>

              <div className=" absolute w-[497px] h-[497px] lg:right-[85px] lg:bottom-[-375px] [filter:blur(250px)] bg-[#6366F1]/10 border border-white sm:hidden md:hidden lg:flex box-border"></div>

              <div className="-z-10 absolute w-[731px] h-[731px] lg:left-[-400px] lg:top-[-100px] [filter:blur(250px)] border border-white bg-[#06B6D4]/40 sm:hidden md:hidden lg:flex box-border "></div>
              {" "}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
