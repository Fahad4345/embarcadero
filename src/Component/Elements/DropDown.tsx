


"use client";
import { useState, useEffect, useRef } from "react";
import Icons from "./Icon_Component";

export default function Dropdown({ className }: { className?: string }) {
  const [is1Open, setIs1Open] = useState(false);
  const [is2Open, setIs2Open] = useState(false);
  const [is3Open, setIs3Open] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIs1Open(false);
        setIs2Open(false);
        setIs3Open(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flex gap-[24px] mt-[7px] ${className}`} ref={menuRef}>
 
      <div
        className="relative z-50 inline-block"
        onMouseEnter={() => setIs1Open(true)}
        onMouseLeave={() => setIs1Open(false)}
      >
        <button className="text-[#262626] font-[400] gap-[4px] font-[Archivo] text-[14px] leading-[150%] flex cursor-pointer">
          Products
          { is1Open ?(<Icons IconPath={"/Assets/Uparrow.svg"} width={16} height={16} />):(<Icons IconPath={"/Assets/Uparrow.svg"} width={16} height={16}  className="rotate-180"/>)}
         
        </button>

        <div
          className={`
            absolute left-0  w-[900px] p-[24px] flex bg-white rounded-[10px] shadow transition-all duration-300 ease-in-out
            ${is1Open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
          <div>
            <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
              Development Tools
            </h1>
            <div className="gap-[8px]">
              <div className="p-[16px] space-y-[8px]">
                <h2 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[20px]">RAD Studio</h2>
                <p className="font-[400] text-[#262626] font-[Archivo] cursor-pointer text-[16px]">
RAD Studio® is the ultimate IDE for building multi-platform high-performance native applications in Delphi® and modern C++ with powerful visual design tools and integrated toolchains.
                </p>
              </div>
              <div className="p-[16px] space-y-[8px]">
                <h2 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[20px]">Delphi</h2>
                <p className="font-[400] text-[#262626] font-[Archivo] cursor-pointer text-[16px]">
                  Delphi  is the world s most advanced integrated IDE for rapidly developing native high-performance multi-platform applications using powerful visual design tools and features developers love.
             </p>
              </div>
              <div className="p-[16px] space-y-[8px]">
                <h2 className="font-[600]  text-[#262626] font-[Archivo] cursor-pointer text-[20px]">C++ Builder</h2>
                <p className="font-[400]  text-[#262626] font-[Archivo] cursor-pointer text-[16px]">
                 C++Builder  is an advanced integrated IDE for modern C++, with robust features empowering blazingly fast, stunning responsive native applications for Windows and iOS.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[24px]">Embedded SQL Database</h1>
            <div className="p-[16px] space-y-[8px]">
              <h2 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[20px]">InterBase</h2>
              <p className="font-[400] text-[#262626] font-[Archivo] cursor-pointer text-[16px]">
              Ultrafast, scalable, embeddable SQL database with commercial-grade data security, disaster recovery and change synchronization
              </p>
            </div>

            <h1 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[24px] mt-[48px]">Restful MEAP Platform</h1>
            <div className="p-[16px] space-y-[8px]">
              <h2 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[20px]">RAD Server</h2>
              <p className="font-[400] text-[#262626] font-[Archivo] cursor-pointer text-[16px]">
             Turn-key application server that provides a robust  out of the box  back-end platform on which to build and deploy Delphi and C++Builder application services.
              </p>
            </div>
          </div>
        </div>
      </div>

   
      <div
        className="relative z-50 inline-block"
        onMouseEnter={() => setIs2Open(true)}
        onMouseLeave={() => setIs2Open(false)}
      >
        <button className="text-[#262626] font-[400] gap-[4px] font-[Archivo] text-[14px] leading-[150%] flex cursor-pointer">
          Free Tools
          { is2Open ?(<Icons IconPath={"/Assets/Uparrow.svg"} width={16} height={16} />):(<Icons IconPath={"/Assets/Uparrow.svg"} width={16} height={16}  className="rotate-180"/>)}
        </button>

        <div
          className={`
            absolute left-0  w-[350px] p-[24px] rounded-[16px] gap-[24px] bg-white shadow transition-all duration-300 ease-in-out
            ${is2Open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
          <h1 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[24px]">Development Tools</h1>
          <div className=" gap-[12px]">
            {[
              "C++ Compiler",
              "C++ Builder Community Ed.",
              "Rest Debugger",
              "InterBase Developer Edition",
              "FMX Stencils",
              "Dev-C++",
              "PyScripter",
              "CPP Check",
              "Python Libraries",
            ].map((tool) => (
              <div key={tool} className="px-[16px] py-[12px] ">
                <h2 className="font-[400] text-[#262626] font-[Archivo] cursor-pointer text-[20px]">{tool}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

 
      <button className="text-[#262626] font-[400] font-[Archivo] text-[14px] leading-[150%] flex cursor-pointer">
        Blogs
      </button>

      <div
        className="relative z-50 inline-block"
        onMouseEnter={() => setIs3Open(true)}
        onMouseLeave={() => setIs3Open(false)}
      >
        <button className="text-[#262626] font-[400] gap-[4px] font-[Archivo] text-[14px] leading-[150%] flex cursor-pointer">
          Resources
           { is3Open ?(<Icons IconPath={"/Assets/Uparrow.svg"} width={16} height={16} />):(<Icons IconPath={"/Assets/Uparrow.svg"} width={16} height={16}  className="rotate-180"/>)}
        </button>

        <div
          className={`
            absolute left-[-400px]  w-[1000px] p-[24px] flex gap-[32px] rounded-[16px] bg-white shadow transition-all duration-300 ease-in-out
            ${is3Open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
          `}
        >
      
          {[
            {
              title: "Learn",
              items: ["Videos", "Blogs", "White papers", "Solutions"],
            },
            {
              title: "Engage",
              items: ["Events", "Webinars", "Success Stories", "For Educators"],
            },
            {
              title: "Partners",
              items: ["Partners", "MVP Programs", "Web App Development", "Embarcadero Academy"],
            },
            {
              title: "Support",
              items: ["Migration and Upgrade Center", "Product Documentation", "Support", "Previous Versions", "FAQs"],
            },
          ].map((col) => (
            <div key={col.title} className=" gap-[24px]">
              <h1 className="font-[600] text-[#262626] font-[Archivo] cursor-pointer text-[24px]">{col.title}</h1>
              <div className="gap-[12px]">
                {col.items.map((item) => (
                  <div key={item} className="px-[16px] py-[12px]">
                    <h2 className="font-[400] text-[#262626] font-[Archivo] cursor-pointer text-[20px]">{item}</h2>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="text-[#262626] font-[400] font-[Archivo] text-[14px] leading-[150%] flex cursor-pointer">
        Getit
      </button>
      <button className="text-[#262626] font-[400] font-[Archivo] text-[14px] leading-[150%] flex cursor-pointer">
        New Tools
      </button>
    </div>
  );
}
