import { useState } from "react"

export default function StateList(){
    let [list,setList]=useState([])
    let [count,setCount]=useState(1);

    function additems(){
        let item="item"+count
        setList((previousState)=>{return[...previousState,item]})
        setCount((previousCount)=>{return(previousCount+1)})
    }    

    return(
        <>
        <h2>State in array using List by Functinal Component</h2>
        <button onClick={additems}>add items</button>
        <ul>
           {
           list.map((e,index)=><li key={index}>{e}</li>)
           }
        </ul>
        </>
        
    )












}