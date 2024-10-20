import React,{useState,useEffect,useContext} from 'react' 
export const grandcomponent=createContext()

const useEffect = () => {

    const [count,setCount]=useState()
    useEffect(()=>{
        console.log("useEffect");
        
    },[count])
    
    const data= "usecontext"
   

    return (
        <div>
            count - {count}
            <button onClick={()=>setCount(count+1)}>increment</button>

            <grandcomponent.provider>
                <parentcomponent/>
            </grandcomponent.provider>
        </div>
    )
}

export default useEffect




