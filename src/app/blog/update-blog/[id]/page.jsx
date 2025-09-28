"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { serverUrl } from "@/constant";



export default function UpdateBlog() {
  const { id } = useParams(); 
  const router = useRouter();

  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: "",
  });

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // ✅ Fetch blog to prefill form
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${serverUrl}/blog/${id}`);
        setBlog(res.data.data); // 🔹 correctly accessing blog object
      } catch (error) {
        console.error("Failed to fetch blog:", error);
      }
    };
    if (id) fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("beefore calling api")
      console.log("this is updated blog data", blog, id);
      await axios.put(
        `${serverUrl}/blog/update-blog/${id}`,
        blog,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
        
      );
console.log("after api calll");
      alert("Blog updated successfully!");
      router.push(`/blog/${id}`);
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Failed to update blog.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6  rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">✏️ Update Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            required
          />
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            required
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={blog.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {blog.image && (
          <div className="mt-3">
            <img
              src={blog.image}
              alt="Preview"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
