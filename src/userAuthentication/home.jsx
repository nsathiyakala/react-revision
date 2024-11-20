import React,{useState,useContext, useEffect} from 'react'
import { authdata } from './authProvider'

export const Home = () => {

   const {getData,data,error,user}= useContext(authdata)

   useEffect(()=>{
    const token = localStorage.getItem(token)
    if(user?.token){
        getData(token)
    }
    if(error){
        <p>error</p>
    }
    if(!data){
        <p>loading...</p>
    }
   },[getData])

  return (
    <div></div>
  )
}
