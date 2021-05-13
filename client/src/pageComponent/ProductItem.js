
import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import { useHistory } from 'react-router'

import { LOGIN_ROUTE, PRODUCT_ROUTE } from '../const/const'
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
const ProductItem = (props) => {
    const history = useHistory()
    const classes = useStyles()
    return (
        <Col xl={3} md={4} sm={6} className='mt-3'  >
            <Card style={{ maxWidth: 240 }} className='p-2'>
                <div className='d-flex justify-content-center'>
                    <Image src={process.env.REACT_APP_API_URL + props.p.img} style={{ maxWidth: 210, height: 120, cursor: 'pointer' }}
                        onClick={() => history.push(PRODUCT_ROUTE + '/' + props.p.id)} />
                </div>
                <div className='d-flex justify-content-between p-2'>
                    <div>
                        <strong>
                            {props.p.name}
                        </strong>
                    </div>
                    <div>
                        {props.p.price} ₽
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button className={classes.buttons} onClick={() => history.push(PRODUCT_ROUTE + '/' + props.p.id)} style={{width:'100%'}}>
                        Подробнее
                </Button>
                </div>
            </Card>
        </Col>
    )
}

export default ProductItem
