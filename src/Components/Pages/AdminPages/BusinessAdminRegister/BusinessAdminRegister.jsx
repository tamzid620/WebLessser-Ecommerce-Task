import React, { useState } from "react";
import coverPhoto from "../../../../assets/images/coverPhoto-removebg-preview.png";
import showPasswordIcon from "../../../../assets/icons/show-password-icon-18.jpg";
import hidePasswordIcon from "../../../../assets/icons/show-password-icon-19.jpg";
import { Link } from "react-router";
import axios from "axios";
import { BaseUrl } from "../../../../Utilities/config/BaseUrl";
import Swal from "sweetalert2";

const BusinessAdminRegister = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    if (!e.target.value) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  // handle submit button -------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }
    const formData = {
      firstName,
      lastName,
      userName,
      phoneNo,
      email,
      password,
    };

    console.log("Form Data Submitted: ", formData);
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
      setConfirmPassword("");
      setTimeout(() => {
        window.location.href = "/business-login";
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
    <div className="">
      <div className="relative">
        <img
          className="relative w-full h-screen px-60 "
          src={coverPhoto}
          alt=""
        />
        <div className="absolute top-0 w-full bg-black opacity-70 inset-0" />
      </div>
      {/* Login Card  */}
      <div className={`  absolute inset-0 flex justify-center items-center`}>
        <div className="w-full max-w-md md:max-w-xl relative">
          {/* form section  */}
          <form
            onSubmit={handleSubmit}
            className="bg-black drop-shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4 shadow-lg shadow-sky-500 border-t-2 border-sky-500 "
          >
            <h1
              className={` mb-5 text-center text-2xl font-bold uppercase text-white `}
            >
              Business Admin Register
            </h1>
            {/* FirstName & LastName field  */}
            <div className="flex gap-5 mb-4">
              <div className=" w-full">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="firstName"
                >
                  Enter First Name
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
              <div className="w-full">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="lastName"
                >
                  Enter Last Name
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
            </div>

            {/* Username & Phone Number */}
            <div className="flex gap-5 mb-4">
              <div className="w-full">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="userName"
                >
                  Enter Username
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
              <div className="w-full">
                <label
                  className="block text-white text-sm font-bold mb-2"
                  htmlFor="phoneNo"
                >
                  Enter Phone Number
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
            </div>
            {/* email field  */}
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="username"
              >
                Enter Email
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
              <span className="text-red-500 font-semibold text-lg">
                {emailError}
              </span>
            </div>
            {/* password field  */}
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  {showPassword ? (
                    <img
                      className="w-[30px] h-[30px]"
                      src={showPasswordIcon}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[30px] h-[30px]"
                      src={hidePasswordIcon}
                      alt=""
                    />
                  )}
                </span>
              </div>
              <span className="text-red-600">{passwordError}</span>
            </div>
            {/* confirm password field */}
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black bg-white"
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <span
                  onClick={handleShowConfirmPassword}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <img
                      className="w-[30px] h-[30px]"
                      src={showPasswordIcon}
                      alt=""
                    />
                  ) : (
                    <img
                      className="w-[30px] h-[30px]"
                      src={hidePasswordIcon}
                      alt=""
                    />
                  )}
                </span>
              </div>
              <span className="text-red-600">{confirmPasswordError}</span>
            </div>

            {/* Register button  */}
            <div className="flex items-center justify-between">
              <button
                className={` w-full justify-center  mt-4 flex-1 sm:flex-none text-center flex items-center bg-sky-500 text-black text-xl px-4 py-2 rounded-sm border-2 border-black shadow-[3px_3px_0px_0px_#0ea5e9] hover:shadow-[1px_1px_0px_0px_#0ea5e9] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold uppercase  `}
                type="submit"
              >
                Register
              </button>
            </div>
            {/* home button-------------  */}

            <h1 className="mt-5  text-sky-500 hover:text-sky-600 font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline flex justify-between">
              <Link className=" underline" to="/">
                Return Home
              </Link>
              <Link className=" underline" to="/business-login">
                already have account? Please Login
              </Link>
            </h1>
            {/* <hr className="my-5 border border-sky-500" />
                               <h1 className="flex justify-center items-center text-white">
                                   copyright ©{" "}
                                   <img className="w-[120px] ms-2" src={brandLogo} alt="" />
                               </h1> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessAdminRegister;
