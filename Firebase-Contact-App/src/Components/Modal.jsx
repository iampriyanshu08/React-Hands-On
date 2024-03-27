import React from 'react'
import { createPortal } from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({OnClose,isopen,children}) => {
  return createPortal (
   <>
   {isopen && (
   <div className=' grid place-items-center absolute top-0 backdrop-blur z-40 h-screen w-screen'>

<div className='min-h-[200px] min-w-[80%] bg-white p-4 relative z-50 m-auto'>
    <div className='flex justify-end'>
        <AiOutlineClose onClick={OnClose} className='text-2xl '/>
    </div>
    {children}
   </div> 
  
   </div>
   )}
   </>
  ,document.getElementById("modal-root"))
}

export default Modal