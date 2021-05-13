import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect, Route, Switch} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../const/const'
const AppRoute = () => {
    const isAuth = useSelector(state=>state.User.isAuth)

    return (
        <Switch>
            {isAuth&&authRoutes.map(({path,component})=>{
                return (
                    <Route key={path} path={path} component={component} exact/>
                )
            })}
            {publicRoutes.map(({path,component})=>{
                return (
                    <Route key={path} path={path} component={component} exact/>
                )
            })}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    )
}

export default AppRoute
