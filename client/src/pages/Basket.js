import { Button, makeStyles } from '@material-ui/core'
import React, { useEffect } from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductCart, getProductOfBasket, } from '../http/productApi'
import { nulifyAC } from '../store/basketReducer'
const useStyles = makeStyles((theme) => ({
    buttons: {
        color: 'white',
        backgroundColor: '#990033',
        '&:hover': {
            color: 'white',
            backgroundColor: '#FF3300'
        },
        marginRight: theme.spacing(1)
    }
}))
const Basket = () => {
    const classes = useStyles()
    const basket = useSelector(state => state.Basket.basket)
    const cart = useSelector(state => state.Basket.cart)
    const user = useSelector(state => state.User.user)
    const dispatch = useDispatch()
    useEffect(async () => {
        await dispatch(getProductCart(user.id))
        await dispatch(nulifyAC())
        await basket.map(p => { dispatch(getProductOfBasket(p.productId)) })
        console.log(cart)

    }, [])

    const allSum = cart.map(p => {
        let count = 0
        count = count + p.price
        return count
    })
    const summ = allSum.reduce((sum, carent) => {
        return sum + carent
    }, 0)
    console.log(summ)
    return (
        <Container className='d-flex mt-5'>
            <Col md={9}>
                <div style={{ fontSize: '30px', fontWeight: 'bold' }}>
                    <h1>Заказ ({cart.length})</h1>
                </div>
                <div>
                    {cart.map(p => {
                        return (
                            <div ket={p.id} className='d-flex mb-2'>
                                <div><img src={process.env.REACT_APP_API_URL + p.img} style={{ width: 150, height: 150 }} /></div>
                                <div className='ml-4'>
                                    <div><strong>Цена:</strong>{p.price}</div>
                                    <div><strong>Название:</strong>{p.name}</div>
                                    <Button className={classes.buttons}>Удалить</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Col>
            <Col md={3}>
                <Card className='p-2 d-flex flex-column justify-content-between' style={{ height: '200px' }}>
                    <div className='d-flex justify-content-between'>
                        <div style={{ fontWeight: 'bold' }}>Итого</div>
                        <div style={{ fontWeight: 'bold' }}>{summ}</div>
                    </div>

                    <Button className={classes.buttons}>Купить</Button>
                </Card>
            </Col>
        </Container>
    )
}

export default Basket
