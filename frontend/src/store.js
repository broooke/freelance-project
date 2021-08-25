import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsListReducer, userLoginReducer, userRegisterReducer,productDetailReducer, cartReducer } from './reducers/Reducers'

const reducer = combineReducers({
    productsList: productsListReducer,
    login: userLoginReducer,
    register: userRegisterReducer,
    productDetail: productDetailReducer,
    cart: cartReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const cartItems = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) : null

const initialState = {
    login: { userInfo: userInfoFromStorage },
    cart:  {items: cartItems}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store