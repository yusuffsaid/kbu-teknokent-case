import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
const Career = () => {
  return (
    <div>
        <PageHeader title="Career opportunities" text="We offer an effective combination of broad customer service expertise and deep product knowledge to ensure customer experience"></PageHeader>
        
        <section className='flex flex-row items-center px-[20px] py-[112px] max-lg:flex-col-reverse '>
            <div className='w-1/2 px-[100px] max-lg:px-[20px] max-sm:px-[10px] max-lg:w-full max-sm:mt-[20px]'>
                <span className='block text-[60px] font-semibold leading-[66px] max-lg:text-[36px] max-lg:leading-[46px]'>Build your career in our community</span>
                <span className='block first-letter:text-[22px] font-normal leading-[32px] mt-[62px] max-sm:mt-[47px] opacity-70 max-lg:text-[17px] max-lg:leading-[30px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
                <button className='px-[29px] py-[15px] bg-[#FF794D] block text-white text-[17px] mt-[62px] max-sm:mt-[47px] rounded-[18px]'>Check Listing</button>
            </div>
            <div className='flex items-center justify-center gap-[24px] flex-1'>
                    <img src={img1} className="w-[306px] max-sm:max-w-[140px] rounded-[10px]"></img>
                    <div className='flex flex-1 flex-col gap-[24px]'>
                        <img src={img2} className="max-w-[306px] max-sm:max-w-[140px] rounded-[10px]"></img>
                        <img src={img3} className="max-w-[306px] max-sm:max-w-[140px] rounded-[10px]"></img>
                    </div>
            </div>

        </section>
    </div>
  )
}

export default Career