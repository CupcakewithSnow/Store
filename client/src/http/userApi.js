import { $authHost, $host } from './indexHttp'
import jwt_decode from 'jwt-decode'
import { setIsAuthAC, setUserAC } from '../store/userReducer'
export const registration = async (firstName, lastName, email, password) => {
    const { data } = await $host.post('srv/user/registration', { firstName, lastName, email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password) => {
    const { data } = await $host.post('srv/user/login', { email, password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    const { data } = await $authHost.get('srv/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const checkAuth = () => {
    return async (dispatch) => {
        const {data} = await $authHost.get('srv/user/auth')
        localStorage.setItem('token',data.token)
        dispatch(setUserAC(jwt_decode(data.token)))
        dispatch(setIsAuthAC(true))
    }
}
