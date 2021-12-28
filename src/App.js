/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './App.css'
import Product from './Product'
import Products from './data'

const App = () => {
  // const [products, setProducts] = useState(Products)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    setTotalPrice(totalPrice)
  }, [totalPrice])
  return (
    <>
      <div className='totalContainer'>
        <h1 className='title'>Our Products</h1>
        <div className='underline'></div>
        <div className='row productCards'>
          {Products.map((product) => {
            return (
              <Product
                product={product}
                totalPrice={totalPrice}
                setPrice={setTotalPrice}
              ></Product>
            )
          })}
        </div>
        <label htmlFor='notIntrested' className='labell'>
          <input type='checkbox' name='notIntrested' id='notIntrested' />
          Check This Box if u dont want to buy any Products
        </label>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </>
  )
}

export default App
