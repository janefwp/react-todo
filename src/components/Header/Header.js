import React, {useContext} from 'react'
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useTranslation} from 'react-i18next';
import { InfosContext } from '../../context/InfosContext'

function Header() {

    const { t, i18n } = useTranslation();
    const {userInfo, userLogout} = useContext(InfosContext)
    console.log(userInfo)
    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    };

    const logoutHandler=()=>{
        userLogout()
    }
    return (
        <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/todo">{t('todo')}</Nav.Link>
                        <Nav.Link href="/about">{t('about')}</Nav.Link>
                    </Nav>

                    <Nav className="mr-auto">
                    {userInfo ? (
                                <NavDropdown title={userInfo.user.name} id='username'>

                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                            </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                </LinkContainer>
                            )
                            }

                </Nav>
                </Navbar.Collapse>

                <Nav className="mr-auto">
                    <button type="button" onClick={() => changeLanguage('en')}>
                        en
                    </button>

                    <button type="button" onClick={() => changeLanguage('ch')}>
                        ch
                    </button>
                </Nav>
                
                </Container>
            </Navbar>
        </>
    )
}

export default Header