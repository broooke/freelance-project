import React from 'react'

function Footer() {
    return (
            <div style={{color: 'white'}} class="main-footer">
            <div class="cont">
                <div class="row">
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">О нас</h3>
                            Самый редкий табак и лучшего качества только у нас. Перейдите в раздел о компании за подробностями.<br></br>
                            <a href="https://facebook.com"><button className='btn btn-light my-2'>Facebook</button></a><br></br>
                            <a href="https://twitter.com"><button className='btn btn-light'>Twitter</button></a>
                        </div> 
                    </div> 
                    <div class="col-md-3">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">Почему выбирают нас?</h3>
                            Наша компания производит продукцию из лучших сортов табака: Кавендиш, Вирджиния и Кентукки.<br></br><br></br>
                            Мы разработали собственную систему выварки табака,что позволило избежать ненужных корпоративных
                            правил и спокойно достигать лучших результатов в индустрии.<br></br><br></br>
                            Выбирай лучшее с нами.
                        </div> 
                    </div> 
                    <div class="col-md-2">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">Ссылки</h3>
                            <ul>
                                <li><a href="https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BB%D1%8C%D1%8F%D0%BD#%D0%A2%D0%B0%D0%B1%D0%B0%D0%BA">Про табак</a></li>
                                <li><a href="https://originalvirginia.com/">Вирджиния</a></li>
                                <li><a href="https://waterpipe.pro/tag/tabak-kentucky/">Кентукки</a></li>
                                <li><a href="https://tophookah.info/proizvodstvo-tabaka-dlya-kalyana-sostav-tabaka/">Изготовление</a></li>
                            </ul>
                        </div> 
                    </div> 
                    <div class="col-md-4">
                        <div class="footer-widget">
                            <h3 style={{fontWeight: 800, fontSize: 25, marginBottom: 10}} class="widget-title">Регистрация</h3>
                            <a href="#/signup"><button className='btn btn-light'>Зарегистрироваться</button></a>
                        </div>
                    </div> 
                </div> 
            </div> 
        </div>
    )
}

export default Footer
