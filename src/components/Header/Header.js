import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'

function Header() {

    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/todo">Todo</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
      
                    </Nav>

                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header