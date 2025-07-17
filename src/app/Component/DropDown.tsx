"use client";
import { useState, useEffect, useRef } from "react";
import Icons from "./Icon_Component";

export default function Dropdown( {className}:{className?:string}) {
  const [is1Open, setIs1Open] = useState(false);
  const [is2Open, setIs2Open] = useState(false);
  const [is3Open, setIs3Open] = useState(false);

  const toggle1Dropdown = () => setIs1Open(!is1Open);
  const toggle2Dropdown = () => setIs2Open(!is2Open);
  const toggle3Dropdown = () => setIs3Open(!is3Open);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIs1Open(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`"flex gap-[24px] mt-[7px] ${className}`}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          onClick={toggle1Dropdown}
          className="text-[#262626] font-[400] gap-[4px] font-[Archivo] text-[14px] leading-[150%] flex  hover:scale-120 transition duration-300 cursor-pointer "
        >
          Products
          <Icons IconPath={"/Assets/DownArrow.svg"} width={16} height={16} />
        </button>

        {is1Open && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "10px",
              listStyle: "none",
              margin: 0,
            }}
          >
            <div className="w-[900px] p-[24px] flex " ref={menuRef}>
              <div>
                <div>
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Development Tools
                  </h1>
                  <div className=" gap-[8px]">
                    <div className="p-[16px] space-y-[8px]">
                      <h2 className="font-[600] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        RAD Studio
                      </h2>
                      <p className="font-[400] text-[16px] leading-[150%] font-[Archivo] text-[#262626]">
                        RAD Studio® is the ultimate IDE for building
                        multi-platform high-performance native applications in
                        Delphi® and modern C++ with powerful visual design tools
                        and integrated toolchains.
                      </p>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[600] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Delphi
                      </h2>
                      <p className="font-[400] text-[16px] leading-[150%] font-[Archivo] text-[#262626]">
                        Delphi® is the world most advanced integrated IDE for
                        rapidly developing native high-performance
                        multi-platform applications using powerful visual design
                        tools and features developers love.
                      </p>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[600] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        C++ Builder
                      </h2>
                      <p className="font-[400] text-[16px] leading-[150%] font-[Archivo] text-[#262626]">
                        C++Builder® is an advanced integrated IDE for modern
                        C++, with robust features empowering blazingly fast,
                        stunning responsive native applications for Windows and
                        iOS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="">
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Embedded SQL Database
                  </h1>

                  <div className="p-[16px] space-y-[8px]">
                    <h2 className="font-[600] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                      InterBase
                    </h2>
                    <p className="font-[400] text-[16px] leading-[150%] font-[Archivo] text-[#262626]">
                      Ultrafast, scalable, embeddable SQL database with
                      commercial-grade data security, disaster recovery and
                      change synchronization
                    </p>
                  </div>
                </div>
                <div className=" mt-[48px]">
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Restful MEAP Platform
                  </h1>

                  <div className="p-[16px] space-y-[8px]">
                    <h2 className="font-[600] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                      RAD Server
                    </h2>
                    <p className="font-[400] text-[16px] leading-[150%] font-[Archivo] text-[#262626]">
                      Turn-key application server that provides a robust out of
                      the box back-end platform on which to build and deploy
                      Delphi and C++Builder application services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          onClick={toggle2Dropdown}
          className="text-[#262626] font-[400]  gap-[4px] font-[Archivo] text-[14px] leading-[150%] flex hover:scale-120 transition duration-300 cursor-pointer "
          
        >
          Free Tools
          <Icons IconPath={"/Assets/DownArrow.svg"} width={16} height={16} />
        </button>

        {is2Open && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              listStyle: "none",
              margin: 0,
              padding: "5px 0",
            }}
          >
            <div className=" p-[24px]  rounded-[16px]  w-[350] gap-[32] flex ">
              <div>
                <div className=" gap-[24px]">
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Development Tools
                  </h1>
                  <div className=" gap-[12px]">
                    <div className="p-[16px] space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        C++ Compiler
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        C++ Builder Community Ed.
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Rest Debugger
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        InterBase Developer Edition
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        FMX Stencils
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Dev-C++
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        PyScripter
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        CPP Check
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Python Libraries
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>
      <button
        onClick={() => {}}
        className="text-[#262626] font-[400] font-[Archivo] text-[14px] leading-[150%] flex  hover:scale-120 transition duration-300 cursor-pointer"
        style={{
          cursor: "pointer",
        }}
      >
        Blogs
      </button>
      <div style={{ position: "relative", display: "inline-block" }}>
        <button
          onClick={toggle3Dropdown}
          className="text-[#262626] font-[400]  gap-[4px] font-[Archivo] text-[14px] leading-[150%] flex  hover:scale-120 transition duration-300 cursor-pointer"
          style={{
            cursor: "pointer",
          }}
        >
          Resources
          <Icons IconPath={"/Assets/DownArrow.svg"} width={16} height={16} />
        </button>

        {is3Open && (
          <ul
            style={{
              position: "absolute",
              top: "100%",
              left: -400,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              listStyle: "none",
              margin: 0,
            }}
          >
            <div className="flex p-[24px] gap-[24px] rounded-[16px] w-[1000px]">
              <div>
                <div className=" gap-[24px]">
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Learn
                  </h1>
                  <div className=" gap-[12px]">
                    <div className="p-[16px] space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Videos
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Blogs
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        White papers
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Solutions
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=" gap-[24px]">
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Engags
                  </h1>
                  <div className=" gap-[12px]">
                    <div className="p-[16px] space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Events
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Webinars
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Sucess Stories
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        For Educators
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=" gap-[24px]">
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Partners
                  </h1>
                  <div className=" gap-[12px]">
                    <div className="p-[16px] space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Partners
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        MVP Programs
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Web App Development
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Embarcadero Academy
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className=" gap-[24px]">
                  <h1 className="font-[600] text-[24px] leading-[150%] font-[Archivo] text-[#262626]">
                    Support
                  </h1>
                  <div className=" gap-[12px]">
                    <div className="p-[16px] space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Migration and Upgrade Center
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Product Documention
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Support
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        Previous Versions
                      </h2>
                    </div>
                    <div className="p-[16px]  space-y-[8px]">
                      <h2 className="font-[400] text-[20px] leading-[150%] font-[Archivo] text-[#262626]">
                        FAQs
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        )}
      </div>
      <button
        onClick={() => {}}
        className="text-[#262626] font-[400] font-[Archivo] text-[14px] leading-[150%] flex  hover:scale-120 transition duration-300 cursor-pointer"
       
      >
        Getit
      </button>
      <button
        onClick={() => {}}
        className="text-[#262626] font-[400] font-[Archivo] text-[14px] leading-[150%] flex  hover:scale-120 transition duration-300 cursor-pointer "
      
      >
        New Tools
      </button>
    </div>
  );
}
