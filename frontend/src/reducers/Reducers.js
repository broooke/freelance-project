import { 
    PRODUCTS_REQUEST, 
    PRODUCTS_SUCCESS, 
    PRODUCTS_FAIL,
    
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,

    CART_ITEMS
} from '../constants/Constants'

export const productsListReducer = (state={products:[]}, action) => {
    switch (action.type) {
        case PRODUCTS_REQUEST:
            return {products: []}
        case PRODUCTS_SUCCESS:
            return {products: action.payload}
        case PRODUCTS_FAIL:
            return {error: action.payload}
        default:
            return state
    }
}

export const productDetailReducer = (state={product:{}}, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {product: {}}
        case PRODUCT_SUCCESS:
            return {product: action.payload}
        case PRODUCT_FAIL:
            return {error: action.payload}
        default:
            return state
    }
}

export const userLoginReducer = (state={}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true}
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default:
            return state
    }
}

export const userRegisterReducer = (state={}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true}
        case USER_REGISTER_SUCCESS:
            return {loading:false, userInfo:action.payload}
        case USER_REGISTER_FAIL:
            return {loading:false, error:action.payload}
        case USER_LOGOUT:
            return {}   
        default:
            return state
    }
}

export const cartReducer = (state={}, action) => {
    switch (action.type) {
        case CART_ITEMS:
            return {items: action.payload}
        default:
            return state
    }
}

