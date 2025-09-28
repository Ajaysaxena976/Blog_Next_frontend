import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Hero = () => {
  return (
    <div className='relative mb-10 '>
      <img src="hero.svg" alt="heroimg" className='w-full block'/>
      <div className=' hidden md:flex flex-col absolute bottom-[-40px] left-24 md:min-h-[300px] bg-white dark:bg-gray-800 shadow-lg  border rounded-[12px] p-10 gap-6 md:w-[598px]' >
       <div className='rounded-[6px] py-[4px] px-[10px]  gap-[4px] md:w-[20%]'>Technology</div>
        <div className='md:leading-[40px] tracking-[0%] font-semibold  md:text-4xl text-xl pt-4 '>
            The Impact of Technology on the Workplace: How Technology is Changing
        </div>
        <div className='pt-5 flex  gap-5'>
        <div>
           <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>
        <div>Jason Francisco</div>
        <div>August 20, 2022</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
