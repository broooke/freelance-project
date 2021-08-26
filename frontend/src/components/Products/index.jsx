import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsListAction } from '../../actions/Actions'
import './style.css'
import useWindowSize from '../../hooks/useWindowSize'

function ProductsList() {
    const productsInfo = useSelector(state => state.productsList)
    const {products} = productsInfo
    const dispatch = useDispatch()
    const size = useWindowSize()

    useEffect(() => {
        dispatch(productsListAction())
    }, [dispatch])

    return (
        <div>
            <div className="container products-wrap">
            <div className="row">
                <div className="col-md-3">
                    <div className="product-item-1">
                        <div className="product-thumb">
                            <img src={products[0]?.image} alt="Product Title" />
                        </div>
                        <div style={{paddingBottom: 20}} className="product-content">
                            <h4><a style={{fontWeight: 700}} href={`#/detail/${products[0]?.id}`}>{products[0]?.name}</a></h4>
                            <span className="tagline mt-1">{products[0]?.partner}</span>
                            <span className="price">${products[0]?.price}</span>
                            <p>
                                {size.width <= 1200 ?
                                    <>
                                        {products[0]?.short_description.slice(0, 40)}...
                                    </>
                                    : <>
                                        {products[0]?.short_description}
                                    </>
                                }
                            </p>
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
                            <img src={products[1]?.image} alt="Product Title" />
                        </div>
                        <div className="product-content">
                            <h4><a style={{fontWeight: 700}} href={`#/detail/${products[1]?.id}`}>{products[1]?.name}</a></h4>
                            <span className="tagline">{products[1]?.partner}</span>
                            <span className="price">${products[1]?.price}</span>
                            <p>
                                {size.width <= 1200 ?
                                    <>
                                        {products[1]?.short_description.slice(0, 40)}...
                                    </>
                                    : <>
                                        {products[1]?.short_description}
                                    </>
                                }
                            </p>
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
                            <img src="images/featured/3.jpg" alt="Product Title" />
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
