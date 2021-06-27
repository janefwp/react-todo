import React, {useState, useEffect,useContext} from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { InfosContext } from '../../context/InfosContext'
import { useTranslation} from 'react-i18next';

function RegisterScreen({location,history}) {
    const initialUser={
        name:'',
        email:'',
        password:'',
        age:0

    }
    const {t}=useTranslation()
    const {userRegister, registerLoading,registerError}=useContext(InfosContext)
    const [user, setUser]=useState(initialUser)
    const redirect = location.search ? location.search.split('=')[1] : `/`
    // const [loading,setLoading]=useState(false)
    const changeHandler=(e)=>{
        const {name, value}=e.target
        setUser({ ...user, [name]: value })
        
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        userRegister(user)

    }

    useEffect(()=> {
       if(registerLoading)
       {
        history.push(redirect)
       }
            
        
    },[registerLoading])

    return (
        <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label >{t('registerform.name')}</Form.Label>
                        <Form.Control required type="name" placeholder="Name" name="name" onChange={changeHandler}/>    
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label >{t('registerform.email')}</Form.Label>
                        <Form.Control required type="email" placeholder="Email" name="email" onChange={changeHandler}/>    
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>{t('registerform.password')}</Form.Label>
                        <Form.Control required type="password" placeholder="Password" name="password" onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="age">
                        <Form.Label>{t('registerform.age')}</Form.Label>
                        <Form.Control required type="age" placeholder="Age" name="age" onChange={changeHandler}/>
                    </Form.Group>

                    <Button type='submit' variant='primary'>{t('register')}</Button>
                </Form> 
                <Row className='py-3'>
                <Col>
                    {t('Have a Account')} <Link 
                    to ={redirect ? `/login?redirect=${redirect}` : `/login`} >
                        {t('login')}
                    </Link>
                </Col>
            </Row>
            </Col>

        </Row>
    )
}

export default RegisterScreen
