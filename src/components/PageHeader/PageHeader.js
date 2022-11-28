import React from 'react'

const PageHeader = ({title,text}) => {
  return (
    <div className='w-full py-[109px] flex justify-center bg-header-color text-center'>
       <div className='flex flex-col items-center w-[695px]'>
       <span className='text-[60px] font-semibold leading-[66px] shrink'>{title}</span>
        <span className='text-[22px] font-normal leading-[32px] text-center opacity-70'>{text}</span>
       </div>
      
    </div>
  )
}

export default PageHeader