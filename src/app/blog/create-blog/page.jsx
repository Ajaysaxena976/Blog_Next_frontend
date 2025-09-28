"use client";
import { serverUrl } from "@/constant";
import axios from "axios";
import { useState } from "react";

export default function CreateBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Blog Created:", formData);
    try {
        const token = localStorage.getItem("token");
        console.log("token is ", token);
        const response = await axios.post(`${serverUrl}/blog/create-blog`, formData, {headers: {
          Authorization: `Bearer ${token}`}});
    
    
    } catch (error) {
       console.log("Error while creating blog", error) ;
    
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border p-4 rounded-lg shadow-md"
        >
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-1 font-medium">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={5}
              className="w-full p-2 border rounded"
              placeholder="Write your blog content..."
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter image URL"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit Blog
          </button>
        </form>
      ) : (
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{formData.title}</h2>
          <img
            src={formData.image}
            alt="Blog"
            className="w-32 h-32 object-contain mb-3"
          />
          <p className="text-gray-700">{formData.content}</p>
        </div>
      )}
    </div>
  );
}
