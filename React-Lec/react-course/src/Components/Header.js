import React from 'react'
import './Header.css'
import puma from '../Assets/puma.png'

// const bg = {
//     backgroundColor:'blue'
// }



const Header = () => {
  return (
    <div className='header' >
        <div>
<img src={puma} alt=""  style={{borderRadius:"50%", width:'60px'}}/>
        </div>
        <div className='list-item'>
            <ul>
                <li>New</li>
                <li>Women</li>
                <li>Men</li>
                <li>Kids</li>
                <li>Sports</li>
            </ul>
        </div>
    </div>
  )
}

export default Header