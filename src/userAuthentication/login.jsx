import React, { useState } from 'react'
import { authdata } from './authProvider'

export const login = () => {
    const [input,setInput] =useState({
        email:"",
        password:""
    })
    const handleInput= ()=>{
        e.preventDefault()
        setInput((prevalue)=>({...prevalue,
            [e.target.name]:e.target.value
        }))
    }
    const {login}= authdata()
    const onsubmit=()=>{
        login({
            email:input.email,
            password:input.password
        })
    }

  return (
    <form onClick={onsubmit}>
        <input type="email" value={input.email} onChange={handleInput} />
        <input type="password" value={input.password} onChange={handleInput} />
        <button type='submit'>login</button>
    </form>
  )
}
