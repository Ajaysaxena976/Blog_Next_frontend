"use client"
import React, { useState } from 'react'
import { ModeToggle } from '../themeToggle'
import { Input } from "@/components/ui/input"
import InputWithSearch from './InputWithSearch'
import { Menu, MenuIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { logout } from '../../../redux/authSlice'



const Navbar = () => {
  const dispatch = useDispatch()
  const {isLogin} = useSelector((state) => (state.auth))
  
  const router= useRouter()
  const handleLogOut = ()=>{
    localStorage.clear();
    toast.success("Logged Out Successfully",{  duration: 2000,});
    dispatch(logout())  ;
    router.push('/');
  }

  return (


    <div className='flex  shadow-lg justify-between items-center  sticky top-0 left-0 bg-white py-3 px-3 z-50  dark:bg-gray-800'>
      {/* 1st div */}
      <div className='flex gap-1 '>
        <div>
          <img src="betalogo.svg" alt="betalogo" />
        </div>
        <div className='flex gap-1'>
          <div>
            Meta
          </div>
          <div>
            Blog
          </div>
        </div>
      </div>
      {/* 2nd div */}
      <div className='hidden md:flex gap-4 items-center cursor-pointer'>
        <Link href='/'>
          <div >Home</div>
        </Link>
        <Link href='/blog'>
          <div>Blog</div>
        </Link>
        <div>About</div>
        <div>Contacts</div>
       {isLogin? <Link href='/my-blog'>   <div>MyBlogs</div></Link> : null}
      </div>
      {/* 3rd div */}
      <div className='flex gap-5 items-center'>
        {/* <Input /> */}
       <Link href='/blog/create-blog'>
        <Button>Create Blog</Button>
       </Link>
        <InputWithSearch />
      {isLogin? <Button onClick={handleLogOut}>Logout</Button>:   <div className='flex gap-3'>
          <Link href="/auth/login">
            <Button  >Login</Button>
          </Link>
          <Link href="/auth/register">
            <Button >Register</Button>
          </Link>
        </div>}
        <ModeToggle />

        <div className='md:hidden flex'>

          <Popover>
            <PopoverTrigger> <Menu /></PopoverTrigger>
            <PopoverContent> <div className=' flex flex-col gap-4 items-center'>
              <div>Home</div>
              <div>Blog</div>
              <div>Single Post</div>
              <div>About</div>
              <div>Contacts</div>
              {isLogin? <Link href='/my-blog'>   <div>MyBlogs</div></Link> : null}
            </div></PopoverContent>
          </Popover>
        </div>
      </div>
    </div>


  )
}

export default Navbar