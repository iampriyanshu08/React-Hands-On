import React from 'react'

const Navbar = ({num}) => {
  return (
    <div className='bg-green-500 p-5'>
        <h1>Navbar</h1>
        <p>{num}</p>
    </div>
  )
}

export default Navbar