"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { serverUrl } from "@/constant";
import toast, { Toaster } from "react-hot-toast";
import BlogCard from "@/components/custom/BlogCard";

export default function MyBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!token) {
        toast.error("You are not logged in!");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${serverUrl}/blog/my-blog`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          setBlogs(response.data.data);
          toast.success("Blogs fetched successfully!", {
            id: "fetch-success", // prevents duplicate toasts
            duration: 3000,
          });
        } else {
          toast.error("Error fetching blogs", { duration: 3000 });
        }
      } catch (error) {
        console.log(error);
        toast.error("Error fetching blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [token]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;

  return (
    <div className="flex flex-col gap-6 p-4 grid grid-cols-3">
      <Toaster position="top-right" />
      {blogs.length === 0 ? (
        <p className="text-center">No blogs found!</p>
      ) : (
        blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
      )}
    </div>
  );
}
