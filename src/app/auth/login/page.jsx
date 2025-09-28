"use client";

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { serverUrl } from "@/constant";
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [loginState, setIsLoginState] =useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${serverUrl}/user/login`, data);
      toast.success(response.data.message || "Logged in successfully!");
      const token = response.data.token;
      dispatch(login(token));
      setIsLoginState(true);
      // You can save token if backend sends one
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      // Redirect to dashboard or home page
      router.push("/");

    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col py-8 px-6 gap-6 border dark:bg-gray-800 shadow-lg rounded-lg w-full max-w-md"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className={`font-medium rounded border-2 px-3 py-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
