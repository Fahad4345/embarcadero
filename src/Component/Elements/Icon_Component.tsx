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
    <img src={IconPath} alt="" className={className} />

  );
}
