import React, { useState } from "react";
import showPasswordIcon from "../../../../assets/icons/show-password-icon-18.jpg";
import hidePasswordIcon from "../../../../assets/icons/show-password-icon-19.jpg";
import { Link } from "react-router";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/config/BaseUrl";
import Swal from "sweetalert2";

const SuperCustomerAdd = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [subDomain, setSubDomain] = useState("");
  const [subDomainError, setSubDomainError] = useState("");
  const [isCheckingDomain, setIsCheckingDomain] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handlePhoneNoChange = (e) => setPhoneNo(e.target.value);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleSubDomainChange = async (e) => {
  const value = e.target.value.trim().toLowerCase();
  setSubDomain(value);

  if (!value) {
    setSubDomainError("Subdomain is required");
    return;
  }

  setIsCheckingDomain(true);
  try {
    // fetch all business admins
    const res = await axios.get(BaseUrl("business-admin-users/all-business-admin"));

    if (res.data && Array.isArray(res.data)) {
      // check if any user already has this subdomain
      const exists = res.data.some(
        (user) =>
          user.subDomain?.toLowerCase() === value ||
          user.subDomain?.toLowerCase() === `${value}.com`
      );

      if (exists) {
        setSubDomainError("This subdomain is already taken");
      } else {
        setSubDomainError("");
      }
    } else {
      setSubDomainError("Unexpected response from server");
    }
  } catch (err) {
    console.error(err);
    setSubDomainError("Error checking subdomain");
  }

  setIsCheckingDomain(false);
};


  // handle submit button -------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      userName,
      phoneNo,
      email,
      password,
      subDomain: `${subDomain}.com`
    };

    const res = await axios.post(
      BaseUrl("business-admin-users/register"),
      formData
    );

    if (res.status === 201) {
      Swal.fire({
        title: "Registration Successful!",
        icon: "success",
        draggable: true,
      });
      setFirstName("");
      setLastName("");
      setUserName("");
      setPhoneNo("");
      setEmail("");
      setPassword("");
      setSubDomain("");
      setTimeout(() => {
        window.location.href = "super-customer";
      }, 1500);
    } else {
      Swal.fire({
        title: res.data.message,
        icon: "error",
        draggable: true,
      });
    }
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-5 text-center">New Customer</h1>
      <div className="flex justify-center">
        <div className="w-full mx-80">
          {/* form section  */}
          <form onSubmit={handleSubmit} className="">
            <h1
              className={` mb-5 text-center text-2xl font-bold uppercase text-white `}
            ></h1>
            {/* FirstName  field  */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                Enter First Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="firstName"
                type="text"
                name="firstName"
                placeholder="Your First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            {/*  LastName field  */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Enter Last Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
            {/* Username field */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="userName"
              >
                Enter Username:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="userName"
                type="text"
                name="userName"
                placeholder="Your Username"
                value={userName}
                onChange={handleUserNameChange}
                required
              />
            </div>
            {/* Phone Number field */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="phoneNo"
              >
                Enter Phone Number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="phoneNo"
                type="number"
                name="phoneNo"
                placeholder="Your Phone Number"
                value={phoneNo}
                onChange={handlePhoneNoChange}
                required
              />
            </div>
            {/* email field  */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="username"
              >
                Enter Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            {/* password field  */}
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                  id="password"
                  type="text"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
            </div>
            {/* Subdomain field */}
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="subDomain"
              >
                Your Sub-Domain:
              </label>
              <div className="flex items-center">
                <input
                  className="shadow appearance-none border rounded-l w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                  id="subDomain"
                  type="text"
                  name="subDomain"
                  placeholder="Choose your subdomain"
                  value={subDomain}
                  onChange={handleSubDomainChange}
                  required
                />
                <span className="bg-gray-200 px-3 py-2 rounded-r text-black">
                  .com
                </span>
              </div>
              {isCheckingDomain ? (
                <span className="text-yellow-400">
                  Checking availability...
                </span>
              ) : (
                <span className="text-red-500">{subDomainError}</span>
              )}

              {/* Show preview */}
              {subDomain && !subDomainError && (
                <p className="text-green-400 mt-1">
                  Your Sub Domain: https://{subDomain}.com
                </p>
              )}
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

export default SuperCustomerAdd;
