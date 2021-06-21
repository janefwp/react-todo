import React,{useContext, useEffect} from 'react'
import InfoTable from './components/infotable/InfoTable'
import { InfosContext } from '../../context/InfosContext'
import LoginScreen from '../loginscreens/LoginScreen'

function HomeScreen({history}) {

    const {userInfo}=useContext(InfosContext)
    useEffect(() => {
       if(!userInfo){
           history.push('/login')
       } 
     
    }, [history])

    return (
        <InfoTable />    
    
 
    )
}

export default HomeScreen
