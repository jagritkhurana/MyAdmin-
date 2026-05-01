
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'



function Layout() {
  return (
    <>
      <div className=' flex  h-screen'>
        <div className='w-64 bg-blue-800 text-white'>
          <Sidebar />
        </div>
        <div className=' flex-1 flex flex-col'>
          <div className='bg-white text-black  h-15'>
            <Header />
          </div>
          <div className='bg-stone-200  flex-1 overflow-auto'>
            <Outlet />
          </div>
        </div>

      </div>
    </>

  )
}

export default Layout
