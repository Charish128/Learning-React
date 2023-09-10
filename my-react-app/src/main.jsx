import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ChangeNewPass from './pages/changeNewPass.jsx'
import ChangeResetPass from './pages/resetPass.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router =createBrowserRouter([
  {
    path:"/",
    element: <div>Hello world</div>,
  },
  {
    path:"/changeNewPass",
    element: <ChangeNewPass/>
  },
  {
    path:"/resetPass",
    element: <ChangeResetPass/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
