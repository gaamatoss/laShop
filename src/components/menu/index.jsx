import './style.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = () => (
    <aside className="Menu">
        <nav>
            <div>
                <h1>Gabriel Matos</h1>
                <Link to='/'>Log out</Link>
            </div>
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/payment">Payment</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu