import React from "react";
import './style.css'


export default function cardList() {
    return (
        <div id="fruitList" className="itemsList">
            <ul>
                {/* {frutas.map((fruta) => (
                    <li key={fruta}>{fruta.name} - {fruta.price}</li>
                ))} */}
            </ul>
            <span>Total: </span>
        </div>
    )
}