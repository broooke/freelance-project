import React from 'react'

function NewProducts() {
    return (
        <div>
            <div className="cont">
                <div class="row">
                    <div class="col-md-12 section-title">
                        <h2>New Products</h2>
                    </div>
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
        </div>
    )
}

export default NewProducts
