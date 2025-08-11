import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-lg shadow-xl bg-white w-full  h-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block  font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              className="w-full mb-4 px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-500 transition-colors duration-200"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            <label
              htmlFor="name"
              className="block  font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              className="w-full mb-4 px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-500 transition-colors duration-200"
              type="email"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            <label
              htmlFor="name"
              className="block  font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-500 transition-colors duration-200"
              type="password"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <label
              htmlFor="name"
              className="block  font-medium text-gray-700 mt-4 mb-1 "
            >
              Confirm Password
            </label>
            <input
              className="w-full px-4 py-3  rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-500 transition-colors duration-200"
              type="password"
              name="name"
              id="name"
              value={name}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Already have have an account?{" "}
            <Link
              to="/Login"
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
