import React from 'react'
import { FaMinus,FaPlus } from "react-icons/fa";

const Cart = () => {
  return (
    <div className='mt-[150px] mb-[100px]'>
         <h1 className='text-center text-6xl'>Cart Items</h1>
        <div className='w-[70%] h-[60vh] mx-auto bg-blue-200 flex justify-center items-center gap-5'>
           <div className='w-[10vw]'>
            <h4 >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium, minima?</h4>
           </div>
           <div className='flex justify-center items-center'>
           <FaMinus /> <h3>1</h3> <FaPlus />
           </div>
           <div><h3>₹500</h3></div>
        </div>
    </div>
  )
}

export default Cart