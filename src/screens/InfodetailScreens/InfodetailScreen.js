import React from 'react'
import { useSelector } from 'react-redux'

function InfodetailScreen(props) {
    const id = parseInt((props.match.params.id),10)

    console.log(id)
    const infos= useSelector(state=>state.infos)
    const allinfo = infos.infos
    console.log(allinfo)
    const info= allinfo.find(item=>item.id === id)
    console.log(info)
    return (
        <div>
         <h2>Details</h2>
         <p>ID:{info.id}</p>
         <p>Description:{info.description}</p>
         <p>Content:{info.content}</p>
        </div>
    )
}
export default InfodetailScreen
