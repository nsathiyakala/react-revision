import React from 'react'
import Child from './child'
import ClassComponent from './classComponent';

export default function Parent() {
    var brand = "Ferrari";
    var color= "black";

    var carinfo={
        brand:"Ford",
        color:"Red"
    }
    var doginfo={
      breed:"indie",
      color:"brown"
    }

    var isdoginfo=true

    var doglist=[
      {breed:"golden Retriever", color:"white"},
      {breed:"beagle", color:"brown"},
      {breed:"Husky", color:"Black"},
    ]
    var numlist=[1,2,3,4,4,5,6,7]

  return (
   
    <div>
        Iam a  car
        <Child brand={brand} color={color} />
        <Child carinfo={carinfo}/>
        <ClassComponent doginfo={doginfo}/>

        {/* condiotional operator */}
        {doginfo.breed===undefined ? <h2> This is conditional Rendering </h2> : <h2> This is not conditional Rendering </h2>}
        {isdoginfo && <h2>This is conditional Rendering</h2> }
        {!isdoginfo && <h2>This is not conditional Rendering</h2> }

        {/* creating list for same component by using map  */} 
         <ul>
          {doglist.map((doglist)=>
          <li key={doglist.breed}> <ClassComponent doginfo={doglist}/></li>)} {/* "listkey" = "key" is given as unique prop of the list => this is incase of object */}
        </ul> 

        {/* incase the value is not in object then "index" can be given a key */}
        <ul>
          {numlist.map((num,index)=><li key={index}>{num}</li>)}
        </ul>
      
        
    </div>
    
  )
}
