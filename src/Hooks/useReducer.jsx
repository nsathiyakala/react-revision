// useReducer- It is used to manage the state variable when the state in more is complex we use useReducer instead UseState simply it can be said as advanced version of useState

//  It has three parameter =>  const [state,dispatch] =useReducer(reducer, intialState, init)
//  most often we use only first two parameter and the 3rd parameter init is optional

//  STATE , initialState = STATE is the state variable and initialState is the initial value assigned to that state variable that stores in STATE and also the updated state value also stored in STATE

// REDUCER = REDUCER is a state update function it has a two parameter (STATE , ACTION)  STATE holds the current state value and ACTION defines what type of actional update that the state has to be done (eg: add,delete,increament,decrement ) so it has an argument called TYPE to mention the type of action

// DISPATCH = DISPATCH is function used to update the state variable but only mention what type of action is needed to update so running the REDUCER func the DISPATCH func runs and triggers the reducer to make the action 

// INIT = It is used to give initial value when the initial value is not sure and has to be obtain from some set of logical code and that logical code is written in INIT 



import {useReducer} from 'react'

export default  function UseReducerFn(){

    const initialState={
      count:0,
     
    } 
    const [state,dispatch] = useReducer(reducer,initialState)

    function reducer(state,action){
      switch(action.type){
        case "INCREMENT": 
        return {...state, count : state.count  + 1};
        case "DECREMENT":
        return {...state, count : state.count  - 1};
        case "RESET":
        return {count:0};
        default:
        throw new Error("invalid action");
      }
    }

  return (
    <div>
        <h1>UseReducer</h1>
        <input type="text" value={state.count} readOnly/>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}
