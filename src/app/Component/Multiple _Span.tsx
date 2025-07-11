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
  Icon_Class:string
  className: string;
  Text_1: string;
  Span_Text: string;
  Text_2: string;
  IconPath: string;
}) {
 return (
    <div className={className} >
      <Icons IconPath={IconPath}  className={Icon_Class} width={62} height={144}   />   
    <h1 className='  text-[48px] font-[600]  leading-[180%]  tracking-[-1px]'><span className='text-black'>{Text_1}</span><span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]'>{Span_Text}</span> <span className="text-black">{Text_2}</span></h1>
        
    </div>
  )
}
