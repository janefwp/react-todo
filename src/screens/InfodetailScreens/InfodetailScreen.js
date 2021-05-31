import React from 'react'
import { useSelector } from 'react-redux'

function InfodetailScreen(props) {
    const id = parseInt((props.match.params.id),10)

    const infos= useSelector(state=>state.infos)
    const allinfo = infos.infos

    const info= allinfo.find(item=>item.id === id)
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
