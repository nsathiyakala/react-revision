import {useContext} from 'react'
import { GrandParentContext } from './grandparentContext'

export default function ChildContext() {
   const value = useContext(GrandParentContext)
  return (
    <div className='box'>
        <h2>Child Component</h2>
        <p>{value}</p>
    </div>
  )
}
