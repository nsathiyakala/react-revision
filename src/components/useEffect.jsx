/*
useEffect- to handle the sideeffect of functoinal component
    => a block of code(function) is needed to work on when some update is happening on the page (eg- change happen by clicking btn or refreshing the page)

    => useState is used to make the update

    => useEffect has two parameter - 1] a function containes a logic of code 
                                     2] dependency array[] that is used to mention the state variable on which the useEffect has to render

    => it also has a return func called cleanup function to clear the value instantly  before the nxt render functions
*/

import { useEffect, useState } from "react" 


export default function EffectFunc(){

    var [count,setCount]=useState(0)
    var [decrement,setDecrement]=useState(0)

    // without dependencies array simply render the fuction every time whenever the state variable updated and also if there is multiple state in a component then this effect  will render for all the state variables. 
    useEffect(()=>{ 
        console.log("useEffect function without dependency array");
    })
    
    // with empty dependencies arr - the function render only once when the page the refreshed that is when the component is mounted
    useEffect(()=>{
        console.log("useEffect function with empty dependency array");
    },[])

    // with dependency arr - this function renders only whrn the decrement state is updated
    useEffect(()=>{
        console.log("useEffect function with dependency array");
    },[decrement])

    // cleanup return function - when the state is updated it clears the previous random num and then re-render the randomNum
    useEffect(()=>{
        const randomNum= Math.floor(Math.random()*1000)
        const timer = setInterval(()=>  {console.log(`${randomNum} - using cleanup function`)}, 1000)
        
        return( 
            ()=>{clearInterval(timer)}
        )
    })


    return( 
    <>
    <h2>It is a useEffect function - check console </h2>
    <p>without dependency array - {count}</p> 
    <button onClick={()=>setCount((previousCount)=>{return previousCount+1})}>+</button>
    <p>with dependency array - ({decrement}) </p>
    <button onClick={()=>setDecrement((previousdec)=>{return previousdec-1})}>-</button>
    </>
    )
}