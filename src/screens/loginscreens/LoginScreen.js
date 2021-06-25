import React,{useState,useContext,useEffect} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { InfosContext } from '../../context/InfosContext'
import { useTranslation} from 'react-i18next';

function LoginScreen({location,history}) {
    const { t } = useTranslation();
    const {userLogin, loginLoading,userInfo}=useContext(InfosContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const redirect = location.search ? location.search.split('=')[1] : `/`
    const submitHandler=(e)=>{
        
        e.preventDefault()
        userLogin(email,password)
    
        // setLoading(true)

    }
    
    useEffect(() => {
        if(loginLoading)
        {
            history.push('/')
        }
        
    }, [userInfo])

    return (

        <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email">
                        <Form.Label >{t('loginform.email')}</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>    
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>{t('loginform.password')}</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>

                    <Button type="submit">{t('login')}</Button>   
                </Form> 
                <Row className='py-3'>
                    <Col>
                        {t('New Customer')} <Link to='/register'>{t('register')}</Link>
                    </Col>
                </Row>
            </Col>

        </Row>
        
    )
}

export default LoginScreen
