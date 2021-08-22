import React, {useState, useContext, useEffect} from 'react'
import {Button,Table, Container,Row, Col} from 'react-bootstrap'
import { InfosContext } from '../../../../context/InfosContext'
import Loader from '../../../../components/loader/Loader'
import Message from '../../../../components/message/Message'
import Infolist from '../public/Infolist'
import toast from 'react-hot-toast'
import './InfoTable.scss'
import { useTranslation } from 'react-i18next';
import TodoForm from '../todoform/TodoForm'
import { listInfoAction } from '../../../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { delInfoAction } from '../../../../redux/actions'

function InfoTable(props){
    const dispatch=useDispatch()
    const infolist = useSelector(state=>state.infoList)
    const infoAdd=useSelector(state=>state.infoAdd)
    const {success:successAdd}=infoAdd
    const {infos,loading,error}=infolist
    const infoDel=useSelector(state=>state.infoDel)
    const {success:successDel}=infoDel
    const {userInfo}=useContext(InfosContext)
    const [allChecked, setAllChecked]=useState(false)
    const [selectedChecked, setSelectedChecked]=useState(false)
    // const [checkNum, setCheckNum]= useState(0)
    // const [allinfos,setAllinfos]=useState(infos)
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const deleteInfoHandler=(id)=>{    
        dispatch(delInfoAction(id,userInfo))
        // setCheckNum(pre=>pre-1)
        toast('Successfully deleted one todo task')
    }

    // const checkedItemHandler=(event)=>{
    //     var isChecked=event.target.checked;  
   
    //     setSelectedChecked(!selectedChecked)

    // }
    // const selectAllHandler=(event)=>{

    //     var isChecked=event.target.checked
    //     isChecked ? setCheckNum(infos.length) : setCheckNum(0)
    //     setAllChecked(!allChecked)
        
    // }

    useEffect(() => {
        if(userInfo){
            dispatch(listInfoAction(userInfo))
            // setAllinfos(infos)
        }
        
        // if(checkNum ===0){
        //     setAllChecked(false)
        // }
        // else {    
        //     setAllChecked(checkNum === infos.length)      
        // }
        
    }, [successAdd,successDel, userInfo])

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
            {loading? <Loader /> :error?<Message variant='danger'>{error}</Message>:(

            <div>
            
            <Table className="table table-hover" >
            <thead>
                <tr>
                    {/* <th><input type="checkbox" checked={allChecked} onChange={selectAllHandler}/></th> */}
                    <th>{t('todolist.description')}</th>
                    <th>{t('todolist.completed')}</th>
                    <th>{t('todolist.operate')}</th>
                </tr>
            </thead>
            <tbody>
                {infos?.map(item=>(   
                    <Infolist key={item._id} item={item} onClick={() => deleteInfoHandler(item._id)}/>
                                          
                ))}
            </tbody>
            </Table>
            </div>
            )}
            
        </Container> 
    )
}

export default InfoTable
