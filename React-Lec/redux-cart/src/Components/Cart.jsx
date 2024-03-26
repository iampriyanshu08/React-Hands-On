import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Star} from "lucide-react";
import { remove } from '../ReduxStore/CartSlice';

const Cart = () => {
  const cartProds = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  const handleRemoveItem = (id)=>{
dispatch(remove(id))
  }


 return (
    <div>
      {cartProds.length>0 ? ( <div class="mx-auto max-w-7xl px-2 lg:px-0">
  <div class="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Shopping Cart
    </h1>
    <form class="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <section
        aria-labelledby="cart-heading"
        class="rounded-lg bg-white lg:col-span-8"
      >
        <h2 id="cart-heading" class="sr-only">
          Items in your shopping cart
        </h2>
        <ul role="list" class="divide-y divide-gray-200">
        {cartProds.map((item)=>(
                <div key={item.id} class="">
                <li class="flex py-6 sm:py-6 ">
                  
                  <div class="flex-shrink-0">
                    <img
                      src={item.thumbnail}
                      alt="Nike Air Force 1 07 LV8"
                      class="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                    />
                  </div>
                  <div class="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div class="flex justify-between">
                          <h3 class="text-sm">
                            <a href="#" class="font-semibold text-black">
                             {item.title}
                            </a>
                          </h3>
                        </div>
                        <div class="mt-1 flex text-sm">
                          <p class="text-sm text-gray-500">{item.brand}</p>
                          <p class="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500 flex items-center gap-2">
                          {item.rating} <span className='text-green-800'><Star size={15}/></span>
                          </p>
                        </div>
                        <div class="mt-1 flex items-end  gap-5">
                          <p class="text-xs font-medium text-gray-500 line-through">
                            ₹48,900
                          </p>
                          <p class="text-sm font-medium text-gray-900">  ₹{item.price}</p>
                           <p class="text-sm font-medium text-green-500">{item.discountPercentage}% Off</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <div class="mb-2 flex">
                  <div class="min-w-24 flex">
                    <button type="button" class="h-7 w-7">
                      -
                    </button>
                    <input
                      type="text"
                      class="mx-1 h-7 w-9 rounded-md border text-center"
                      value="1"
                    />
                    <button
                      type="button"
                      class="flex h-7 w-7 items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div class="ml-6 flex text-sm">
                    <button
                      type="button"
                      onClick={()=>handleRemoveItem(item.id)}
                      class="flex items-center space-x-1 px-2 py-1 pl-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-red-500"
                      >
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      </svg>
                      <span class="text-xs font-medium text-red-500" >Remove</span>
                    </button>
                  </div>
                </div>
              </div>
                ))}
          
          
          
        </ul>
      </section>
      <section
        aria-labelledby="summary-heading"
        class="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
      >
        <h2
          id="summary-heading"
          class=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
        >
          Price Details
        </h2>
        <div>
          <dl class=" space-y-1 px-2 py-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-800">Price (3 item)</dt>
              <dd class="text-sm font-medium text-gray-900">₹ 52,398</dd>
            </div>
            <div class="flex items-center justify-between pt-4">
              <dt class="flex items-center text-sm text-gray-800">
                <span>Discount</span>
              </dt>
              <dd class="text-sm font-medium text-green-700">- ₹ 3,431</dd>
            </div>
            <div class="flex items-center justify-between py-4">
              <dt class="flex text-sm text-gray-800">
                <span>Delivery Charges</span>
              </dt>
              <dd class="text-sm font-medium text-green-700">Free</dd>
            </div>
            <div class="flex items-center justify-between border-y border-dashed py-4 ">
              <dt class="text-base font-medium text-gray-900">Total Amount</dt>
              <dd class="text-base font-medium text-gray-900">₹ 48,967</dd>
            </div>
          </dl>
          <div class="px-2 pb-4 font-medium text-green-700">
            You will save ₹ 3,431 on this order
          </div>
        </div>
      </section>
    </form>
  </div>
</div>):( <h1 className='text-4xl text-center mt-20'>No items in the cart </h1>)}
      


    </div>
  )
}

export default Cart