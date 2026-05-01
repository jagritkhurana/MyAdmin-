import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/Components/ui/input-otp"
import { useState } from 'react'
import { getItem, setItem} from '../../Utilities/Items'
import toast from 'react-hot-toast'
import { useLocation } from 'react-router-dom'


function OTP() {

    const location=useLocation()
    

    const[otp,setotp]=useState("")
    const [timeleft,settimeleft]=useState(60)
    const [canResend,setcanResend]=useState(false)
    
    const navigate=useNavigate()

    const email=location.state?.email

    useEffect(()=>{
        if(email!=="user@gmail.com"&&email!=="admin@gmail.com"){
            toast.error("Unauthorized access")
            navigate('/Login')
        }

    },[email,navigate])
    
    useEffect(()=>{
        if(timeleft===0){
            setcanResend(true)
            return
        }
        const timer=setTimeout(()=>{
            settimeleft((prev)=>prev-1)
        },1000)
        return ()=>clearTimeout(timer)
    },[timeleft])

    const handleverify=()=>{
        const otpdata=getItem<{email:string,otp:string}>("OTPdata")
        if(!otpdata){
            toast.error("OTP Invalid")
            return
        }
        if(otp===otpdata.otp){
            toast.success("OTP verified")

            localStorage.removeItem("otpdata")
            navigate('/Resetpass')
        }else{
            toast.error("Invalid OTP")
        }

    }
    const handleResend=()=>{
        if(!canResend) return

        const newOtp=Math.floor(100000+Math.random()*900000).toString()

        setItem("OTPdata",{
            email,
            otp:newOtp
        })
        console.log("New OTP: ", newOtp);
        toast.success("New OTP sent")
        settimeleft(60)
        setcanResend(false)
    }
    return (
        < >
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:block md:w-1/2 h-screen p-5'>
                    <div className=' md:rounded-2xl w-full h-[99%] overflow-hidden'>
                        <img className=' w-full h-full object-cover' src="https://www.westernstartrucks.co.nz/wp-content/uploads/2022/12/48x-truck-header.jpg" alt="photo" />
                    </div>
                </div>

                <div className='md:w-1/2 h-screen flex justify-center items-center relative'>
                    <div className='md:flex gap-2 items-center cursor-pointer top-6 left-6 absolute m-10'>
                        <ArrowLeft size={22} />
                        <p className='text-lg'>Back</p>
                    </div>
                    <div className='md:flex flex-col it justify-center items-center relative'>

                        <div className=' md:flex text-4xl p-2 gap-2 font-bold '> Verify your OTP</div>
                        <div className='md:p-2'>Enter the verification code we sent on your </div>
                        <div className='md:-mt-2'>Email Address </div>
                        <div className='md:relative w-full max-w-md mt-5 ml-6'>
                            <div className='translate-x-10'>

                                <InputOTP maxLength={6}
                                value={otp}
                                onChange={(value)=>setotp(value)}
                                >
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} className="border-2 border-gray-400" />
                                        <InputOTPSlot index={1} className="border-2 border-gray-400" />
                                        <InputOTPSlot index={2} className="border-2 border-gray-400" />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} className="border-2 border-gray-400" />
                                        <InputOTPSlot index={4} className="border-2 border-gray-400" />
                                        <InputOTPSlot index={5} className="border-2 border-gray-400" />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>

                        </div>
                        <div className='md:w-full max-w-md mt-1 flex justify-center gap-2'>
                            <Link to={'/Forgotpass'} className=' opacity-80 text-gray-600 font-bold mr-0' >Didn't recieve OTP?</Link>
                            <p 
                            onClick={handleResend}
                             className={`font-bold ${canResend?"text-blue-600 cursor-pointer":"text-gray-400 cursor-not-allowed"}`}
                            
                            >{canResend ? "RESEND" : `Resend in ${timeleft}s`}</p>
                        </div>


                        <div className='md:w-75 max-w-md mt-15'>
                            <button onClick={handleverify} className='text-xl text-white p-2 bg-blue-600 rounded-full max-w-md w-full hover:cursor-pointer'>Verify OTP</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OTP
