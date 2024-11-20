import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

export const search = () => {
    const [search,setSearch]=useState("")
    const [result,setResult]=useState(null)
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)


    const handleSearch= (e)=>{
        const query=e.target.value
        setSearch(query)
        if(query.trim()){
            setLoading(true)
            try {
                const response= axios.get(`${url}/query?${query}`)
                setResult(response)
                setLoading(false)


            } catch (error) {
                setError("errror")
            }
            finally{
                setLoading(false)
            }
           
        }

    }

 

  return (
    <div>
        
        <input type="text"
        value={search}
        onChange={handleSearch} />
        {loading && 
        <p>Loading...</p>
        }
        {
            error && 
            <p>{error}</p>
        }
        <ul>
        {(result && result.length>0 )?
        result.map((item)=>(
            <li key={item.id}>{item.data}</li>
        )) : <p>no data</p>
        } 
        </ul>
        
    </div>
  )
}
