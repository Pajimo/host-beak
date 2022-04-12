import logo from '../assets/logo.png'
import arrowLogo from '../assets/arrowLogo.png'
import notificationLogo from '../assets/notificationLogo.png'
import arrowDown from '../assets/arrowdownLogo.png'
import { useState } from 'react'
import MainColumn from './main'


const Header = ({showMenu, setShowMenu}) => {


    return(
        <>
            <div className="md:py-5 pt-5 pl-2 bg-[#F9F9F9] md:pr-40 pr-2">
                <div className=" md:flex md:justify-between md:items-center">
                    <div className='flex bg-white shadow-xl rounded-3xl px-20 py-2 items-center mb- md:mb-0'>
                        <img src={logo} alt='logo' className='w-[50px] h-[50px]'/>
                        <p className="text-[24px] font-[400] text-[#3A3A3A] ml-5">HostBeak</p>
                        <img src={arrowLogo} alt='arrowLogo' className='ml-10' onClick={() => setShowMenu(!showMenu)}/>
                    </div>
                    <div className='flex items-center justify-center profile-corner'>
                        <div className=' border-2 border-[#E9E9E9] rounded-full mr-5 md:p-3'><img src={notificationLogo} alt='notification Logo' className='' /></div>
                        <div className='md:w-[54px] md:h-[54px] rounded-full bg-[#091E46] mr-5'></div>
                        <p className='text-[#091E46] mr-5'>Olamide</p>
                        <img src={arrowDown} alt='arrow down'/>
                    </div>
                </div>
            </div>
            {showMenu ? <MainColumn /> : ''}
        </>
    )
}

export default Header