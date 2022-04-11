import { useState } from "react"
import Image2 from '../../assets/image2.png'

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [pNum, setPNum] = useState('')
    const [email, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [checkBox, setCheckBox] = useState(false)

    return(
        <>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <div className="relative">
                        <div>
                            <img src={Image2} className='h-screen w-full object-contain object-cover'/>
                        </div>
                        <div className="absolute inset-x-0 bottom-20 text-white">
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
                <div className="basis-1/2 mx-20 mt-10">
                    <div className="mb-3">
                        <h1 className="text-4xl font-bold mb-2 text-[#272262]">Create Account</h1>
                        <p className="text-[20px] text-[#282C40] font-[300]">Build an exceptional business</p>
                    </div>
                    <div className="w-9/12">
                        <form className="font-semibold text-[#82869A]">
                            <div className="flex flex-row justify-between mb-5">
                                <div className="basis-1/2 mr-5">
                                    <label id="firstName" htmlFor="firstName" className="mb-2 text-xl">First Name</label><br></br>
                                    <input className="text-[#373C56] text-[400] text-2xl font-medium border-b-4 hover:border-[#272262] border-[#EBEBEB] w-full pb-2 mt-2" type='text' placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div className="basis-1/2">
                                    <label id="lastName" htmlFor="lastName" className="mb-2 text-xl">Last Name</label><br></br>
                                    <input className="text-[#373C56] text-[400] font-medium text-2xl border-b-4 hover:border-[#272262] border-[#EBEBEB] w-full pb-2 mt-2" type='text' placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="mb-5">
                                    <label className="text-xl">Phone Number</label><br></br>
                                    <input className="text-2xl text-[#373C56] text-[400] w-full border-b-4 hover:border-[#272262] border-[#EBEBEB] pb-2 mt-2" type='text' placeholder="Enter your phone number" value={pNum} onChange={(e) => setPNum(e.target.value)} />
                                </div>
                                <div className="mb-5">
                                    <label className="text-xl">Email Address</label><br></br>
                                    <input className="text-2xl text-[#373C56] text-[400] w-full border-b-4 hover:border-[#272262] border-[#EBEBEB] pb-2 mt-2" type='text' placeholder="Enter your email" value={email} onChange={(e) => setEmailAddress(e.target.value)}/>
                                </div>
                                <div className="mb-5">
                                    <label className="text-xl">Password</label><br></br>
                                    <input className="text-2xl text-[#373C56] text-[400] w-full border-b-4 hover:border-[#272262] border-[#EBEBEB] mt-2 pb-2" type='password' placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="flex justify-between mb-5">
                                <div className="text-[22px]">
                                    <input type='checkbox'className="" value={checkBox} onChange={(e) => setCheckBox(!checkBox)}/>
                                    <span className="ml-3 text-gray-400">Remember me</span>
                                </div>
                                <div>
                                    <a href="" className="text-[#3DB0FF] text-[22px]">Forgot Password?</a>
                                </div>
                                
                            </div>
                            <div>
                                <button className="py-5 text-white bg-[#3DB0FF] w-full rounded-lg text-[30px] font-semibold ">Sign Up</button>
                            </div>
                            <div>
                                <p className="text-[21px] flex justify-center mt-5 text-[400]">Got an Account? <a href="" className="text-[#3DB0FF] ml-3"> Sign In</a></p>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp