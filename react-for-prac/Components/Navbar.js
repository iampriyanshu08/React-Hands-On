import { MyContext } from '@/Helper/Context'
import React, { useContext } from 'react'

const Navbar = ({num}) => {
  const user = useContext(MyContext)
  return (
    <div className='bg-green-500 p-5'>
        <h1>Navbar</h1>
        <p>{user[1]}</p>
    </div>
  )
}

export default Navbar