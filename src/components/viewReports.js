import Header from "./header"
import MainColumn from "./main"
import commentsLogo from '../assets/commentsLogo.png'

const ViewReport = () => {


    const reportArr = ['Februray Report', 'March 2021 Report', 'March 2021 Report', 'March 2021 Report','March 2021 Report', 'March 2021 Report',
    'March 2021 Report', 'February Report']

    return(
        <>
            <div>
                <Header />
                <div className="flex font-sans">
                    <div><MainColumn /></div>
                    <div className="py-20 px-10 w-full">
                        <div>
                            <p className="text-3xl text-[#0A043C] font-bold mb-12">View Reports</p>

                        </div>
                        <div className="mr-20">
                            {reportArr.map((report) => {
                                return(
                                    <div className="">
                                        <div className="flex items-center justify-between py-5 border-2 px-10 text-lg">
                                            <div className="">
                                            <input type='checkbox' />
                                                </div>
                                            <div>
                                            <p>{report}</p>
                                                </div>
                                            <div><p>4th , October 2021 11:20am</p></div>
                                            <div><button className="px-12 rounded-lg text-white py-2 font- bg-[#3DB0FF]">View</button></div>
                                            <div><img src={commentsLogo} /></div>
                                            
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