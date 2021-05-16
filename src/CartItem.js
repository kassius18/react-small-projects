import {AiFillCaretUp} from "react-icons/ai"
import {AiFillCaretDown} from "react-icons/ai"
import "./CartItem.scss"

function CartItem({cartItem, removeItem, changeAmount}){

  return <article className="cart-item">
    <div className="cart-item__left">
      <img src={cartItem.img} alt=""/>
      <div className="cart-item__description">
        <h4 className="cart-item__title">{cartItem.title}</h4>
        <span className="cart-item__price">${cartItem.price  * cartItem.amount}</span>
        <button className="cart-item__remove" onClick={()=>{removeItem(cartItem.id)}}>remove</button>
      </div> 
    </div>
    <div className="cart-item__right">
      <AiFillCaretUp onClick={()=>{changeAmount(cartItem.id, cartItem.amount + 1)}}/>
      <span>{cartItem.amount}</span>
      <AiFillCaretDown onClick={()=>{changeAmount(cartItem.id, cartItem.amount - 1)}}/>
    </div>
  </article>
}

export default CartItem

