import React, {useState, useContext, useEffect} from 'react'
import {Button,Table, Container,Row, Col, Modal} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { InfosContext } from '../../../../context/InfosContext'
import TodoSelect from '../public/TodoSelect'
import Infolist from '../public/Infolist'
import TodForm from '../todoform/TodoForm'
import toast from 'react-hot-toast'
import './InfoTable.scss'
import { useTranslation } from 'react-i18next';
import TodoForm from '../todoform/TodoForm'



function InfoTable(props){

    // const infos= useSelector(state=>state.infos)
    const {infos, changeCheckedStatus, selectAll, delInfo, delSeleted}=useContext(InfosContext)
    // const allinfo = infos.infos
    const [allChecked, setAllChecked]=useState(false)
    const [selectedChecked, setSelectedChecked]=useState(false)
    const [checkNum, setCheckNum]= useState(0)
    const [sortType, setSortType]=useState(0)
    const [allinfos,setAllinfos]=useState(infos)
    const { t, i18n } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const deleteInfoHandler=(id)=>{
        
        delInfo(id)
        setCheckNum(pre=>pre-1)
        console.log(checkNum)
        toast('Successfully deleted one todo task')
    }
    const checkedItemHandler=(event)=>{
        var isChecked=event.target.checked;  
        isChecked ? setCheckNum(pre=>pre+1) : setCheckNum(pre=>pre-1) 
        var infoid=parseInt(event.target.value);
        changeCheckedStatus({isChecked:isChecked,id:infoid})
        
        setSelectedChecked(!selectedChecked)

    }
    const selectAllHandler=(event)=>{

        var isChecked=event.target.checked
        isChecked ? setCheckNum(infos.length) : setCheckNum(0)
        selectAll(event.target.checked)
        setAllChecked(!allChecked)
        
    }
    
    const deleteSelectedInfoHandler=()=>{
     
        delSeleted()
        setAllChecked(false)
        setSelectedChecked(false)
        setCheckNum(0)
        toast('Successfully deleted selected todo task')
    }
    const sortHandler=()=>{
        if(sortType===0)
        {
            infos.sort((a,b)=>{return a.deadline-b.deadline})
            setSortType(1)
        }
        else {
            infos.sort((a,b)=>{return b.deadline-a.deadline})
            setSortType(0)
        }
        
        
    }
    const filterHandler=(e)=>{
        if(e.target.value === ""){
            setAllinfos(infos)
        }
        else {
            setAllinfos(infos.filter(item=>item.category===e.target.value))
        }
        
    }  

    useEffect(() => {
        setAllinfos(infos)
        if(checkNum ===0){
            setAllChecked(false)
        }
        else {    
            setAllChecked(checkNum === infos.length)      
        }
        
    }, [checkNum, infos])

    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h3>{t('todolist.title')}</h3>
                </Col>
                <Col md={4}>
                    <Button onClick={handleShow}>{t('todoform.title')}</Button>
                </Col>
            </Row>
            <TodoForm show={show} onHide={handleClose}/>

            
            <br />
            {(infos.length!=0) && 
            <div>
            <Row>
                <Col md={4}>
                    <Button variant='secondary' disabled={(checkNum===0)? true : false} onClick={deleteSelectedInfoHandler}>{t('todolist.delete_selected')}</Button> 
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <TodoSelect label={t('todolist.filter')} as="select" name="category" required={true} onChange={filterHandler}/>
                </Col>
            </Row>
            <br />
            
            <Table className="table table-hover" >
            <thead>
                <tr>
                    <th><input type="checkbox" checked={allChecked} onChange={selectAllHandler}/></th>
                    <th>{t('todolist.description')}</th>
                    <th>{t('todolist.category')}</th>
                    <th>
                        <button type="button" style={{border: 'none', background:'none'}}  onClick={sortHandler}>
                            <strong>{t('todolish.deadline')}</strong>
                        </button>
                    </th>                 
                    <th>{t('todolist.operate')}</th>
                </tr>
            </thead>
            <tbody>
                {allinfos.map(item=>(   
                    <Infolist item={item} onChange={checkedItemHandler} onClick={() => deleteInfoHandler(item.id)}/>
                                          
                ))}
            </tbody>
            </Table>
            </div>
            }
        </Container>
    )
}

export default InfoTable
