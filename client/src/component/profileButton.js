import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {setUserAC,setIsAuthAC} from '../store/userReducer'
import { LOGIN_ROUTE, USER_PAGE } from '../const/const';
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
export default function ProfileButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const classes = useStyles()
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch()
    const history = useHistory()
    const handleOut = ()=>{
        dispatch(setUserAC({}))
        dispatch(setIsAuthAC(false))
        history.push(LOGIN_ROUTE)
    }
    
  
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.buttons}>
                Профиль
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=>history.push(USER_PAGE)}>Мой профиль</MenuItem>
                <MenuItem onClick={handleClose}>Заказы</MenuItem>
                <MenuItem onClick={()=>handleOut()}>Выйти</MenuItem>
            </Menu>
        </div>
    );
}