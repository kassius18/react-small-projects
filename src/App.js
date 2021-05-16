import {useEffect, useState} from 'react';
import './App.scss';
import {FaShoppingBag} from 'react-icons/fa'
import CartList from './CartList'

const url = 'https://course-api.com/react-useReducer-cart-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cartList,setCartList] = useState([])
  const [count, setCount] = useState(cartList.length)

  useEffect(()=>{
    const fetchData = async ()=>{
      const response = await fetch(url)
      const data = await response.json()

      setCartList(data)
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
    <header className="top-header">
      <div className="top-header__container">
        <div className="top-header__left">UseReducer</div>
        <div className="top-header__right"><FaShoppingBag/><span className="top-header__count">{count}</span></div>
      </div>
    </header>
    <main className="cart">
      <h1 className="cart__title">Your bag</h1>
      <div className="cart__list">
        {!isLoading ? <CartList cartList={cartList} setCount={setCount} setCartList={setCartList}/> : <h1 className="cart__loading">Loading cart...</h1>}
      </div>
      <button className="cart__clear" onClick={()=>{setCartList([])}}>clear cart</button>
    </main>
    </>
  );
}

export default App;
