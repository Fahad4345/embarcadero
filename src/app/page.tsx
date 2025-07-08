import Image from "next/image";

export default function Home() {
  return (
    <div className=" MainTab bg-white ">
      <div className="Navtab , mx-w-[/1920px]">
        <div className="firsttab   bg-black justify-between flex  pt-5 pr-7 pb-5 pl-7">
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
                src="/icons/search.png"
                alt="My Icon"
                width={20}
                height={20}
              />
              <Image
                src="/icons/Cart.png"
                alt="My Icon"
                width={20}
                height={20}
              />
              <Image
                src="/icons/Globe.png"
                alt="My Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="secondtab flex  justify-between  px-[10] py-[10]">
          <Image
            src="/icons/logo.png"
            alt="My Icon"
            width={138.67}
            height={24}
          />
          <div className="flex  gap-8">
            <button className="bg-transparent  text-black  rounded  px-[10px] py-[10px] ">
              Sign In
            </button>
            <button className="rounded border-black text-black border-3 px-[10px] py-[10px]  ">
              Buy Now
            </button>
            <button className="bg-black  text-white  rounded px-[10px] py-[10px] ">
              {" "}
              Free Trial
            </button>
            <Image src="/icons/Menu.png" alt="My Icon" width={50} height={2} />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-3 px-[150px] ">
        <div className="  pt-[50px] gap-24">
          <div className="  gap-33">
            <button className="bg-white   rounded-[12px]   border-[1px] px-[12px] py-[10px] ">
              <div className="flex justify-start gap-5">
                <Image
                  src="/icons/loading.png"
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
        <div className=" py-[50]">
          <Image src="/icons/Tree.png" alt="My Icon" width={720} height={600} />
        </div>
      </div>
    </div>
  );
}
