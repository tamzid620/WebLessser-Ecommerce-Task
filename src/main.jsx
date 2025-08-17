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
import BusinessAdminRegister from './Components/Pages/AdminPages/BusinessAdminRegister/BusinessAdminRegister.jsx';
import SuperAdminLayout from './Utilities/Layout/AdminLayout/SuperAdminLayout/SuperAdminLayout.jsx';
import BusinessAdminLayout from './Utilities/Layout/AdminLayout/BusinessAdminLayout/BusinessAdminLayout.jsx';


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
      } ,
      {
        path:"/business-adminpanel-register",
        element: <BusinessAdminRegister />,
      }
    ],
  },
  // Super Admin Layout ------------------------
  {
    path: "/super-dashboard",
    element: <SuperAdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/super-dashboard",
        element: <SuperAdminLayout />,
      },
    ],
  },
  // Business Admin Layout ------------------------
  {
    path: "/business-dashboard",
    element: <BusinessAdminLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/business-dashboard",
        element: <BusinessAdminLayout />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
