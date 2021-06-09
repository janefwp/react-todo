import React, {useState, useContext, useEffect} from 'react'
import {Button,Table, Container,Row, Col} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import { delInfoAction, changeCheckedstatusAction, changeAllCheckedstatusAction, delSelectedInfoAction} from '../../../../redux/actions'
import { InfosContext } from '../../../../context/InfosContext'
import TodoSelect from '../public/TodoSelect'
import toast from 'react-hot-toast'
import './InfoTable.scss'



function InfoTable(props){

    // const infos= useSelector(state=>state.infos)
    const {infos, changeCheckedStatus, selectAll, delInfo, delSeleted}=useContext(InfosContext)
    // const allinfo = infos.infos
    const [allChecked, setAllChecked]=useState(false)
    const [selectedChecked, setSelectedChecked]=useState(false)
    const [checkNum, setCheckNum]= useState(0)
    const [sortType, setSortType]=useState(0)
    const [allinfos,setAllinfos]=useState(infos)

    console.log(infos)
    console.log(checkNum)
    // const dispatch = useDispatch()
    const deleteInfoHandler=(id)=>{
        // dispatch(delInfoAction(id))
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
        // dispatch(changeCheckedstatusAction({isChecked:isChecked,id:infoid}))
        setSelectedChecked(!selectedChecked)

    }
    const selectAllHandler=(event)=>{
        // dispatch(changeAllCheckedstatusAction(event.target.checked))
        // allinfo.map(item=>item.isChecked=event.target.checked)
        var isChecked=event.target.checked
        isChecked ? setCheckNum(infos.length) : setCheckNum(0)
        selectAll(event.target.checked)
        setAllChecked(!allChecked)
        
    }
    
    const deleteSelectedInfoHandler=()=>{
        // dispatch(delSelectedInfoAction())
        delSeleted()
        setAllChecked(false)
        setSelectedChecked(false)
        setCheckNum(0)
        console.log(checkNum)
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
            <h3>Todo List</h3>
            <br />
            {(infos.length!=0) && 
            <div>
            <Row>
                <Col md={4}>
                    <Button variant='secondary' disabled={(checkNum===0)? true : false} onClick={deleteSelectedInfoHandler}>Delete seleted</Button> 
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    <TodoSelect label="Filter by" as="select" name="category" required={true} onChange={filterHandler}/>
                    {/* <label >Filter by category: &nbsp;</label>
                    <select name="category" onChange={filterHandler}> 
                        <option value="">All</option>
                        <option value="html">html</option>
                        <option value="css">css</option>
                    </select> */}
                </Col>
            </Row>
            <br />
            
            <Table className="table table-hover" >
            <thead>
                <tr>
                    <th><input type="checkbox" checked={allChecked} onChange={selectAllHandler}/></th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>
                        <button type="button" style={{border: 'none', background:'none'}}  onClick={sortHandler}>
                            <strong>Deadline</strong>
                        </button>
                    </th>                 
                    <th>Operate</th>
                </tr>
            </thead>
            <tbody>
                {allinfos.map(item=>(        
                        <tr className={item.isChecked ? 'selected': ''}  key={item.id} >
                            <td>
                                <input type="checkbox" value={item.id} onChange={checkedItemHandler} checked={item.isChecked}/>
                            </td>
                            <LinkContainer to={`/todo/${item.id}`}>   
                            <td>{item.description}</td>
                            </LinkContainer>  
                            <td>{item.category}</td>
                            
                            <td>{item.deadline.toDateString()}</td>
                           <td><Button variant="light" onClick={() => deleteInfoHandler(item.id)}>Delete</Button></td>
                        </tr>                          
                ))}
            </tbody>
            </Table>
            </div>
            }
        </Container>
    )
}

export default InfoTable
