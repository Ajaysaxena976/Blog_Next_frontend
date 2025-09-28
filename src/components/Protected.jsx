"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const Protected = ({children}) => {
    const router = useRouter();
  const {isLogin} =  useSelector((state)=>(state.auth));
  console.log("----------", isLogin);
  if(!isLogin){
    router.push('/auth/login');
  }
  return children
}

export default Protected




