"use client"

import Header from '@/Components/Header'
import React, { useState } from 'react'

const page = () => {
  const [num, setnum] = useState(10)
  return (
    <div className='bg-blue-200 p-5'>
      <h1>this is home page</h1>
      <p>{num}</p>
      <button onClick={()=>{
        setnum(num+1)
      }}>update</button>
      <Header number = {num}/>
    </div>
  )
}

export default page