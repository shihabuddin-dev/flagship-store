import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router";
import router from './routes/routes'
import CartProvider from './provider/CartProvider';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
    </CartProvider>
  </StrictMode>,
)
