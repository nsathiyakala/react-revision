// useContext - To commuticate btween components (replacement of props drilling)
// 1.export createContxt 
// 2.provider(provide value) 
// 3.import consuming value in child



import {createContext} from "react"
import ParentContext from './parentContext'
export const GrandParentContext =createContext()

export default function GrandparentContext() {
    const data = "Hello From Grandparent Component !!!";

    return (
        <div>
            <h1>Use Context</h1>
            <div className='box'>
                <h2>Grandparent Component</h2>

                <GrandParentContext.Provider value={data}>
                <ParentContext />
                </GrandParentContext.Provider>
                    
            </div>
        </div>
    )
}
