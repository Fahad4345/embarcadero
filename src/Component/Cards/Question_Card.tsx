"use client";
import React, { useState } from "react";

import Icons from "../Elements/Icon_Component";


const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <div className="   border-[#D4D4D4] border-[1px] z-50  bg-white p-[24px] rounded-[16px] border-dashed on hover:border-[#4F46E5]  cursor-pointer">
    <div className=" flex flex-row items-center gap-[16px]" onClick={() => setIsOpen(!isOpen)}>
      
         <div className="  xl:w-[732px] lg:w-[758px] md:w-[612px] sm:w-[259px]"> <p className=" text-[#525252]  text-start font-[Archivo] md:text-[20px] sm:text-[18px]  leading-[120%] Tracking-[-1px] font-[500]   ">
        {question}
      </p></div>
      
        <p
          className="text-[#4F46E5] text-[25px] "
          
          >
          {isOpen ? (<Icons IconPath={"/Assets/Minus.svg"} className=" w-[20px] h-[20px]"/>) : (<Icons IconPath={"/Assets/plus.svg"}  className="w-[20px] h-[20px]"/>)}
        </p>
    </div>
 
    <p> {isOpen && <div className=" text-gray-600 ">{answer}</div>}</p>
</div>

  );
};


export default function FAQSection() {
  const faqs = [
    {
      question: "How can I get support / Unable to get support",
      answer: "xyz",
    },
    {
      question: "How can I renew my license?",
      answer: "xyz",
    },
    {
      question: "How can I download/purchase a previous version",
      answer: "xyz",
    },
    {
      question: "How can I start building software applications",
      answer: "xyz",
    },
    {
      question: "Is Delphi dead?",
      answer: "xyz",
    },
  ];

  return (
    <div className=" relative  bg-white">
    
    
    <div className="  relative flex  flex-col gap-[24px] ">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}   <Icons IconPath={"Assets/Line 6.svg"} className="absolute bottom-[-75px] z-0 left-[780px] " />
      </div>
       
</div>
      
  );
}
