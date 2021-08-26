import React from 'react'
import { useSelector } from 'react-redux'

function NewProducts() {
    const productsInfo = useSelector(state => state.productsList)
    const {products} = productsInfo

    return (
        <div>
            <div className="container">
                <div class="row">
                    <div class="col-md-12 section-title">
                        <h2>New Products</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src={products[0]?.image} alt="" />
                            </div>
                            <div class="product-content">
                                <h5><a style={{fontWeight: 700}} href={`#/detail/${products[0]?.id}`}>{products[0]?.name}</a></h5>
                                <span class="price">${products[0]?.price}</span>
                            </div>
                        </div>
                    </div> 
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src={products[1]?.image} alt="" />
                            </div>
                            <div class="product-content">
                                <h5><a style={{fontWeight: 700}} href={`#/detail/${products[1]?.id}`}>{products[1]?.name}</a></h5>
                                <span class="price">${products[1]?.price}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src={products[0]?.image} alt="" />
                            </div>
                            <div class="product-content">
                                <h5><a style={{fontWeight: 700}} href={`#/detail/${products[0]?.id}`}>{products[0]?.name}</a></h5>
                                <span class="price">${products[0]?.price}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src={products[1]?.image} alt="" />
                            </div>
                            <div class="product-content">
                                <h5><a style={{fontWeight: 700}} href={`#/detail/${products[1]?.id}`}>{products[1]?.name}</a></h5>
                                <span class="price">${products[1]?.price}</span>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
    )
}

export default NewProducts
