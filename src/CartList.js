import {useEffect, useState} from 'react'
import CartItem from './CartItem'

function CartList({cartList, setCount, setCartList}){
  const [currentTotal, setCurrentTotal] = useState(cartList.map((cartItem)=>cartItem.price * cartItem.amount))

  useEffect(()=>{
   setCurrentTotal(cartList.map((cartItem)=>cartItem.price * cartItem.amount))
    setCount(cartList.length)
  },[cartList])

  const removeItem = (itemId)=>{
    setCartList(cartList.filter(
      (listItem)=> listItem.id !== itemId)
    )
  }

  const changeAmount = (itemId, amount)=>{
    if (amount === 0 ){
      return removeItem(itemId)
    }

    setCartList(cartList.map((listItem)=>{
      if (listItem.id === itemId){
        return {...listItem, amount}
      }else{
        return listItem
      }}))
  }

  if (cartList.length === 0){
    return <h1 className="cart__empty">Is currently empty</h1>
  }
  return (
    <>
    {cartList.map((cartItem)=>{
      return (
        <CartItem cartItem={cartItem} removeItem={removeItem} changeAmount={changeAmount} />
      )
    })}
    <span className="cart__underline"></span>
    <div className="cart__total">
      <h4>Total</h4>
      <span>${currentTotal.reduce((a,b)=>a+b, 0)}</span>
    </div>
    </>
  )
}
export default CartList
