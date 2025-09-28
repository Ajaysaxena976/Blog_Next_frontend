import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Page_title = () => {
  return (
    <div className='text-white'>
      
      <div className='relative'>
        <img src="hero.svg" alt="" className='w-full object-cover border-2'/>
        <div className='absolute left-10 bottom-10'>
          <div className='rounded-[6px] py-[4px] px-[10px] bg-[#4B6BFB] gap-[4px] w-[20%]'>Technology</div>
        <div className='leading-[40px] tracking-[0%] font-semibold  text-4xl pt-4'>
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
    </div>
  )
}

export default Page_title
