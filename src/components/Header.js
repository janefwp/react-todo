import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'




function Header() {

    return (
        <header>
            <Navbar bg="light" expand="lg">
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/todo">Todo</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
      
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header