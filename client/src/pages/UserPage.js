import React from 'react'
import { Container } from 'react-bootstrap'

const UserPage = () => {
    return (
        <Container className='mt-4 d-flex flex-column' style={{alignItems:'center'}}>
            <div style={{fontWeight:'bold',fontSize:'35px'}}>Профиль</div>
            <div className='d-flex'>
                <div className='mr-2'>Данил</div>
                <div>Клоунович</div>
            </div>
            <div>drujnin.danil</div>
            <div>Всего заказов:12</div>
        </Container>
    )
}

export default UserPage
