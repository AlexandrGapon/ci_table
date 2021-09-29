import React from 'react'
import { Formik } from 'formik'
import { validationSchema } from '../utils/formValidation'
import cl from '../styles/AuthForm.module.css'
import { useDispatch } from 'react-redux'
import { setIsAuth, setIsLoading } from '../store/appReducer'

const AuthForm = () => {
    const dispatch = useDispatch()

    const submit = (values, {setSubmitting}) => {
        dispatch(setIsLoading(true))
        setTimeout(() => {
            setSubmitting(false)
            dispatch(setIsAuth(true))
            dispatch(setIsLoading(false))
        }, 2000)
    }

    return (
        <Formik
            initialValues={{ login: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit = {submit}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit} className={cl.form}>
                    <div className={cl.input__container}>
                        <input
                            id='login'
                            type='text'
                            placeholder='Логин'
                            {...formik.getFieldProps('login')}
                        />
                        {formik.touched.login && formik.errors.login ? (
                            <div className={cl.form__error}>{formik.errors.login}</div>
                        ) : null}
                    </div>
                    <div className={cl.input__container}>
                        <input
                            id='password'
                            type='password'
                            placeholder='Пароль'
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className={cl.form__error}>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <button type='submit'>войти</button>
                </form>
            )}
        </Formik>
    )
}

export default AuthForm