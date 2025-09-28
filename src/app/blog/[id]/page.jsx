"use client";

import { serverUrl } from "@/constant";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const Page = () => {
  const { id } = useParams();
  const router = useRouter();

  const [blog, setBlog] = useState(null);
  const [userCreatedBlog, setUserCreatedBlog] = useState("");
  const [userId, setUserId] = useState(null);

  // ✅ Fetch token & decode user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const decodedId = decoded._id || decoded.id; // depends on backend
        setUserId(decodedId);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  // ✅ Fetch blog
  const getBlog = async () => {
    try {
      const { data } = await axios.get(`${serverUrl}/blog/${id}`);
      // Make sure data.data exists, or just use data
      setBlog(data.data || data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) getBlog();
  }, [id]);

  // ✅ Extract author after blog loads
  useEffect(() => {
    if (blog?.author?._id) {
      setUserCreatedBlog(blog.author._id);
    } else if (blog?.author) {
      setUserCreatedBlog(blog.author);
    }
  }, [blog]);

  // ✅ Handle Delete
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${serverUrl}/blog/delete-blog/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Blog deleted successfully");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Failed to delete blog");
    }
  };

  // ✅ Handle Edit
  const handleEdit = () => {
  router.push(`/blog/update-blog/${id}`);
};

  // ⚠️ Loading guard
  if (!blog) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Blog Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {blog.title}
      </h1>

      {/* Author & Date */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        <span>✍️ Author: {blog.author?.name || blog.author}</span>
        <span>
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString()
            : ""}
        </span>
      </div>

      {/* Blog Image */}
      {blog.image && (
        <div className="w-full h-96 bg-gray-50 flex items-center justify-center rounded-lg overflow-hidden mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="object-contain max-h-96 w-full"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose max-w-none text-gray-800 dark:text-white leading-relaxed whitespace-pre-line mb-8">
        {blog.content}
      </div>

      {/* Action Buttons */}
      {userCreatedBlog === userId && (
        <div className="flex gap-4">
          <button
            onClick={handleEdit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            ✏️ Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            🗑️ Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
