import React, {useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginAction } from '../actions/Actions'

function Login({history}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.login)
    const {userInfo, loading, error} = user

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [userInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(userLoginAction(username, password))
    }

    return (
        <div style={{padding: '90px 0', marginBottom: 70}} className="cont">
            <div className="d-flex justify-content-center">
            <form onSubmit={submitHandler} style={{width: 500}} className="border p-3">
                <h1 class="h3 mb-3 fw-normal text-center">Логин</h1>

                <div class="form-floating">
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="email" required class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Почта</label>
                </div>
                <div class="form-floating mt-2">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Войти</button>

                { error ? (
                    <div className='alert alert-danger mt-3'>
                        {error}
                    </div>
                ):null}
            </form>
            </div>
        </div>
    )
}

export default Login
