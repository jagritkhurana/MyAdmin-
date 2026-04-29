
localStorage.setItem("users", JSON.stringify([
  { email: "user@gmail.com", password: "1234" },
  { email: "admin@gmail.com", password: "1234" }
]))
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout.tsx'
import Home from './Components/Home/Home.tsx'
import Login from './Components/Auth/Login/Login.tsx'
import Forgotpass from './Components/Auth/Forgotpass/Forgotpass.tsx'
import OTP from './Components/Auth/OTP/OTP.tsx'
import { Provider } from 'react-redux'
import Resetpass from './Components/Auth/Resetpass/Resetpass.tsx'
// import { store } from './App/Store/Store.ts'
import UserMangement from './Components/UserManagement/UserMangement.tsx'
import Support from './Components/SupportAndQuery/Support.tsx'
import Notification from './Components/Notification/Notification.tsx'
import Static from './Components/StaticContent/Static.tsx'
import Subscription from './Components/Subscription/Subscription.tsx'
import Transaction from './Components/Transaction/Transaction.tsx'
import MasterData from './Components/Masterdata/MasterData.tsx'
import Protected from './Protected.tsx'
import { persistor, store } from './App/Store/Store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import Truck from './Components/TruckManagement/Truck.tsx'

const router = createBrowserRouter([
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Forgotpass',
    element: <Forgotpass />
  },
  {
    path: '/OTP',
    element: <OTP />
  },
  {
    path: '/Resetpass',
    element: <Resetpass />
  },
  {
    path: '/',
    element: (
      <Protected>
        <Layout />
      </Protected>
    ),
    children: [
      {
        index: true,
        element: <Home />

      },
      {
        path: '/Home',
        element: <Home />
      },
      {
        path: '/UserManagement',
        element: <UserMangement />
      },
      {
        path: '/TruckManagement',
        element: <Truck/>
      },
      {
        path: '/Support',
        element: <Support />
      },
      {
        path: '/Notification',
        element: <Notification />
      },
      {
        path: '/Static',
        element: <Static />
      },
      {
        path: '/Subscription',
        element: <Subscription />
      },
      {
        path: '/Transaction',
        element: <Transaction />
      },
      {
        path: '/MasterData',
        element: <MasterData />
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
