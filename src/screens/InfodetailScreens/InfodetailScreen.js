import React,{useContext} from 'react'
import { useSelector } from 'react-redux'
import { InfosContext } from '../../context/InfosContext'
import { Container } from 'react-bootstrap'

function InfodetailScreen(props) {
    const id = parseInt((props.match.params.id),10)
    const {infos}=useContext(InfosContext)
    // const infos= useSelector(state=>state.infos)
    // const allinfo = infos.infos

    const info= infos.find(item=>item.id === id)
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
            <h5>Category</h5>
            <p>{info.category}</p>
            <h5>Content</h5>
            <p>{info.content}</p>
         <button onClick={clickHandler}>Back</button>
        </Container>
    )
}
export default InfodetailScreen
