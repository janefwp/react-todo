import {ADD_INFO_ITEM, DEL_INFO_ITEM, CHANGE_CHECKED_STATUS, CHANGE_ALL_CHECKED_STATUS, DEL_SELECTED_ITEM} from './constants'

export const addInfoAction=(data)=>(dispath)=>{
    dispath({
        type:ADD_INFO_ITEM,
        payload:data
    })

}

export const delInfoAction=(data)=>(dispath)=>{
    dispath({
        type:DEL_INFO_ITEM,
        payload:data
    })

}

export const delSelectedInfoAction=()=>(dispath)=>{
    dispath({
        type: DEL_SELECTED_ITEM,
        
    })

}
export const changeCheckedstatusAction=(data)=>(dispath)=>{
    dispath({
        type:CHANGE_CHECKED_STATUS,
        payload:data
    })

}


export const changeAllCheckedstatusAction=(data)=>(dispath)=>{
    dispath({
        type:CHANGE_ALL_CHECKED_STATUS,
        payload:data
    })

}