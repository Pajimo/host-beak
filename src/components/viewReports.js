import Header from "./header"
import MainColumn from "./main"
import commentsLogo from '../assets/commentsLogo.png'
import { useState, useRef } from "react"
import { AiOutlineMenu } from "react-icons/ai";

const ViewReport = () => {

    const menu = useRef(null)

    const menuFunction = () => {
        menu.current.classList.toggle('mainColumn')
        //menu.current.classList.remove('mainColumn')
    }

    const reportArr = ['Februray Report', 'March 2021 Report', 'March 2021 Report', 'March 2021 Report','March 2021 Report', 'March 2021 Report',
    'March 2021 Report', 'February Report']

    return(
        <>
            <div>
                <div className="bg-[#F9F9F9]">
                    <Header />
                    <button className="profile-Show-button bg-[#F9F9F9] w-full flex justify-end pr-10" onClick={ menuFunction}><AiOutlineMenu className="text-2xl"/></button>
                </div>
                <div className="flex relative font-sans">
                    { <div className="absolute md:relative inset-0 bg-[#F9F9F9] mainColumn" ref={menu}><MainColumn /> </div>}
                    <div className="md:py-20 md:px-10 py-5 px-5 w-full">
                        <div>
                            <p className="text-3xl text-[#0A043C] font-bold mb-12">View Reports</p>

                        </div>
                        <div className="md:mr-20">
                            {reportArr.map((report) => {
                                return(
                                    <div className="">
                                        <div className="lg:flex items-center justify-between py-5 border-2 px-10 text-lg">
                                            <div className="flex flex-row sm:justify-between items-center md:mb-0 mb-5">
                                                <div className="md:mr-0 mr-5 pr-5">
                                                    <input type='checkbox' />
                                                </div>
                                                <div>
                                                    <p>{report}</p>
                                                </div>
                                            </div>
                                            <div className="md:mb-0 mb-5"><p>4th , October 2021 11:20am</p></div>
                                            <div className="flex flex-row justify-between items-center">
                                                <div><button className="px-12 rounded-lg text-white py-2 font- bg-[#3DB0FF] mr-5">View</button></div>
                                                <div><img src={commentsLogo} /></div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewReport