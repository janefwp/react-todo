import {ADD_INFO_ITEM, DEL_INFO_ITEM, CHANGE_CHECKED_STATUS, CHANGE_ALL_CHECKED_STATUS, DEL_SELECTED_ITEM} from './constants'

const initialState={
    infos:[],
}
export const infoReducer=(state = initialState, action)=>{
    console.log(action.payload)
    switch (action.type){
        case ADD_INFO_ITEM: 
            action.payload.id= state.infos.length+1
            return {
                infos: [...state.infos,action.payload],
            }
        

        case DEL_INFO_ITEM:
            return {
                infos: state.infos.filter(item=>(item.id !== action.payload))
            }
        
        case DEL_SELECTED_ITEM:
            return {
                infos: state.infos.filter(item=>item.isChecked===false)
            }

        case CHANGE_CHECKED_STATUS:
            const info= state.infos.find(item=>item.id===action.payload.id)
            info.isChecked= action.payload.isChecked
            return state;
        case CHANGE_ALL_CHECKED_STATUS:
            state.infos.map(item=>(item.isChecked=action.payload))
            return state;
        default:
            return state;
    }

}