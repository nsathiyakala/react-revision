// useMemo - It is used to boost the perfomance of the page by avoiding the rerender of expensive calculations(more time taking and large memory taking calculation) 
//         - to avoid the rerender we mention the particluar expensive calculation fucn in the useMemo parameter

// Memoization is a programming technique used to optimize performance by storing the results of expensive function calls and returning the cached result when the same inputs occur again. In the context of React, memoization can help avoid unnecessary recalculations and re-renders, improving the efficiency of your components.

import React,{useState,useMemo} from 'react'

export default function UseMemoFn() {
    const [todos,setTodos]=useState([])
    const AddTodo=()=>{
        setTodos((prev)=>[...prev , "New Todo"])
    }

    const [count,setCount]=useState(0)
    const Increment=()=>{
        setCount(()=>
            count+1
        )
    }

    // it memoize(stores) the count value and rerender only when the count state is updating
    const Calculation= useMemo(()=>expensiveCalculation(count),[count])
    

  return (
    <div>
        <h1>UseMemo</h1>
        <h5>{todos}</h5>
        <button onClick={AddTodo}>Add Todo</button>
        <h5>count-{count}</h5>
        <button onClick={Increment}>Increment</button>

        <h5>Expensive Calculation-{Calculation} (check console log)</h5>

    </div>
  )
}

// this exclusive func will run whenever any state is updated and leads to low perfomance to avoid that we use useMemo
function expensiveCalculation(num){
console.log("expensive calcution rerendering");
for(let i=0;i<100000; i++){
    num += 1
}
return num
}    
