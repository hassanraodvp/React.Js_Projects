import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center h-full space-y-5">
        <h1 className="text-6xl font-semibold text-red-500">Error 404</h1>
        <h3 className="text-lg text-gray-600">
          Oops! Looks like you're lost.
        </h3>
        <p className=" text-gray-600">
          Let's get you back{" "}
          <Link to="/" class="text-gray-200 font-bold underline underline-offset-4 decoration-amber-50"> 
            Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
