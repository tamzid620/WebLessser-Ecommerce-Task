import React from "react";
import { Outlet, useLocation } from "react-router";
import UserNavbar from "../../../Components/Shared/UserShared/UserNavbar/UserNavbar";
import UserFooter from "../../../Components/Shared/UserShared/UserFooter/UserFooter";
import { getActiveTheme } from "../../config/themeManager";
import UserHomeOne from "../../../Components/Pages/UserPages/UserHomeOne/UserHomeOne";
import UserHomeTwo from "../../../Components/Pages/UserPages/UserHomeTwo/UserHomeTwo";

const UserLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("/super-login") ||
    location.pathname.includes("/business-login") ||
    location.pathname.includes("/business-register");

  const activeTheme = getActiveTheme();

  return (
    <div>
      {noHeaderFooter || <UserNavbar />}

      {location.pathname === "/" ? (
        activeTheme === "one" ? (
          <UserHomeOne />
        ) : (
          <UserHomeTwo />
        )
      ) : (
        <Outlet />
      )}

      {noHeaderFooter || <UserFooter />}
    </div>
  );
};

export default UserLayout;
