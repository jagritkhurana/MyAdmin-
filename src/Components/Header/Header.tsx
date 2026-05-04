
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/App/Store/Hooks'
import { logout } from '@/Features/AuthSlice'
import { useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function Header() {

  const[open,setopen]=useState(false)
  const navigate=useNavigate()
  const dispatch=useAppDispatch()
  const location=useLocation()
  const[openLogout,setopenLogout]=useState(false)
  const{user,logout:Auth0logout,isAuthenticated}=useAuth0()

  const routeTitles:any={
    "/Home":"Dashboard",
    "/UserManagement":"User Management",
    "/TruckManagement":"Truck Management",
    "/Support":"Support & Queries Management ",
    "/Notification":"Notifications Management",
    "/Static":"Static Content Management",
    "/Subscription":"Subscription Management",
    "/Transaction":"Transaction Management",
    "/MasterData":"Master Data"
  }

  
  return (
    <div className='flex justify-between items-center relative'>
      <div><h1 className='text-3xl hover:underline font-semibold m-2 pl-5'>{routeTitles[location.pathname]||"Dashboard"} </h1></div>
      <div className='relative'>
        <div onClick={()=>setopen(!open)}
        className='flex gap-2 w-auto h-auto rounded-lg cursor-pointer border shadow-2xl p-2 mr-5 mt-2'
        >
          <img 
          src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" 
          alt="Pic"
          className='w-6 h-6 rounded-full '
          />
          <span className='font-medium'>Jagrit Khurana</span>

        </div>
        {
          open&&(
            <div className='absolute r-0 mt-2 w-40 bg-white rounded-xl shadow-lg border'>
              <button
               onClick={()=>{
                // dispatch(logout())
                // localStorage.clear()
                // navigate('/Login')
                setopenLogout(true)
               }}
               className='text-lg p-2 bg-white w-full text-left text-black px-4 py-2 hover:bg-gray-600 hover:text-black'>
                Logout
              </button>

            </div>
          )
        }
        {
          openLogout&&(
            <div className='fixed flex flex-col justify-center bg-white/20 items-center inset-0 backdrop-blur-md z-10'>
              <div className='bg-white p-5 rounded-lg shadow-xl '>

              <div>
                <p className='text-lg font-semibold text-black'>Are you sure that you want to <span className='text-lg font-semibold text-red-500'>Logout ?</span></p>
              </div>
              <div className='flex gap-3 mt-4 justify-center items-center'>
                <button className='px-3 py-1 rounded-lg bg-red-500 border border-red-500 hover:cursor-pointer'
                onClick={()=>{
                  console.log(user)
                  dispatch(logout())
                  
                  localStorage.clear()
                  if(isAuthenticated){
                    Auth0logout({
                    logoutParams:{
                      returnTo:window.location.origin +'/Login',
                      
                    }
                  })
                  }else{
                  navigate('/Login')
                  }
                  
                }}
                >
                  Yes
                </button>
                <button className='px-3 py-1 rounded-lg bg-blue-500 border border-blue-500 hover:cursor-pointer'
                onClick={()=>{
                  setopenLogout(false)
                  setopen(false)
                }}
                >
                  No
                </button>

              </div>

                  </div>

            </div>
          )
        }

        
      </div>
    </div>
  )
}

export default Header
