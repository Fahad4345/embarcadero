import React from 'react'
import Icons from './Icon_Component'

export default function Span_Heading({ className ,Text_1 ,Span_Text,Text_2,IconPath}:{ className:string ,Text_1:string, Span_Text :string, Text_2: string ,IconPath:string}) {
  return (
    <div className={className} >
    <h1 className=' font-[600] md:text-[48px] md:leading-[120px]   sm:text-[36px] sm: leading-[140px] tracking-[-1px]'><span className='text-black'>{Text_1}</span><span className=' bg-clip-text text-transparent bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]'>{Span_Text}</span> <span>{Text_2}</span></h1>
        <Icons IconPath={IconPath} width={62} height={144}   />   
    </div>
  )
}
