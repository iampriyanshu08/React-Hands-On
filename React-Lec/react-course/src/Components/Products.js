import React from 'react'

const Products = ({name,img,detail,price}) => {
  return (
    <div >
        <div >
            <h1>{name}</h1>
       
        <div>
            <img src={img} alt="img" />
        </div>
        <div>
            <p>{detail}</p>
            <p>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default Products