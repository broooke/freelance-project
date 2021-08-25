import React from 'react'

function Footer() {
    return (
            <div style={{color: 'white'}} class="main-footer">
            <div class="cont">
                <div class="row">
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">About Us</h3>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, debitis recusandae.
                            <a href="https://facebook.com"><button className='btn btn-outline-light my-2'>Facebook</button></a><br></br>
                            <a href="https://twitter.com"><button className='btn btn-outline-light'>Twitter</button></a>
                        </div> 
                    </div> 
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">Why Choose Us?</h3>
                            Kool Store is free responsive eCommerce template provided by templatemo website. You can use this layout for any website.
                            <br></br><br></br>Tempore cum mollitia eveniet laboriosam corporis voluptas earum voluptate. Lorem ipsum dolor sit amet.
                            <br></br><br></br>Credit goes to <a rel="nofollow" href="http://unsplash.com">Unsplash</a> for all images.
                        </div> 
                    </div> 
                    <div class="col-md-2">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">Ссылки</h3>
                            <ul>
                                <li><a href="#/">Товары</a></li>
                                <li><a href="#/cart">Корзина</a></li>
                                <li><a href="#/about">О компании</a></li>
                            </ul>
                        </div> 
                    </div> 
                    <div class="col-md-4">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">Регистрация</h3>
                            <button className='btn btn-outline-light'>Зарегистрироваться</button>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
    )
}

export default Footer
