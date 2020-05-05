// "use strict"
import React from 'react';
import { Nav, NavItem, Navbar, Badge } from 'react-bootstrap';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse FixedTop collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Navbar.Header> */}

                <Nav className="mr-auto">
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Brand href="/login">Login</Navbar.Brand>
                    <Navbar.Brand href="/new">New Post</Navbar.Brand>
                    <Navbar.Brand href="/history">History</Navbar.Brand>
                </Nav>
                {/* </Navbar.Header> */}
            </Navbar.Collapse>
        </Navbar>
        );
    };
};

export default Menu;