"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import BlogCard from '../custom/BlogCard'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const LatestPost = () => {
  const [blogData, setblogData] = useState([]);
  const router= useRouter()
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await axios.get("http://localhost:4000/api/v1/blog/all-blog");
        setblogData(data.data.data)
      } catch (error) {
        console.log("error while getting blog", error);
      }
    };

    fetchBlogs();
  }, []);
  useEffect(() => {
    
  }, []);
  
  return (
   <div>
     <div className='grid md:grid-cols-3 grid-cols-1 gap-5 md:px-40 px-6  pt-10 pb-[44px]'>

    {
      blogData.map((blog, index)=> <BlogCard key= {index} blog= {blog}/>)
    }
     </div>
     <div className='flex justify-center pb-10'>
      <Button variant="outline" onClick= {()=> router.push('/blog') }  >View All</Button>
     </div>
   </div>
  )
}

export default LatestPost
