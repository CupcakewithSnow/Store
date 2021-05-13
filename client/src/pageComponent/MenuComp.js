import React from 'react'
import { List, ListItem, ListItemText, } from '@material-ui/core'

const MenuComp = (props) => {
    return (
        <List>
            {props.type.map(t=>{
                return (
                    <ListItem button key = {t.id}> 
                        <ListItemText>
                            {t.name}
                        </ListItemText>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default MenuComp
