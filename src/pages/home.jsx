import React from 'react'
import { Link } from 'react-router-dom'


export default function 
() {
  return (
    <div className="App">
        <button>
                <Link className='link' to={"/components"}>Components</Link>
        </button> <br />
        <button>
                <Link className='link' to={"/hooks"}>Hooks</Link>
        </button> <br />
    </div>
  )
}
