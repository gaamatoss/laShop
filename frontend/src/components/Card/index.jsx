import { Button } from 'rsuite';
import React from 'react';
import './style.css'


const fruitCard = (props) => {
    return (
        <div className='fruitCard'>
            <img alt='fruit' src={props.path} />
            <div>
                <h4>{props.name}</h4>
                <span>{props.price}</span>
            </div>
            <Button>Add</Button>
        </div>
    )
}

export default fruitCard