import React,{useState, useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import {Form,Button,Row,Col, Table, NavItem,InputGroup} from 'react-bootstrap'
import TodoForm from '../components/TodoForm'
import InfoTable from '../components/InfoTable'
import {addInfoAction} from '../redux/actions'

function HomeScreen() {

    const [allinfo, setAllinfo]=useState([])
    // const infos= useSelector(state=>state)
    // console.log(infos)
    // const dispatch = useDispatch()
    const addInfo = info => {
        info.id=allinfo.length+1
		setAllinfo([ ...allinfo, info ])
        
	}
    const deleteInfo = id => {
        
		setAllinfo(allinfo.filter(item=>item.id!==id))
        
	}
    // useEffect(() => {
    //     dispatch(addInfoAction(allinfo))
    // }, [allinfo])

    return (
        <Row>
            <Col md={4}>
                <TodoForm addInfo={addInfo} />
            </Col>
            <Col md ={8}>
                <InfoTable allinfo={allinfo} deleteInfo={deleteInfo}/>
            </Col>
        </Row>
    )
}

export default HomeScreen
