import React, {useState, createContext} from 'react'
import axios from 'axios'

const InfosContext=createContext()

function InfosProvider({children}) {

    const [infos,setInfos]=useState([])
    const [userInfo,setUserInfo]=useState(null)
    const [loginLoading, setLoginLoading]=useState(false)
    const [loginError,setLoginError]=useState('')

    const userLogin=async(email,password)=>{
        console.log('start to login')
        try{
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
                console.log(email)
                console.log(password)
                const {data}= await axios.post('https://api-nodejs-todolist.herokuapp.com/user/login',
                {"email":email,"password":password},
                config
                )
                console.log(data)
                setUserInfo(data)
                console.log(userInfo)
                setLoginLoading(true)    
                toast("Login successfully")
             
        }
        catch(error){
            setLoginError(error)
        }
    
    }
    const userLogout=()=>{
        setUserInfo(null)
    }

    // const addInfos=(info)=>{
    //     setInfos(prepInfos=>{
    //         info.id=infos.length+1
    //     return [...prepInfos,info]
    //     })
    //     return

    // }
    // const changeCheckedStatus=(props)=>{
    //     var id=props.id
    //     var checkedstatus=props.isChecked
    //     return (
    //         infos.map(item=>{
    //             if(item.id===id){
    //                 item.isChecked=checkedstatus
    //             }
    //         })
    //     )
    // }
    // const selectAll=(checkedstatus)=>{
    //     return infos.map(item=>(item.isChecked=checkedstatus))
        
    // }
    // const delInfo=(id)=>{
    //     return (
    //         setInfos(infos.filter(item=>(item.id !== id)))
    //     )
    // }
    // const delSeleted=()=>{
    //     return (
    //         setInfos(infos.filter(item=>item.isChecked===false))
    //     )
    // }
    return (
        <InfosContext.Provider value={{userInfo,loginError,loginLoading, userLogin, userLogout}}>
            {children}
            
        </InfosContext.Provider>
    )
}

export {InfosContext, InfosProvider}
