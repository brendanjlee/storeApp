import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'

import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'shop',
    element: <Shop />
  },
  {
    path: 'cart',
    element: <Cart /> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
