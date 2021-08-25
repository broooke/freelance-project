import React from 'react'
import './style.css'

function ProductsList() {
    return (
        <div>
            <div className="cont products-wrap">
            <div className="row">
                <div className="col-md-3">
                    <div className="product-item-1">
                        <div className="product-thumb">
                            <img src="images/gallery-image-1.jpg" alt="Product Title" />
                        </div>
                        <div style={{paddingBottom: 40}} className="product-content">
                            <h5><a href="#/detail">Kool Shirt</a></h5>
                            <span className="tagline">Partner Name</span>
                            <span className="price">$25.00</span>
                            <p style={{marginTop: 10, lineHeight: 1.3}}>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt asperiores tenetur deleniti labore!</p>
                        </div>
                    </div> 
                </div> 
                <div className="col-md-5">
                    <div className="product-holder">
                        <div className="product-item-2">
                            <div className="product-thumb">
                                <img src="images/featured/1.jpg" alt="Product Title" />
                            </div>
                            <div className="product-content overlay">
                                <h5><a href="#">Kooler Shirt</a></h5>
                                <span className="tagline">Partner Name</span>
                                <span className="price">$30.00</span>
                                <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                            </div>
                        </div>
                        <div className="product-item-2">
                            <div className="product-thumb">
                                <img src="images/featured/2.jpg" alt="Product Title" />
                            </div>
                            <div className="product-content overlay">
                                <h5><a href="#">Koolest Shirt</a></h5>
                                <span className="tagline">Partner Name</span>
                                <span className="price">$45.00</span>
                                <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt tenetur deleniti labore!</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div> 
                </div> 
                <div className="col-md-4">
                    <div className="product-item-1">
                        <div className="product-thumb">
                            <img src="images/gallery-image-1.jpg" alt="Product Title" />
                        </div>
                        <div className="product-content">
                            <h5><a href="#">Kool Shirt</a></h5>
                            <span className="tagline">Partner Name</span>
                            <span className="price">$25.00</span>
                            <p>Doloremque quo possimus quas necessitatibus blanditiis excepturi. Commodi, sunt asperiores tenetur deleniti labore!</p>
                        </div>
                    </div> 
                </div> 
            </div> 
            <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="product-item-4">
                        <div className="product-thumb">
                            <img src="images/featured/3.jpg" alt="Product Title" />
                        </div> 
                        <div className="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span className="tagline">Partner Name</span>
                            <span className="price">$60.00</span>
                            <p>Doloremque quo possimus quas necessitatibus.</p>
                        </div> 
                    </div>
                </div> 
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="product-item-4">
                        <div className="product-thumb">
                            <img src="images/featured/4.jpg" alt="Product Title" />
                        </div>
                        <div className="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span className="tagline">Partner Name</span>
                            <span className="price">$30.00</span>
                            <p>Doloremque quo possimus quas necessitatibus.</p>
                        </div>
                    </div> 
                </div> 
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <div className="product-item-4">
                        <div className="product-thumb">
                            <img style={{height: 167}} src="images/featured/5.jpg" alt="Product Title" />
                        </div>
                        <div className="product-content overlay">
                            <h5><a href="#">Name Of Shirt</a></h5>
                            <span className="tagline">Partner Name</span>
                            <span className="price">$30.00</span>
                            <p>Doloremque quo possimus quas necessitatibus.</p>
                        </div>
                    </div> 
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductsList
