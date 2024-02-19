import React from 'react'

const Delivery = () => {
  return (
    <>
    <div className='w-full  px-4'>
        <h3 className='text-[#fbc531] font-bold md:text-6xl text-4xl md:text-center text-center md:mt-5 mt-[15%] '>Quick service is our Priority</h3>
        <div className='md:grid grid-cols-2 w-[80%] mx-auto my-10 gap-10  py-10 grid-rows-1'   >
            <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" className='w-[550px]' alt="" />
            <div className='flex flex-col justify-center '>
        <p className='font-bold text-[green] md:text-3xl text-xl'>Get the App</p>
        <h2 className='md:text-4xl py-2 leading-snug font-bold text-2xl'>When you are too lazy to cook we are here for you</h2>
        <button className='bg-red-800 md:w-[150px] w-[100px] text-white rounded-md my-6 py-3 hover:text-[#fbc531] md:text-xl text-sm font-semibold'>Get Started</button>
        </div>
        </div>
        

    </div>
    </>
  )
}

export default Delivery