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
    <div className={className}>
      <Icons
        IconPath={IconPath}
        className={Icon_Class}
        width={62}
        height={144}
      />
      <h1 className="  xl:text-[48px] xl:font-[600]  xl:leading-[180%]  xl:tracking-[-1px] md:text-[36px] text-center md:font-[600]  md:leading-[180%]  md:tracking-[-1px]  sm:text-center sm:text-[30px] sm:font-[600]  sm:leading-[140%]  sm:tracking-[-1px]">
        <span className="text-black">{Text_1}</span>
        <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]">
          {Span_Text}
        </span>{" "}
        <span className="text-black">{Text_2}</span>
      </h1>
    </div>
  );
}
