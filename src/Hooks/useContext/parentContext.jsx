import React from 'react'
import ChildContext from './childContext'

export default function ParentContext() {
  return (
    <div className='box'>
        <h2> Parent Component</h2>
        <ChildContext/>
    </div>
  )
}
