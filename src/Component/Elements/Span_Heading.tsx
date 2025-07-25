import React from "react";

export default function Span_Heading({
  className,
  Span_Text,
  Regular_Text,
}: {
  className: string;
  Span_Text: string;
  Regular_Text: string;
}) {
  return (
    <h1 className={` ${className}`}>
      <span className="">{Regular_Text}</span> <br className=" sm:hidden  md:hidden lg:hidden xl:flex" />
      <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]">
        {Span_Text}
      </span>
    </h1>
  );
}
