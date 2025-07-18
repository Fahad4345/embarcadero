import React from "react";
import Icons from "../Elements/Icon_Component";

export default function Button({
  className,
  IconClass,
  Button_text,
  IconPath,
}: {
  className: string;
  Button_text: string;
  IconPath?: string;
  IconClass?: string;
}) {
  return (
   
      <button className={className}>
        {Button_text}
        {IconPath == null ? (
          <div></div>
        ) : (
          <Icons className={IconClass} IconPath={IconPath ?? ""} width={28} height={28} />
        )}
      </button>
 
  );
}
