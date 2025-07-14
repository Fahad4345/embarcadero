import React from "react";

export default function Text({
  className,
  Text,
}: {
  className: string;
  Text: string;
}) {
  return <p className={className}>{Text}</p>;
}
