import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { InfosContext } from '../../context/InfosContext'
import { Container } from 'react-bootstrap'

function InfodetailScreen(props) {
    console.log(props.match.params)
    const id = props.match.params.id
    const infolist = useSelector(state=>state.infoList)
    const {infos}=infolist

    console.log(infos)
    console.log(id)
    
    const info= infos.find(item=>item._id === id)
    console.log(info)
    const clickHandler=()=>{
        console.log(props)
        props.history.push(`/`)
    }
    return (
        <Container>
            <h4>Task Detail</h4> 
            <br /> 
            <h5>Description</h5>      
            <p>{info.description}</p>
         <button onClick={clickHandler}>Back</button>
        </Container>
    )
}
export default InfodetailScreen
