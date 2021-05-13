import React from 'react'
import { AppBar, Toolbar, Button, makeStyles, Container, Box } from '@material-ui/core'
import { NavLink, useHistory } from 'react-router-dom';
import { BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../const/const';
import ProfileButton from './profileButton'
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#993366'
    },
    box:{
        flexGrow:1,
        padding:0,
        margin:0
    },
    buttons:{
        color:'white',
        backgroundColor:'#990033',
        '&:hover':{
            color:'white',
            backgroundColor:'#FF3300'
        },
        marginRight:theme.spacing(1)
    }
}));
const NavBar = () => {
    const userAuth = useSelector(state=>state.User.isAuth)
    const history = useHistory()
    const classes = useStyles()
    return (
        <AppBar position="sticky" className={classes.appBar}>
            <Container>
                <Toolbar>
                    <Box className={classes.box}>
                        <NavLink to={SHOP_ROUTE} style={{ textDecoration: 'none', color: 'black', fontFamily: 'Roboto', fontSize: 18 }}>2D MAGAZINE</NavLink>
                    </Box>
                    {!userAuth ?
                        <Button variant='contained' className={classes.buttons} onClick={()=>history.push(LOGIN_ROUTE)}>Войти</Button>
                        :
                        <div style={{display:'flex'}}>
                            <Button variant="contained" className={classes.buttons} onClick={()=>history.push(BASKET_ROUTE)}>Корзина</Button>
                            <ProfileButton/>
                        </div>

                    }
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar
