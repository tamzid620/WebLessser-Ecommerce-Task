import React from 'react';
import { Outlet } from 'react-router';
import UserNavbar from '../../../Components/Shared/UserShared/UserNavbar/UserNavbar';
import UserFooter from '../../../Components/Shared/UserShared/UserFooter/UserFooter';

const UserLayout = () => {
    return (
        <div>
          <UserNavbar/>
            <Outlet />
            <UserFooter/>
        </div>
    );
};

export default UserLayout;