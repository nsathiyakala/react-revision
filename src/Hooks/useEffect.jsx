import React, { useState, useEffect } from 'react'

export default function useEffectFunc() {

    const[value, setValue]=useState("post")
  const[item,setItem] = useState([])
  const [width,setWidth]=useState(window.innerWidth)

  const HandleSize =()=>{
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${value}`)
      .then(response => response.json())
      .then(json => setItem([json]))
  },[value])

  useEffect(()=>{
    window.addEventListener("resize",HandleSize)
    return ()=>{
      window.removeEventListener("resize", HandleSize)
    }
  },[width])

  return (
    <div className='App'>
      <h1>UseEffect</h1>
         <h2>Fetching API</h2>
        <button onClick={()=>setValue("users")}>users</button>
        <button onClick={()=>setValue("posts")}>posts</button>
        <button onClick={()=>setValue("comments")}>comments</button>
        <h2>{value}</h2>
        {item.map(ele=><pre>{JSON.stringify(ele)}</pre>)}
        <h2>Setting InnerWidth</h2>
        <p>{width}</p>
    </div>
  )
}
