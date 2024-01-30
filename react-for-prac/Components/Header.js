import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='h-16 px-5 font-bold text-2xl bg-green-600 flex items-center justify-between'>
        <h2>logo</h2>
        <div className='flex gap-8'>
        <Link href="/About">About</Link>
     <Link href="/Product">Product</Link>
     <Link href="/Courses">Courses</Link>
        </div>
    </div>
  
    </>
  )
}

export default Header