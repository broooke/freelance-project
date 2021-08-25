import React from 'react'
import { Search } from 'react-feather'
import './style.scss'

function Header() {
    return (
        <div className="header">
            <div className="first">
                <div className="button-wrap cont">
                    <a href="#/signup">
                    <button className='btn btn-outline-primary mx-2'>Регистрация</button>
                    </a>
                    <a href="#/login"><button className='btn btn-outline-primary'>Войти</button></a>
                </div>
            </div>
            
            <div className="second">
                <div className="form-name-wrap cont">
                    <a href="#/"><h1>ОНЛАЙН МАГАЗИН</h1></a>
                    <form>
                        <input className="form-control" type="text" />
                        <button className="btn btn-primary" type="submit"><Search/></button>
                    </form>
                </div>
            </div>
            <div className="third">
                <div className="links-wrap cont">
                    <a href="#/"><button className="btn btn-outline-light mx-2">Товары</button></a>
                    <a href="#/cart"><button className="btn btn-outline-light">Корзина</button></a>
                    <a href="#/about"><button className="btn btn-outline-light mx-2">О компании</button></a>
                </div>
            </div>
        </div>
    )
}

export default Header
