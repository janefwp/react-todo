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
import axios from 'axios'

export const listInfoAction=(userInfo)=>async(dispatch)=>{
    try {
        dispatch({type: LIST_INFO_REQUEST})
        const config = {
            headers: {
                'Authorization':`Bearer ${userInfo.token}`,
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.get(`https://api-nodejs-todolist.herokuapp.com/task`,config)
        console.log(data)
        dispatch({
            type:LIST_INFO_SUCCESS,
            payload:data.data
        })
    }catch(error) {
        console.log(error)
        dispatch({
            type: LIST_INFO_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
        
    }
    
}

export const addInfoAction=(info, userInfo)=>async(dispatch)=>{

    try {
        dispatch({type: ADD_INFO_REQUEST})
        const config = {
            headers: {
                'Authorization':`Bearer ${userInfo.token}`,
                'Content-type': 'application/json'
            }
        }
        console.log(info)
        const {data} = await axios.post(`https://api-nodejs-todolist.herokuapp.com/task`,{"description":info.description},config)
        console.log(data)
        dispatch({
            type:ADD_INFO_SUCCESS,
            payload:data
        })
    }catch(error) {
        console.log(error)
        dispatch({
            type: ADD_INFO_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
        
    }

}

export const delInfoAction=(id,userInfo)=>async(dispatch)=>{
    try {
        dispatch({type: DEL_INFO_BYID_REQUEST})
        const config = {
            headers: {
                'Authorization':`Bearer ${userInfo.token}`,
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.delete(`https://api-nodejs-todolist.herokuapp.com/task/${id}`,config)
        dispatch({
            type:DEL_INFO_BYID_SUCCESS,
            payload:data
        })
    }catch(error) {
        console.log(error)
        dispatch({
            type: DEL_INFO_BYID_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
        
    }

}

export const updateInfoAction=(id,completed,userInfo)=>async(dispatch)=>{
    try {
        dispatch({type: UPDATE_INFO_BYID_REQUEST})
        const config = {
            headers: {
                'Authorization':`Bearer ${userInfo.token}`,
                'Content-type': 'application/json'
            }
        }
        const {data} = await axios.put(`https://api-nodejs-todolist.herokuapp.com/task/${id}`,{"completed":completed},config)
        dispatch({
            type:UPDATE_INFO_BYID_SUCCESS,
            payload:data
        })
    }catch(error) {
        console.log(error)
        dispatch({
            type: UPDATE_INFO_BYID_FAIL,
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
        
    }

}
