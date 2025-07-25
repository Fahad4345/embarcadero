import React from "react";
import Icons from "./Icon_Component";

export default function Multiple_Span_Heading({
  Icon_Class,
  className,
  Text_1,
  Span_Text,
  Text_2,
  IconPath,
}: {
  Icon_Class: string;
  className: string;
  Text_1: string;
  Span_Text: string;
  Text_2: string;
  IconPath: string;
}) {
  return (
    <h1 className={className}>
    
     
     <span className=" relative  text-[#262626] xl:text-[48px] xl:font-[600]  xl:leading-[180%]  xl:tracking-[-1px]  max-lg:text-[48px] max-lg:font-[600]  max-lg:leading-[120%]  max-lg:tracking-[-1px] max-md:text-[36px] text-center max-md:font-[600]  max-md:leading-[140%]  max-md:tracking-[-1px]  max-sm:text-center max-sm:text-[30px] max-sm:font-[600]  max-sm:leading-[140%]  max-sm:tracking-[-1px]">
        {Text_1}{" "}
        <span className=" xl:text-[48px] xl:font-[600]  xl:leading-[180%]  xl:tracking-[-1px]  max-lg:text-[48px] max-lg:font-[600]  max-lg:leading-[120%]  max-lg:tracking-[-1px] max-md:text-[36px] text-center max-md:font-[600]  max-md:leading-[140%]  max-md:tracking-[-1px]  max-sm:text-center max-sm:text-[30px] max-sm:font-[600]  max-sm:leading-[140%]  max-sm:tracking-[-1px] bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]">
          {Span_Text}
        </span>{" "}
        <span className="text-black">{Text_2}</span>   
        <div><Icons
        IconPath={IconPath}
        className={Icon_Class}
        width={62}
        height={144}
       
      /></div>
      </span>
     </h1>

  );
}
