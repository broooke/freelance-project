import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsListAction } from '../actions/Actions'

function SearchProducts({history}) {
    let keyword = history.location.search
    const productsInfo = useSelector(state => state.productsList)
    const {products} = productsInfo
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsListAction(keyword))
    }, [dispatch, keyword])
    return (
        <div style={{marginTop: 50, marginBottom: 60}} className='cont'>
        <div className='row'>
            {products?.map((product, index) => (
                <div key={index} class="col-md-3 col-sm-6">
                    <div class="product-item">
                        <div class="product-thumb">
                            <img src={product.image} alt="" />
                        </div>
                        <div class="product-content">
                            <h5><a href={`#/detail/${product.id}`}>{product.name}</a></h5>
                            <span class="price">${product.price}</span>
                        </div>
                    </div>
                </div> 
            ))}
        </div>
        </div>
    )
}

export default SearchProducts
