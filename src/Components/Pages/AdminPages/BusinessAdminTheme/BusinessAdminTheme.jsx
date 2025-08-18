import React, { useState } from "react";
import {
  getActiveTheme,
  setActiveTheme,
} from "../../../../Utilities/config/themeManager";
import { Link } from "react-router";

const BusinessAdminTheme = () => {
  const [activeTheme, setTheme] = useState(getActiveTheme());

  const handleActivate = (theme) => {
    setActiveTheme(theme);
    setTheme(theme);
  };

  return (
    <div>
      <h1 className="font-semibold text-xl text-center uppercase">
        Business Admin Theme
      </h1>
      <div className="flex gap-5 mt-10">
        {/* Theme One -------------------- */}
        <div className="border w-[300px] text-center">
          <h1 className="flex justify-center py-5 uppercase">
            UserHomePage - <p className="font-bold">[ One ]</p>
          </h1>
          {/* Button setting  */}
          {activeTheme === "one" ? (
            <button className="bg-red-500 text-white py-2 px-4 rounded my-5">
              Inactive
            </button>
          ) : (
            <button
              onClick={() => handleActivate("one")}
              className="bg-blue-500 text-white py-2 px-4 rounded my-5"
            >
              Active
            </button>
          )}
        </div>
        {/* Theme Two ---------------------- */}
        <div className="border w-[300px] text-center">
          <h1 className="flex justify-center py-5 uppercase">
            UserHomePage - <p className="font-bold">[ Two ]</p>
          </h1>
          {/* Button setting  */}
          {activeTheme === "two" ? (
            <button className="bg-red-500 text-white py-2 px-4 rounded my-5">
              Inactive
            </button>
          ) : (
            <button
              onClick={() => handleActivate("two")}
              className="bg-blue-500 text-white py-2 px-4 rounded my-5"
            >
              Active
            </button>
          )}
        </div>
      </div>
      {/* back to home button  */}
      <div className="flex justify-center mt-40">
        <Link to="/">
          <button className="mt-4 bg-blue-950 text-white px-5 py-2 border-2">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BusinessAdminTheme;
