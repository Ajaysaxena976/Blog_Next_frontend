import React from 'react'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const InputWithSearch = () => {
  return (
    <div className='flex items-center '>
      <Search className='relative left-7'/>
    <Input className={`px-10 border border-gray-300`} placeholder='Search' />
    </div>
  )
}

export default InputWithSearch

