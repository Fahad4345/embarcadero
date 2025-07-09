import Image from "next/image";
import Icons from "./component/Icon";
import Card from "./component/Card"

export default function Home() {
  return (
    <div className=" MainTab bg-white ">
      <div className="Navtab , mx-w-[/1920px]">
        <div className="firsttab  flex-row  bg-black justify-between flex  pt-5 pr-7 pb-5 pl-7">
          <div className="  flex gap-5">
            <p className="text-[16px] leading-[150%] text-white font-[300px]">
              See what’s new in Delphi, C++ Builder, and RAD Studio
            </p>
            <a href="" className="text-white text-sm">
              Watch the Replay
            </a>
          </div>
          <div className=" flex  justify-between gap-5">
            <div className=" flex   gap-5">
              <a href="http://" className="text-white text-sm">
                My Downloads
              </a>
              <a href="http://" className="text-white text-sm">
                UpgradeCenter
              </a>
              <a href="http://" className="text-white text-sm">
                MyCustomerPortal
              </a>
              <a href="http://" className="text-white text-sm">
                Contact Us
              </a>
            </div>
            <div className=" flex justify-between gap-5">
              <Image
                src="/icons/search.svg"
                alt="My Icon"
                width={20}
                height={20}
              />
              <Image
                src="/icons/Cart.svg"
                alt="My Icon"
                width={20}
                height={20}
              />
              <Image
                src="/icons/Globe.svg"
                alt="My Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="secondtab flex  justify-between  px-[10] py-[10]">
          <Image src="/icons/logo.svg" alt="My Icon" width={400} height={24} />
          <div className="flex  gap-8">
            <button className="bg-transparent  text-black  rounded  px-[10px] py-[10px] ">
              Sign In
            </button>
            <button className="rounded border-black text-black border-3 px-[10px] py-[10px]  ">
              Buy Now
            </button>
            <button className="bg-black  text-white  rounded px-[10px] py-[10px] ">
              Free Trial
            </button>
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
                    src="/icons/loading.svg"
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
              src="/icons/Tree.svg"
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
                 path="/icons/Airbnb.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 path="/icons/Amazon.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 path="/icons/Gitlab.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 path="/icons/Rippling.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 path="/icons/Atlassian.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 path="/icons/Google.svg"
            
              width={141}
              height={40}
            />
             <Icons
                 path="/icons/Automatic.svg"
            
              width={141}
              height={40}
            />   <Icons
                 path="/icons/Sonos.svg"
            
              width={141}
              height={40}
            />
               <Icons
                 path="/icons/bruze.svg"
            
              width={141}
              height={40}
            />
          
          
          </div>
        </div>
      </div>
       <div className="flex justify-center">
        <Icons
                 path="/icons/line.svg"
            
              width={62}
              height={144}
            />
        
        <p className="text-black text-[22px] leading-[120%] font-[600]">Trusted by Over Three Million Developers World Wide</p>
       </div>
       <div>
        <Card/>
        
       </div>
    </div>
  );
}
