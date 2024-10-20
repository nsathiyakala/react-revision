// useRef - useRef is mostly used to access the DOM elements. In react we cannot directly access the DOM in that case we use useRef
//        - It is also used to save the data without rerender, in useState whenever the state is updated the whole component render again 
//          but in useRef the variable dosn't rerender
//        - It is also used to keep the previous state reference



import React, {useState,useRef,useEffect} from 'react'

export default function UseRefFn() {
    const [state,setState] = useState(0)
    const counterRef = useRef(0)
    
    const DOMaccessRef=useRef()
    useEffect(()=> {DOMaccessRef.current.focus()},[]); {/* here iam getting the focus element of DOM to always focus the input box after refreshing*/}

    const [input,setInput] = useState()
    const PreviousStateRef = useRef()
    useEffect(()=>{ 
        PreviousStateRef.current=input
     },[input]); 

  return (
    <div>
        <h1>UseRef</h1>
        

        {/* save data without rerender */}

        <h2>Save data without Rerender</h2>
            <h3>State Counter - {state}</h3>
            <h3>Ref Counter - {counterRef.current} </h3> {/* here after clicking the button it won't rerender the component so the incremented value with not change in the UI after upadating the state variable the components rerenders and then the updated ref will shown in UI */}
        <button onClick={()=>setState((val)=>val + 1)}>Increment State</button>
        <button onClick={()=>counterRef.current++}>Increment Ref</button>

        {/* DOM access */}
        <h2>DOM Access</h2>
            <input type="text" ref={DOMaccessRef}/>

        {/*  keep the previous state reference */}
        <h2>Keep the Previous State Reference</h2>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <h5>Previous State value using UseRef - {PreviousStateRef.current}</h5>
    </div>
  )
}


