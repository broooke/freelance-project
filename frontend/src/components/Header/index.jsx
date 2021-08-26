import React, {useState} from 'react'
import { Search } from 'react-feather'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/Actions'
import { useHistory } from 'react-router-dom'

function Header() {
    const user = useSelector(state => state.login)
    const {userInfo} = user
    const dispatch = useDispatch()
    const [q, setQ] = useState('')
    const history = useHistory()

    const logoutHandler = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    const submitHandler = (e) => {
        e.preventDefault()
        history.push(`/search/?q=${q}`)
    }

    return (
        <div className="header">
            <div className="first">
                <div className="button-wrap container">
                    { userInfo ? (
                        <a style={{borderLeft: '1px solid #dddddd', padding: '15px 10px', borderRight: '1px solid #dddddd'}} onClick={logoutHandler}>Выйти</a>
                        ) : (
                            <>
                                <a style={{borderLeft: '1px solid #dddddd', padding: '15px 10px', borderRight: '1px solid #dddddd'}} href="#/signup">Зарегистрироваться</a>
                                <a style={{padding: '15px 10px', borderRight: '1px solid #dddddd'}} href="#/login">Войти</a>
                            </>
                        )
                    }
                </div>
            </div>
            
            <div className="second">
                <div className="form-name-wrap container">
                    <a href="#/"><h1>ОНЛАЙН МАГАЗИН</h1></a>
                    <form onSubmit={submitHandler}>
                        <input required value={q} onChange={(e) => setQ(e.target.value)} className="form-control" type="text" />
                        <button className="btn btn-primary" type="submit"><Search/></button>
                    </form>
                </div>
            </div>
            <div className="third">
                <div className="links-wrap container">
                    <a style={{borderLeft: '1px solid #3598db', padding: '20px 15px', borderRight: '1px solid #3598db', color: 'white'}} href="#/">Товары</a>
                    <a style={{padding: '20px 15px', borderRight: '1px solid #3598db', color: 'white'}} href="#/cart">Корзина</a>
                    <a style={{padding: '20px 15px', borderRight: '1px solid #3598db', color: 'white'}} href="#/about">О компании</a>
                </div>
            </div>
        </div>
    )
}

export default Header
