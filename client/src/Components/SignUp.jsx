import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Username is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Username must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData.name);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:
            formData.name ||
            `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      const { message, token } = data;
      localStorage.setItem("_token", token);

      if (res.ok) {
        setToast(true);

        console.log("Registration successful:", data);

        navigate("/Login");

        setToast(false);
      } else {
        // Handle server errors
        setErrors({ submit: data.message || "Registration failed" });
      }
    } catch (error) {
      console.log("Registration error:", error);
      setErrors({ submit: "Network error. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative ">
      <div
        className={`absolute shadow-md shadow-green-300 top-8 right-14 ${
          toast ? `opacity-100` : `opacity-0`
        } bg-green-100 rounded-sm p-6 border-2 border-green-500 transition-opacity ease-in-out duration-300`}
      >
        <h1 className="text-green-500 text-xl font-bold">
          Registration Successful!
        </h1>
      </div>

      <div className="p-8 rounded-lg shadow-xl bg-white w-full h-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
          Sign Up
        </h2>

        {errors.submit && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.submit}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              className={`w-full mb-1 px-4 py-3 rounded-lg border-2 ${
                errors.name ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:border-green-500 transition-colors duration-200`}
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your username"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-2">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              className={`w-full mb-1 px-4 py-3 rounded-lg border-2 ${
                errors.email ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:border-green-500 transition-colors duration-200`}
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              className={`w-full mb-1 px-4 py-3 rounded-lg border-2 ${
                errors.password ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:border-green-500 transition-colors duration-200`}
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              className={`w-full mb-1 px-4 py-3 rounded-lg border-2 ${
                errors.confirmPassword ? "border-red-400" : "border-gray-200"
              } focus:outline-none focus:border-green-500 transition-colors duration-200`}
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mb-2">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-3 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            } text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-200`}
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            Already have an account?{" "}
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
