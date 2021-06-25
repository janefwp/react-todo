import {
    ADD_INFO_SUCCESS, 
    ADD_INFO_REQUEST,
    ADD_INFO_FAIL, 
    DEL_INFO_ITEM, 
    CHANGE_CHECKED_STATUS, 
    CHANGE_ALL_CHECKED_STATUS, 
    DEL_SELECTED_ITEM,
    LIST_INFO_FAIL,
    LIST_INFO_REQUEST,
    LIST_INFO_SUCCESS,
    DEL_INFO_BYID_FAIL,
    DEL_INFO_BYID_REQUEST,
    DEL_INFO_BYID_SUCCESS
} from './constants'

const initialState={
    infos:[],
}

export const infoListReducer=(state=initialState,action)=>{
    switch (action.type){
        case LIST_INFO_REQUEST:
            return {loading:true}
        case LIST_INFO_SUCCESS:
            return {
                loading:false, 
                infos: action.payload, 
            }
        case LIST_INFO_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
        }
}

export const infoAddReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADD_INFO_REQUEST:
            return {loading:true}
        case ADD_INFO_SUCCESS:
            return {
                loading:false, 
                success:true,
                infos: action.payload, 
            }
        case ADD_INFO_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
        }
}

export const infoDelReducer=(state=initialState,action)=>{
    switch (action.type){
        case DEL_INFO_BYID_REQUEST:
            return {loading:true}
        case DEL_INFO_BYID_SUCCESS:
            return {
                loading:false, 
                success:true,
            }
        case DEL_INFO_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
        }
}

// export const infoReducer=(state = initialState, action)=>{
//     console.log(action.payload)
//     switch (action.type){      
//         case DEL_SELECTED_ITEM:
//             return {
//                 infos: state.infos.filter(item=>item.isChecked===false)
//             }

//         case CHANGE_CHECKED_STATUS:
//             const info= state.infos.find(item=>item.id===action.payload.id)
//             info.isChecked= action.payload.isChecked
//             return state;
//         case CHANGE_ALL_CHECKED_STATUS:
//             state.infos.map(item=>(item.isChecked=action.payload))
//             return state;
//         default:
//             return state;
//     }

// }