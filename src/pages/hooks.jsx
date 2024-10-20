import React from 'react'
import UseEffect from '../Hooks/useEffect'
import GrandparentContext from '../Hooks/useContext/grandparentContext'
import UseReducerFn  from '../Hooks/useReducer'
import UseRefFn from '../Hooks/useRef'
import UseMemoFn from '../Hooks/useMemo'
import UseCallbackFn from '../Hooks/useCallback/useCallback'
import Main from '../Hooks/useCostomHook/main'

export default function Hooks() {
  return (
    <div className='App'>
        <UseEffect/>
        <GrandparentContext/>
        <UseReducerFn/>
        <UseRefFn/>
        <UseMemoFn/>
        <UseCallbackFn/>
        <Main/>
    </div>
  )
}
