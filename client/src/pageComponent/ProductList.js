import React from 'react'
import { Row } from 'react-bootstrap'

import ProductItem from './ProductItem'

const ProductList = (props) => {
   
    return (
       <Row >
           {props.product.map(p=>{
               return (
                   <ProductItem key={p.id} p={p}/>
               )
           })}
       </Row>
    )
}

export default ProductList
