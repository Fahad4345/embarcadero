import Icons from "../Component/Elements/Icon_Component";
import LoadingIcon from "../Component/Elements/SvgIcon";
import Card from "../Component/Cards/Radio_Card";
import Span_Heading from "../Component/Elements/Span_Heading";
import Multiple_Span_Heading from "../Component/Elements/Multiple _Span";
import Sec3_Component from "../Component/Cards/Info_Card";
import { Archivo } from "next/font/google";

import Sec4_Component from "../Component/Cards/Map_Card";

import Footer from "../Component/Cards/Footer";

import HeaderSec from "../Component/Cards/HeaderSec";
import NavBar from "../Component/Cards/NavBar";
import SmCard from "../Component/Cards/Info_card_small";
import FAQItem from "../Component/Cards/Question_Card";




const archivo = Archivo({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <html>
      <head></head>
      <body className={archivo.className}>
        <div
          className={` z-10 w-[100%]   MainTab bg-white  flex flex-col  justify-center`}
        >
          <div>
            <NavBar />
            <HeaderSec />
          </div>

          <div className=" z-10 lg:ml-[79px] lg:mt-[88px] sm:px-[16px] xl:ml-[192px] ">
            <div
              className="flex flex-wrap lg:flex-row lg:gap-[32px] sm:flex-col 
             lg:justify-start sm:justify-center md:flex-col md:justify-around xl:justify-center  "
            >
              <div className="flex xl:max-w-[792px] xl:gap-[24px] xl:mt-[50px] lg:justify-start lg:max-w-[624px] md:mt-[64px] md:gap-[32px] sm:flex-col sm:mt-[11px]  sm:gap-[32px] ">
                <div className="sm:items-center sm:justify-center lg:justify-start sm:flex gap-[8px]   ">
                  <button className=" flex  bg-[#F8FAFC]  text-center  hover:bg-black transition duration-300  rounded-[12px]    px-[12px] py-[10px] text-[#262626] text-[14px] leading-[150%] font-[Archivo] font-[500px] hover:text-white  hover:scale-120 cursor-pointer group]:">
                    <LoadingIcon className={""} />
                    RAD Studio 11.2 out now
                  </button>
                </div>

                <div className="sm:items-center lg:items-start  sm:justify-center sm:flex-col sm:gap-[16px] flex ">
                  {" "}
                  <p className="text-[#262626] mt-[33px] uppercase  xl:leading-[100%] xl:text-[80px] lg:text-[60px] lg:leading-[60px]  md:leading-[48px] md:text-[48px]  sm:text-[36px]   sm:leading-[40px]  font-[Archivo]    Tracking-[-2px]   font-black ">
                    ONE CODEBASE
                  </p>
                  <Span_Heading
                    className={
                      " flex uppercase text-[80px]  xl:leading-[120%] xl:text-[80px] lg:text-[60px] lg:leading-[60px] md:leading-[48px]  md:text-[48px] sm:text-[36px]   sm:leading-[40px]   font-[Archivo]   Tracking-[-2px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] font-black"
                    }
                    Span_Text={" All PLATFORMS"}
                    Regular_Text={""}
                  />
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
                  <button className="bg-[#262626]  text-white   rounded-[12px] px-[28px] py-[14px]  hover:bg-white hover:text-[black] hover:rounded-[10px] hover:scale-110  border-3  hover:border-black  transition duration-300 cursor-pointer ">
                    Free Trial
                  </button>
                  <button className="rounded-[12px] border-[#262626]   md:w-auto  text-[#262626] border-1 px-[28px] py-[14px] transition duration-300 hover:scale-110  hover:bg-[#262626]  hover:text-white cursor-pointer">
                    Buy Now
                  </button>
                </div>
                <div className=" flex lg-mt-[86px] md:mt-[64px] md:flex-row  sm:flex-col sm:justify-center sm:gap-[24px] sm:mt-[48px] sm:hidden md:hidden lg:flex xl:flex">
                  <div className=" flex  sm:flex-col gap-[4px] ">
                    <h1 className="text-black font-[IBM_Plex_Mono] lg:text-start sm:text-center sm:text-[28px] Titlecase leading-[120%]  font-[600] ">
                      90
                    </h1>
                    <p className="text-[#374151] sm:text-center  text-[16px] uppercase leading-[150%] font-[400] ">
                      Of the fortune 100
                    </p>
                  </div>

                  <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

                  <div className=" flex  sm:flex-col gap-[4px] ">
                    <h1 className="text-black sm:text-center lg:text-start font-[IBM_Plex_Mono] sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                      3M+
                    </h1>
                    <p className="text-[#374151] text-[16px] sm:text-center   uppercase leading-[150%] font-[400] ">
                      Developer community
                    </p>
                  </div>

                  <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

                  <div className=" flex  sm:flex-col gap-[4px] ">
                    <h1 className="text-black lg:text-start font-[IBM_Plex_Mono] sm:text-center  sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                      30+
                    </h1>
                    <p className="text-[#374151]  text-[16px] uppercase sm:text-center   leading-[150%] font-[400] ">
                      Years in the business
                    </p>
                  </div>
                </div>
              </div>

              <div className="   flex lg:mt-[96px] md:mt-[54px]  sm:mt-[33px]  md:justify-center sm:justify-center">
                <img
                  src="/Assets/Tree.svg"
                  alt="My Icon"
                  className=" sm:mx-[16px] sm:w-[343px] sm:h-[285px] md:w-[516px] md:h-[430px] lg:w-[624px] lg:h-[520px] xl:w-[720px] xl:h-[600px]"
                />
              </div>

              <div className=" flex md:max-w-[696px] mx-auto lg-mt-[86px] md:mt-[64px] md:flex-row md:justify-center sm:flex-col  sm:gap-[24px] sm:mt-[48px] xl:hidden lg:hidden md:flex  sm:flex ">
                <div className=" flex  sm:flex-col gap-[4px]  ">
                  <h1 className="text-black font-[IBM_Plex_Mono] lg:text-start md:text-start sm:text-center sm:text-[28px] Titlecase leading-[120%]  font-[600] ">
                    90
                  </h1>
                  <p className="text-[#374151] sm:text-center lg:text-start  text-[16px] uppercase leading-[150%] font-[400] ">
                    Of the fortune 100
                  </p>
                </div>

                <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1 className="text-black sm:text-center  md:text-start font-[IBM_Plex_Mono] sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                    3M+
                  </h1>
                  <p className="text-[#374151] text-[16px] sm:text-center   uppercase leading-[150%] font-[400] ">
                    Developer community
                  </p>
                </div>

                <div className="w-[1px] border-[1px] mx-auto bg-[#D1D5DB]"></div>

                <div className=" flex  sm:flex-col gap-[4px] ">
                  <h1 className="text-black font-[IBM_Plex_Mono] sm:text-center lg:text-start  md:text-start sm:text-[28px] xl:text-[30px] Titlecase leading-[120%]  font-[600] ">
                    30+
                  </h1>
                  <p className="text-[#374151]  text-[16px] uppercase sm:text-center   leading-[150%] font-[400] ">
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
              <div className=" flex flex-wrap w-full justify-center xl:justify-center md:justify-center sm:justify-center sm:gap-[62.42px] xl:gap-[64px]">
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
          </div>
          <div className=" sm:mx-[16px] lg:mt-[206px] xl:mt-[196px] ">
            {" "}
            <Multiple_Span_Heading
              Span_Text={" Over Three Million Developers "}
              IconPath={"/Assets/line.svg"}
              Text_1={"Trusted by"}
              Text_2={"World Wide"}
              className={
                "  flex relative  justify-center text-center xl:mt-[196px] md:mt-[96px] sm:mt-[80px] lg:gap-[41px]"
              }
              Icon_Class={
                " sm:hidden md:hidden lg:flex absolute  lg:top-4 lg:left-[-75px] xl:top-7 xl:left-[-75px]"
              }
            />
          </div>
          <Card />
          <SmCard className={" z-10 sm:flex md:flex lg:hidden xl:hidden"} />
          <div className=" flex flex-col sm:gap-[80px]  md:gap-[96px] xl:gap-[128px] xl:mt-[196px] lg:mt-[173px] md:mt-[129px]  sm:mt-[80px] ">
            <div className=" flex  flex-col justify-center md:gap-[64px] sm:gap-[30px]">
              <Multiple_Span_Heading
                Span_Text={"Embarcadero Blog"}
                IconPath={"./Assets/Arrow.svg"}
                Text_1={"Learn More on the "}
                Text_2={""}
                className={" flex  relative text-center justify-center "}
                Icon_Class={
                  " absolute lg:right-[-70px] lg:top-0 xl:right-[-70px] xl:top-5 sm:hidden md:hidden lg:flex"
                }
              />{" "}
              <div>
                <Sec3_Component />
              </div>
            </div>

            <div>
              {" "}
              <Sec4_Component />
            </div>
            <div className=" flex flex-col  mx-auto sm:gap-[64px] md:gap-[64px] ">
              <Multiple_Span_Heading
                Icon_Class={
                  "sm:hidden md:hidden lg:flex absolute lg:top-5 lg:left-[-120px] xl:top-7 xl:left-[-120px]"
                }
                className={"flex  relative justify-center"}
                Text_1={"Frequently Asked "}
                Span_Text={"Questions"}
                Text_2={""}
                IconPath={"/Assets/Vector.svg"}
                
              />
              <FAQItem />
            </div>
            <div className=" flex justify-center">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
