import React from "react";
import Image from "next/image";


export default function Innercard({
  text,
  Head_span,
  Head_version,
  button1text,
  button2text,
  IconPath,
  ImagePath,
  
}: {
  text: string;
  Head_span: string;
  Head_version:string;
  button1text: string;
  button2text: string;
  IconPath: string;
  ImagePath: string;

}) {
  return (
    <div  className=" flex  ml-[128px] items-center">
      <div className="    "><Image src={IconPath} alt="My Icon" width={48} height={48} />
      <div className="flex mt-[12px] justify-start  gap-3">
        
        <p className="text-[#262626] text-[36px] leading-[150%] font-[Archivo] font-bold">{Head_span}</p>
        <p className="text-[#262626] font-[300]   text-[36px] font-[Archivo] leading-[150%]">{Head_version}</p>
      </div>
      <div className="  mt-[12px]">
        <div className="  w-[490px] justify-start">
          <p className="text-[#525252] text-[20px] leading-[150%] font-[400]  ">
            {text}
          </p>
        </div>
        <div className="flex mt-[32px] gap-3">
          <button className="bg-[#262626]  text-[16px] text-white leading-[24px] rounded-[10px] font-[Archivo] px-[24px] py-[10px]  font-[500px]">
            {button1text}
          </button>
          <button className="rounded-[10px]  text-[16px] border-[#262626] text-[#262626] border-3 leading-[24px] font-[Archivo] px-[24px] py-[10px]  font-[500px] ">
            {button2text}
          </button>
        </div>
      </div></div>
      
       <div className=" ml-[124px]"> <Image src={ImagePath} alt="My Icon" width={720} height={600}    /></div>
    </div>
  );
}
