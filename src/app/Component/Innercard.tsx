import React from "react";
import Image from "next/image";

export default function innercard({
  text,
  head,
  button1text,
  button2text,
  IconPath,
  ImagePath,
}: {
  text: string;
  head: string;
  button1text: string;
  button2text: string;
  IconPath: string;
  ImagePath: string;
}) {
  return (
    <div className=" flex gap-24">
      <div className=" flex-col    "><Image src={IconPath} alt="My Icon" width={48} height={48} />
      <div className="flex justify-start ">
        <p className="text-black text-[20px] leading-[150%] font-[600]">{head}</p>
      </div>
      <div className="  pt-[20px]">
        <div className="  justify-start">
          <p className="text-black text-[18px] leading-[150%] font-[400]  ">
            {text}
          </p>
        </div>
        <div className="flex pt-[9] gap-2">
          <button className="bg-black  text-white  rounded-[10px] px-[10px] py-[10px] ">
            {button1text}
          </button>
          <button className="rounded-[10px] border-black text-black border-3 px-[10px] py-[10px] ">
            {button2text}
          </button>
        </div>
      </div></div>
      
       <div className=""> <Image src={ImagePath} alt="My Icon" width={720} height={600} className=" w-[720px] "    /></div>
    </div>
  );
}
