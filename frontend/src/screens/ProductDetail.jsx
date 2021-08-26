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
    const productsInfo = useSelector(state => state.productsList)
    const {products} = productsInfo

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
        <div className='container my-5'>
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
                            <span>Цена: ${product?.price}</span>
                            <span>Скидка: {product?.discount}%</span>
                        </p>
                        <button onClick={addItemHandler} disabled={items?.length >= 4} className='btn btn-primary btn-lg'>В корзину</button>
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
                            <img style={{maxHeight: 225}} src={products[0]?.image} alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href={`#/detail/${products[0]?.id}`}>{products[0]?.name}</a></h5>
                            <span class="tagline">{products[0]?.partner}</span>
                            <span class="price">${products[0]?.price}</span>
                            <p>{products[0]?.short_description}</p>
                        </div> 
                    </div>
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img style={{maxHeight: 225}} src={products[1]?.image} alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href={`#/detail/${products[1]?.id}`}>{products[1]?.name}</a></h5>
                            <span class="tagline">{products[1]?.partner}</span>
                            <span class="price">${products[1]?.price}</span>
                            <p>{products[1]?.short_description}</p>
                        </div> 
                    </div>
                    <div class="product-item-2">
                        <div class="product-thumb">
                            <img style={{maxHeight: 225}} src={products[0]?.image} alt="Product Title" />
                        </div>
                        <div class="product-content overlay">
                            <h5><a href={`#/detail/${products[0]?.id}`}>{products[0]?.name}</a></h5>
                            <span class="tagline">{products[0]?.partner}</span>
                            <span class="price">${products[0]?.price}</span>
                            <p>{products[0]?.short_description}</p>
                        </div> 
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default ProductDetail
