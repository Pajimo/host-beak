import MainColumn from "./main"
import Header from "./header"
import { useState, useRef } from "react"
import { AiOutlineMenu } from "react-icons/ai";
import ViewReport from "./viewReports";


const AddBill = ({setAddBill}) => {


    const [viewReport, setViewReport] = useState(true)

    const menu = useRef(null)

    const menuFunction = () => {
        menu.current.classList.toggle('mainColumn')
        //menu.current.classList.remove('mainColumn')
    }

    if(viewReport){
        <ViewReport />
    }


    return(
        <>
            <Header />
            <button className="profile-Show-button bg-[#F9F9F9] w-full" onClick={menuFunction}><AiOutlineMenu className="text-2xl"/></button>
            <div className="flex relative">
                { <div className="absolute md:relative inset-0 mainColumn" ref={menu}><MainColumn viewReport={viewReport} setViewReport={setViewReport} setAddBill={setAddBill}/> </div>}
                <div className="md:py-20 py-5 px-5 md:px-10 w-full">
                    <div>
                        <p className="text-3xl text-[#0A043C] font-bold mb-12">Add bill</p>

                    </div>
                    <div className="grid md:grid-cols-3 w-8/12 mb-10">
                        <select className="border-2 border-gray-300 w-40 h-12 mb-5">
                            <option>Choose</option>
                        </select>
                        <select className="border-2 border-gray-300 w-40 h-12 mb-5">
                            <option>Choose</option>
                        </select>
                        <select className="border-2 border-gray-300 w-40 h-12 mb-5">
                            <option>Choose</option>
                        </select>
                    </div>
                    <div class="grid md:grid-rows-3 md:grid-flow-col w-8/12">
                        <div className="col-span-2 pb-10">
                            <div className="grid grid-cols-2 gap-4 md:gap-0">
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-span-2 ...">
                            <div className="grid grid-cols-2 gap-4 md:gap-0">
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                            </div>
                        </div>
                        <div class="row-span-2 md:mt-0 mt-5 ">
                            <div className="grid grid-cols-">
                            <textarea rows='6' className="border-2 border-gray-300 md:w-auto w-80" ></textarea>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddBill