import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import MainPage from '../pages/MainPage'
import AuthPage from '../pages/AuthPage'

const AppRouter = () => {
    const auth = useSelector(state => state.app.isAuth)

    return (
        auth ?
        <Switch>
            <Route path='/' exact component={MainPage} />
            <Redirect to='/' />
        </Switch>
        :
        <Switch>
            <Route path='/login' exact component={AuthPage} />
            <Redirect to='/login' />
        </Switch>
    )
}

export default AppRouter