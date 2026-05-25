
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'



function Layout() {
  return (
    <>
      <div className=' flex overflow-hidden h-screen'>
        <div className='w-64  min-w-64 shrink-0  bg-blue-800 text-white'>
          <Sidebar />
        </div>
        <div className=' flex-1 flex flex-col overflow-hidden'>
          <div className='bg-white text-black  h-15'>
            <Header />
          </div>
          <div className='bg-stone-200  flex-1  overflow-y-auto overflow-x-hidden'>
            <Outlet />
          </div>
        </div>

      </div>
    </>

  )
}

export default Layout
