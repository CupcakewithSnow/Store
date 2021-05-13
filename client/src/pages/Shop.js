import { Container, } from '@material-ui/core'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuComp from '../pageComponent/MenuComp'
import { Col, Row } from 'react-bootstrap'
import ProductList from '../pageComponent/ProductList'
import { getProduct, getTypes,} from '../http/productApi'

const Shop = () => {
    const type = useSelector(state => state.Product.type)
    const product = useSelector(state => state.Product.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTypes())
        dispatch(getProduct())
    },[])
    
    return (
        <Container>
            <Row>
                <Col md={2} className='mt-3'>
                    <MenuComp type={type} />
                </Col>
                <Col md={10} className='mt-4'>
                    <ProductList product={product} />
                </Col>
            </Row>
        </Container>

    )
}

export default Shop
