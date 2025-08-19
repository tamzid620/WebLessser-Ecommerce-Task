import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css' ;

// imported component ---------------------
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
import BusinessAdminProductList from './Components/Pages/AdminPages/BusinessAdminProductList/BusinessAdminProductList.jsx';
import BusinessProductAdd from './Components/Pages/AdminPages/BusinessAdminProductList/BusinessProductAdd.jsx';

// 🔹 detect subdomain
const host = window.location.hostname; 
// e.g. "zubair123.localhost"
let subDomain = null;

if (host.includes(".localhost")) {
  subDomain = host.split(".")[0]; 
}

const router = createBrowserRouter([
  // user Layout ------------------------
  {
    path: "/",
    element: <UserLayout  subDomain={subDomain}/>,
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
    element: <SuperAdminLayout subDomain={subDomain}/>,
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
    element: <BusinessAdminLayout subDomain={subDomain}/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <BusinessAdminDashboardHome />,
      },
      {
        path: "business-product",
        element: <BusinessAdminProductList />,
      },
      {
        path: "business-product-add",
        element: <BusinessProductAdd />,
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
