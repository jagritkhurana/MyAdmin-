import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterContextProvider, RouterProvider } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout.tsx'
import Home from './Components/Home/Home.tsx'
import { Provider } from 'react-redux'
import { store } from './App/Store/Store.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout />
    ),
    children: [
      {
        index: true,
        element: <Home />

      },
      {
        path: '/Home',
        element: <Home />
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
     <RouterProvider router={router} />
     <Toaster />
    </Provider>
  </StrictMode>,
)
