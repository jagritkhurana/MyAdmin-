import { useState } from 'react'
import { Mail, Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/App/Store/Hooks'
import { login } from '@/Features/AuthSlice'
import { getItem, setItem } from '../../Utilities/Items'
import toast from 'react-hot-toast'

function Login() {

  const dispacth = useAppDispatch();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [showpassword, setShowpassword] = useState(true)

  const navigate = useNavigate()

  type user = {
    email: string,
    password: string,
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let users = getItem<user[]>("users");



    if (!users) {
      users = [
        { email: "user@gmail.com", password: "1234" },
        { email: "admin@gmail.com", password: "1234" }
      ]
      setItem("users", users)
    }
    const user = users.find((u) => (
      u.email === email && u.password === password
    ))

    if (user) {
      dispacth(login({
        email: user.email,
        UserType: user.email === "admin@gmail.com" ? "Admin" : "User"
      }));
      toast.success("Successfully logged in ")
      navigate("/Home")
    } else {
      toast.error("Invalid credentials")
      console.log(users);


    }


  }




  return (
    < >
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row'>
          <div className=' hidden md:block md:w-1/2 h-screen p-5'>
            <div className=' md:rounded-2xl w-full h-full overflow-hidden'>
              <img className=' md:w-full h-full object-cover' src="https://w0.peakpx.com/wallpaper/213/31/HD-wallpaper-trucks-kenworth.jpg" alt="photo" />
            </div>
          </div>


          <div className='md:w-1/2 h-screen flex justify-center items-center'>

            <div className='md:flex flex-col justify-center items-center '>

              <div className=' md:flex text-4xl p-2 gap-2 '> Sign in to <p className='font-bold text-blue-700'>Movers</p></div>
              <div className='md:p-2'>Welcome to Movers please enter your login details </div>
              <div className='-mt-2 md:-mt-2'>below to use the app </div>
              <div className=' relative md:relative w-full max-w-md mt-5'>
                <input type="email"
                  placeholder='Email Address'
                  onChange={(e) => { setemail(e.target.value) }}
                  className=' border p-3 rounded-xl font-bold w-full max-w-md '
                />
                <Mail className='absolute md:absolute right-3 top-1/2 -translate-y-1/2 text-gray-500' size={18} />
              </div>
              <div className=' relative md:relative w-full max-w-md mt-5'>
                <input 
                  type={showpassword ? "text" : "password"}
                  placeholder='Password'
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
              <div className='md:w-full max-w-md mt-1 flex justify-end'>
                <Link to={'/Forgotpass'} className=' opacity-80 text-gray-600 font-bold mr-0' >Forgot password?</Link>
              </div>
              <div className='md:w-75 max-w-md mt-15'>
                <button className='text-xl text-white p-2 bg-blue-600 rounded-full max-w-md w-full hover:cursor-pointer'>Login</button>
              </div>

            </div>
          </div>

        </div>
      </form>

    </>
  )
}

export default Login
