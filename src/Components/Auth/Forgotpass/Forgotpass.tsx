import React from 'react'
import { Mail, ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { getItem,setItem } from '../../Utilities/Items'


function Forgotpass() {

    const[email,setemail]=useState("")
    const naviagte=useNavigate()

    type user={
        email:string,
        password:string,
    }

    const genrateOTP=():string=>{
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    const handlesubmit=(e:React.FormEvent)=>{
        e.preventDefault()

        const users=getItem<user[]>("users")||[]

        const user=users.find((u)=>u.email===email)

        if(!user){
            toast.error("Invalid credentials")
            return
        }
        const otp=genrateOTP();

        console.log("your OTP is: " ,otp );
        
        setItem("OTPdata",{
            email,
            otp
            
        })

        toast.success("OTP issued pls check console")
        naviagte('/OTP', {state:{email}})

    }

    
    return (
        < >
        <form onSubmit={handlesubmit}>
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:block md:w-1/2 h-screen p-5'>
                    <div className=' md:rounded-2xl w-full h-[99%] overflow-hidden'>
                        <img className=' md:w-full h-full object-cover' src="https://www.mccombdiesel.com/assets/images/focal-lg.jpg" alt="photo" />
                    </div>
                </div>

                <div className='md:w-1/2 h-screen flex justify-center items-center relative'>
                    <div className='md:flex gap-2 items-center cursor-pointer top-6 left-6 absolute m-10'>
                        <ArrowLeft size={22} />
                        <p className='text-lg'>Back</p>
                    </div>
                    <div className='md:flex flex-col justify-center items-center relative'>

                        <div className='md: flex text-4xl p-2 gap-2 font-bold '> Forgot password</div>
                        <div className='md:p-2'>Please enter your e-mail address to receive a  </div>
                        <div className='md:-mt-2'>verification code </div>
                        <div className='relative md:relative w-full max-w-md mt-5'>
                            <input type="email"
                                placeholder='Email Address'
                                onChange={(e)=>setemail(e.target.value)}
                                className=' border p-3 rounded-xl font-bold w-full max-w-md '
                            />
                            <Mail className='absolute md:absolute right-3 top-1/2 -translate-y-1/2 text-gray-500' size={18} />
                        </div>

                        <div className='w-75 max-w-md mt-15'>
                            <button className='text-xl text-white p-2 bg-blue-600 rounded-full max-w-md w-full hover:cursor-pointer'>Continue</button>
                        </div>
                    </div>
                </div>

            </div>
            </form>
        </>

    )
}

export default Forgotpass
