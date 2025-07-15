import React from "react";


export default function Icons({
  className,
  IconPath,
  
}: {
  IconPath: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <img src={IconPath} alt=""  className={className}/>
    // <Image
    //   className={className}
    //   src={IconPath}
    //   alt="My Icon"
    //   width={width}
    //   height={height}
    // />
  );
}
