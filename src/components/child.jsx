import React from 'react'

export default function Child(props) {
    var {carinfo}= props;
    var {brand,color} =  carinfo ? carinfo : props;
  
  return (
    <div>
      Iam a small {color} {brand} car 
    </div>
  )
}
