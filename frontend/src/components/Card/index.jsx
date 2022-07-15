import { Button } from 'rsuite';
import React from 'react';
import './style.css'

export const addedFruit = []

function addFruit(e) {
    let fruitElement = e.target.previousSibling.firstChild
    alert(`${fruitElement.textContent} foi adicionado ao Carrinho`)
    addedFruit.push(e.target.previousSibling.textContent)
    console.log(addedFruit);
}

const fruitCard = (props) => {
    return (
        <div className='fruitCard'>
            <img alt='fruit' src={props.path} />
            <div className='fruitInfo'>
                <h4>{props.name}</h4>
                <span>{props.price}</span>
            </div>
            <Button onClick={addFruit}>Adicionar</Button>
        </div>
    )
}

export default fruitCard