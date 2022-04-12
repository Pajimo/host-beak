import { useState } from "react"
import Image2 from '../../assets/image2.png'
import { Outlet, Link } from "react-router-dom";
import AddBill from "../addBill";


const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pNum, setPNum] = useState('')
    const [email, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState(false)
    const [addBill, setAddBill] = useState(false)


    const signUp = () => {
        
    }

    if(addBill){
        return(
            <AddBill setAddBill={setAddBill}/>
        )
    }

    return(
        <>
            <div className="flex md:flex-row flex-col">
                <div className="md:basis-1/2">
                    <div className="relative">
                        <div>
                            <img src={Image2} className='md:h-screen h-96 w-full object-contain object-cover object-top'/>
                        </div>
                        <div className="absolute inset-x-0 md:bottom-20 bottom-0 text-white">
                            <div className="flex justify-center">
                                <div className="text-3xl font-semibold">
                                    Building exceptional <br></br>
                                    services with Back Office<br></br>
                                    Support and Business<br></br>
                                    Perfomance
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:basis-1/2 md:mx-20 mx-5 mt-10">
                    <div className="mb-3">
                        <h1 className="text-4xl font-bold mb-2 text-[#272262]">Create Account</h1>
                        <p className="text-[20px] text-[#282C40] font-[300]">Build an exceptional business</p>
                    </div>
                    <div className="md:w-9/12">
                        <form className="font-semibold text-[#82869A]" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex md:flex-row flex-col justify-between mb-5">
                                <div className="md:basis-1/2 mr-5">
                                    <label id="firstName" htmlFor="firstName" className="mb-2 text-lg">First Name</label><br></br>
                                    <input className="text-[#373C56] text-[400] text-xl font-medium border-b-4 hover:border-[#272262] border-[#EBEBEB] w-full pb-2 mt-2" type='text' placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="md:basis-1/2">
                                    <label id="lastName" htmlFor="lastName" className="mb-2 text-lg">Last Name</label><br></br>
                                    <input className="text-[#373C56] text-[400] font-medium text-xl border-b-4 hover:border-[#272262] border-[#EBEBEB] w-full pb-2 mt-2" type='text' placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="mb-5">
                                    <label className="text-lg">Phone Number</label><br></br>
                                    <input className="text-xl text-[#373C56] text-[400] w-full border-b-4 hover:border-[#272262] border-[#EBEBEB] pb-2 mt-2" type='text' placeholder="Enter your phone number" value={pNum} onChange={(e) => setPNum(e.target.value)} />
                                </div>
                                <div className="mb-5">
                                    <label className="text-lg">Email Address</label><br></br>
                                    <input className="text-xl text-[#373C56] text-[400] w-full border-b-4 hover:border-[#272262] border-[#EBEBEB] pb-2 mt-2" type='text' placeholder="Enter your email" value={email} onChange={(e) => setEmailAddress(e.target.value)}/>
                                </div>
                                <div className="mb-5">
                                    <label className="text-lg">Password</label><br></br>
                                    <input className="text-xl text-[#373C56] text-[400] w-full border-b-4 hover:border-[#272262] border-[#EBEBEB] mt-2 pb-2" type='password' placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="flex justify-between mb-5">
                                <div className="text-[20px]">
                                    <input type='checkbox'className="" value={checkBox} onChange={(e) => setCheckBox(!checkBox)}/>
                                    <span className="ml-3 text-gray-400">Remember me</span>
                                </div>
                                <div>
                                    <a href="" className="text-[#3DB0FF] text-[20px]">Forgot Password?</a>
                                </div>
                                
                            </div>
                            <div>
                            
                            <button className="py-5 text-white bg-[#3DB0FF] w-full rounded-lg text-[25px] font-semibold "><Link to='/../addbill'>Sign Up</Link></button>
                            </div>
                            <div>
                                <p className="text-[18px] flex justify-center mt-5 text-[400]">Got an Account? <a href="" className="text-[#3DB0FF] ml-3 mb-10 md:mb-0"> Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp