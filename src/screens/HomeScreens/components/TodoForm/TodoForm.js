import React,{useState, useContext} from 'react'
import {Form,Button,Row,Col} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { InfosContext } from '../../../../context/InfosContext'
// import {addInfoAction} from '../../../../redux/actions'

const TodoForm =() =>{
    const initalInfo = {
        id: null,
        description: '',
        category:'',
        content: '',
        isChecked: false
    }
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
    }
    return (
        <div>
            <Form onSubmit={submitHandler}>
                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>
                            Discription
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" name="description" value={info.description} required={true} onChange={handleInputChange}  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>
                            Category
                        </Form.Label>
                        <Col sm={8}>
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
                        <Form.Label column sm={4}>
                            Content
                        </Form.Label>
                        <Col sm={8}>
                            <Form.Control type="text" name="content" value={info.content} required={true} onChange={handleInputChange} />
                        </Col>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default TodoForm
