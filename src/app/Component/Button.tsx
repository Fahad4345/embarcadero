import React from 'react'
import Icons from './Icon_Component'


export default function Button({className, Button_text ,IconPath}:{className:string,Button_text:string ,IconPath?:string}) {
  return (
    <div className=''>
       <button className={className}>
            {Button_text}
            {
              IconPath == null ? <div></div> : <Icons IconPath={IconPath ?? ""} width={28} height={28}/>
            }
          </button>
    </div>
  )
}
