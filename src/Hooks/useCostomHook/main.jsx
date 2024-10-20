// CostomHook - we Create our own hooks for reusable code in this example the data  fetched is writen as a hook and can be reused for many components by importing the hook component


import React from 'react'
import useFetch from './useFetch'


const Main = () => {

    const {data} = useFetch("https://jsonplaceholder.typicode.com/users",
    
) 
  return (
    <div>
      <h1>Custom Hook</h1>
      <h3>Creating custom hook for Data Fetching</h3>
    
      {data &&  data.map((users)=>{
        return <p key={users.id}> {users.name} </p> 
        })}

      
    </div>
  )
}

export default Main