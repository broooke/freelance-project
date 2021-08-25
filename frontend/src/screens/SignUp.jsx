import React, {useState} from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userRegisterAction } from '../actions/Actions'

function SignUp({history}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.register)
    const {userInfo, error, loading} = user

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [userInfo, history])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Пароли не совпадают')
        } else {
            dispatch(userRegisterAction(username, password))
        }
    }

    return (
        <div style={{padding: '90px 0'}} className="cont">
            <div className="d-flex justify-content-center">
            <form style={{width: 500}} onSubmit={submitHandler} className="border p-3">
                <h1 class="h3 mb-3 fw-normal text-center">Регистрация</h1>

                <div class="form-floating">
                    <input value={username} onChange={(e) => setUsername(e.target.value)} required type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Почта</label>
                </div>
                <div class="form-floating mt-2">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Пароль</label>
                </div>
                <div class="form-floating mt-2">
                    <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required type="password" class="form-control" id="floatingPassword1" placeholder="Confirm password" />
                    <label for="floatingPassword1">Подтверждение пароля</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Зарегистрироваться</button>

                { message ? (
                    <div className='alert alert-danger mt-3'>
                        {message}
                    </div>
                ):null}
            </form>
            </div>
        </div>
    )
}

export default SignUp
