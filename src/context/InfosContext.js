import React, {useState, createContext} from 'react'
import axios from 'axios'

const InfosContext=createContext()

function InfosProvider({children}) {
    
    const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

    const [userInfo,setUserInfo]=useState(userInfoFromStorage)
    const [loginLoading, setLoginLoading]=useState(false)
    const [loginError,setLoginError]=useState('')
    const [registerLoading, setRegisterLoading]=useState(false)
    const [registerError,setRegisterError]=useState('')

    const userLogin=async(email,password)=>{
        setLoginLoading(true) 

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
                setUserInfo(data)
                localStorage.setItem('userInfo', JSON.stringify(data));
                setLoginLoading(false)    
                toast("Login successfully")
             
        }
        catch(error){
            setLoginError(error)
        }
    
    }
    const userLogout=()=>{
        setUserInfo(null)
        localStorage.removeItem('userInfo')
        
    }

    const userRegister=async(user)=>{
        setRegisterLoading(true) 
        try{
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
            const {data}=axios.post('https://api-nodejs-todolist.herokuapp.com/user/register',
                {"name":user.name,"email":user.email,"password":user.password,"age":user.age},
                config
            )
            setUserInfo(data)
            localStorage.setItem('userInfo', JSON.stringify(data));
            setRegisterLoading(false)    
            toast("Register successfully")
        }
        catch(error){
            setRegisterError(error)
        }
    
    }
    return (
        <InfosContext.Provider value={{userInfo,loginError,loginLoading, userLogin, userLogout,userRegister,registerLoading,registerError}}>
            {children}
            
        </InfosContext.Provider>
    )
}

export {InfosContext, InfosProvider}
