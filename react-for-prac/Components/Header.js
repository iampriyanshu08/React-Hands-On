import React from 'react'

const Header = ({user}) => {
  return (
    <>
    <div className='h-16 px-5 font-bold text-2xl bg-green-600 flex items-center justify-between'>
        <h2>{user}</h2>
        <div className='flex gap-8'>
            <h4>About</h4>
            <h4>Career</h4>
            <h4>Blog</h4>
            <h4>Account</h4>
        </div>
    </div>
  
    </>
  )
}

export default Header