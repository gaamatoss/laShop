import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../../components/menu'
import Content from '../../components/content'

const Home = () => {
    return (
        <div className="Home">
            <Router>
                <Menu />
                <Content />
            </Router>
        </div>

    )
}
export default Home