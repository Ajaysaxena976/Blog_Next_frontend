"use client"
import { serverUrl } from '@/constant';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from '../custom/BlogCard';
import { Button } from '../ui/button';

const AllBlogs = () => {
    const [page, setPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [likeBlog, setlikeBlog]= useState(0);
    const getBlog= async()=>{
        try {
          
            setLoading(true);
            const {data} = await axios.get(`${serverUrl}/blog/all-blog?page=${page}&limit=${6}`);
            
           
            setBlogs(data.data)
            setTotalPages(data.totalPages)
            
            setLoading(false);
            
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect( 
        ()=> {
            getBlog()
        }
        ,[page]
    );
    if(loading){
       return  <div>
            Loading
        </div>
    }
  console.log("this is blog------------- ", blogs);
  return (
    <div>
      <div className='grid md:grid-cols-3 grid-cols-2 gap-5 px-40  pt-10 pb-[44px]'>

    {
      blogs.map((blog, index)=> <BlogCard key={index} blog={blog}/>)
    }
     </div>
     <div className='flex justify-center items-center gap-5 '>
        <Button className='border-2' disabled= {(page==1)? true: false} onClick={()=> { setPage(page-1) }}>prev</Button>
        <Button className='border-2' onClick={()=> { setPage(page+1) }} disabled={ (totalPages==page)} >next</Button>
     </div>
    </div>
  )
}

export default AllBlogs
