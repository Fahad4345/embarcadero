import React from "react";
import Image from "next/image";
 

 
export default function Icons( { IconPath, width, height} :{IconPath: string,width:number, height:number}
   
       
){
 return( 
  <Image
               src={IconPath}
               alt="My Icon"
               width={width}
               height={height}
             />

);
}

