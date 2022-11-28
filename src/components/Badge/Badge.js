import React from 'react'
const Badge = ({badge}) => {
  return (
    <div className='w-1/3 flex items-center justify-center py-[13px]'>
        {/* Renkler gelmiyor en son buna bakılacak */}
            <i className={"bg-["+badge.color+"]  p-[12px] rounded-full bg-opacity-40 text-2xl "+badge.icon}></i>
            <div className='flex flex-col ml-[37px]'>
            <h1 className='text-[24px]'>{badge.title}</h1>
            <p className='text-[15px] font-light mt-[15px] text-opacity-80'>{badge.text}</p>
       </div>
    </div>
  )
}

export default Badge