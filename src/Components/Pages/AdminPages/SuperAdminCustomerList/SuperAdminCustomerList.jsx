import React from 'react';
import SuperCustomerTable from './SuperCustomerTable';

const SuperAdminCustomerList = () => {
    return (
        <div>
            <h1 className="font-semibold text-xl text-center uppercase">
                Super Admin Customer List
            </h1>
            <div className='mt-10'>
                <SuperCustomerTable />
            </div>
        </div>
    );
};

export default SuperAdminCustomerList;