import React,{useState, useContext} from 'react'
import {Form,Button,Row,Col, Container} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { InfosContext } from '../../../../context/InfosContext'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import TodoInput from './components/TodoInput'
import TodoSelect from './components/TodoSelect';
import Tododatepicker from './components/Tododatepicker';
// import {addInfoAction} from '../../../../redux/actions'

const TodoForm =() =>{
    const initalInfo = {
        id: null,
        description: '',
        category:'',
        content: '',
        deadline:new Date(),
        isChecked: false
    }
    const [info, setInfo]=useState(initalInfo)
    const {addInfos}=useContext(InfosContext)
    const [endDate, setEndDate] = useState(new Date());
    // const [startDate, setStartDate] = useState(new Date());
    // const dispatch = useDispatch()
    const handleInputChange=(e)=>{
        console.log(e)
        const { name, value } = e.target
		setInfo({ ...info, [name]: value })
        // setInfo({...info,['deadline']:endDate})
        
    }
    const notify = () => toast('Successfully add one todo task');
    const submitHandler=e=>{
        e.preventDefault()
        addInfos(info)
        console.log(info)
        // dispatch(addInfoAction(info))
        // setInfos((prepInfos)=>{return [...prepInfos,info]})
        setInfo(initalInfo)
        notify()
        // addToast('Successfully add one todo task', { appearance: 'success' })
    }
    return (
            <Container>
            <h4>Create New Task</h4>
            <br />
            <Form onSubmit={submitHandler}>
                    <TodoInput label="Description" as="input" name="description" value={info.description} required={true} onChange={handleInputChange}/>
                    <TodoSelect label="Category" as="select" name="category" value={info.category} required={true} onChange={handleInputChange} />
                    <TodoInput label="Content" as="textarea" name="content" value={info.content} required={true} onChange={handleInputChange}/>
                    <Tododatepicker label="Deadline" as="DatePicker" name="dealine" selected={endDate} onChange={(date)=>setInfo({...info,['deadline']:date})}/>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 9 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                    {/* <Form.Group as={Row} >
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

                    <Form.Group as={Row} >
                        <Form.Label column sm={3}>
                            Deadline
                        </Form.Label>
                        <Col sm={9}>
                            <DatePicker selected={endDate} onChange={(date)=>setInfo({...info,['deadline']:date})} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 9, offset: 3 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group> */}
            </Form>
           
            </Container>
    )
}

export default TodoForm
