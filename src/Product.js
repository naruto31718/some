import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const Product = ({product, totalPrice, setPrice, checked}) => {
  const [quantity, setQuantity] = useState(0)
  const totalprice = totalPrice
  // const [currPrice, setCurrPrice] = useState(0)

  const increaseQuantity = () => {
    if (!checked) {
      setQuantity(quantity + 1)
      setPrice(totalprice + dpprice)
    }
  }

  const decreaseQuantity = () => {
    if (!checked) {
      if (quantity > 0) {
        setQuantity(quantity - 1)
        setPrice(totalprice - dpprice)
      }
    }
  }

  useEffect(() => {
    if (checked) {
      setQuantity(0)
      setPrice(0)
    }
  }, [checked, quantity, setPrice])

  const {id, image, opprice, dpprice} = product

  return (
    <>
      <div className='cardd col-sm-12 col-md-4 col-lg-3'>
        <div className='content'>
          <img className='image' src={image} alt='Product' />
          <div className='priceContainer'>
            <h3 className='orginalp'>${opprice}</h3>
            <h3 className='discountp'>${dpprice}</h3>
          </div>
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
