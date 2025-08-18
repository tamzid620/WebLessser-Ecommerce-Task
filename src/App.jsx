import React from "react";
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getSubdomain } from "./Utilities/config/getSubdomain";
import ErrorPage from "./Utilities/ErrorPage/ErrorPage";
import UserLayout from "./Utilities/Layout/UserLayout/UserLayout";
import UserHomeOne from "./Components/Pages/UserPages/UserHomeOne/UserHomeOne";
import UserHomeTwo from "./Components/Pages/UserPages/UserHomeTwo/UserHomeTwo";
import SuperAdminLogin from "./Components/Pages/AdminPages/SuperAdminLogin/SuperAdminLogin";
import BusinessAdminLogin from "./Components/Pages/AdminPages/BusinessAdminLogin/BusinessAdminLogin";
import BusinessAdminRegister from "./Components/Pages/AdminPages/BusinessAdminRegister/BusinessAdminRegister";
import BusinessAdminLayout from "./Utilities/Layout/AdminLayout/BusinessAdminLayout/BusinessAdminLayout";
import BusinessAdminDashboardHome from "./Components/Pages/AdminPages/BusinessAdminDashboardHome/BusinessAdminDashboardHome";
import BusinessAdminTheme from "./Components/Pages/AdminPages/BusinessAdminTheme/BusinessAdminTheme";
import SuperAdminLayout from "./Utilities/Layout/AdminLayout/SuperAdminLayout/SuperAdminLayout";
import SuperAdminDashboardHome from "./Components/Pages/AdminPages/SuperAdminDashboardHome/SuperAdminDashboardHome";
import SuperAdminCustomerList from "./Components/Pages/AdminPages/SuperAdminCustomerList/SuperAdminCustomerList";
import SuperCustomerAdd from "./Components/Pages/AdminPages/SuperAdminCustomerList/SuperCustomerAdd";

const App = () => {
  const subdomain = getSubdomain();

  return (
    <BrowserRouter>
      <Routes>
        {subdomain ? (
          <>
            {/* // User  Layout ------------------------ */}

            <Route path="/*" element={<UserLayout />}>
              <Route index element={<UserHomeOne />} />
              <Route path="home-two" element={<UserHomeTwo />} />
              <Route path="super-login" element={<SuperAdminLogin />} />
              <Route path="business-login" element={<BusinessAdminLogin />} />
              <Route
                path="business-register"
                element={<BusinessAdminRegister />}
              />
            <Route path="*" element={<ErrorPage />} />
            </Route>
            {/* // Business Admin Layout ------------------------ */}
            <Route path="/business-dashboard" element={<BusinessAdminLayout />}>
              <Route index element={<BusinessAdminDashboardHome />} />
              <Route path="business-theme" element={<BusinessAdminTheme />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </>
        ) : (
          // Super Admin Layout ------------------------
          <>
            {/*
             <Route path="/*" element={<UserLayout />}>
              <Route index element={<UserHomeOne />} />
              <Route path="home-two" element={<UserHomeTwo />} />
              <Route path="super-login" element={<SuperAdminLogin />} />
              <Route path="business-login" element={<BusinessAdminLogin />} />
              <Route
                path="business-register"
                element={<BusinessAdminRegister />}
              />
              <Route path="*" element={<ErrorPage />} />
            </Route>

            <Route path="/super-dashboard" element={<SuperAdminLayout />}>
              <Route index element={<SuperAdminDashboardHome />} />
              <Route
                path="super-customer"
                element={<SuperAdminCustomerList />}
              />
              <Route path="super-customer-add" element={<SuperCustomerAdd />} />
            </Route>

            <Route path="*" element={<ErrorPage />} /> 
            */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
