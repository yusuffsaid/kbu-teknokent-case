import React, { useState } from 'react'
import MenuItem from './MenuItem'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const changeisOpen =()=>{
        setIsOpen(!isOpen);
    }
    const [menuItem, setMenuItem] = useState([
        {name:"About",order:1},
        {name:"All Shortcuts",order:2},
        {name:"Support",order:3},
        {name:"Contact",order:4},
    ])
  return (
    <div className='w-full flex px-[152px] py-[43px] justify-between justify-items-center shrink max-sm:px-[20px] max-lg:py-[24px]'>
        <div className='logo'>
        <svg width="72" height="18" viewBox="0 0 72 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.071 10.184C12.071 11.216 11.711 12.08 11.015 12.776C10.319 13.472 9.45503 13.808 8.42303 13.808C7.39103 13.808 6.50303 13.472 5.80703 12.776C5.11103 12.08 4.77503 11.216 4.77503 10.184V0.200012H0.983032V10.208C0.983032 12.224 1.70303 13.904 3.11903 15.272C4.53503 16.64 6.31103 17.312 8.42303 17.312C10.535 17.312 12.311 16.64 13.727 15.272C15.143 13.904 15.863 12.224 15.863 10.208V0.200012H12.071V10.184Z" fill="#213053"/>
<path d="M21.5946 17V0.200012H17.7786V17H21.5946Z" fill="#213053"/>
<path d="M32.3609 17C33.9449 17 35.2649 16.544 36.3449 15.608C37.4249 14.672 37.9529 13.52 37.9529 12.128C37.9529 10.52 37.1369 9.08001 35.7689 8.21601C36.7769 7.30401 37.2809 6.20001 37.2809 4.88001C37.2809 3.56001 36.7769 2.43201 35.7449 1.54401C34.7129 0.656012 33.4409 0.200012 31.8809 0.200012H23.6489V17H32.3609ZM32.3129 10.088C33.2729 10.088 33.9929 10.832 33.9929 11.792C33.9929 12.752 33.2729 13.496 32.3129 13.496H27.4649V10.088H32.3129ZM31.8329 3.70401C32.6969 3.70401 33.3209 4.35201 33.3209 5.24001C33.3209 5.36001 33.3209 5.43201 33.2969 5.48001C33.2009 6.22401 32.6009 6.75201 31.8329 6.75201H27.4649V3.70401H31.8329Z" fill="#213053"/>
<path d="M51.9858 12.056C52.0818 11.648 52.1298 11.216 52.1298 10.76C52.1298 8.91201 51.5058 7.35201 50.2338 6.10401C48.9618 4.83201 47.4018 4.20801 45.5298 4.20801C43.6338 4.20801 42.0738 4.83201 40.8018 6.10401C39.5298 7.35201 38.9058 8.91201 38.9058 10.76C38.9058 12.632 39.5538 14.192 40.8498 15.44C42.1458 16.688 43.7778 17.312 45.7218 17.312C48.3858 17.312 50.5698 16.016 51.6978 13.928L48.2178 13.136C47.5938 13.88 46.7778 14.24 45.7458 14.24C44.2818 14.24 43.1058 13.376 42.6978 12.056H51.9858ZM42.7218 9.39201C43.1298 8.12001 44.2578 7.28001 45.5298 7.28001C46.8738 7.28001 48.0018 8.12001 48.4578 9.39201H42.7218Z" fill="#213053"/>
<path d="M66.0827 12.056C66.1787 11.648 66.2267 11.216 66.2267 10.76C66.2267 8.91201 65.6027 7.35201 64.3307 6.10401C63.0587 4.83201 61.4987 4.20801 59.6267 4.20801C57.7307 4.20801 56.1707 4.83201 54.8987 6.10401C53.6267 7.35201 53.0027 8.91201 53.0027 10.76C53.0027 12.632 53.6507 14.192 54.9467 15.44C56.2427 16.688 57.8747 17.312 59.8187 17.312C62.4827 17.312 64.6667 16.016 65.7947 13.928L62.3147 13.136C61.6907 13.88 60.8747 14.24 59.8427 14.24C58.3787 14.24 57.2027 13.376 56.7947 12.056H66.0827ZM56.8187 9.39201C57.2267 8.12001 58.3547 7.28001 59.6267 7.28001C60.9707 7.28001 62.0987 8.12001 62.5547 9.39201H56.8187Z" fill="#213053"/>
<path d="M69.1636 13.232C68.0116 13.232 67.1476 14.096 67.1476 15.272C67.1476 16.448 68.0116 17.312 69.1636 17.312C70.3396 17.312 71.2276 16.448 71.2276 15.272C71.2276 14.096 70.3396 13.232 69.1636 13.232Z" fill="#213053"/>
</svg>

        </div>
        <ul className='flex justify-between  items-center gap-x-6 font-semibold text-[15px] max-lg:hidden'>
            {
                menuItem.map((item,i)=>(<MenuItem name={item.name}></MenuItem>))
            }
            <li className="px-[52px] py-[8px] rounded-[65px] bg-active-color"><a>Get</a></li>
        </ul>

       <button className='hidden max-lg:block' onClick={()=>changeisOpen()}><i className="fa-solid fa-bars"></i></button>

    </div>
  )
}

export default Header