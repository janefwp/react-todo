import React,{useContext} from 'react'
import { useSelector } from 'react-redux'
import { InfosContext } from '../../context/InfosContext'

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
        <div>        
         <p>Description:{info.description}</p>
         <p>Category:{info.category}</p>
         <p>Content:{info.content}</p>
         <button onClick={clickHandler}>Back</button>
        </div>
    )
}
export default InfodetailScreen
