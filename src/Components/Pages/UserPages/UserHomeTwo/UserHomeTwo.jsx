import axios from 'axios';
import React from 'react';
import { BaseUrl } from '../../../../Utilities/config/BaseUrl';

const UserHomeTwo = () => {

  const [allProducts, setAllProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const businessAdminUser = localStorage.getItem("businessAdminUser");
      const { id: businessId } = JSON.parse(businessAdminUser);
      const res = await axios.get(
        BaseUrl(`business-admin-users/${businessId}`)
      );
      setAllProducts(res.data.product || []);
    };

    fetchProducts();
  }, []);

    return (
       <div className="flex justify-center py-10 text-3xl uppercase ">
      <div>
        <h1 className="flex justify-center">
          UserHomePage - <p className="font-bold">[ Two ]</p>
        </h1>
        <div className="mt-10 flex gap-10">
          {
            allProducts.map((product,) => (
              <div key={product._id} className="border p-4 mb-4">
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p>Price: {product.price} $</p>
                <p>Warranty: {product.warranty}</p>
                <p>Description: {product.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    );
};

export default UserHomeTwo;