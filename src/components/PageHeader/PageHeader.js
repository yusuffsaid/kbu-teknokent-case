import React from 'react'

const PageHeader = ({title,text}) => {
  return (
    <div className='w-full py-[109px] max-sm:py-[60px] flex justify-center bg-header-color text-center'>
       <div className='flex flex-col items-center max-w-[695px]'>
       <span className='text-[60px] max-sm:text-[42px] font-semibold leading-[66px] shrink'>{title}</span>
        <span className='text-[22px] max-sm:text-[17px] font-normal leading-[32px] max-sm:leading-[30px] text-center opacity-70'>{text}</span>
       </div>
      
    </div>
  )
}

export default PageHeader