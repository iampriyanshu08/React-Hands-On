import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../ReduxStore/CartSlice'

const Home = () => {


  const dispatch = useDispatch()
const [Prod, setProd] = useState([])
useEffect(() => {
  const popProd = async( )=>{
    try {
        const res = await axios('https://dummyjson.com/products')
        
        setProd(res.data.products)
      } catch (error) {
        console.log(error)
      }
  }
popProd()
  
}, [])

const addToCart = (product)=>{

dispatch(add(product))
}



  return (
    <div>
        <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

            {Prod.map((item)=>(
                <div key={item.id} class="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px]">
    <img
      src={item.thumbnail}
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white">{item.title}</h1>
      <h3 className='text-white'>{item.price} Rs.</h3>
      <p class="mt-2 text-sm text-gray-300">
       {item.description}
      </p>
      

      <button onClick={()=>addToCart(item)} class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black px-3 py-2">
       Add to cart →
      </button>
      
    </div>
  </div>
            ))}
  
  
  </div>
</div>
 
  
  )
}

export default Home