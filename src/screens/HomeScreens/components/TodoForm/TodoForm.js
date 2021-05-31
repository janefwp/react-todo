import React,{useState} from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addInfoAction} from '../../../../redux/actions'

const TodoForm =() =>{
    const initalInfo = {
        id: null,
        description: '',
        category:'',
        content: ''
    }
    const [info, setInfo]=useState(initalInfo)
    const dispatch = useDispatch()
    const handleInputChange=(e)=>{
        const { name, value } = e.target
		setInfo({ ...info, [name]: value })
        
    }
    const submitHandler=e=>{
        e.preventDefault()
        dispatch(addInfoAction(info))
        setInfo(initalInfo)
    }
    return (
        <div>
            <Form onSubmit={submitHandler}>
                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>
                            Discription
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" name="description" onChange={handleInputChange}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>
                            Category
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control as="select"
                                    required="required" 
                                    name="category"
                                    onChange={handleInputChange}>
                            <option>Choose...</option>
                            <option>css</option>
                            <option>html</option>
                            </Form.Control>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>
                            content
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" name="content" onChange={handleInputChange} />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default TodoForm
