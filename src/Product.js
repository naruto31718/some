import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const Product = ({product, totalPrice, setPrice}) => {
  const [quantity, setQuantity] = useState(0)
  const totalprice = totalPrice
  // const [currPrice, setCurrPrice] = useState(0)

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
    setPrice(totalprice + price)
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
      setPrice(totalprice - price)
    }
  }

  useEffect(() => {
    setQuantity(quantity)
  }, [quantity])

  const {id, image, price} = product

  return (
    <>
      <div className='cardd col-sm-12 col-md-4 col-lg-3'>
        <div className='content'>
          <img className='image' src={image} alt='Product' />
          <h3 className='price'>${price}</h3>
          <div className='butonContainer'>
            <button className='btn-primary buton' onClick={decreaseQuantity}>
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </button>
            <p className='quantity'>{quantity}</p>

            <button className='btn-primary buton' onClick={increaseQuantity}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  )

  // )
}

export default Product
