import React from 'react'
import { useSelector } from 'react-redux'
import AuthForm from '../components/AuthForm'
import Loader from '../components/Loader'

const AuthPage = () => {
    const isLoading = useSelector(state => state.app.isLoading)

    return (
        <div className='authpage'>
            <div className='form__container'>
                <div className='form__title'>
                    <span>авторизиция</span>
                </div>
                <div className='withloader__container'>
                    {isLoading && <Loader />}
                    <AuthForm />
                </div>
            </div>
        </div>
    )
}

export default AuthPage