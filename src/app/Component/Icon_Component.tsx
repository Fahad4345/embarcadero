import React from "react";
import Image from "next/image";

export default function Icons({
  className,
  IconPath,
  width,
  height,
}: {
  IconPath: string;
  className?: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      className={className}
      src={IconPath}
      alt="My Icon"
      width={width}
      height={height}
    />
  );
}
