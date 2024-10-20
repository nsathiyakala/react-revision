import { useState } from "react"

export default function FunctionalState(){
        let [statement, Setstatement]=useState("wrong")
        
        return(
        <>
        <h2>This is State in Functional Component - {statement} </h2>
        <button onClick={()=>Setstatement("correct")}>Change Statement</button>
        </>
    )
}
