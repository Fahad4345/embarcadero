import React from 'react'

export default function Infocard() {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xl:divide-x-[3px]">
  <div className="p-4 bg-gray-100">Div 1</div>
  <div className="p-4 bg-gray-100">Div 2</div>
  <div className="p-4 bg-gray-100">Div 3</div>
  <div className=' w-[1px] bg-black grid-rows-1'></div>
  <div className="p-4 bg-gray-100">Div 4</div>
  <div className="p-4 bg-gray-100">Div 5</div>
  <div className="p-4 bg-gray-100">Div 6</div>
</div>
  )
}
