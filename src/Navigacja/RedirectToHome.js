import { rest } from 'lodash'
import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
export default function RedirectToHome({component: Component, ...rest}) {
    const {currentUser} = useAuth()
    return (
        <Route
        {...rest}
        render={props => {
        return <Redirect to="/home" />
        }}>

        </Route>
    )
}
