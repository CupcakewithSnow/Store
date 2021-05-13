import { Button, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { LOGIN_ROUTE } from '../const/const'
import { addProductCart, getOneProduct} from '../http/productApi'
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
const Product = () => {
    const history = useHistory()
    const Auth = useSelector(state => state.User.isAuth)
    const User = useSelector(state => state.User.user)
    
    const classes = useStyles()
    
    const [product, setProduct] = useState({ info: [] })
    const { id } = useParams()
    const basketId = User.id
    const productId = id
    const clickAdd = () => {
        addProductCart({ basketId, productId })
    }
    useEffect(() => {
        getOneProduct(id).then(data => setProduct(data))
    },[])
    return (
        <Container className='d-flex justify-content-between'>
            <Col xl={6} md={8} sm={6} className='mt-3' style={{ maxWidth: 450 }} >
                <img src={process.env.REACT_APP_API_URL + product.img} style={{ maxWidth: 450, marginTop: 20 }} />
            </Col>
            <Col xl={6} md={4} sm={6} className='mt-4'>
                <div>
                    <div className='font-weight-bold mb-2' >Пак иконок {product.name}</div>
                    <div style={{ fontSize: '25px' }}>{product.price}₽</div>
                    {Auth ?
                        <>
                            <Button className={classes.buttons} style={{ marginTop: '10px' }} onClick={() => clickAdd()} >Добавить в корзину</Button>
                            <Button className={classes.buttons} style={{ marginTop: '10px' }}  >get</Button>
                        </>

                        :
                        <Button className={classes.buttons} style={{ marginTop: '10px' }} onClick={() => history.push(LOGIN_ROUTE)}>Добавить в корзину</Button>
                    }

                </div>
            </Col>
        </Container>


    )
}

export default Product
