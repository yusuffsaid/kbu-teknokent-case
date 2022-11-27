import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import PageHeader from '../../components/PageHeader/PageHeader'

const Pricing = () => {
    
    const [cardProps, setCardProps] = useState([
        {title:"Basic",
        description:"Most Popular",
        price:"4,95",
        falseItemIndex:[3,4,5],
        isSelected:false
 
    },
    {
        title:"Professional",
        description:"Recommended",
        price:"9,95",
        falseItemIndex:[5],
        isSelected:true,
    },
    {
        title:"Ultimate",
        description:"Best value",
        price:"12,95",
        falseItemIndex:[],
        isSelected:false,
     
    }
    ])
  return (
   <div className=''>
   <PageHeader title='Pricing Plans' text="We are an industry-leading company that values honesty, integrity, and efficiency. Building quality products and caring."></PageHeader>
   <section className='price-area flex justify-between px-[150px] bg-header-color gap-x-[23px]'>
    {cardProps.map((prop,i)=><Card key={i} cardProps={prop}></Card>)}
   </section>
   </div>
  )
}

export default Pricing