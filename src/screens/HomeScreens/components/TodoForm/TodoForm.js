import React,{useState, useContext} from 'react'
import {Form,Button,Row,Col, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { InfosContext } from '../../../../context/InfosContext'
import { useToasts } from 'react-toast-notifications'
// import {addInfoAction} from '../../../../redux/actions'

const TodoForm =() =>{
    const initalInfo = {
        id: null,
        description: '',
        category:'',
        content: '',
        isChecked: false
    }
    const { addToast } = useToasts();
    const [info, setInfo]=useState(initalInfo)
    const {addInfos}=useContext(InfosContext)
    // const dispatch = useDispatch()
    const handleInputChange=(e)=>{
        const { name, value } = e.target
		setInfo({ ...info, [name]: value })
        
    }
    const submitHandler=e=>{
        e.preventDefault()
        addInfos(info)
        // dispatch(addInfoAction(info))
        // setInfos((prepInfos)=>{return [...prepInfos,info]})
        setInfo(initalInfo)
        addToast('Successfully add one todo task', { appearance: 'success' })
    }
    return (
            <Container>
            <h4>Create New Task</h4>
            <br />
            <Form onSubmit={submitHandler}>
                
                    <Form.Group as={Row} >
                        <Form.Label column sm={3}>
                            Discription
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" name="description" value={info.description} required={true} onChange={handleInputChange}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm={3}>
                            Category
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control as="select"
                                    required={true} 
                                    name="category"
                                    value={info.category}
                                    onChange={handleInputChange}>
                            <option value="">Choose...</option>
                            <option value="css">css</option>
                            <option value="html">html</option>
                            </Form.Control>
                        </Col>                    
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={3}>
                            Content
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control as="textarea"  rows={3} name="content" value={info.content} required={true} onChange={handleInputChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 9, offset: 3 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
            </Form>
            </Container>
    )
}

export default TodoForm
