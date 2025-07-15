"use client";
import React, { useState } from "react";


const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className=" flex   border-[#D4D4D4] border-[1px]  p-[24px] rounded-[16px] border-dashed  gap-[16px]">
    //   <div className="flex flex-col ">
    //   <p className=" text-[#525252]   font-[Archivo] text-[20px]  w-[816px] leading-[120%] Tracking-[-1px] font-[500]   ">
    //     {question}
    //   </p>

    //     <button
    //       className="text-[#4F46E5] text-[20px] "
    //       onClick={() => setIsOpen(!isOpen)}
    //       >
    //       {isOpen ? "-" : "+"}
    //     </button>
    //         </div>
    //     {isOpen && <div className=" text-gray-600 ">{answer}</div>}
    // </div>
    <div className=" border-[#D4D4D4] border-[1px]  p-[24px] rounded-[16px] border-dashed  gap-[16px]">
    <div className=" flex flex-row items-center">
      
         <p className=" text-[#525252]  text-start font-[Archivo] text-[20px]  w-[816px] leading-[120%] Tracking-[-1px] font-[500]   ">
        {question}
      </p>
      
        <p
          className="text-[#4F46E5] text-[40px] "
          onClick={() => setIsOpen(!isOpen)}
          >
          {isOpen ? "-" : "+"}
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
    <section className="">
      <div className="  flex  flex-col gap-[24px]">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
