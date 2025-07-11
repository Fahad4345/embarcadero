import Image from "next/image";
import Icons from "./Component/Icon_Component";
import Card from "./Component/Sec2_Component"
import Span_Heading from "./Component/Span_Heading";
import Multiple_Span_Heading from "./Component/Multiple _Span";
import Sec3_Component from "./Component/Sec3_Component";
import {Archivo,} from "next/font/google";
import Button from "./Component/Button";

import Sec4_Component from "./Component/Sec4_Component";
const archivo = Archivo({
  subsets:['latin']
});

export default function Home() {
  
  return (
    <html>
      <head></head>
      <body className= {archivo.className}>
        <div className=" MainTab bg-white ">
      <div className="Navtab , mx-w-[/1920px]">
        <div className="firsttab  flex-row  bg-black justify-between flex  pt-5 pr-7 pb-5 pl-7">
          <div className="  flex gap-1">
             
            <p className="text-[16px] leading-[150%] font-[Archivo] text-white font-[300px]">See what’s new in <span className="text-[16px]  leading-[150%] font-[Archivo] text-white font-[500px]">Delphi, C++ Builder, and RAD Studio Watch a Replay</span></p>
              <a href="" className="text-[16px]  leading-[150%]  text-white font-[500px] decoration-solid font-[Archivo] decoration-white">
              Watch the Replay
            </a>
          </div>
          <div className=" flex  justify-between gap-[32] ">
            <div className=" flex   gap-[32]">
              <a href="http://" className="text-white  font-[Archivo] text-[16px] leading-[150%] font-[500]">
                My Downloads
              </a>
              <a href="http://" className="text-white font-[Archivo] text-[16px] leading-[150%] font-[500]">
                UpgradeCenter
              </a>
              <a href="http://" className="text-white font-[Archivo] text-[16px] leading-[150%] font-[500]">
                MyCustomerPortal
              </a>
              <a href="http://" className="text-white font-[Archivo] text-[16px] leading-[150%] font-[500]">
                Contact Us
              </a>
            </div>
            <div className=" flex justify-between gap-[16px]">
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

        <div className="flex  justify-between  px-[196px] py-[16px] gap-[32] bg-white">
          <div className="gap-[8px]"><Image src="/Assets/logo.svg" alt="My Icon" width={400} height={24} /></div>
          
          <div className="flex  justify-center gap-[8px]">
            <Button className={"bg-transparent pt-[10px]  text-black  font-[Archivo]  font-[500] text-[14px] leading-[22px] "} Button_text={"Sign In"} />
           <Button className={"rounded-[10px] border-black font-[Archivo] text-black border-1 px-[20px] py-[8px] "} Button_text={"Buy Now"}/>
           <Button className={"bg-black  text-white font-[Archivo] rounded-[10px] px-[20px] py-[8px]"} Button_text={"Free Trial"}/>
           
           
          </div>
        </div>
      </div>
      <div className=" pl-[192px]">
        <div className="flex flex-wrap   ">



          <div className="  pt-[50px] ">
            <div className="  gap-[33px]">
               
               <div ><button>
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
                </button></div>
            
              <h1 className="text-[#262626] mt-[33px] uppercase text-[80px]  font-[Archivo] leading-[100%] Tracking-[-2px]   font-black ">
                ONE CODEBASE
              </h1>
             < Span_Heading className={"text-[80px]  uppercase  font-[Archivo] leading-[120%] Tracking-[-2px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] font-black"} Span_Text={" All PLATFORMS"} Regular_Text={""} />
            
            </div>
            <div className=" gap-[32px]">
              <div className="   w-[615px]">
               <p className="text-[#525252] text-[18px] leading-[150%] font-[Archivo] font-[400px] ">
                  Get to market 5x faster with a community full of Technology
                  Partners, MVPs, trainers, authors and developers with the
                  Original Universal Framework for Enterprise App Development
                </p>
              </div>
              <div className="flex  gap-[16px] mt-[24px]">
                <button className="bg-[#262626]  text-white  rounded-[12px] px-[28px] py-[14px] ">
                  Free Trial
                </button>
                <button className="rounded-[12px] border-[#262626] text-[#262626] border-1 px-[28px] py-[14px] ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>


          <div className=" ml-[70px] w-[720px] h-[600px]">
            <Image
              src="/Assets/Tree.svg"
              alt="My Icon"
              width={720}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
            
            />
          </div>
            <div className=" flex  gap-[34.5px] pt-12">
          <div >
            <h1 className="text-black font-[IBM_Plex_Mono] text-[30px] Titlecase leading-[120%]  font-[600] ">
              90
            </h1>
            <p className="text-[#374151]  text-[16px] uppercase leading-[150%] font-[400] ">
              Of the fortune 100
            </p>
          </div>
          <div className="w-[1px] bg-[#D1D5DB]"></div>
          <div>
            <h1 className="text-black font-[IBM_Plex_Mono] text-[30px] Titlecase leading-[120%]  font-[600] ">
              3M+
            </h1>
            <p className="text-[#374151] text-[16px]  uppercase leading-[150%] font-[400] ">
              Developer community
            </p>
          </div>
             <div className="w-[1px] bg-[#D1D5DB]"></div>
          <div >
            <h1 className="text-black font-[IBM_Plex_Mono]  text-[30px] Titlecase leading-[120%]  font-[600] ">
              30+
            </h1>
            <h1 className="text-[#374151] text-[16px] uppercase   leading-[150%] font-[400] ">
              Years in the business
            </h1>
          </div>
        </div>

        </div>

      
        <div className="py-[121px]">
         
          <div className="flex justify-center"><p className="text-[#525252] text-[24px] leading-[150%] font-[500]">
            The World’s Leading Companies Rely on Software Built With
            Embarcadero Products
          </p></div>
          <div className=" flex  gap-[64px] py-[32px]">
            <Icons
                 IconPath="/Assets/Airbnb.svg"
                 width={106}
                 height={40}
            
              
            />
             <Icons
                 IconPath="/Assets/Amazon.svg"
                 width={91}
                 height={40}
            
            
            />
             <Icons
                 IconPath="/Assets/Gitlab.svg"
            width={113}
                 height={40}
            />
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
             <Icons
                 IconPath="/Assets/Google.svg"
                 width={94}
                 height={40}
            
            />
             <Icons
                 IconPath="/Assets/Automatic.svg"
                 width={194}
                 height={40}
            
            />   <Icons
                 IconPath="/Assets/Sonos.svg"
            width={95}
                 height={40}
            />
               <Icons
                 IconPath="/Assets/bruze.svg"
                 width={76}
                 height={40}
            
            />
          
          
          </div>
        </div>
      </div>
    
        <Multiple_Span_Heading Span_Text={" Over Three Million Developers "} IconPath={"/Assets/line.svg"} Text_1={"Trusted by"} Text_2={"World Wide"} className={"  flex justify-center "} Icon_Class={"absolute left-75 top-324.5"}/>
        <Card/>
        
      
       < Multiple_Span_Heading Span_Text={"Embarcadero Blog"} IconPath={"./Assets/Arrow.svg"} Text_1={"Learn More on the "} Text_2={""} className={" flex justify-center"} Icon_Class={" absolute right-119 top-515"}/>
       
        <Sec3_Component/>
        <Sec4_Component/>
    </div>
  
      </body>
    </html>
    
   
  );
}
