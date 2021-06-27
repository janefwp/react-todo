import {
    ADD_INFO_SUCCESS, 
    ADD_INFO_REQUEST,
    ADD_INFO_FAIL, 
    LIST_INFO_FAIL,
    LIST_INFO_REQUEST,
    LIST_INFO_SUCCESS,
    DEL_INFO_BYID_FAIL,
    DEL_INFO_BYID_REQUEST,
    DEL_INFO_BYID_SUCCESS,
    UPDATE_INFO_BYID_FAIL,
    UPDATE_INFO_BYID_REQUEST,
    UPDATE_INFO_BYID_SUCCESS,
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

export const infoUpdateReducer=(state=initialState,action)=>{
    switch (action.type){
        case UPDATE_INFO_BYID_REQUEST:
            return {loading:true}
        case UPDATE_INFO_BYID_SUCCESS:
            return {
                loading:false, 
                success:true,
            }
        case UPDATE_INFO_BYID_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
        }
}

