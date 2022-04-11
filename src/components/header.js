import logo from '../assets/logo.png'
import arrowLogo from '../assets/arrowLogo.png'
import notificationLogo from '../assets/notificationLogo.png'
import arrowDown from '../assets/arrowdownLogo.png'


const Header = () => {
    return(
        <>
            <div className="py-5 pl-2 bg-[#F9F9F9] pr-40">
                <div className=" flex justify-between items-center">
                    <div className='flex bg-white shadow-xl rounded-3xl px-7 py-2 items-center'>
                        <img src={logo} alt='logo' className='w-[50px] h-[50px]'/>
                        <p className="text-[24px] font-[400] text-[#3A3A3A] ml-5">HostBeak</p>
                        <img src={arrowLogo} alt='arrowLogo' className='ml-10' />
                    </div>
                    <div className='flex items-center'>
                        <div className=' border-2 border-[#E9E9E9] rounded-full mr-5 p-3'><img src={notificationLogo} alt='notification Logo' className='' /></div>
                        <div className='w-[54px] h-[54px] rounded-full bg-[#091E46] mr-5'></div>
                        <p className='text-[#091E46] mr-5'>Olamide</p>
                        <img src={arrowDown} alt='arrow down'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header