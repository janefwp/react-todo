import React,{useState, useContext} from 'react'
import {Form,Button,Row,Col,Modal} from 'react-bootstrap'
import { InfosContext } from '../../../../context/InfosContext'
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import TodoInput from '../public/TodoInput'
import { addInfoAction } from '../../../../redux/actions'
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'

const TodoForm =(props) =>{
    const initalInfo = {
        description: '',
    }
    const dispatch=useDispatch()
    const [info, setInfo]=useState(initalInfo)
    const {userInfo}=useContext(InfosContext)

    const { t } = useTranslation();

    const handleInputChange=(e)=>{
        const { name, value } = e.target
		setInfo({ ...info, [name]: value })
        
    }
    const notify = () => toast('Successfully add one todo task');
    const submitHandler=e=>{
        e.preventDefault()
        props.onHide()
        dispatch(addInfoAction(info,userInfo))
        setInfo(initalInfo)
        notify()
       
    }
    return (
            <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{t('todoform.title')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={submitHandler}>
                    <TodoInput label={t('todoform.description')} as="input" name="description" value={info.description} required={true} onChange={handleInputChange}/>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 9 }}>
                            <Button type="submit">{t('submit')}</Button>
                        </Col>
                    </Form.Group>
            </Form>
            </Modal.Body>
 
            </Modal>
            // </Container>
    )
}

export default TodoForm
