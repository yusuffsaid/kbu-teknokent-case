import React, { useState } from 'react'

const Card = ({cardProps}) => {
  const [packageFeatures, setpackageFeatures] = useState({
    items:[
        {
            text:"Unlimited updates and products",
            selected:true,
        },
        {
            text:"Custom permissions",
            selected:true,
        },
        {
            text:"Custom infrastructure",
            selected:true,
        },
        {
            text:"Custom design and features",
            selected:false,
        },
        {
            text:"Unlimited updates ",
            selected:false,
        },
        {
            text:"Custom infrastructure ",
            selected:false,
        },
    ]
})
  return (
    <div className={'rounded-[15px] flex-1 h-[498px] px-[33px] py-[40px] flex flex-col '+ (cardProps.isSelected ? "bg-active-color text-white ": "bg-white text-menu-color")}>
     
      <div className='flex justify-between items-center text-[24px]  leading-[32px]'>
        <span>{cardProps.title}</span>
        <span>${cardProps.price}</span>
      </div>

      <div className='flex justify-between items-center text-[13px]  leading-[22px] text-opacity-70 '>
        <span>{cardProps.description}</span>
        <span>Per month</span>
      </div>

      <div className='border-2 mt-[19px] rotate-[-0.17deg] border-opacity-10 '></div>
     
      <div className='mt-[39px] flex flex-col'>
        {
          packageFeatures.items.map((item,i)=>(
            <div key={i} className={"flex justify-between items-center mb-2 " +( cardProps.falseItemIndex.includes(i) && cardProps.isSelected && "opacity-70")}>
              
              <span className="text-[17px] leading-[30px] font-normal ">{item.text}</span>
             
              <i className={cardProps.falseItemIndex.includes(i) ? "fa fa-solid fa-times" : "fa fa-solid fa-check" }></i>  

              
            </div>
          ))
        }
      </div>
      <button className={'rounded-[50px]  py-[13px] mt-[26px] ' + (cardProps.isSelected ? "bg-white text-active-color" : "bg-active-color text-white") }>
        Get Started
      </button>
    </div>
  )
}

export default Card