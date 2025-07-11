import React from 'react'


export default function Span_Heading({ className , Span_Text ,Regular_Text}:{ className:string , Span_Text :string ,Regular_Text:string}) {
  return (
    <div className={`gap-2 ${className}`}>
    <span>{Regular_Text}</span><span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]'>{Span_Text}</span>
    
    </div>
        
    
  )
}
