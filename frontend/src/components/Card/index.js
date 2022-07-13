import { Button } from 'rsuite';
import React from 'react';
const fruitCard = (props) => {
    return (
        <div>
            <img alt='fruit Image' src={props.path} />
            <div>
                <h4>{props.name}</h4>
                <span>{props.price}</span>
            </div>
            <Button>Add</Button>
        </div>
    )
}

export default fruitCard