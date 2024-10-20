// useCallback - It is also used to boost the perfomance of the page by memoizing the particular function and making it to render only when the state related the function is updating by mentioning the state in dependensy array.

// diff between usecallback & useMemo - useMemo memoize only the value of the exclusive function whereas useCallback memoize the  exclusive function itself


import React,{useState,useCallback} from 'react'
import UseCallbackChild from '../useCallback/useCallbackChlid'

export default function UseCallbackFn() {
   const [count,setCount]= useState(0)
   const [product,setProduct]=useState(["prod1","prod2"])
   const [cart, setCart]=useState(0)

   
// even after using the memo in the UseCallbackChild component it rerenders the log because  AddToCart is a function it recreate every time this component is rendering so whenever the count is incremented the the UseCallbackChild component renders to avoid that we useCallback in this function and mention the depency array as cart so whenever the cart state updating the UseCallbackChild component also rerenders
   const AddToCart =useCallback(()=>{
    setCart(()=>cart+1)
   },[cart])

  return (
    <div>
        <h1>UseCallback</h1>
        <h5>Count-{count}</h5>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h5>cart - {cart}</h5>
        {product.map((prod,index)=>{
            return <UseCallbackChild prod={prod} key={index} AddToCart={AddToCart}/>
        })}
       
    </div>
  )
}
