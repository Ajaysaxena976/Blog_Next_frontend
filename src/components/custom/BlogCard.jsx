"use client"
import React, { useEffect, useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import axios from 'axios'
import Link from 'next/link'
import { Heart } from 'lucide-react'
const BlogCard = ({ blog }) => {
  return (

    <div> <Card key={blog._id} className=' p-4'>
      <CardHeader className={'p-0 bg-gray-500'}>
        <div className=' h-[200px] relative'>
          {/* <Heart className='absolute right-1 top-1 cursor-pointer text-amber-50 ' fill='red' /> */}
          <img src={blog.image} className='h-full w-full object-cover ' alt="" />
        </div>
      </CardHeader>
      <CardContent className={'flex flex-col   gap-4'}>
        <div className='bg-[#4B6BFB0D] rounded-[6px] text-[#4B6BFB] font-medium text-sm'>Technology</div>
        <Link href={`/blog/${blog._id}`}>
         <div className=' font-semibold text-2xl underline'>
          {blog.title}
        </div>
        
        </Link>
       <div className='truncate'>
        {blog.content}
       </div>
        <div className='pt-5 flex items-center gap-5 justify-between'>
          <div className='flex items-center justify-center gap-5'>
            <Avatar >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

             <Tooltip className="bg-amber-700">
            <TooltipTrigger> <div className=' truncate'>{blog?.author?.name || "Unknown"}</div></TooltipTrigger>
            <TooltipContent>
              <p>{blog?.author?.name}</p>
            </TooltipContent>
          </Tooltip>

          </div>

         

          <div>{new Date(blog.createdAt).toDateString()}</div>
        </div>
      </CardContent>
    </Card>


    </div>
  )
}

export default BlogCard
