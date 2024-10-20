// memo is used in this component that make this component to rerender only when the props of this components are updating


import React,{memo} from 'react'

 function UseCallbackChlid({prod,AddToCart}) {
  return (
      <div>
        {console.log(`UseCallbackChlid is rerending ${prod}`)}
       <h4>New product Added-{prod}</h4>
       <button onClick={AddToCart}>add to cart</button>
    </div>
  )
}

export default memo(UseCallbackChlid)


