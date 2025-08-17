import React from 'react';
import { Outlet, useLocation } from 'react-router';
import UserNavbar from '../../../Components/Shared/UserShared/UserNavbar/UserNavbar';
import UserFooter from '../../../Components/Shared/UserShared/UserFooter/UserFooter';

const UserLayout = () => {

    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes('/super-login') ||
        location.pathname.includes('/business-login') ||
        location.pathname.includes('/business-register')

    return (
        <div>
          {noHeaderFooter ||  <UserNavbar/> }
            <Outlet />
            {noHeaderFooter ||  <UserFooter/> }
        </div>
    );
};

export default UserLayout;