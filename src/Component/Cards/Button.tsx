import React from "react";
import Icons from "../Elements/Icon_Component";

export default function Button({
  className,

  Button_text,
  IconPath,
}: {
  className: string;
  Button_text: string;
  IconPath?: string;
  IconClass?: string;
}) {
  return (
   
      
     <div className="group  transition duration-300 cursor-pointer">
            <button className={className}>
        {Button_text}
        {IconPath == null ? (
          <div></div>
        ) : (
            <Icons className={`{IconClass}  duration-300 group-hover:translate-x-4`} IconPath={IconPath ?? ""} width={28} height={28} />
        )}
    </button>
            <span className="block max-w-0 group-hover:max-w-[125px] transition-all duration-500 h-0.5 bg-black"></span>
          </div>
 
  );
}
