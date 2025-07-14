"use client";
import React from "react";
import Icons from "./Icon_Component";

export default function Sec5_Component() {
  return (
    <div className=" flex-col overflow-hidden w-[816px] space-y-[24px] mt-[80px] ml-[552px]">
      <div className=" flex   border-[#D4D4D4] border-[1px]  p-[24px] rounded-[16px] border-dashed  gap-[16px]">
        <input
          className=" text-[#525252]   font-[Archivo] text-[20px]  w-[816px] leading-[120%] Tracking-[-1px] font-[500]   "
          type="text"
          value="How can I get support / Unable to get support"
          onChange={() => {}}
        />{" "}
        <div className="">
          <Icons IconPath={"/Assets/Plus.svg"} width={20} height={20} />
        </div>
      </div>

      <div className=" flex   border-[#D4D4D4] border-[1px]  p-[24px] rounded-[16px] border-dashed  gap-[16px]">
        <input
          className=" text-[#525252]   font-[Archivo] text-[20px]  w-[816px] leading-[120%] Tracking-[-1px] font-[500]   "
          type="text"
          value="How can I renew my license"
          onChange={() => {}}
        />{" "}
        <div className="">
          <Icons IconPath={"/Assets/Plus.svg"} width={20} height={20} />
        </div>
      </div>

      <div className=" flex   border-[#D4D4D4] border-[1px]  p-[24px] rounded-[16px] border-dashed  gap-[16px]">
        <input
          className=" text-[#525252]   font-[Archivo] text-[20px]  w-[816px] leading-[120%] Tracking-[-1px] font-[500]   "
          type="text"
          value="How can I download/purchase a previous version"
          onChange={() => {}}
        />{" "}
        <div className="">
          <Icons IconPath={"/Assets/Plus.svg"} width={20} height={20} />
        </div>
      </div>

      <div className=" flex   border-[#D4D4D4] border-[1px]  p-[24px] rounded-[16px] border-dashed  gap-[16px]">
        <input
          className=" text-[#525252]   font-[Archivo] text-[20px]  w-[816px] leading-[120%] Tracking-[-1px] font-[500]   "
          type="text"
          value="How can I start building software applications"
          onChange={() => {}}
        />{" "}
        <div className="">
          <Icons IconPath={"/Assets/Plus.svg"} width={20} height={20} />
        </div>
      </div>

      <div className=" flex  z-50 border-[#D4D4D4] border-[1px]  p-[24px] rounded-[16px] border-dashed  gap-[16px]">
        <input
          className=" text-[#525252]   font-[Archivo] text-[20px]  w-[816px] leading-[120%] Tracking-[-1px] font-[500]   "
          type="text"
          value="Is Delphi dead?"
          onChange={() => {}}
        />{" "}
        <div>
          <Icons IconPath={"/Assets/Plus.svg"} width={20} height={20} />
        </div>
      </div>

      <Icons
        IconPath={"/Assets/line 6.svg"}
        className={"absolute  top-[4570px]  z-1 left-[1305px]"}
        width={125}
        height={87}
      />
    </div>
  );
}
