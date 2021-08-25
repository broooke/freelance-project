import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { XCircle } from 'react-feather'
import { CART_ITEMS } from '../constants/Constants'

function Cart({history}) {
    const cart = useSelector(state => state.cart)
    const {items} = cart
    const user = useSelector(state => state.login)
    const {userInfo} = user
    const dispatch = useDispatch()

    const removeHandler = (e, index) => {
        e.preventDefault()
        const cartItems = localStorage.getItem("cart")
        const cartItemsCopy = cartItems ? JSON.parse(cartItems) : []
        cartItemsCopy.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify(cartItemsCopy));
        dispatch({type: CART_ITEMS, payload: JSON.parse(localStorage.getItem('cart'))})
    }

    const buyHandler = (e) => {
        e.preventDefault()
        localStorage.setItem("cart", JSON.stringify([]))
        dispatch({type: CART_ITEMS, payload: JSON.parse(localStorage.getItem('cart'))})
        history.push('/')
    }
    return (
        <div style={{padding: '50px 0'}} className="cont">
            <div className='d-flex mb-4 align-items-center justify-content-between'>
                <h1 style={{fontSize: 30}}>Корзина</h1>
                <h3 style={{fontSize: 30}}><b>${items.reduce((acc, item)=>acc + item.price, 0)}</b></h3>
                <button onClick={buyHandler} disabled={items?.length === 0 || !userInfo} className="btn btn-outline-primary btn-sm">Купить</button>
            </div>
            {items?.length === 0 ? <div style={{marginBottom: 310}} className='alert alert-warning'>Вы не добавили товары в корзину</div>
                : (
                    <div class="row">
                        {items?.map((item, index) => (
                            <div key={index} class="col-md-3 col-sm-6">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div class="product-content">
                                        <h5><a href="#">{item.name}</a></h5>
                                        <span class="price">${item.price}</span>
                                        <button onClick={(e) => removeHandler(e, index)} className='btn btn-primary mt-2'><XCircle /></button>
                                    </div>
                                </div>
                            </div> 
                        ))}
                    </div> 
                )
            }
        </div>
    )
}

export default Cart
