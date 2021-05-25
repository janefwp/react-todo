import {ADD_INFO_ITEM, DEL_INFO_ITEM} from './constants'

export const addInfoAction=(data)=>(dispath)=>{
    dispath({
        type:ADD_INFO_ITEM,
        paylaod:data
    })

}