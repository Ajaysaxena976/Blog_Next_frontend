"use client"
import React, { useEffect, useState } from 'react'
import { serverUrl } from '@/constant';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const Page = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
const route = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }))

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      
      const response = await axios.post(`${serverUrl}/user/register`, data);
      toast.success( response.data.message);
      route.push('/auth/login');
      
    } catch (error) {
      const err = error.response.data.message;

      toast.error(err)

    }
  }
  useEffect(() => {

  }, [data])
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div><Toaster /></div>

      <div className="flex flex-col py-8 px-6 gap-6 bg-white shadow-lg rounded-lg w-full max-w-md">

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="name" className="font-medium">Name</label>
          <input
            id="name"
            placeholder="Enter Your Name"
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            name='name'
            onChange={handleChange}
            value={data.name}
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="font-medium">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email"
            name='email'
            value={data.email}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="password" className="font-medium">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Your Password"
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
            name='password'
            value={data.password}
            onChange={handleChange}
          />
        </div>
        <button className="font-medium rounded border-2" onClick={handleSubmit}>Register</button>
      </div>
    </div>
  )
}

export default Page
