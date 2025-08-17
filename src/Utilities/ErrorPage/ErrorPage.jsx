import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Something Went Wrong</h1>
        <Link to="/">
          <button className="mt-4 bg-blue-950 text-white px-5 py-2 border-2">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
