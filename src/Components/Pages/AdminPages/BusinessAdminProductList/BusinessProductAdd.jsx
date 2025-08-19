import axios from "axios";
import React, { useState } from "react";
import { BaseUrl } from "../../../../Utilities/config/BaseUrl";
import Swal from "sweetalert2";

const BusinessProductAdd = () => {
  //   const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [warranty, setWarranty] = useState("");
  const [description, setDescription] = useState("");

  //     const handleIdChange = (e) => {
  //     setId(e.target.value);
  //   };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleWarrantyChange = (e) => {
    setWarranty(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // handle submit button -------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("businessAdminUser");
    if (!storedUser) {
      alert("User not logged in!");
      return;
    }

    const { id: userId } = JSON.parse(storedUser);

    const productData = { title, price, warranty, description };

    const res = await axios.post(
      BaseUrl(`business-admin-users/add-product/${userId}`),
      productData
    );

    if (res.status === 200) {
      Swal.fire({
        title: "Product added successfully!",
        icon: "success",
        draggable: true,
      });
      setTimeout(() => {
        window.location.href = "business-product";
      }, 1500);
      //   setId("");
      setTitle("");
      setPrice("");
      setWarranty("");
      setDescription("");
    } else {
      Swal.fire({
        title: "Something went wrong!",
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-5 text-center">New Product</h1>
      <div className="flex justify-center">
        <div className="w-full mx-80">
          {/* form section  */}
          <form onSubmit={handleSubmit} className="">
            <h1
              className={` mb-5 text-center text-2xl font-bold uppercase text-white `}
            ></h1>
            {/* id  field  */}
            {/* <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="id"
              >
                Enter Id:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="id"
                type="text"
                name="id"
                placeholder="Your Id"
                value={id}
                onChange={handleIdChange}
                required
              />
            </div> */}
            {/* title  field  */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="title"
              >
                Enter Product Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="title"
                type="text"
                name="title"
                placeholder="Your Product Name"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>
            {/*  price field  */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="price"
              >
                Enter Product Price:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="price"
                type="number"
                name="price"
                placeholder="Your Product Price"
                value={price}
                onChange={handlePriceChange}
                required
              />
            </div>
            {/* Warranty field */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="warranty"
              >
                Enter Warranty:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="warranty"
                type="text"
                name="warranty"
                placeholder="Your Warranty"
                value={warranty}
                onChange={handleWarrantyChange}
                required
              />
            </div>
            {/* Description field */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="description"
              >
                Enter Description:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="description"
                type="number"
                name="description"
                placeholder="Your Description"
                value={description}
                onChange={handleDescriptionChange}
                required
              />
            </div>

            {/* Create button  */}
            <div className="flex items-center justify-between">
              <button
                className={` w-full justify-center  mt-4 flex-1 sm:flex-none text-center flex items-center bg-sky-500 text-black text-xl px-4 py-2 rounded-sm border-2 border-black shadow-[3px_3px_0px_0px_#0ea5e9] hover:shadow-[1px_1px_0px_0px_#0ea5e9] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase  `}
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessProductAdd;
