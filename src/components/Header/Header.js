import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { useTranslation} from 'react-i18next';

function Header() {

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    };
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

                </Navbar.Collapse>
                
                <button type="button" onClick={() => changeLanguage('en')}>
                    en
                </button>

                <button type="button" onClick={() => changeLanguage('ch')}>
                    ch
                </button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header