import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import Contact from './routes/Contact.jsx'
import Error from './routes/Error'
import Home from './routes/Home.jsx'
import ContactDetails from './routes/ContactDetails'

// const router = createBrowserRouter([
//  {
//    path: "/",
//    element: <Home />
//  },
//  {
//    path: "/contact",
//    element: <Contact />
//  }
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // pagina de error
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      // nested routes - identificador unico - dynamic routes
      {
        path: '/contact/:id',
        element: <ContactDetails /> 
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
