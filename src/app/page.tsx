import Image from "next/image";
import Icons from "./component/Icon_Component";
import Card from "./component/Sec2_Component"
import Span_Heading from "./component/Span_Heading";
import Sec3_Component from "./component/Sec3_Component";
import {Archivo} from "next/font/google";
import Button from "./component/Button";
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
          
          <div className="flex  gap-[8px]">
            <Button className={"bg-transparent  text-black  rounded font-[500] text-[14px] leading-[22px] "} Button_text={"Sign In"} />
           <Button className={"rounded border-black text-black border-3 px-[20px] py-[8px] "} Button_text={"Buy Now"}/>
           <Button className={"bg-black  text-white  rounded px-[20px] py-[8px]"} Button_text={"Free Trial"}/>
           
           
          </div>
        </div>
      </div>
      <div className="gap-y-32 px-[150px]">
        <div className="flex flex-row   ">
          <div className="  pt-[50px] gap-24">
            <div className="  gap-33">
              <button className="bg-white   rounded-[12px]   border-[1px] px-[12px] py-[10px] ">
                <div className="flex justify-start gap-5">
                  <Image
                    src="/Assets/loading.svg"
                    alt="My Icon"
                    width={24}
                    height={24}
                  />
                  <p className="text-black text-sm  font-[500]">
                    RAD Studio 11.2 out now
                  </p>
                </div>
              </button>
              <h1 className="text-black text-[80px] leading-[100%] Tracking-[-2px]">
                ONE CODEBASE
              </h1>
              <h1 className="text-black text-[80px] leading-[100%] Tracking-[-2px]">
                All PLATFORM
              </h1>
            </div>
            <div className="  pt-[33px]">
              <div className="  justify-start w-[600px]">
                <p className="text-black text-[18px] leading-[150%] font-[400] ">
                  Get to market 5x faster with a community full of Technology
                  Partners, MVPs, trainers, authors and developers with the
                  Original Universal Framework for Enterprise App Development
                </p>
              </div>
              <div className="flex pt-[9] gap-2">
                <button className="bg-black  text-white  rounded px-[10px] py-[10px] ">
                  Free Trial
                </button>
                <button className="rounded border-black text-black border-3 px-[10px] py-[10px] ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className=" w-[720px] h-[600px] py-[10px]">
            <Image
              src="/Assets/Tree.svg"
              alt="My Icon"
              width={720}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
            
            />
          </div>
        </div>

        <div className=" flex gap-9 pt-12">
          <div>
            <h1 className="text-black text-[18px] leading-[150%] font-[400] ">
              90
            </h1>
            <p className="text-black text-[18px] leading-[150%] font-[400] ">
              Of the fortune 100
            </p>
          </div>
          <div>
            <h1 className="text-black text-[18px] leading-[150%] font-[400] ">
              3M+
            </h1>
            <p className="text-black text-[18px] leading-[150%] font-[400] ">
              Developer community
            </p>
          </div>
          <div>
            <h1 className="text-black text-[18px] leading-[150%] font-[400] ">
              30+
            </h1>
            <p className="text-black text-[18px] leading-[150%] font-[400] ">
              Years in the business
            </p>
          </div>
        </div>

        <div className="py-[70px]">
          <div className="flex justify-center"><p className="text-black text-[18px] leading-[150%] font-[400] ">
            The World’s Leading Companies Rely on Software Built With
            Embarcadero Products
          </p></div>
          <div className=" flex gap-10 py-[30px]">
            <Icons
                 IconPath="/Assets/Airbnb.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 IconPath="/Assets/Amazon.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 IconPath="/Assets/Gitlab.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 IconPath="/Assets/Rippling.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 IconPath="/Assets/Atlassian.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 IconPath="/Assets/Google.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 IconPath="/Assets/Automatic.svg"
            
              width={141}
              height={40}
            />   <Icons
                 IconPath="/Assets/Sonos.svg"
            
              width={141}
              height={40}
            />
               <Icons
                 IconPath="/Assets/bruze.svg"
            
              width={141}
              height={40}
            />
          
          
          </div>
        </div>
      </div>
    
        <Span_Heading Span_Text={" Over Three Million Developers "} IconPath={"/Assets/line.svg"} Text_1={"Trusted by"} Text_2={"World Wide"} className={" flex justify-center gap-5"}/>
        <Card/>
        
      
       <Span_Heading Span_Text={"Embarcadero Blog"} IconPath={"./Assets/Arrow.svg"} Text_1={"Learn More on the "} Text_2={""} className={" flex justify-center  gap-5"}/>
       
        <Sec3_Component/>
    </div>
  
      </body>
    </html>
    
   
  );
}
