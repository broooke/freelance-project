import React from 'react'
import NewProducts from '../components/NewProducts'
import ProductsList from '../components/Products'

function Products() {
    return (
        <>
            <ProductsList />
            <hr></hr>
            <NewProducts />
        </>
    )
}

export default Products
