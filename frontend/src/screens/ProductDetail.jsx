import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailAction } from '../actions/Actions'
import { CART_ITEMS } from '../constants/Constants'

function ProductDetail({match}) {
    const productId = match.params.id
    const dispatch = useDispatch()
    const productInfo = useSelector(state => state.productDetail)
    const {product} = productInfo
    const cart = useSelector(state => state.cart)
    const {items} = cart
    const [addItem, setAddItem] = useState(false)

    const cartItems = localStorage.getItem("cart")
    const cartItemsCopy = cartItems ? JSON.parse(cartItems) : []

    useEffect(() => {
        dispatch(productDetailAction(productId))
    }, [dispatch, productId])

    const addItemHandler = (e) => {
        e.preventDefault()
        cartItemsCopy.push(product)
        localStorage.setItem("cart", JSON.stringify(cartItemsCopy));
        dispatch({type: CART_ITEMS, payload: JSON.parse(localStorage.getItem('cart'))})
        setAddItem(true)
    }

    return (
        <div className='cont my-5'>
            <div class="row">
                <div class="col-md-8">
                    <div class="product-image">
                        <img src={product?.image} style={{maxHeight: 600}} alt="" />
                    </div>
                    <div class="product-information">
                        <h2 style={{fontWeight: 800, fontSize: 30}}>{product?.name}</h2>
                        <p>
                            {product?.description}
                        </p>
                        <p class="product-infos">
                            <span>Bundle Price: ${product?.price}</span>
                            <span>Discount: {product?.discount}%</span>
                        </p>
                        <button onClick={addItemHandler} disabled={items?.length >= 4} className='btn btn-primary btn-lg'>Add to Cart</button>
                        {addItem ? (
                            <div className='alert alert-success mt-2'>
                                Вы добавили товар в корзину
                            </div>        
                        ):null}
                    </div> 
                </div> 
                <div class="col-md-4 col-sm-8">
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img src="images/featured/1.jpg" alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span class="tagline">Partner Name</span>
                            <span class="price">$30.00</span>
                            <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                        </div> 
                    </div>
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img src="images/featured/2.jpg" alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span class="tagline">Partner Name</span>
                            <span class="price">$40.00</span>
                            <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                        </div> 
                    </div>
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img src="images/featured/8.jpg" alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span class="tagline">Partner Name</span>
                            <span class="price">$50.00</span>
                            <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                        </div> 
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ProductDetail
