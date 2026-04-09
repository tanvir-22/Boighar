import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {router} from './Router/router'
import { RouterProvider } from 'react-router'
import BookProvider from './Context/BookProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
   <BookProvider>
      <RouterProvider router={router} >
       
      </RouterProvider>
       <ToastContainer />
   </BookProvider>
)
