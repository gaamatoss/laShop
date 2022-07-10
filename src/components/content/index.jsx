import './style.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Shop from '../shop'
import Payment from '../payment'

const Content = () => (
    <main className="Content">
        <Switch>
            <Route exact path="/shop">
                <Shop />
            </Route>
            <Route path="/payment">
                <Payment />
            </Route>
        </Switch>
    </main>
)

export default Content