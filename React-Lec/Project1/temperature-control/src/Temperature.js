import React, { useState } from 'react';
import './Temperature.css'
import mob from './Assets/mob.webp'

const Temperature = ()=>{
    const [temp, settemp] = useState(12)
    const [color, setColor] = useState("#34495e")
    const [status, setstatus] = useState("")
    const [plus, setplus] = useState("#f0932b")
    const [minus, setminus] = useState("#f0932b")
    const increment=()=>{
        settemp(temp+1)
         if(temp>=18){
            setColor("red")
            setstatus("Hot")
            setplus("red")
         }
    }
    const decrement=()=>{
        settemp(temp-1)
        if(temp<=19){
            setColor("#34495e")
            setstatus("Cold")
            setplus("#34495e")
            setminus("blue")
        }
    }
    return(
        <div className='main'>
           <div className='temp-img'>
           <img src={mob} alt="mobile" style={{width:"100%"}} />
           <div className='temp-display'>
            <div className='current-temp' style={{backgroundColor:color}}>{temp}°C <br />{status}
            
           
            </div>
            <div className='temp-btn'>
                <button style={{backgroundColor:plus}} onClick={increment}>+</button>
                <button style={{backgroundColor:minus}} onClick={decrement}>-</button>
            </div>
           </div>
           </div>
            
        </div>
    )
}

export default Temperature