import React,{createContext,useContext, useState} from 'react'
import axios from 'axios'

const authContext = createContext()

export const authProvider = ({childern}) => {
    const [user,setUser]=useState(null)
    const [error,setError] = useState(null)
    const [data,setData]= useState(null)

    const login=async(email,password)=>{
        try {
            const response = await axios.post(url,{email,password})
            setUser(response.data)
            localStorage.setItem("token",response.data.token)
            setError(null)
            
        } catch (error) {
            setError("try again")
            
        }
    }

    const getData = async (token)=>{
        try {
            const config={
                headers:{
                    authorization: `bearer ${token}`
                }
            }
            const response = await axios.get(url,config)
            setData(response.data)
            setError(null)

        } catch (error) {
            setError("no data found")
        }
    }
 
  return (
    <authContext.Provider value={{user,error,login,data,getData}}>
        {childern}
    </authContext.Provider>
  )
}

export const authdata=()=>useContext(authContext)
