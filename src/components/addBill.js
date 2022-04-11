import MainColumn from "./main"
import Header from "./header"

const AddBill = () => {
    return(
        <>
            <Header />
            <div className="flex">
                <div><MainColumn /></div>
                <div className="py-20 px-10 w-full">
                    <div>
                        <p className="text-3xl text-[#0A043C] font-bold mb-12">Add bill</p>

                    </div>
                    <div className="grid grid-cols-3 w-8/12 mb-10">
                        <select className="border-2 border-gray-300 w-40 h-12">
                            <option>Choose</option>
                        </select>
                        <select className="border-2 border-gray-300 w-40 h-12">
                            <option>Choose</option>
                        </select>
                        <select className="border-2 border-gray-300 w-40 h-12">
                            <option>Choose</option>
                        </select>
                    </div>
                    <div class="grid grid-rows-3 grid-flow-col w-8/12">
                        <div class="col-span-2 pb-10">
                            <div className="grid grid-cols-2">
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-span-2 ...">
                            <div className="grid grid-cols-2">
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                                <select className="border-2 border-gray-300 w-40 h-12">
                                    <option>Choose</option>
                                </select>
                            </div>
                        </div>
                        <div class="row-span-2">
                            <div className="grid grid-cols-">
                            <textarea rows='6' className="border-2 border-gray-300" ></textarea>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddBill