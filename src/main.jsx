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
import BusinessAdminDashboardHome from './Components/Pages/AdminPages/BusinessAdminDashboardHome/BusinessAdminDashboardHome.jsx';
import BusinessAdminTheme from './Components/Pages/AdminPages/BusinessAdminTheme/BusinessAdminTheme.jsx';
import SuperAdminDashboardHome from './Components/Pages/AdminPages/SuperAdminDashboardHome/SuperAdminDashboardHome.jsx';
import SuperAdminCustomerList from './Components/Pages/AdminPages/SuperAdminCustomerList/SuperAdminCustomerList.jsx';
import SuperCustomerAdd from './Components/Pages/AdminPages/SuperAdminCustomerList/SuperCustomerAdd.jsx';


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
        path: "/super-login",
        element: <SuperAdminLogin />,
      },
      {
        path:"/business-login",
        element: <BusinessAdminLogin />,
      } ,
      {
        path:"/business-register",
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
        index: true,
        element: <SuperAdminDashboardHome />,
      },
      {
        path: "super-customer",
        element: <SuperAdminCustomerList />,
      },
      {
        path: "super-customer-add",
        element: <SuperCustomerAdd />,
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
        index: true, 
        element: <BusinessAdminDashboardHome />,
      },
      {
        path: "business-theme",
        element: <BusinessAdminTheme />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
