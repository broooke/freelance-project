import React from 'react'

function Login() {
    return (
        <div style={{padding: '90px 0', marginBottom: 70}} className="cont">
            <div className="d-flex justify-content-center">
            <form className="border p-3">
                <h1 class="h3 mb-3 fw-normal text-center">Логин</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Почта</label>
                </div>
                <div class="form-floating mt-2">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Войти</button>
            </form>
            </div>
        </div>
    )
}

export default Login
