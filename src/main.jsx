import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import UserHomeOne from './Components/Pages/UserPages/UserHomeOne/UserHomeOne.jsx';
import UserHomeTwo from './Components/Pages/UserPages/UserHomeTwo/UserHomeTwo.jsx';
import ErrorPage from './Utilities/ErrorPage/ErrorPage.jsx';
import UserLayout from './Utilities/Layout/UserLayout/UserLayout.jsx';
import SuperAdminLogin from './Components/Pages/AdminPages/SuperAdminLogin/SuperAdminLogin.jsx';
import BusinessAdminLogin from './Components/Pages/AdminPages/BusinessAdminLogin/BusinessAdminLogin.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <UserHomeOne />,
      },
      {
        path: "/home-two",
        element: <UserHomeTwo />,
      },
      {
        path: "/super-adminpanel-login",
        element: <SuperAdminLogin />,
      },
      {
        path:"/business-adminpanel-login",
        element: <BusinessAdminLogin />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
