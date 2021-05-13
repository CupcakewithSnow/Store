import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { REGISTRATION_ROUTE, SHOP_ROUTE } from '../const/const'
import {  login, registration } from '../http/userApi'
import { setIsAuthAC, setUserAC } from '../store/userReducer'
const useStyles = makeStyles((theme) => ({
    butLog: {
        color: 'white',
        backgroundColor: '#990033',
        marginTop: 4,
        marginRight: 14,
        '&:hover': {
            color: 'white',
            backgroundColor: '#FF3300'
        }
    }
}))
const Auth = () => {
    const location = useLocation()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const history = useHistory()
    const Regist = location.pathname === REGISTRATION_ROUTE
    const classes = useStyles()
    const dispatch = useDispatch()
    const click = async () => {
        try {
            let data;
            if (Regist) {
                data = await registration(firstName, lastName, email, password)
            } else {
                data = await login(email, password)
            }
            dispatch(setUserAC(data))
            dispatch(setIsAuthAC(true))
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container className='d-flex justify-content-center align-items-center' style={{ height: window.innerHeight - 250 }}>
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{Regist ? 'Регистрация' : 'Вход'}</h2>
                <Form className='d-flex flex-column'>
                    {!Regist ?
                        <div>
                            <Form.Control className='mt-2' placeholder='Введите ваш Email' value={email} onChange={e => setEmail(e.target.value)} />
                            <Form.Control className='mt-2' placeholder='Введите ваш пароль' type='password' vlaue={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        :
                        <div>
                            <div className='d-flex'>
                                <Form.Control className='mt-2 mr-2' placeholder='Введите ваше имя' value={firstName} onChange={e => setFirstName(e.target.value)} />
                                <Form.Control className='mt-2' placeholder='Введите вашу фамилию' value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                            <div className='d-flex flex-column'>
                                <Form.Control className='mt-2 mr-2' placeholder='Введите ваше Email' value={email} onChange={e => setEmail(e.target.value)} />
                                <Form.Control className='mt-2' type='password' placeholder='Введите ваш пароль' value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                    }
                    {Regist ? <Row className='d-flex justify-content-center'>

                        <Button variant="contained" className={classes.butLog} onClick={() => click()}>{Regist ? 'Зарегестрироватсья' : 'Войти'}</Button>
                    </Row> :
                        <Row className='d-flex justify-content-between'>
                            <div className='pl-3 mt-2'>Нет аккаунта?<NavLink to={REGISTRATION_ROUTE}>Зарегестрируйтесь</NavLink></div>
                            <Button variant="contained" className={classes.butLog} onClick={() => click()}>{Regist ? 'Зарегестрироватсья' : 'Войти'}</Button>
                        </Row>
                    }
                </Form>
            </Card>

        </Container>
    )
}

export default Auth
