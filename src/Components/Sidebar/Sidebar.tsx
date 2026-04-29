import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (

        <>
            <nav className='flex flex-col h-full py-6'>
                <div className='mb-2 flex justify-center'>
                    <img
                        src="https://hamoversandpackers.com/wp-content/uploads/2026/04/cropped-Orange-Blue-Express-Delivery-Logistic-Logo-2.png"
                        alt="Logo"
                        className='w-28 mt-0 mb-2 h-28'
                    />
                </div>

                <div >
                    <ul className='flex flex-col gap-2'>
                        <li >
                            <NavLink to='/Home' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=uWyVYfqqdYxW&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=uWyVYfqqdYxW&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Dashboard</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/UserManagement' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=102261&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=102261&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>User Management</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/TruckManagement' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=9341&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=9341&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Truck Management</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/Support' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=1FLUMwH6jicu&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=1FLUMwH6jicu&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Support & Queries Management</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/Notification' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=QWRWV1Dwt5Ux&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=QWRWV1Dwt5Ux&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Notifications Management</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/Static' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=2IOiiD9eG7ET&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=2IOiiD9eG7ET&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Static Content Management</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/Subscription' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=4GWqVGDFpjf1&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=4GWqVGDFpjf1&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Subscription Management</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/Transaction' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=cieembQ3RPaA&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=cieembQ3RPaA&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Transaction Management</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        <li >
                            <NavLink to='/MasterData' >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-3 p-2  px-4 ${isActive ? "bg-white text-blue-700" : "text-white hover:bg-blue-500"} `}
                                    >
                                        <img
                                            src={isActive ?
                                                "https://img.icons8.com/?size=100&id=8322&format=png&color=1D4ED8"

                                                : "https://img.icons8.com/?size=100&id=8322&format=png&color=FFFFFF"
                                            }
                                            className='w-5 h-5'

                                        />
                                        <p className='text-sm'>Master Data</p>
                                    </div>
                                )}





                            </NavLink>

                        </li>
                        

                    </ul>

                </div>
            </nav>
        </>

    )
}

export default Sidebar
