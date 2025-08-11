import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            email: email,
            password: password,
          },
        }),
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 rounded-lg shadow-xl bg-white w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block  font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              className="w-full mb-6 px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-500 transition-colors duration-200"
              type="email"
              name="name"
              id="name"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <label
              htmlFor="name"
              className="block  font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              className="w-full mb-6 px-4  py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-green-500 transition-colors duration-200"
              type="password"
              name="name"
              id="name"
              value={password}
              onChange={handlePassword}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
