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
    PRODUCT_FAIL
} from '../constants/Constants'
import axios from 'axios'

export const productsListAction = (keyword='') => async (dispatch) => {
    try{
        dispatch({
            type: PRODUCTS_REQUEST
        })

        const {data} = await axios.get(`https://freelance-project-kwork.herokuapp.com/api/products/${keyword}`)

        dispatch({
            type: PRODUCTS_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PRODUCTS_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message,
        })
    }
}

export const productDetailAction = (id) => async (dispatch) => {
    try{
        dispatch({
            type: PRODUCT_REQUEST
        })

        const {data} = await axios.get(`https://freelance-project-kwork.herokuapp.com/api/product/${id}/`)

        dispatch({
            type: PRODUCT_SUCCESS,
            payload: data
        })
    }catch(error){
        dispatch({
            type: PRODUCT_FAIL,
            payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message,
        })
    }
}


export const userLoginAction = (username = '', password = '') => async (dispatch) => {
    try{
        dispatch({type:USER_LOGIN_REQUEST})

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('https://freelance-project-kwork.herokuapp.com/api/login/', {'username': username, 'password': password}, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail 
                ? error.response.data.detail 
                : error.message,
        })
    }
}




export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
}

export const userRegisterAction = (email = '', password = '') => async (dispatch) => {
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }

        const {data} = await axios.post('https://freelance-project-kwork.herokuapp.com/api/register/', {'email':email, 'password':password}, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload:data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}