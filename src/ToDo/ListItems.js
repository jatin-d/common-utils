import React from 'react';
import './ListItems.css'
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';




function ListItem (props){
    let checkboxClass = ''
    props.item.isChecked? checkboxClass = 'checked' : checkboxClass = 'notChecked'
    return (
        <div className={checkboxClass}>
            <FormControlLabel
                control={<Checkbox  onChange={props.handleCheckbox}
                checked = {props.item.isChecked}
                id={props.item.itemName}
                name={props.categoryId} />}
                label={props.item.itemName}
            />
            
        </div>   
    )
}
export default ListItem