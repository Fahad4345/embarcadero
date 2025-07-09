import React from "react";
import Image from "next/image";
 

 
export default function Icons( { path, width, height} :{path: string,width:number, height:number}
   
       
){
 return( 
  <Image
               src={path}
               alt="My Icon"
               width={width}
               height={height}
             />

);
}

