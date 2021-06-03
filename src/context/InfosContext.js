import React, {useState, createContext} from 'react'

const InfosContext=createContext()

function InfosProvider({children}) {

    const [infos,setInfos]=useState([])

    const addInfos=(info)=>{
        setInfos(prepInfos=>{
            info.id=infos.length+1
        return [...prepInfos,info]
        })
        return

    }
    const changeCheckedStatus=(props)=>{
        var id=props.id
        var checkedstatus=props.isChecked
        return (
            infos.map(item=>{
                if(item.id===id){
                    item.isChecked=checkedstatus
                }
            })
        )
    }
    const selectAll=(checkedstatus)=>{
        return infos.map(item=>(item.isChecked=checkedstatus))
        
    }
    const delInfo=(id)=>{
        return (
            setInfos(infos.filter(item=>(item.id !== id)))
        )
    }
    const delSeleted=()=>{
        return (
            setInfos(infos.filter(item=>item.isChecked===false))
        )
    }
    return (
        <InfosContext.Provider value={{infos,addInfos,changeCheckedStatus,selectAll,delInfo,delSeleted}}>
            {children}
            
        </InfosContext.Provider>
    )
}

export {InfosContext, InfosProvider}
