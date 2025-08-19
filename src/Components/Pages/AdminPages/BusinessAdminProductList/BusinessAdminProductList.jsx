import React from 'react';
import BusinessAdminProductTable from './BusinessAdminProductTable';

const BusinessAdminProductList = () => {
    return (
     <div>
            <h1 className="font-semibold text-xl text-center uppercase">
                Business Admin Product List
            </h1>
            <div className='mt-10'>
                <BusinessAdminProductTable  />
            </div>
        </div>
    );
};

export default BusinessAdminProductList;