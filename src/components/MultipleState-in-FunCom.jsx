import { useState } from "react"

// Multiple state in hooks by using Functional component
export default function ScooterFunc(){
    var [scooter,setScooter]=useState(
        {
            Color:"Merun",
            Brand:"Honda",
            Model:"Activa",
            Year:"2024"
        }
    )

    // previousState is used to get previous state (i.e color,brand...) because when the updateScooter function is used it will change the color but the remaining values will be gone (cause the updateScooter function will update the whole state not the single value in the state, to change  only the single value previousState is used)
    function updateScooter(){
        setScooter((previousState)=>{
            return{
                ...previousState, Color:"Blue"
            }
        })
    }

    

    return(
        <>
        <h2>This is a Funtional Component scooter</h2>
        <p>Color-{scooter.Color}</p>
        <p>Brand-{scooter.Brand}</p>
        <p>Model-{scooter.Model}</p>
        <p>Year - {scooter.Year}</p>
        <button onClick={updateScooter}>Change Scooter Color</button>
        </>
    )
}