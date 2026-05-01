
import { ArrowLeft, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { getItem, setItem } from '../../Utilities/Items'


function Resetpass() {

    const [password, setpassword] = useState("")
    const [confirmpass, setconfirmpass] = useState("")
    const navigate = useNavigate()
    const [showpassword, setShowpassword] = useState(false)

    type user = {
        email: string,
        password: string,
    }

    const handlereset = () => {
        if (password !== confirmpass) {
            toast.error("Password does not match")
            return
        }
        const otpdata = getItem<{ email: String, otp: String }>("OTPdata")

        if (!otpdata) {
            toast.error("session expired")
            return
        }

        let users = getItem<user[]>('users') || []

        users = users.map((u) => {
            if (u.email === otpdata.email) {
                return { ...u, password: password }
            }
            return u
        })
        setItem("users", users)
        localStorage.removeItem("otpdata")
        toast.success("Password updated")
        navigate('/Login')
    }




    return (
        < >
            <div className='flex flex-col md:flex-row'>
                <div className=' hidden md:block md:w-1/2 h-screen p-5'>
                    <div className='md:rounded-2xl w-full h-[99%] overflow-hidden'>
                        <img className=' w-full h-full object-cover' src="https://d29qvoplt93a6w.cloudfront.net/efs/wp/domains/www.exceltruckgroup.com/wp-content/uploads/2026/01/ws_57x_72hr_sleeper_grey_08.jpg" alt="photo" />
                    </div>
                </div>

                <div className='md:w-1/2 h-screen flex justify-center items-center relative'>
                    <div className='md:flex gap-2 items-center cursor-pointer top-6 left-6 absolute m-10'>
                        <ArrowLeft size={22} />
                        <p className='text-lg'>Back</p>
                    </div>
                    <div className='md: flex flex-col justify-center items-center relative'>

                        <div className=' md:flex text-4xl p-2 gap-2 font-bold '> Reset your password</div>
                        <div className='md:p-2'>Please enter your e-mail address to receive a  </div>
                        <div className='md:-mt-2'>verification code </div>
                        <div className='relative md:relative w-full max-w-md mt-5'>
                            <input  type={showpassword ? "text" : "password"}
                                placeholder='Set new password'
                                onChange={(e) => { setpassword(e.target.value) }}
                                className=' border p-3 rounded-xl font-bold w-full max-w-md '
                            />
                            {showpassword ? (
                                <EyeOff
                                    onClick={() => setShowpassword(false)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    size={18}
                                />
                            ) : (
                                <Eye
                                    onClick={() => setShowpassword(true)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    size={18}
                                />
                            )}
                        </div>
                        <div className='relative md:relative w-full max-w-md mt-5'>
                            <input 
                                type={showpassword ? "text" : "password"}
                                placeholder='Confirm new password'
                                onChange={(e) => { setconfirmpass(e.target.value) }}
                                className=' border p-3 rounded-xl font-bold w-full max-w-md '
                            />
                            {showpassword ? (
                                <EyeOff
                                    onClick={() => setShowpassword(false)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    size={18}
                                />
                            ) : (
                                <Eye
                                    onClick={() => setShowpassword(true)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    size={18}
                                />
                            )}
                        </div>

                        <div className='w-75 max-w-md mt-15'>
                            <button onClick={handlereset} className='text-xl text-white p-2 bg-blue-600 rounded-full max-w-md w-full hover:cursor-pointer'>Continue</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Resetpass
