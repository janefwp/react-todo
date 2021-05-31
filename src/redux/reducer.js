import {ADD_INFO_ITEM, DEL_INFO_ITEM} from './constants'

const initialState={
    infos:[],
}
export const infoReducer=(state = initialState, action)=>{
    console.log(action.payload)
    switch (action.type){
        case ADD_INFO_ITEM: {
            action.payload.id= state.infos.length+1
            return {
                infos: [...state.infos,action.payload],
            }
        }

        case DEL_INFO_ITEM:{
            return {
                infos: state.infos.filter(item=>(item.id !== action.payload))
            }
        }
        default:
            return state;
    }

}