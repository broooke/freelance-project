import React from 'react'

function Cart() {
    return (
        <div style={{padding: '50px 0'}} className="cont">
            <div className='d-flex mb-4 align-items-center justify-content-between'>
                <h1 style={{fontSize: 30}}>Корзина</h1>
                <h3 style={{fontSize: 30}}><b>$50</b></h3>
                <button className="btn btn-outline-primary btn-sm">Купить</button>
            </div>
            <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src="images/gallery-image-2.jpg" alt="" />
                            </div>
                            <div class="product-content">
                                <h5><a href="#">Name of Shirt</a></h5>
                                <span class="price">$40.00</span>
                            </div>
                        </div>
                    </div> 
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src="images/gallery-image-3.jpg" alt="" />
                            </div>
                            <div class="product-content">
                                <h5><a href="#">Sport Shirt</a></h5>
                                <span class="price">$40.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src="images/gallery-image-4.jpg" alt="" />
                            </div>
                            <div class="product-content">
                                <h5><a href="#">Elegant Shirt</a></h5>
                                <span class="price">$60.00</span>
                            </div> 
                        </div> 
                    </div> 
                    <div class="col-md-3 col-sm-6">
                        <div class="product-item">
                            <div class="product-thumb">
                                <img src="images/gallery-image-5.jpg" alt="" />
                            </div> 
                            <div class="product-content">
                                <h5><a href="#">Another New Shirt</a></h5>
                                <span class="price">$80.00</span>
                            </div>
                        </div>
                    </div> 
                </div> 
        </div>
    )
}

export default Cart
