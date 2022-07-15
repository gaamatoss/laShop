import React from "react";
import './style.css'
import { addedFruit } from '../Card'

let cartAdded = addedFruit

export default function cardList() {
    return (
        <div id="fruitList" className="itemsList">
            <ul>
                {cartAdded.map((fruta) => (
                    <li className="payList">{fruta}</li>
                ))}
            </ul>
        </div>
    )
}