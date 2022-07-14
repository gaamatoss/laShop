import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import { Navbar, Nav, Button } from 'rsuite';
import { useHistory } from 'react-router-dom'
import './style.css';

const NavBarInstance = () => {
  const history = useHistory();
  const to = () => history.push('/')
  const goTo = () => history.push('/checkout');
  const navigateTo = () => history.push('/shop');
  return (
    <Navbar className="navbody" appearance="inverse">
      <Navbar.Body>
        <Nav>
          <Button appearance="primary" onClick={navigateTo} className="btn-nav">
            Shop
          </Button>
          <Button appearance="primary" onClick={goTo} className="btn-nav">
            Checkout
          </Button>
        </Nav>
        <Nav pullRight>
          <Button appearance="primary" onClick={to} className="btn-nav">
            Log out
          </Button>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default NavBarInstance;
