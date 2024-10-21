import React from 'react'
import Button from './Button'

export default function CartItem({item, setCart, cart}) {

  const removeCart = (e) => {
    let updateCart = cart.filter((cartItem) => cartItem.id !== item.id)
    setCart(updateCart)
  }
  
  return (
    <div className="cart__item">
      <img src={item.image} alt="logo" />
      <div className="cart__title">{item.title}</div>
      <div className="price">
        ${item.price}
      </div>
      <div className="quantity">
        1
      </div>
      <div className="total">${item.price}</div>
      <Button onclick={removeCart} styleBtn="btn__remove" text="remove"/>
    </div>
  )
}
