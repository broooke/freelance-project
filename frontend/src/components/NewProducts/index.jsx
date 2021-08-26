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
                    {products?.map((product, index) => (
                        <div class="col-md-3 col-sm-6">
                            <div class="product-item">
                                <div class="product-thumb">
                                    <img style={{height: 250}} src={product.image} alt="" />
                                </div>
                                <div class="product-content">
                                    <h5><a style={{fontWeight: 700}} href={`#/detail/${product.id}`}>{product.name}</a></h5>
                                    <span class="price">${product.price}</span>
                                </div>
                            </div>
                        </div> 
                    ))}
                </div> 
            </div>
        </div>
    )
}

export default NewProducts
