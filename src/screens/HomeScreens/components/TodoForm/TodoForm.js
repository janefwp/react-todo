import React,{useState, useContext} from 'react'
import {Form,Button,Row,Col,Modal} from 'react-bootstrap'
import { InfosContext } from '../../../../context/InfosContext'
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import TodoInput from '../public/TodoInput'
import TodoSelect from '../public/TodoSelect';
import Tododatepicker from '../public/Tododatepicker';
import { useTranslation } from 'react-i18next';

const TodoForm =(props) =>{
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
    const [endDate] = useState(new Date());
    const { t } = useTranslation();

    const handleInputChange=(e)=>{
        console.log(e)
        const { name, value } = e.target
		setInfo({ ...info, [name]: value })
        // setInfo({...info,['deadline']:endDate})
        
    }
    const notify = () => toast('Successfully add one todo task');
    const submitHandler=e=>{
        e.preventDefault()
        props.onHide()
        addInfos(info)
        console.log(info)

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
                    <TodoSelect label={t('todoform.category')} as="select" name="category" value={info.category} required={true} onChange={handleInputChange} />
                    <TodoInput label={t('todoform.content')} as="textarea" name="content" value={info.content} required={true} onChange={handleInputChange}/>
                    <Tododatepicker label={t('todoform.deadline')} as="DatePicker" name="dealine" selected={endDate} onChange={(date)=>setInfo({...info,['deadline']:date})}/>
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
