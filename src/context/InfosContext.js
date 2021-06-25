import React, {useState, createContext} from 'react'
import axios from 'axios'

const InfosContext=createContext()

function InfosProvider({children}) {
    const [userInfo,setUserInfo]=useState(null)
    const [loginLoading, setLoginLoading]=useState(false)
    const [loginError,setLoginError]=useState('')
    const [registerLoading, setRegisterLoading]=useState(false)
    const [registerError,setRegisterError]=useState('')

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

    const userRegister=async(user)=>{
        console.log('start to register')
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
            console.log(data)
            setRegisterLoading(true)    
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
