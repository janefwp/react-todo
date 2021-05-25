import {ADD_INFO_ITEM, DEL_INFO_ITEM} from './constants'

const initState = {
  }
export const infoReducer=(state = {}, action)=>{
    
    switch (action.type){
        case ADD_INFO_ITEM: {
            return {
                state: action.payload,
            }
        }

        case DEL_INFO_ITEM:{
            return;
        }
        default:
            return state;
    }


}