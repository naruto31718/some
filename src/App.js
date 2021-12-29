/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import './App.css'
import Product from './Product'
import Products from './data'

const App = () => {
  // const [products, setProducts] = useState(Products)
  const [totalPrice, setTotalPrice] = useState(0)
  const [value, setValue] = useState(false)
  useEffect(() => {
    setTotalPrice(totalPrice)
  }, [totalPrice, value])
  return (
    <>
      <div className='totalContainer'>
        <h1 className='title'>Our Products</h1>
        <div className='underline'></div>
        <div className='productCards'>
          {Products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                totalPrice={totalPrice}
                setPrice={setTotalPrice}
                checked={value}
              ></Product>
            )
          })}
        </div>
        <label htmlFor='notIntrested' className='labell'>
          <input
            type='checkbox'
            name='notIntrested'
            id='notIntrested'
            onClick={() => {
              setValue(!value)
            }}
          />
          {window.params.excusivetxt}
        </label>
        <h2>Total Price: ${totalPrice}</h2>
      </div>
    </>
  )
}

export default App
