import React, { useState } from 'react'
import Badge from '../../components/Badge/Badge'
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

    const [badges,setBadges]= useState([
        {title:"Best quality",text:"A team of experts passionate about product management.",icon:"fas fa-regular fa-heart",color:"#20BFA9"},
        {title:"Fastest delivery",text:"A team of experts passionate about product management.",icon:"fas fa-regular fa-bolt",color:"badge-2"},
        {title:"Great support",text:"A team of experts passionate about product management.",icon:"fas fa-regular fa-headphones",color:"badge-3"},
        {title:"Rich documentation",text:"A team of experts passionate about product management.",icon:"fas fa-regular fa-book",color:"badge-4"},
        {title:"Multiple Layouts",text:"A team of experts passionate about product management.",icon:"fas fa-regular fa-book",color:"badge-5"},
        {title:"Lifetime Updates ",text:"A team of experts passionate about product management.",icon:"fas fa-regular fa-infinity",color:"badge-6"}
    ])
  return (
   <div className=''>
   <PageHeader title='Pricing Plans' text="We are an industry-leading company that values honesty, integrity, and efficiency. Building quality products and caring."></PageHeader>
   <section className='price-area flex max-lg:flex-col justify-between px-[150px] max-sm:px-[20px] bg-header-color gap-x-[23px] max-lg:gap-y-[23px]'>
    {cardProps.map((prop,i)=><Card key={i} cardProps={prop}></Card>)}
    
   </section>
   <section className='flex max-sm:flex-col max-lg:px-[20px] px-[150px] flex-wrap gap-y-[20px] mt-[120px] '>
   {badges.map((badge,i)=><Badge key={i} badge={badge}></Badge>)}
   </section>
   </div>
  )
}

export default Pricing