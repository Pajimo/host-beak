import arrowLogo from '../assets/arrowLogo.png'
import welcomeLogo from '../assets/welcomeLogo.png'
import arrowDown from '../assets/arrowdownLogo.png'
import accountingLogo from '../assets/accountingLogo.png'
import analyticsLogo from '../assets/analyticsLogo.png'
import bankingLogo from '../assets/bankingLogo.png'
import commentsLogo from '../assets/commentsLogo.png'
import dashboardLogo from '../assets/dashboardLogo.png'
import logoutLogo from '../assets/logoutLogo.png'
import paymentsLogo from '../assets/paymentsLogo.png'
import payrollLogo from '../assets/payrollLogo.png'
import purchasesLogo from '../assets/purchasesLogo.png'
import reportLogo from '../assets/reportLogo.png'
import salesLogo from '../assets/salesLogo.png'
import settingsLogo from '../assets/settingsLogo.png'
import notificationLogo from '../assets/notificationLogo.png'
import paymentLogo from '../assets/paymentsLogo.png'


import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBill from './addBill'
import ViewReport from './viewReports'

const MainColumn = ({setAddBill, setViewReport}) => {


    const viewReportFunc = () =>{
        setViewReport(true)
        setAddBill(false)
    }

    return(
        <>
            <div className=''>
                <div className='md:w-80 h-full w-full bg-[#F9F9F9] text-[18px] pt-10'>
                    <div className='flex items-center justify-center profile-corner2'>
                        <div className=' border-2 border-[#E9E9E9] rounded-full mr-5 p-3'><img src={notificationLogo} alt='notification Logo' className='' /></div>
                        <div className='w-[54px] h-[54px] rounded-full bg-[#091E46] mr-5'></div>
                        <p className='text-[#091E46] mr-5'>Olamide</p>
                        <img src={arrowDown} alt='arrow down'/>
                    </div>
                    <details className='pl-16 py-7 '>
                        <summary className='flex text-[#C4C4C4] items-center pr-5 justify-between'><img src={welcomeLogo} alt='welcome Logo' className='mr-10 p-2 w-12 h-12 rounded-full object-contain'/> Welcome  <div className='ml-10'></div></summary>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex text-[#C4C4C4] items-center  pr-5 justify-between'><img src={dashboardLogo} alt='dashboard Logo' className='mr-10 p-2 w-12 h-12 rounded-full'/> Dashboard <div className='ml-10'></div></summary>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex text-[#C4C4C4] items-center  pr-5 justify-between'><img src={salesLogo} alt='Sales Logo' className='mr-10 p-2 w-12 h-12 rounded-full'/> Sales  <img src={arrowLogo} alt='arrowLogo' className='ml-10' /></summary>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex text-[#C4C4C4] items-center pr-5 justify-between'><img src={purchasesLogo} alt='Purchases Logo' className='mr-10 p-2 w-12 h-12 rounded-full'/> Purchases  <img src={arrowLogo} alt='arrowLogo' className='ml-10' /></summary>
                        <div className='pl-24'>
                            <Link to='/addbill'>Bills</Link>
                            <p>Vendors</p>
                            <p>Product & Services</p>
                        </div>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex text-[#C4C4C4] items-center pr-5 justify-between'><img src={accountingLogo} alt='accounting logo' className='mr-10 p-2 w-12 h-12 rounded-full'/> Accounting  <img src={arrowLogo} alt='arrowLogo' className='ml-10' /></summary>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className=' flex text-[#C4C4C4] items-center pr-5 justify-between'><img src={bankingLogo} alt='banking logo' className='mr-10 p-2 w-12 h-12 rounded-full'/> Banking  <img src={arrowLogo} alt='arrowLogo' className='ml-10' /></summary>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex text-[#C4C4C4] items-center pr-5 justify-between'><img src={payrollLogo} alt='payroll logo' className='mr-10 p-2 w-12 h-12 rounded-full'/> Payroll  <img src={arrowLogo} alt='arrowLogo' className='ml-10' /></summary>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex text-[#C4C4C4] items-center  pr-5 justify-between'><img src={reportLogo} alt='report logo' className='mr-10 p-2 w-12 h-12 rounded-full'/> Reports  <img src={arrowLogo} alt='arrowLogo' className='ml-10' /></summary>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex items-center text-[#C4C4C4]  pr-5 justify-between'><img src={analyticsLogo} alt='analytic logo' className='mr-10 p-2 w-12 h-12 rounded-full  active:bg-[#081494]'/> Analytics  <img src={arrowLogo} alt='arrowLogo' className='ml-10' /></summary>
                        <div className='pl-24'>
                            <Link to='/viewReport'><p>View Report</p></Link>
                            <p>To-Do</p>
                            <p>Upload Docs</p>
                            <p>Chat</p>
                            <p>Schedule</p>
                            <p>Message Board</p>
                            <p>Make Payments</p>
                            <p>Billing</p>
                        </div>
                    </details>
                    <details className='pl-16 py-7 '>
                        <summary className='flex pr-5 justify-between text-[#C4C4C4] items-center'><img src={settingsLogo} alt='settings logo' className=' p-2 w-12 h-12 rounded-full'/> Settings <div className='ml-10'></div></summary>
                    </details>
                    <div className='pl-16 py-7 border-b-2'>
                        <p className='flex justify-between'><img src={logoutLogo} />Logout <div className='ml-10'></div></p>
                    </div>
                    <div className='flex justify-center mt-10 md:pb-10'>
                        <p className='p-3 text-white bg-blue-600 rounded-xl flex justify-between items-center text-2xl'><img src={paymentLogo} className=' pr-5'/>Accept Payments</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MainColumn